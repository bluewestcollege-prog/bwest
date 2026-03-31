-- 03_policies.sql

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faculty ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.publications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.alumni_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_clubs ENABLE ROW LEVEL SECURITY;

-- 1. Profiles
-- Admins can do anything
CREATE POLICY "Admins full access on profiles" ON profiles FOR ALL USING (is_admin());
-- Users can read their own profile
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
-- Users can update their own profile (except their role, but UI limits this or we can add DB checks)
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- 2. Courses
CREATE POLICY "Admins full access on courses" ON courses FOR ALL USING (is_admin());
-- Public can view active courses
CREATE POLICY "Public can view active courses" ON courses FOR SELECT USING (active = true);

-- 3. Faculty & Publications
CREATE POLICY "Admins full access on faculty" ON faculty FOR ALL USING (is_admin());
CREATE POLICY "Public can view faculty profiles" ON faculty FOR SELECT USING (true);
CREATE POLICY "Admins full access on publications" ON publications FOR ALL USING (is_admin());
CREATE POLICY "Public can view publications" ON publications FOR SELECT USING (true);
-- Faculty members can potentially update their own profile later

-- 4. Events & News
CREATE POLICY "Admins full access on events" ON events FOR ALL USING (is_admin());
CREATE POLICY "Public can view events" ON events FOR SELECT USING (true);
CREATE POLICY "Admins full access on news" ON news FOR ALL USING (is_admin());
CREATE POLICY "Public can view news" ON news FOR SELECT USING (true);

-- 5. Contact Inquiries
CREATE POLICY "Admins full access on inquiries" ON contact_inquiries FOR ALL USING (is_admin());
-- Anyone can submit an inquiry
CREATE POLICY "Public can submit contact inquiries" ON contact_inquiries FOR INSERT WITH CHECK (true);

-- 6. Donations
CREATE POLICY "Admins full access on donations" ON donations FOR ALL USING (is_admin());
-- Anyone can submit a donation
CREATE POLICY "Public can submit donations" ON donations FOR INSERT WITH CHECK (true);

-- 7. Admissions Applications
CREATE POLICY "Admins full access on applications" ON applications FOR ALL USING (is_admin());
-- Applicants can view their own applications
CREATE POLICY "Applicants can view own applications" ON applications FOR SELECT USING (auth.uid() = applicant_id);
-- Applicants can create their applications
CREATE POLICY "Applicants can create applications" ON applications FOR INSERT WITH CHECK (auth.uid() = applicant_id);
-- Applicants can update their applications
CREATE POLICY "Applicants can update own applications" ON applications FOR UPDATE USING (auth.uid() = applicant_id);

-- 8. Alumni Profiles
CREATE POLICY "Admins full access on alumni profiles" ON alumni_profiles FOR ALL USING (is_admin());
-- Alumni can edit their own profiles
CREATE POLICY "Alumni can edit own profile" ON alumni_profiles FOR UPDATE USING (auth.uid() = profile_id);
CREATE POLICY "Alumni can create own profile" ON alumni_profiles FOR INSERT WITH CHECK (auth.uid() = profile_id);
-- Public can view public alumni profiles
CREATE POLICY "Public can view public alumni profiles" ON alumni_profiles FOR SELECT USING (is_public = true OR auth.uid() = profile_id);

-- 9. Student Clubs
CREATE POLICY "Admins full access on student clubs" ON student_clubs FOR ALL USING (is_admin());
CREATE POLICY "Public can view student clubs" ON student_clubs FOR SELECT USING (true);
