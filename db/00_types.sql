-- 00_types.sql

-- Define role enumerations
CREATE TYPE user_role AS ENUM ('admin', 'faculty', 'student', 'alumni', 'applicant');
CREATE TYPE course_level AS ENUM ('undergraduate', 'postgraduate', 'phd', 'diploma');
CREATE TYPE application_status AS ENUM ('draft', 'submitted', 'under_review', 'accepted', 'rejected', 'withdrawn');
CREATE TYPE donation_status AS ENUM ('pending', 'completed', 'failed', 'refunded');
