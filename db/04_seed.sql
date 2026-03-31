-- 04_seed.sql

-- Example seed data for Courses
INSERT INTO courses (id, title, slug, level, department, duration, mode_of_study, fee_local, fee_international, description, entry_requirements, is_new, active)
VALUES 
(gen_random_uuid(), 'Bachelor of Medicine and Bachelor of Surgery', 'mbchb', 'undergraduate', 'School of Medicine', '6 Years', 'Full-time', 500000.00, 10000.00, 'A comprehensive medical degree program designed to produce competent doctors.', 'KCSE Mean Grade B+ with B+ in Biology, Chemistry, Physics/Math, and English/Kiswahili', false, true),
(gen_random_uuid(), 'BSc in Nursing', 'bsc-nursing', 'undergraduate', 'School of Nursing', '4 Years', 'Full-time', 300000.00, 8000.00, 'Develops professional nurses equipped for modern healthcare settings.', 'KCSE Mean Grade C+ with C+ in Biological Sciences', false, true),
(gen_random_uuid(), 'Diploma in Clinical Medicine', 'dip-clinical-med', 'diploma', 'Clinical Sciences', '3 Years', 'Full-time', 150000.00, 5000.00, 'Produces clinical officers capable of managing prevalent health conditions.', 'KCSE Mean Grade C', false, true),
(gen_random_uuid(), 'Master of Public Health (MPH)', 'master-public-health', 'postgraduate', 'Public Health', '2 Years', 'Part-time', 450000.00, 9000.00, 'Advanced degree in public health tailored for health system leaders.', 'BSc in a health-related field with at least 2 years experience', true, true);

-- Example seed data for Faculty
INSERT INTO faculty (id, title, first_name, last_name, department, designation, bio, email, office_hours)
VALUES
(gen_random_uuid(), 'Prof.', 'Jane', 'Kamau', 'School of Medicine', 'Dean of Medicine', 'Experienced surgeon and medical educator.', 'jane.kamau@bluewest.ac.ke', 'Tue & Thu 10:00 AM - 12:00 PM'),
(gen_random_uuid(), 'Dr.', 'Mark', 'Ochieng', 'Public Health', 'Head of Department', 'Epidemiologist focusing on infectious diseases in coastal regions.', 'mark.ochieng@bluewest.ac.ke', 'Wed 2:00 PM - 4:00 PM');

-- Example seed data for News
INSERT INTO news (id, title, slug, summary, content, category)
VALUES
(gen_random_uuid(), 'Blue West Medical Training College Launches New Campus', 'new-campus-launch', 'We are excited to announce our new state-of-the-art campus in Malindi.', 'Full content about the campus launch...', 'announcement'),
(gen_random_uuid(), 'Alumni Magazine: Spring 2026 Edition', 'alumni-magazine-2026', 'Read stories from our successful graduates working across Kenya.', 'Full content of the magazine...', 'alumni_magazine');

-- Example seed data for Student Clubs
INSERT INTO student_clubs (id, name, slug, category, description, contact_email)
VALUES
(gen_random_uuid(), 'BWest Medical Students Association', 'bwmsa', 'academic', 'The primary student body representing all medical students.', 'bwmsa@bluewest.ac.ke'),
(gen_random_uuid(), 'First Aid & Emergency Response Team', 'first-aid-team', 'skills', 'Student-led first aid responders and training group.', 'firstaid@bluewest.ac.ke');