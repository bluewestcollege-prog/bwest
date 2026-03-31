import { useState, useEffect } from 'react'
import { supabase } from './supabase'

// ─── Types ────────────────────────────────────────────────────────────────────

export type CourseLevel = 'undergraduate' | 'postgraduate' | 'phd' | 'diploma'

export interface Course {
  id: string
  title: string
  slug: string
  level: CourseLevel
  department: string
  duration: string | null
  mode_of_study: string | null
  fee_local: number | null
  fee_international: number | null
  description: string | null
  entry_requirements: string | null
  is_new: boolean
  active: boolean
  created_at: string
}

export interface FacultyMember {
  id: string
  profile_id: string | null
  title: string | null
  first_name: string
  last_name: string
  department: string
  designation: string
  bio: string | null
  email: string | null
  phone: string | null
  office_hours: string | null
  image_url: string | null
}

export interface Publication {
  id: string
  faculty_id: string
  title: string
  journal: string | null
  publication_date: string | null
  url: string | null
}

export interface Event {
  id: string
  title: string
  slug: string
  description: string | null
  event_type: string
  start_time: string
  end_time: string | null
  location: string | null
  is_virtual: boolean
  virtual_link: string | null
  image_url: string | null
}

export interface NewsItem {
  id: string
  title: string
  slug: string
  summary: string | null
  content: string
  category: string
  author_id: string | null
  published_at: string | null
  image_url: string | null
}

export interface AlumniProfile {
  id: string
  profile_id: string
  graduation_year: number
  degree: string
  'current-role': string | null
  current_company: string | null
  location: string | null
  bio: string | null
  linkedin_url: string | null
  is_public: boolean
  profiles?: {
    first_name: string | null
    last_name: string | null
    avatar_url: string | null
  }
}

export interface StudentClub {
  id: string
  name: string
  slug: string
  category: string
  description: string | null
  contact_email: string | null
  meeting_schedule: string | null
  image_url: string | null
}

// ─── Hooks ────────────────────────────────────────────────────────────────────

/** Fetch all active courses, optionally filtered by level or is_new flag */
export function useCourses(options?: { level?: CourseLevel; isNew?: boolean }) {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let query = supabase.from('courses').select('*').eq('active', true)
    if (options?.level) query = query.eq('level', options.level)
    if (options?.isNew) query = query.eq('is_new', true)
    query.order('title').then(({ data, error }) => {
      if (error) setError(error.message)
      else setCourses(data ?? [])
      setLoading(false)
    })
  }, [options?.level, options?.isNew])

  return { courses, loading, error }
}

/** Fetch all faculty members */
export function useFaculty() {
  const [faculty, setFaculty] = useState<FacultyMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    supabase.from('faculty').select('*').order('last_name').then(({ data, error }) => {
      if (error) setError(error.message)
      else setFaculty(data ?? [])
      setLoading(false)
    })
  }, [])

  return { faculty, loading, error }
}

/** Fetch publications, optionally for a specific faculty member */
export function usePublications(facultyId?: string) {
  const [publications, setPublications] = useState<Publication[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let query = supabase.from('publications').select('*').order('publication_date', { ascending: false })
    if (facultyId) query = query.eq('faculty_id', facultyId)
    query.then(({ data, error }) => {
      if (error) setError(error.message)
      else setPublications(data ?? [])
      setLoading(false)
    })
  }, [facultyId])

  return { publications, loading, error }
}

/** Fetch events, optionally filtered by type */
export function useEvents(options?: { eventType?: string; limit?: number; upcoming?: boolean }) {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let query = supabase.from('events').select('*').order('start_time')
    if (options?.eventType) query = query.eq('event_type', options.eventType)
    if (options?.upcoming) query = query.gte('start_time', new Date().toISOString())
    if (options?.limit) query = query.limit(options.limit)
    query.then(({ data, error }) => {
      if (error) setError(error.message)
      else setEvents(data ?? [])
      setLoading(false)
    })
  }, [options?.eventType, options?.limit, options?.upcoming])

  return { events, loading, error }
}

/** Fetch news articles, optionally filtered by category */
export function useNews(options?: { category?: string; limit?: number }) {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let query = supabase
      .from('news')
      .select('*')
      .not('published_at', 'is', null)
      .order('published_at', { ascending: false })
    if (options?.category) query = query.eq('category', options.category)
    if (options?.limit) query = query.limit(options.limit)
    query.then(({ data, error }) => {
      if (error) setError(error.message)
      else setNews(data ?? [])
      setLoading(false)
    })
  }, [options?.category, options?.limit])

  return { news, loading, error }
}

/** Fetch public alumni profiles, joined with their Supabase profile */
export function useAlumni() {
  const [alumni, setAlumni] = useState<AlumniProfile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    supabase
      .from('alumni_profiles')
      .select('*, profiles(first_name, last_name, avatar_url)')
      .eq('is_public', true)
      .order('graduation_year', { ascending: false })
      .then(({ data, error }) => {
        if (error) setError(error.message)
        else setAlumni((data as AlumniProfile[]) ?? [])
        setLoading(false)
      })
  }, [])

  return { alumni, loading, error }
}

/** Fetch student clubs */
export function useStudentClubs() {
  const [clubs, setClubs] = useState<StudentClub[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    supabase.from('student_clubs').select('*').order('name').then(({ data, error }) => {
      if (error) setError(error.message)
      else setClubs(data ?? [])
      setLoading(false)
    })
  }, [])

  return { clubs, loading, error }
}

// ─── Formatters ───────────────────────────────────────────────────────────────

/** Format a KSh fee number for display, e.g. 280000 → "KSh 280,000/yr" */
export function formatFeeKsh(amount: number | null): string {
  if (!amount) return 'Contact Admissions'
  return `KSh ${amount.toLocaleString('en-KE')}/yr`
}

/** Map DB level enum to display label */
export function levelLabel(level: CourseLevel): string {
  const map: Record<CourseLevel, string> = {
    undergraduate: 'Undergraduate',
    postgraduate: 'Postgraduate',
    phd: 'PhD',
    diploma: 'Diploma',
  }
  return map[level] ?? level
}

/** Map DB level to route path */
export function levelRoute(level: CourseLevel): string {
  const map: Record<CourseLevel, string> = {
    undergraduate: '/academics/undergraduate',
    postgraduate: '/academics/postgraduate',
    phd: '/academics/phd',
    diploma: '/academics/diplomas',
  }
  return map[level] ?? '/academics/catalog'
}
