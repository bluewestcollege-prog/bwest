-- 02_functions_triggers.sql

-- Helper function to check if a user is an admin
CREATE OR REPLACE FUNCTION is_admin() RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.profiles 
        WHERE id = auth.uid() AND role = 'admin'
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically create a profile record when a new user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name, email, role)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'first_name',
    new.raw_user_meta_data->>'last_name',
    new.email,
    COALESCE((new.raw_user_meta_data->>'role')::user_role, 'applicant'::user_role)
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Trigger for auto-updating `updated_at` columns
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = now();
   RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_profiles_modtime ON profiles;
CREATE TRIGGER update_profiles_modtime BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

DROP TRIGGER IF EXISTS update_courses_modtime ON courses;
CREATE TRIGGER update_courses_modtime BEFORE UPDATE ON courses FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

DROP TRIGGER IF EXISTS update_faculty_modtime ON faculty;
CREATE TRIGGER update_faculty_modtime BEFORE UPDATE ON faculty FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

DROP TRIGGER IF EXISTS update_events_modtime ON events;
CREATE TRIGGER update_events_modtime BEFORE UPDATE ON events FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

DROP TRIGGER IF EXISTS update_news_modtime ON news;
CREATE TRIGGER update_news_modtime BEFORE UPDATE ON news FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

DROP TRIGGER IF EXISTS update_applications_modtime ON applications;
CREATE TRIGGER update_applications_modtime BEFORE UPDATE ON applications FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

DROP TRIGGER IF EXISTS update_alumni_profiles_modtime ON alumni_profiles;
CREATE TRIGGER update_alumni_profiles_modtime BEFORE UPDATE ON alumni_profiles FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

DROP TRIGGER IF EXISTS update_student_clubs_modtime ON student_clubs;
CREATE TRIGGER update_student_clubs_modtime BEFORE UPDATE ON student_clubs FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
