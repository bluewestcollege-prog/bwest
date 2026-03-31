import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'

// Pages
import Home from './pages/Home'
import MissionVision from './pages/about/MissionVision'
import History from './pages/about/History'
import Leadership from './pages/about/Leadership'
import Campus from './pages/about/Campus'
import Accreditations from './pages/about/Accreditations'

import Undergraduate from './pages/academics/Undergraduate'
import Postgraduate from './pages/academics/Postgraduate'
import PhD from './pages/academics/PhD'
import Diplomas from './pages/academics/Diplomas'
import Catalog from './pages/academics/Catalog'
import CalendarPage from './pages/academics/Calendar'
import NewCourses from './pages/academics/NewCourses'

import HowToApply from './pages/admissions/HowToApply'
import { FeesPage, ScholarshipsPage, InternationalPage } from './pages/admissions/AdmissionsPages'

import { FacultyDirectory, ResearchCentres } from './pages/faculty/FacultyPages'
import { Publications, EthicsBoard, AlumniMentorship, AlumniEvents, AlumniMagazine } from './pages/faculty/MoreFacultyAlumniPages'

import { AlumniNetwork, StudentLifeHousing } from './pages/alumni/AlumniPages'
import { HealthWellness, ClubsSocieties, Sports, Dining, CareerCentre, Library } from './pages/student-life/StudentLifePages'

import Donations from './pages/Donations'
import Contact from './pages/Contact'

import { Link } from 'react-router-dom'

// Remaining stubs (minor routes not yet individually built)
function StubPage({ title, sub, img, crumbs }: { title: string; sub: string; img: string; crumbs: string[] }) {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src={img} alt="" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg,rgba(8,18,35,0.93) 40%,rgba(8,18,35,0.55) 100%)', zIndex: 1 }} />
        </div>
        <div className="page-hero-content container-wide">
          <div className="breadcrumb"><Link to="/">Home</Link>{crumbs.map((c, i) => <span key={i}><span style={{ margin: '0 0.35rem' }}>›</span>{c}</span>)}</div>
          <h1 className="page-title" dangerouslySetInnerHTML={{ __html: title }} />
          <p style={{ fontSize: '1rem', color: 'rgba(232,237,245,0.72)', maxWidth: '520px', lineHeight: 1.8, marginTop: '0.75rem' }}>{sub}</p>
        </div>
      </div>
      <section className="section section-alt-bg">
        <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🔧</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--white)', marginBottom: '1rem' }}>Page Coming Soon</h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.8 }}>This page is being built to our usual standard of detail and quality. Contact us for any specific information you need in the meantime.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-solid"><span>Contact Us</span></Link>
            <Link to="/" className="btn"><span>Return Home</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}

const UndergradEntryPage = () => <StubPage title="Undergraduate <em>Entry Requirements</em>" sub="Detailed entry requirements and subject prerequisites for all undergraduate programmes." img="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80&fit=crop" crumbs={['Admissions', 'Undergraduate Entry']} />
const PostgradEntryPage = () => <StubPage title="Postgraduate <em>Entry Requirements</em>" sub="Entry requirements for all postgraduate, master's, and doctoral programmes." img="https://images.unsplash.com/photo-1532094349884-543559b8f9b7?w=1600&q=80&fit=crop" crumbs={['Admissions', 'Postgraduate Entry']} />
const AcademicResearchPage = () => <StubPage title="Academic <em>Research</em>" sub="Discover how Blue West generates knowledge that transforms healthcare in Kenya's Coast region and beyond." img="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1600&q=80&fit=crop" crumbs={['Academics', 'Research']} />

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about/mission" element={<MissionVision />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/campus" element={<Campus />} />
          <Route path="/about/accreditations" element={<Accreditations />} />

          {/* Academics */}
          <Route path="/academics/undergraduate" element={<Undergraduate />} />
          <Route path="/academics/postgraduate" element={<Postgraduate />} />
          <Route path="/academics/phd" element={<PhD />} />
          <Route path="/academics/diplomas" element={<Diplomas />} />
          <Route path="/academics/catalog" element={<Catalog />} />
          <Route path="/academics/calendar" element={<CalendarPage />} />
          <Route path="/academics/research" element={<AcademicResearchPage />} />
          <Route path="/academics/new-courses" element={<NewCourses />} />

          {/* Admissions */}
          <Route path="/admissions/how-to-apply" element={<HowToApply />} />
          <Route path="/admissions/undergraduate" element={<UndergradEntryPage />} />
          <Route path="/admissions/postgraduate" element={<PostgradEntryPage />} />
          <Route path="/admissions/international" element={<InternationalPage />} />
          <Route path="/admissions/fees" element={<FeesPage />} />
          <Route path="/admissions/scholarships" element={<ScholarshipsPage />} />

          {/* Student Life */}
          <Route path="/student-life/housing" element={<StudentLifeHousing />} />
          <Route path="/student-life/health" element={<HealthWellness />} />
          <Route path="/student-life/clubs" element={<ClubsSocieties />} />
          <Route path="/student-life/sports" element={<Sports />} />
          <Route path="/student-life/dining" element={<Dining />} />
          <Route path="/student-life/careers" element={<CareerCentre />} />
          <Route path="/student-life/library" element={<Library />} />

          {/* Faculty & Research */}
          <Route path="/faculty/directory" element={<FacultyDirectory />} />
          <Route path="/faculty/research" element={<ResearchCentres />} />
          <Route path="/faculty/publications" element={<Publications />} />
          <Route path="/faculty/ethics" element={<EthicsBoard />} />

          {/* Alumni */}
          <Route path="/alumni/network" element={<AlumniNetwork />} />
          <Route path="/alumni/mentorship" element={<AlumniMentorship />} />
          <Route path="/alumni/events" element={<AlumniEvents />} />
          <Route path="/alumni/magazine" element={<AlumniMagazine />} />

          {/* Donations, Contact */}
          <Route path="/donations" element={<Donations />} />
          <Route path="/contact" element={<Contact />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
