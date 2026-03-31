-- 01_schema.sql

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles (Extends auth.users from Supabase)
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    role user_role DEFAULT 'applicant',
    first_name TEXT,
    last_name TEXT,
    email TEXT UNIQUE NOT NULL,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Courses (Covers Undergraduate, Postgraduate, PhD, Diplomas, New Courses)
CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    level course_level NOT NULL,
    department TEXT NOT NULL,
    duration TEXT,
    mode_of_study TEXT, -- e.g., Full-time, Part-time, Online
    fee_local NUMERIC,
    fee_international NUMERIC,
    description TEXT,
    entry_requirements TEXT,
    is_new BOOLEAN DEFAULT false,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Faculty Directory (Covers Faculty directory, roles)
CREATE TABLE faculty (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    title TEXT, -- Dr., Prof., etc.
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    department TEXT NOT NULL,
    designation TEXT NOT NULL, -- Dean, Lecturer, etc.
    bio TEXT,
    email TEXT,
    phone TEXT,
    office_hours TEXT,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Faculty Publications
CREATE TABLE publications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    faculty_id UUID REFERENCES faculty(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    journal TEXT,
    publication_date DATE,
    url TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Events (Covers Academic Calendar, Alumni Events, Campus Events)
CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    event_type TEXT NOT NULL, -- academic, alumni, admissions, campus
    start_time TIMESTAMPTZ NOT NULL,
    end_time TIMESTAMPTZ,
    location TEXT,
    is_virtual BOOLEAN DEFAULT false,
    virtual_link TEXT,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- News & Articles (Covers Home updates, Alumni Magazine)
CREATE TABLE news (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    summary TEXT,
    content TEXT NOT NULL,
    category TEXT NOT NULL, -- announcement, alumni_magazine, general
    author_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    published_at TIMESTAMPTZ,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Contact Inquiries (Covers Contact Us page)
CREATE TABLE contact_inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new', -- new, read, resolved
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Donations (Covers Donations page)
CREATE TABLE donations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    amount NUMERIC NOT NULL,
    currency TEXT DEFAULT 'USD',
    status donation_status DEFAULT 'pending',
    campaign TEXT DEFAULT 'general',
    donor_message TEXT,
    is_anonymous BOOLEAN DEFAULT false,
    stripe_payment_id TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Admissions Applications (Covers How to Apply / Applications)
CREATE TABLE applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    applicant_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    course_id UUID REFERENCES courses(id) ON DELETE RESTRICT,
    status application_status DEFAULT 'draft',
    personal_statements TEXT,
    education_history JSONB,
    documents JSONB, -- list of uploaded file URLs or metadata
    submitted_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Alumni Profiles (Covers Alumni Network, Mentorship)
CREATE TABLE alumni_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    graduation_year INT NOT NULL,
    degree TEXT NOT NULL,
    "current-role" TEXT,
    current_company TEXT,
    location TEXT,
    bio TEXT,
    linkedin_url TEXT,
    is_public BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Student Clubs (Covers Student Life: Clubs and Societies)
CREATE TABLE student_clubs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    description TEXT,
    contact_email TEXT,
    meeting_schedule TEXT,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);
