-- =============================================================================
-- seed_migrations.sql
-- Full migration of all hardcoded frontend data into the Supabase database.
-- Run AFTER 01_schema.sql, 02_functions_triggers.sql, and 03_policies.sql.
-- New entries use gen_random_uuid() for portability.
-- Existing 04_seed.sql placeholder rows should be cleared before running this.
-- =============================================================================

-- Clear placeholder seed data (safe to re-run)
TRUNCATE TABLE student_clubs, alumni_profiles, publications, faculty,
              courses, events, news RESTART IDENTITY CASCADE;


-- =============================================================================
-- COURSES  (all levels)
-- =============================================================================

INSERT INTO courses (title, slug, level, department, duration, mode_of_study, fee_local, fee_international, description, entry_requirements, is_new, active) VALUES

-- ── Undergraduate ─────────────────────────────────────────────────────────────
('Bachelor of Medicine & Surgery', 'mbchb', 'undergraduate',
 'School of Medicine', '6 Years', 'Full-time',
 280000, 10000,
 'Kenya''s most comprehensive medical degree programme, producing doctors who are clinically excellent and contextually aware. Years 1–3 cover basic sciences; Years 4–6 are dedicated clinical rotations at Coast General Teaching & Referral Hospital and affiliated sites. Core modules: Human Anatomy & Physiology, Biochemistry & Genetics, Pathology & Microbiology, Pharmacology, Clinical Medicine I–IV, Surgery, Obstetrics & Gynaecology, Paediatrics, Psychiatry, Community Medicine, Medical Ethics.',
 'KCSE Mean Grade B+ with B+ in Biology, Chemistry, Physics/Maths, and English/Kiswahili',
 false, true),

('Bachelor of Pharmacy', 'bpharm', 'undergraduate',
 'School of Pharmacy & Pharmacology', '4 Years', 'Full-time',
 210000, 8000,
 'A rigorous four-year programme covering pharmaceutical sciences, pharmacokinetics, clinical pharmacy practice, and drug regulation. Graduates are equipped for roles in hospital pharmacy, community dispensing, pharmaceutical industry, and regulatory affairs. Core modules: Pharmaceutical Chemistry, Pharmacognosy, Pharmacokinetics, Clinical Pharmacy, Drug Information Management, Pharmaceutical Microbiology, Hospital Pharmacy Practice, Drug Regulatory Affairs.',
 'KCSE Mean Grade C+ with C+ in Chemistry and Biology',
 false, true),

('Bachelor of Nursing Science', 'bsc-nursing', 'undergraduate',
 'School of Nursing & Midwifery', '4 Years', 'Full-time',
 175000, 7000,
 'A degree programme preparing nurses for leadership roles in hospitals, community health, and public health policy. Combines evidence-based nursing theory with extensive clinical placements across medical, surgical, paediatric, and community settings. Core modules: Nursing Foundations, Anatomy & Physiology, Medical-Surgical Nursing, Paediatric Nursing, Midwifery & Obstetrics, Community Health Nursing, Mental Health Nursing, Nursing Research & Ethics.',
 'KCSE Mean Grade C+ with C+ in Biological Sciences',
 false, true),

('Bachelor of Dental Surgery', 'bds', 'undergraduate',
 'School of Medicine', '5 Years', 'Full-time',
 250000, 9500,
 'A comprehensive dental programme offered in partnership with Coast Dental Institute. Covers oral medicine, surgery, orthodontics, and community dental health. Graduates are licensed by the KMPDC Dental Division. Core modules: Oral Anatomy, Dental Materials, Periodontics, Oral Medicine & Surgery, Paediatric Dentistry, Orthodontics, Community Oral Health, Dental Radiology.',
 'KCSE Mean Grade B with B in Biology and Chemistry',
 false, true),

('Bachelor of Medical Laboratory Sciences', 'bmls', 'undergraduate',
 'School of Biomedical Sciences', '4 Years', 'Full-time',
 190000, 7500,
 'Trains medical laboratory professionals for roles in diagnostic laboratories, blood banking, research, and health systems management. Strong practical component with 18 months of attachment across certified labs. Core modules: Clinical Biochemistry, Haematology & Blood Transfusion, Medical Microbiology, Histopathology, Parasitology, Clinical Immunology, Medical Statistics, Lab Quality Management.',
 'KCSE Mean Grade C+ with C+ in Biology, Chemistry, and Mathematics',
 false, true),

('Bachelor of Physiotherapy', 'bphysio', 'undergraduate',
 'School of Biomedical Sciences', '4 Years', 'Full-time',
 185000, 7200,
 'Develops physiotherapists skilled in musculoskeletal, neurological, respiratory, and paediatric rehabilitation. Includes placements at Coast General TRH, sports facilities, and specialised rehabilitation centres. Core modules: Anatomy & Biomechanics, Exercise Physiology, Musculoskeletal Therapy, Neurological Rehabilitation, Respiratory Physiotherapy, Paediatric Physiotherapy, Sports Medicine, Research Methods.',
 'KCSE Mean Grade C+ with C+ in Biology and Physics',
 false, true),

-- ── Postgraduate ──────────────────────────────────────────────────────────────
('MSc Clinical Medicine', 'msc-clinical-medicine', 'postgraduate',
 'Faculty of Clinical Medicine', '2 Years', 'Full-time / Part-time',
 120000, 5000,
 'An advanced clinical degree for medical officers and general practitioners seeking specialist depth in internal medicine, diagnostics, and clinical research. Structured rotations through Coast General Teaching & Referral Hospital. Core modules: Advanced Pathophysiology, Clinical Pharmacology, Evidence-Based Medicine, Medical Research Methodology, Clinical Attachment (500 hrs), Dissertation.',
 'MBChB or equivalent; minimum 2 years clinical experience',
 false, true),

('Master of Medicine — Surgery (MMed)', 'mmed-surgery', 'postgraduate',
 'Faculty of Clinical Medicine', '3 Years', 'Full-time',
 135000, 5500,
 'Kenya Medical Practitioners & Dentists Council recognised specialist surgical training programme. Emphasis on general surgery, trauma, and surgical management of tropical conditions common to coastal Kenya. Core modules: Surgical Anatomy & Pathology, Perioperative Care, Trauma Surgery, Laparoscopic Techniques, Paediatric Surgery Principles, Research Project.',
 'MBChB; registered with KMPDC; 3 years post-internship',
 false, true),

('Master of Medicine — Obstetrics & Gynaecology (MMed)', 'mmed-obgyn', 'postgraduate',
 'Faculty of Clinical Medicine', '3 Years', 'Full-time',
 135000, 5500,
 'A specialist programme addressing Kenya''s high maternal mortality rates, with focus on high-risk pregnancy, emergency obstetrics, fistula repair, and reproductive health policy. Core modules: High-Risk Obstetrics, Emergency Gynaecology, Reproductive Endocrinology, Foetal Medicine & Ultrasonography, Community Maternal Health, Research Thesis.',
 'MBChB; KMPDC registered; 2 years clinical post-internship',
 false, true),

('MSc Biomedical Sciences', 'msc-biomedical-sciences', 'postgraduate',
 'School of Biomedical Sciences', '2 Years', 'Full-time / Part-time',
 115000, 4800,
 'Research-intensive programme in laboratory sciences, molecular biology, and translational medicine. Strong links to our six research centres and Coast General Hospital diagnostic laboratories. Core modules: Molecular Diagnostics, Immunology & Infectious Disease, Medical Genetics, Biostatistics & Epidemiology, Laboratory Management, Dissertation.',
 'BSc Biomedical Sciences, BMLS, or equivalent; minimum Lower Second Class Honours',
 false, true),

('MSc Clinical Pharmacology', 'msc-clinical-pharmacology', 'postgraduate',
 'School of Pharmacy & Pharmacology', '2 Years', 'Full-time',
 120000, 5000,
 'Specialised training for pharmacists and clinicians in drug development, therapeutic drug monitoring, pharmacovigilance, and regulation — aligned with Pharmacy & Poisons Board Kenya standards. Core modules: Rational Drug Use, Drug Safety & Pharmacovigilance, Clinical Trials Methodology, Pharmaceutical Policy, Hospital Pharmacy Practice, Research Project.',
 'BPharm or MBChB; minimum Second Class Honours',
 false, true),

('Master of Public Health (MPH)', 'master-public-health', 'postgraduate',
 'School of Public & Community Health', '2 Years', 'Full-time / Part-time / Online',
 110000, 4500,
 'A versatile public health programme open to all health profession graduates. Covers epidemiology, health systems, environmental health, and health policy — with a strong focus on coastal and rural Kenya. Core modules: Epidemiology & Disease Surveillance, Health Systems & Policy, Biostatistics, Environmental & Occupational Health, Health Promotion, Applied Research Project.',
 'Any undergraduate health degree; minimum Second Class; relevant work experience preferred',
 true, true),

-- ── PhD ───────────────────────────────────────────────────────────────────────
('PhD in Biomedical Sciences', 'phd-biomedical-sciences', 'phd',
 'School of Biomedical Sciences', '3–5 Years', 'Full-time / Part-time',
 85000, 3500,
 'Our flagship doctoral programme tackles the molecular and cellular basis of diseases prevalent in Kenya and East Africa — HIV/AIDS, TB, malaria, cancer, and emerging zoonotic diseases. Focus: Molecular biology, infectious disease, cancer biology, genomics. Candidates publish in international peer-reviewed journals and present at global conferences. Supervisors: Prof. Amina Hassan / Prof. James Kariuki. Funding: Wellcome Trust, NIH, KEMRI grants available.',
 'Relevant Master''s degree; minimum Upper Second Class Honours',
 false, true),

('PhD in Public Health & Epidemiology', 'phd-public-health', 'phd',
 'School of Public & Community Health', '3–5 Years', 'Full-time / Part-time',
 85000, 3500,
 'Population-level research addressing Kenya''s disease burden, health inequities, and intervention strategies. Candidates work embedded in Kilifi County health systems, providing real-world policy impact. Focus: Disease surveillance, health systems, community interventions. Supervisors: Prof. Daniel Rono / Prof. Grace Wambui. Funding: WHO Kenya, USAID, Gates Foundation partnerships.',
 'Relevant Master''s degree; minimum Upper Second Class Honours',
 false, true),

('PhD in Health Informatics & AI', 'phd-health-informatics-ai', 'phd',
 'AI & Digital Health Lab', '3–5 Years', 'Full-time / Part-time',
 85000, 3500,
 'An interdisciplinary doctorate at the frontier of technology and medicine. Candidates develop AI tools for resource-limited settings — diagnostic algorithms, predictive models, and telemedicine platforms suited to coastal Kenya. Focus: Machine learning in diagnostics, digital health systems, data science. Supervisor: Dr. Emmanuel Otieno. Funding: Google Kenya, IDRC, African Development Bank.',
 'Relevant Master''s degree; minimum Upper Second Class Honours',
 false, true),

('PhD in Pharmacology & Pharmaceutical Sciences', 'phd-pharmacology', 'phd',
 'School of Pharmacy & Pharmacology', '3–5 Years', 'Full-time / Part-time',
 85000, 3500,
 'Doctoral research spanning drug discovery, traditional medicine validation, pharmacovigilance systems, and pharmaceutical policy. Unique focus on developing affordable medicines for tropical and coastal diseases. Focus: Drug discovery, pharmacovigilance, ethnopharmacology. Supervisors: Dr. John Kipkorir / Dr. Monica Kerubo. Funding: Pharmacy & Poisons Board research fund, DAAD.',
 'Relevant Master''s degree; minimum Upper Second Class Honours',
 false, true),

('PhD in Nursing & Health Sciences', 'phd-nursing', 'phd',
 'School of Nursing & Midwifery', '3–5 Years', 'Full-time / Part-time',
 85000, 3500,
 'Kenya''s first nursing-specific doctoral programme. Generates evidence for community-based nursing models appropriate for the Coast''s diverse communities, including fishing communities, pastoralists, and coastal urban populations. Focus: Community nursing models, mental health, patient outcomes research. Supervisor: Dr. Faith Achieng''. Funding: Nursing Council of Kenya, WHO, East Africa research funds.',
 'Relevant Master''s degree; minimum Upper Second Class Honours',
 false, true),

-- ── Diploma ───────────────────────────────────────────────────────────────────
('Diploma in Diagnostic Radiography', 'dip-radiography', 'diploma',
 'Clinical Sciences', '3 Years', 'Full-time',
 95000, 4000,
 'Trains skilled diagnostic radiographers to operate X-ray, ultrasound, CT, and MRI equipment. Practical placements at Coast General TRH and affiliated hospitals in Kilifi County. Core modules: Radiation Physics, Anatomy for Imaging, Radiographic Techniques, Ultrasound Imaging, CT Scanning Principles, Radiation Protection.',
 'KCSE Mean Grade C (minus) with at least Grade C in Biology and one other science',
 false, true),

('Diploma in Clinical Medicine', 'dip-clinical-med', 'diploma',
 'Clinical Sciences', '3 Years', 'Full-time',
 85000, 3500,
 'Produces clinical officers competent in primary care, emergency medicine, and community health. One of Kenya''s most important healthcare cadres, especially for rural and coastal communities. Core modules: Clinical Assessment, Internal Medicine, Surgery & Orthopaedics, Paediatrics, Obstetrics & Gynaecology, Community Health.',
 'KCSE Mean Grade C (minus) with C in Biology and another science',
 false, true),

('Diploma in Dental Technology', 'dip-dental-technology', 'diploma',
 'Clinical Sciences', '3 Years', 'Full-time',
 90000, 3800,
 'Specialist training in fabrication of dental prostheses, orthodontic appliances, and crowns. Partners with Mombasa Dental Centre for clinical placements. Core modules: Dental Materials Science, Fixed Prosthetics, Removable Prosthetics, Orthodontic Appliances, Dental Ceramics, Quality Control.',
 'KCSE Mean Grade C (minus) with C in Biology and Chemistry',
 false, true),

('Diploma in Emergency Medical Technology', 'dip-emt', 'diploma',
 'Clinical Sciences', '3 Years', 'Full-time',
 90000, 3800,
 'Kenya''s first coastal emergency paramedic programme. Trains advanced life support technicians for ambulance services, disaster response, and remote rescue — vital for Kilifi County''s busy coastal roads. Core modules: Basic & Advanced Life Support, Trauma Management, Cardiac Emergency Care, Emergency Obstetrics, Disaster Medicine, Ambulance Operations.',
 'KCSE Mean Grade C (minus) with C in Biology or Chemistry',
 false, true),

('Diploma in Physiotherapy', 'dip-physiotherapy', 'diploma',
 'Clinical Sciences', '3 Years', 'Full-time',
 88000, 3600,
 'Allied health programme producing physiotherapists for coastal rehabilitation centres, orthopaedic wards, neurology units, and sports medicine. Placed in Blue West''s own sports rehab facility. Core modules: Musculoskeletal Physiotherapy, Neurological Rehabilitation, Paediatric Physiotherapy, Sports Medicine, Electrotherapy, Community Rehabilitation.',
 'KCSE Mean Grade C (minus) with C in Biology and Physics',
 false, true),

('Diploma in Medical Laboratory Sciences', 'dip-mls', 'diploma',
 'Clinical Sciences', '3 Years', 'Full-time',
 88000, 3600,
 'Practical training in clinical chemistry, haematology, microbiology, and blood transfusion services. Supports Kenya''s chronic shortage of laboratory professionals in rural hospitals. Core modules: Medical Microbiology, Clinical Chemistry, Haematology & Blood Banking, Histopathology, Parasitology, Laboratory Management.',
 'KCSE Mean Grade C (minus) with C in Biology and Chemistry',
 false, true),

('Certificate in Community Health', 'cert-community-health', 'diploma',
 'School of Public & Community Health', '1 Year', 'Full-time / Part-time',
 45000, 2000,
 'Accelerated programme for community health workers and volunteers seeking formal recognition. Covers preventive health, health promotion, maternal/child health referrals, and basic first aid. Core modules: Primary Health Care Principles, Maternal & Child Health, Disease Prevention, Health Promotion, Community Mobilisation, First Aid & Emergency Response.',
 'KCSE Grade D+ overall with relevant community health work experience',
 false, true),

('Certificate in Medical Records Management', 'cert-medical-records', 'diploma',
 'Clinical Sciences', '1 Year', 'Full-time / Part-time',
 42000, 1800,
 'Short programme for hospital administrators and records officers. Covers health information systems, patient data management, coding, and NHIF/insurance processing. Core modules: Health Records Systems, Medical Coding (ICD-10), Patient Data Privacy (KDPA), NHIF & Insurance Processing, Digital Health Records, Health Facility Administration.',
 'KCSE Grade D+ overall',
 false, true),

-- ── New / Innovative ─────────────────────────────────────────────────────────
('BSc Health Informatics & Artificial Intelligence in Medicine', 'bsc-health-informatics-ai', 'undergraduate',
 'AI & Digital Health Lab', '4 Years', 'Full-time',
 200000, 8000,
 'The first of its kind in Kenya and one of very few in East Africa. This programme trains the next generation of healthcare professionals who can harness artificial intelligence, machine learning, and data science to transform clinical diagnosis, health system management, and patient outcomes. Highlights: AI-Assisted Diagnostics using real clinical datasets, EHR systems management, NLP for clinical text analysis, digital health entrepreneurship, partnership with Safaricom M-Health initiative, internship pathways at health tech startups.',
 'KCSE Mean Grade B with B in Mathematics, one science, and English',
 true, true),

('BSc Traditional Medicine & Integrative Health Sciences', 'bsc-traditional-medicine', 'undergraduate',
 'School of Public & Community Health', '4 Years', 'Full-time',
 175000, 7000,
 'The only degree-level programme in traditional medicine integrated with modern biomedical science in Kenya. Scientifically validates, standardises, and integrates indigenous Kenyan and East African healing practices into formal healthcare. Combines ethnobotany, pharmacognosy, and conventional medicine. Highlights: Ethnobotany & African herbal medicine, phytopharmacology & medicinal plant research, WHO Traditional Medicine Strategy alignment, field studies with traditional healers, natural products chemistry, regulatory pathways.',
 'KCSE Mean Grade C+ with C+ in Biology and Chemistry',
 true, true),

('MSc One Health: Human, Animal & Environmental Medicine', 'msc-one-health', 'postgraduate',
 'One Health Research Unit', '2 Years', 'Full-time',
 130000, 5200,
 'A cutting-edge postgraduate programme addressing health at the intersection of humans, animals, and ecosystems — of profound relevance in Kenya''s diverse ecological context. Covers zoonotic diseases, antimicrobial resistance, climate health, and community surveillance. Highlights: Zoonotic disease surveillance & outbreak response, AMR management, climate change and vector-borne diseases, wildlife-livestock-human interface health, community-based surveillance, field placements at Kenya Wildlife Service & KEMRI.',
 'Any undergraduate health, veterinary, or environmental science degree; minimum Second Class',
 true, true),

('Diploma in Mental Health Nursing & Psychosocial Support', 'dip-mental-health-nursing', 'diploma',
 'School of Nursing & Midwifery', '3 Years', 'Full-time',
 88000, 3600,
 'A specialist nursing diploma addressing Kenya''s severe mental health workforce gap. Trains mental health nurses and psychosocial support workers who operate in community settings, schools, and primary care facilities. Highlights: Community mental health first response, psychosocial support for trauma and GBV survivors, substance abuse & addiction management, child & adolescent mental health, cultural dimensions of mental illness in Kenya, school mental health programme delivery.',
 'KCSE Mean Grade C (minus) with C in Biology',
 true, true),

('BSc Sports Medicine & Exercise Science', 'bsc-sports-medicine', 'undergraduate',
 'School of Biomedical Sciences', '4 Years', 'Full-time',
 180000, 7200,
 'Developed in partnership with Athletics Kenya. Trains sports medicine professionals and exercise scientists to support Kenya''s elite athletic culture and the growing sports industry. Highlights: Sports injury prevention and rehabilitation, performance physiology & biomechanics, nutrition for elite athletes, altitude training medicine, anti-doping & sports governance, partnership with Kenyan Olympic athletes for practical training.',
 'KCSE Mean Grade C+ with C+ in Biology and Physical Education or Physics',
 true, true),

('Certificate in Rural & Community Health Practice', 'cert-rural-community-health', 'diploma',
 'School of Public & Community Health', '1 Year', 'Full-time / Part-time / Online',
 35000, 1500,
 'A practical, community-facing certificate programme targeting health workers already operating in rural Kenya — CHWs, dispensary assistants, and community volunteers. Delivered in hybrid format. Highlights: Primary healthcare delivery in low-resource settings, maternal & newborn care, disease surveillance and outbreak reporting, community health education, basic emergency first response, referral pathways & healthcare system navigation.',
 'KCSE Grade D+ overall with at least 1 year community health work experience',
 true, true),

('MSc Genomics & Precision Medicine in Africa', 'msc-genomics-precision-medicine', 'postgraduate',
 'School of Biomedical Sciences', '2 Years', 'Full-time',
 140000, 5800,
 'A pioneering postgraduate programme in applied genomics for African disease contexts. Trains the scientists who will lead genomics research in Kenya and across the continent. Highlights: Next-generation sequencing & bioinformatics, African genetic diversity & disease susceptibility, pharmacogenomics — African drug metabolism pathways, cancer genomics & precision oncology, infectious disease genomics (malaria, TB, HIV), bioethics of genetic research in African populations.',
 'BSc Biomedical Sciences, Genetics, Bioinformatics, or equivalent; minimum Upper Second',
 true, true);


-- =============================================================================
-- FACULTY  (with Unsplash image_url)
-- =============================================================================

INSERT INTO faculty (title, first_name, last_name, department, designation, bio, email, office_hours, image_url) VALUES

('Prof.', 'Grace', 'Wambui', 'Office of the Principal', 'Principal & Professor of Epidemiology',
 'Professor Grace Wambui is the founding Principal of Blue West Medical Training College and an internationally recognised epidemiologist specialising in cancer prevention and surveillance in sub-Saharan Africa. She holds degrees from University of Nairobi and University of Edinburgh, and has published 87 peer-reviewed papers.',
 'grace.wambui@bluewest.ac.ke', 'Mon & Wed 09:00–11:00',
 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&q=80&fit=crop&crop=face'),

('Dr.', 'Samuel', 'Odhiambo', 'Faculty of Clinical Medicine', 'Dean of Clinical Sciences',
 'Dr. Samuel Odhiambo is a consultant physician and clinical educator with 20 years of experience in internal medicine and infectious disease on Kenya''s Coast. He chairs the Kenya Medical Education Task Force and has published 45 peer-reviewed papers on tropical medicine.',
 'samuel.odhiambo@bluewest.ac.ke', 'Tue & Thu 14:00–16:00',
 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&q=80&fit=crop&crop=face'),

('Prof.', 'Amina', 'Hassan', 'School of Biomedical Sciences', 'Dean of Research & Postgraduate',
 'Professor Amina Hassan leads Blue West''s research agenda and postgraduate division. A molecular biologist by training, she has secured over KSh 45M in research grants from WHO, Wellcome Trust, and the African Development Bank. She has published 140 peer-reviewed papers on One Health and zoonotic diseases.',
 'amina.hassan@bluewest.ac.ke', 'Mon & Fri 10:00–12:00',
 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&q=80&fit=crop&crop=face'),

('Dr.', 'John', 'Kipkorir', 'School of Pharmacy & Pharmacology', 'Head, School of Pharmacy',
 'Dr. John Kipkorir is a clinical pharmacologist and registered pharmaceutical technologist with expertise in drug policy, pharmacovigilance, and traditional medicine validation. He serves on the Pharmacy & Poisons Board review committee. Author of 32 publications.',
 'john.kipkorir@bluewest.ac.ke', 'Wed 09:00–13:00',
 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&q=80&fit=crop&crop=face'),

('Dr.', 'Peter', 'Mutembei', 'Student Affairs Directorate', 'Dean of Student Affairs',
 'Dr. Peter Mutembei oversees the holistic welfare of all Blue West students — from admission to graduation. A counselling psychologist with a medical background, he has built one of the most robust student support systems in Kenya''s private health training sector. Published 18 articles on student wellbeing.',
 'peter.mutembei@bluewest.ac.ke', 'Daily 08:00–10:00',
 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&q=80&fit=crop&crop=face'),

('Dr.', 'Faith', 'Achieng', 'School of Nursing & Midwifery', 'Head, School of Nursing',
 'Dr. Faith Achieng is a nurse educator, midwife, and researcher dedicated to transforming nursing education on Kenya''s Coast. She developed Blue West''s Kenya-first PhD in Nursing programme and has published 55 papers on maternal health outcomes and community nursing.',
 'faith.achieng@bluewest.ac.ke', 'Tue & Thu 08:00–10:00',
 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&q=80&fit=crop&crop=face'),

('Prof.', 'James', 'Kariuki', 'Centre for Infectious Disease Research', 'Professor of Infectious Disease',
 'Professor James Kariuki is Blue West''s most prolific researcher and head of the Centre for Infectious Disease Research. With 203 peer-reviewed publications and collaborations spanning CDC Kenya, KEMRI, and Johns Hopkins, he is East Africa''s leading authority on HIV/AIDS-TB co-infection and malaria drug resistance.',
 'james.kariuki@bluewest.ac.ke', 'Fri 10:00–13:00',
 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&q=80&fit=crop&crop=face'),

('Dr.', 'Robert', 'Chesang', 'Maternal & Child Health Institute', 'Associate Professor, Maternal Health',
 'Dr. Robert Chesang leads the Maternal & Child Health Institute, focusing on reducing coastal Kenya''s persistently high maternal mortality rates. His research on emergency obstetric care protocols has been adopted by the Ministry of Health. Published 67 papers.',
 'robert.chesang@bluewest.ac.ke', 'Mon & Wed 14:00–16:00',
 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&q=80&fit=crop&crop=face'),

('Dr.', 'Lisa', 'Wanjiku', 'Faculty of Clinical Medicine', 'Lecturer in Anatomy',
 'Dr. Lisa Wanjiku is an anatomist and clinical educator passionate about innovative anatomy teaching using 3D visualisation and plastination. She is co-author of the first anatomy textbook contextualised for East African clinical practice. Published 12 papers.',
 'lisa.wanjiku@bluewest.ac.ke', 'Mon–Fri 11:00–12:00',
 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&q=80&fit=crop&crop=face'),

('Dr.', 'Emmanuel', 'Otieno', 'AI & Digital Health Lab', 'Head, AI & Digital Health Lab',
 'Dr. Emmanuel Otieno founded Blue West''s AI & Digital Health Lab and leads East Africa''s most active academic AI-in-healthcare research group. His team develops diagnostic AI tools — including a TB detection algorithm from chest X-rays and malaria diagnosis from blood smear images — with support from Google Kenya. Published 41 papers.',
 'emmanuel.otieno@bluewest.ac.ke', 'Thu 09:00–12:00',
 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&q=80&fit=crop&crop=face'),

('Prof.', 'Daniel', 'Rono', 'School of Public & Community Health', 'Professor of Public Health',
 'Professor Daniel Rono is one of Kenya''s most respected public health academics, with 98 publications spanning epidemiology, health systems strengthening, and community health interventions. He has led national disease surveillance studies for the Ministry of Health and WHO.',
 'daniel.rono@bluewest.ac.ke', 'Tue & Thu 09:00–11:00',
 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&q=80&fit=crop&crop=face'),

('Dr.', 'Monica', 'Kerubo', 'School of Pharmacy & Pharmacology', 'Lecturer in Pharmacognosy',
 'Dr. Monica Kerubo is a pharmacognosist and ethnobotanist specialising in the scientific validation of traditional Kenyan medicinal plants. She leads Blue West''s Traditional Medicine research stream and is developing Kenya''s first pharmacopoeial monographs for indigenous plant medicines. Published 22 papers.',
 'monica.kerubo@bluewest.ac.ke', 'Mon & Fri 14:00–16:00',
 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&q=80&fit=crop&crop=face'),

('Dr.', 'Mark', 'Ochieng', 'School of Public & Community Health', 'Head of Department — Epidemiology',
 'Dr. Mark Ochieng is an epidemiologist with a focus on infectious diseases in coastal regions of Kenya. He leads disease surveillance studies in Kilifi County in collaboration with KEMRI and the Kenya Ministry of Health.',
 'mark.ochieng@bluewest.ac.ke', 'Wed 14:00–16:00',
 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&q=80&fit=crop&crop=face');


-- =============================================================================
-- PUBLICATIONS  (linked to faculty rows inserted above)
-- We reference faculty by email since IDs are not known pre-insert.
-- =============================================================================

INSERT INTO publications (faculty_id, title, journal, publication_date, url)
SELECT id, 'Cancer Surveillance in Sub-Saharan Africa: A 10-Year Retrospective', 'Lancet Oncology', '2024-03-01', 'https://www.thelancet.com'
FROM faculty WHERE email = 'grace.wambui@bluewest.ac.ke';

INSERT INTO publications (faculty_id, title, journal, publication_date, url)
SELECT id, 'AI-Assisted TB Detection from Chest X-Rays in Low-Resource Settings', 'Nature Medicine', '2024-06-15', 'https://www.nature.com/nm'
FROM faculty WHERE email = 'emmanuel.otieno@bluewest.ac.ke';

INSERT INTO publications (faculty_id, title, journal, publication_date, url)
SELECT id, 'Malaria Drug Resistance Patterns on Kenya''s Coast: 2020–2024', 'PLOS Medicine', '2024-09-01', 'https://journals.plos.org/plosmedicine'
FROM faculty WHERE email = 'james.kariuki@bluewest.ac.ke';

INSERT INTO publications (faculty_id, title, journal, publication_date, url)
SELECT id, 'Emergency Obstetric Care Protocols in Rural Kenya: Impact on Maternal Mortality', 'BJOG', '2023-11-01', 'https://obgyn.onlinelibrary.wiley.com'
FROM faculty WHERE email = 'robert.chesang@bluewest.ac.ke';

INSERT INTO publications (faculty_id, title, journal, publication_date, url)
SELECT id, 'Ethnobotanical Survey of Medicinal Plants Used in Kilifi County', 'Journal of Ethnopharmacology', '2023-07-01', 'https://www.sciencedirect.com/journal/journal-of-ethnopharmacology'
FROM faculty WHERE email = 'monica.kerubo@bluewest.ac.ke';

INSERT INTO publications (faculty_id, title, journal, publication_date, url)
SELECT id, 'Community-Based Mental Health Models for Coastal Kenya', 'African Journal of Psychiatry', '2024-01-20', 'https://www.ajol.info'
FROM faculty WHERE email = 'faith.achieng@bluewest.ac.ke';


-- =============================================================================
-- EVENTS  (academic calendar + alumni events)
-- =============================================================================

INSERT INTO events (title, slug, description, event_type, start_time, end_time, location, is_virtual) VALUES

-- Academic calendar 2026/27
('Application Opens — 2026 Intake', 'app-opens-2026', 'Applications for September 2026 intake open via the online admissions portal at bluew-g.web.app', 'admissions', '2026-03-01 08:00:00+03', NULL, 'bluew-g.web.app', true),
('Early Application Deadline', 'early-app-deadline-2026', 'Deadline for early applications to all Blue West programmes for September 2026 intake.', 'admissions', '2026-04-30 17:00:00+03', NULL, 'Online', true),
('Standard Application Deadline', 'standard-app-deadline-2026', 'Final deadline for all standard applications for September 2026 intake.', 'admissions', '2026-06-30 17:00:00+03', NULL, 'Online', true),
('Aptitude Tests', 'aptitude-tests-2026', 'Written aptitude assessments for shortlisted applicants at the Blue West Gongoni Campus.', 'admissions', '2026-07-10 08:00:00+03', '2026-07-25 17:00:00+03', 'Blue West Medical Training College, Gongoni, Malindi', false),
('Admissions Interviews', 'admissions-interviews-2026', 'Panel interviews for candidates who pass the aptitude test stage.', 'admissions', '2026-08-01 08:00:00+03', '2026-08-15 17:00:00+03', 'Blue West Medical Training College, Gongoni, Malindi', false),
('Offer Letters Issued', 'offer-letters-2026', 'Conditional and unconditional offer letters dispatched to successful candidates.', 'admissions', '2026-08-22 08:00:00+03', NULL, 'Online / Post', true),
('Fee Payment & Acceptance Deadline', 'fee-payment-2026', 'Deadline for fee payment and formal acceptance of offer to secure place.', 'academic', '2026-09-05 17:00:00+03', NULL, 'Online / Finance Office', true),
('Orientation Week — 2026 Intake', 'orientation-2026', 'Welcome week for all new students. Campus tours, registration, library induction, and social programme.', 'academic', '2026-09-15 08:00:00+03', '2026-09-19 17:00:00+03', 'Blue West Medical Training College, Gongoni, Malindi', false),
('Semester 1 Begins — 2026/27', 'semester-1-begins-2026', 'Official start of lectures for all programmes, academic year 2026/27.', 'academic', '2026-09-22 08:00:00+03', NULL, 'Blue West Medical Training College, Gongoni, Malindi', false),
('Midterm Assessments — Semester 1', 'midterm-s1-2026', 'Continuous Assessment Tests (CATs) for all taught modules, Semester 1.', 'academic', '2026-11-24 08:00:00+03', '2026-11-28 17:00:00+03', 'Blue West Medical Training College, Gongoni, Malindi', false),
('Continuous Assessment Deadline — Semester 1', 'cat-deadline-s1-2026', 'Deadline for submission of all Semester 1 coursework assignments and practicals.', 'academic', '2026-12-15 17:00:00+03', NULL, 'Online / Faculty Offices', true),
('Christmas & New Year Break', 'xmas-break-2026', 'Year-end vacation. Campus closes except for emergency services and security.', 'academic', '2026-12-19 17:00:00+03', '2027-01-04 08:00:00+03', 'N/A', false),
('Semester 2 Begins', 'semester-2-begins-2027', 'Official start of Semester 2 lectures.', 'academic', '2027-01-11 08:00:00+03', NULL, 'Blue West Medical Training College, Gongoni, Malindi', false),
('Easter Break', 'easter-break-2027', 'Easter holiday recess. Minimal campus activity.', 'academic', '2027-04-01 17:00:00+03', '2027-04-07 08:00:00+03', 'N/A', false),
('End of Semester 2 Lectures', 'end-s2-lectures-2027', 'Last day of formal lectures for all programmes, Semester 2.', 'academic', '2027-04-23 17:00:00+03', NULL, 'Blue West Medical Training College, Gongoni, Malindi', false),
('Revision Week — Semester 2', 'revision-week-s2-2027', 'Structured revision sessions, past paper reviews, and tutored study sessions.', 'academic', '2027-04-26 08:00:00+03', '2027-04-30 17:00:00+03', 'Blue West Medical Training College, Gongoni, Malindi', false),
('Final Examinations Begin', 'finals-begin-2027', 'End-of-year final examinations commence for all programmes.', 'academic', '2027-05-05 08:00:00+03', NULL, 'Blue West Medical Training College, Gongoni, Malindi', false),
('Final Examinations End', 'finals-end-2027', 'Conclusion of final examinations for the 2026/27 academic year.', 'academic', '2027-05-23 17:00:00+03', NULL, 'Blue West Medical Training College, Gongoni, Malindi', false),
('Results Release', 'results-release-2027', 'Official release of 2026/27 academic year results via the student portal.', 'academic', '2027-06-13 08:00:00+03', NULL, 'Online (Student Portal)', true),
('Supplementary Examinations', 'supp-exams-2027', 'Supplementary and special examinations for eligible students.', 'academic', '2027-07-01 08:00:00+03', '2027-07-07 17:00:00+03', 'Blue West Medical Training College, Gongoni, Malindi', false),
('Long Vacation & Clinical Attachments', 'long-vacation-2027', 'Long vacation period. MBChB, BNSc, and BPhysio students begin clinical attachments at Coast General TRH, Kilifi County Hospital, and Malindi Sub-County Hospital.', 'academic', '2027-07-10 08:00:00+03', '2027-09-12 17:00:00+03', 'Coast General TRH, Kilifi County Hospital, Malindi Sub-County Hospital', false),

-- Alumni events
('Annual Alumni Reunion Gala 2026', 'alumni-gala-2026', 'The flagship Blue West annual alumni gathering. Keynote address, alumni awards ceremony, networking dinner, and entertainment. All classes welcome. Formal attire.', 'alumni', '2026-11-07 18:00:00+03', '2026-11-07 23:00:00+03', 'Sarova Whitesands Beach Resort, Mombasa', false),
('Alumni Career & Mentorship Fair 2026', 'alumni-career-fair-2026', 'A structured networking event connecting current students with alumni working across Kenya''s health sector. CV reviews, mock interviews, and employer presentations.', 'alumni', '2026-10-15 09:00:00+03', '2026-10-15 17:00:00+03', 'Blue West Medical Training College, Gongoni, Malindi', false),
('Alumni Giving Circle Annual Meeting', 'alumni-giving-circle-2026', 'Annual meeting of the Blue West Alumni Giving Circle. Review of scholarship fund performance, donor recognition, and plans for 2027 scholarship allocation.', 'alumni', '2026-09-25 10:00:00+03', '2026-09-25 13:00:00+03', 'Online (Zoom)', true),
('Coast Alumni Chapter Monthly Meetup', 'coast-alumni-nov-2026', 'Informal monthly gathering for Blue West alumni based in Mombasa, Kilifi, and the Coast region. Networking, updates, and social evening.', 'alumni', '2026-11-20 18:30:00+03', '2026-11-20 21:00:00+03', 'Tamarind Restaurant, Mombasa', false),
('Nairobi Alumni Chapter — Healthcare Leaders Evening', 'nairobi-alumni-oct-2026', 'Blue West Nairobi Chapter hosts a leadership discussion evening on healthcare system reform in Kenya. Panel of senior alumni from MOH, Aga Khan, and NGO sectors.', 'alumni', '2026-10-08 18:00:00+03', '2026-10-08 21:00:00+03', 'Aga Khan Hospital Nairobi (Conference Room A)', false);


-- =============================================================================
-- NEWS
-- =============================================================================

INSERT INTO news (title, slug, summary, content, category, published_at, image_url) VALUES

('Blue West Medical Training College Opens Its Doors', 'bwest-opens-2026',
 'Blue West Medical Training College officially opens its state-of-the-art campus in Gongoni, Malindi — Kenya''s first fully integrated medical training college on the Coast.',
 'Blue West Medical Training College today welcomed its inaugural class of 480 students across six undergraduate programmes, marking a historic milestone for health education on Kenya''s Coast. The college''s Gongoni campus features a 200,000 sq ft teaching hospital simulation centre, six specialist research laboratories, a 25-metre swimming pool, and the Makena Medical Library — one of Kenya''s largest medical reference collections. Principal Prof. Grace Wambui addressed students at the inauguration ceremony attended by the Cabinet Secretary for Health, County Governor of Kilifi, and representatives from WHO Kenya and the Kenya Medical Practitioners & Dentists Council.',
 'announcement', '2026-09-22 09:00:00+03',
 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80&fit=crop'),

('Blue West Launches East Africa''s First AI in Medicine Programme', 'ai-medicine-launch-2026',
 'Blue West Medical Training College launches the BSc Health Informatics & Artificial Intelligence in Medicine — East Africa''s first undergraduate AI in healthcare degree.',
 'Blue West Medical Training College has announced the launch of the BSc Health Informatics & Artificial Intelligence in Medicine — a first for East Africa and one of only a handful of such programmes globally. The programme, developed in partnership with Google Kenya and Safaricom M-Health, trains medical professionals who can harness machine learning, clinical data science, and digital health system design to transform patient care. The first cohort of 40 students will begin their studies in September 2026, with applications open now at bluew-g.web.app.',
 'announcement', '2026-08-15 10:00:00+03',
 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1200&q=80&fit=crop'),

('KSh 30M Wellcome Trust Grant Awarded to Blue West Research Centre', 'wellcome-trust-grant-2026',
 'Blue West''s Centre for Infectious Disease Research has been awarded a KSh 30M grant from the Wellcome Trust to study malaria drug resistance patterns on Kenya''s Coast.',
 'The Centre for Infectious Disease Research at Blue West Medical Training College has been awarded a major research grant of KSh 30 million from the Wellcome Trust to fund a three-year study into malaria drug resistance patterns affecting coastal communities in Kilifi, Kwale, and Mombasa Counties. Led by Professor James Kariuki, the study will use genomic sequencing to track resistance mutations in Plasmodium falciparum parasites — the deadliest malaria parasite — informing national treatment guidelines and early warning systems.',
 'announcement', '2026-10-05 08:00:00+03',
 'https://images.unsplash.com/photo-1614308457932-e16f87ca15c7?w=1200&q=80&fit=crop'),

('Alumni Magazine: Blue West Inaugural Edition', 'alumni-magazine-inaugural-2026',
 'The first edition of the Blue West Alumni Journal celebrates our founding faculty, inaugural students, and our vision for health education on Kenya''s Coast.',
 'We are proud to release the inaugural edition of the Blue West Alumni Journal — a quarterly publication celebrating our growing community of healthcare professionals, researchers, and educators. This edition features profiles of our founding faculty, a look inside our research centres, and interviews with our inaugural student cohort. Also featured: a special report on how Blue West is addressing the healthcare workforce crisis in Kilifi County and an article by Principal Prof. Grace Wambui on the founding vision of the college.',
 'alumni_magazine', '2026-10-01 08:00:00+03',
 'https://images.unsplash.com/photo-1627556704302-624286467c65?w=1200&q=80&fit=crop'),

('Applications Open for September 2026 Intake', 'applications-open-2026',
 'Applications for all Blue West undergraduate, postgraduate, diploma, and new courses are now open for the September 2026 academic year.',
 'Blue West Medical Training College is pleased to announce that applications for the September 2026 intake are now open across all programmes — undergraduate, postgraduate, doctoral, diploma, and our pioneering new courses. Prospective students can apply via the online admissions portal at bluew-g.web.app. In 2026, Blue West is offering 480 undergraduate places, 160 postgraduate and doctoral places, and 300 diploma programme spaces. Merit-based scholarships are available for students from rural Kenya and financially disadvantaged backgrounds. The deadline for early applications is 30 April 2026.',
 'announcement', '2026-03-01 08:00:00+03',
 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80&fit=crop'),

('New Partnership: Blue West and Coast General TRH Sign Clinical Training MoU', 'cogh-mou-2026',
 'Blue West Medical Training College and Coast General Teaching & Referral Hospital sign a landmark Memorandum of Understanding for clinical training and research.',
 'Blue West Medical Training College and Coast General Teaching & Referral Hospital (TRH) — Kenya''s third-largest tertiary hospital — have signed a landmark Memorandum of Understanding (MoU) establishing a formal clinical training and research partnership. Under the agreement, Blue West students will complete clinical rotations at Coast General TRH from Year 4 of undergraduate programmes, with access to specialist wards, theatre, ICU, and the hospital''s diagnostic systems. The partnership also covers joint research in tropical medicine, maternal health, and emergency care.',
 'announcement', '2026-07-01 08:00:00+03',
 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1200&q=80&fit=crop');


-- =============================================================================
-- STUDENT CLUBS
-- =============================================================================

INSERT INTO student_clubs (name, slug, category, description, contact_email, meeting_schedule, image_url) VALUES

('Blue West Medical Students Association (BWMSA)', 'bwmsa', 'Professional',
 'The primary student representative body for all medical students. Organises CME workshops, hospital tours, rural outreach camps, and advocacy for student welfare. BWMSA is affiliated with the Kenya Medical Students Association (KEMSA) and the International Federation of Medical Students Associations (IFMSA).',
 'bwmsa@bluewest.ac.ke', 'Every Wednesday 17:00–18:30, Main Lecture Theatre',
 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80&fit=crop'),

('Student Research Society', 'student-research-society', 'Academic',
 'For students interested in research methodology, publication, and innovation. Partners with our six research centres for student-led projects and conference presentations. Runs annual Blue West Student Research Conference — open to all years.',
 'research.society@bluewest.ac.ke', 'Every Tuesday 16:00–17:30, Research Block Room 201',
 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&q=80&fit=crop'),

('One Health Society', 'one-health-society', 'Academic',
 'Interdisciplinary club exploring the links between human, animal, and environmental health. Organises field visits, policy debates, and community education events in Kilifi County. Open to students from all programmes.',
 'onehealth@bluewest.ac.ke', 'Every Thursday 17:00–18:00, Environmental Science Block',
 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&q=80&fit=crop'),

('Arts & Culture Society', 'arts-culture-society', 'Cultural',
 'Celebrates the rich cultural diversity of our student body across 15+ Kenyan counties. Annual cultural festival, Swahili drama, traditional dance, and music performance. All students and staff welcome.',
 'arts.culture@bluewest.ac.ke', 'Every Friday 16:00–18:00, Student Centre Hall',
 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=600&q=80&fit=crop'),

('Blue West Athletics Club', 'bwac', 'Sports',
 'Competitive athletics across distance running, field events, swimming, football, netball, and volleyball. University Games and National University Sports Association competitions. Tryouts held in October each year.',
 'athletics@bluewest.ac.ke', 'Daily 05:30–07:00, Athletics Track',
 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&fit=crop'),

('Health Informatics & Tech Club', 'hitc', 'Innovation',
 'Builds apps, health dashboards, and AI tools for real-world health challenges. Runs hackathons and partners with Google Kenya and Safaricom''s m-Tiba health technology team. Experience with coding or data welcome but not required.',
 'hitc@bluewest.ac.ke', 'Every Saturday 10:00–13:00, AI Lab',
 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80&fit=crop'),

('Global Health Society', 'global-health-society', 'Professional',
 'Connects students with global health organisations, UN agencies, and international internship opportunities. Organises medical volunteer exchanges with partner universities in Germany, Netherlands, and the UK.',
 'globalhealth@bluewest.ac.ke', 'Every Monday 18:00–19:00, Seminar Room 3',
 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&q=80&fit=crop'),

('Community Outreach Club', 'community-outreach-club', 'Service',
 'Leads our rural health camps in Kilifi, Kwale, and Taita-Taveta — providing free screening, health education, and referrals to over 4,000 residents each academic year. One of Blue West''s largest and most active clubs.',
 'outreach@bluewest.ac.ke', 'Every Sunday 09:00–12:00 (local outreach) + planning meetings Thursday 17:00',
 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&fit=crop'),

('Muslim Medical Students Association (MMSA)', 'mmsa', 'Faith & Culture',
 'Supporting Muslim students through faith-based peer mentorship, Ramadan observance facilitation, and halal advocacy on campus. Open to all faiths for interfaith dialogue events.',
 'mmsa@bluewest.ac.ke', 'Fridays after Juma prayers, Prayer Room B',
 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&q=80&fit=crop'),

('Blue West Choir', 'bwest-choir', 'Cultural',
 'Award-winning choir performing at graduations, inter-university competitions, and community events. Members from all programmes — no audition required, just passion for music. Won the 2025 National University Choir Competition.',
 'choir@bluewest.ac.ke', 'Tuesday & Thursday 18:30–20:00, Music Room, Student Centre',
 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=600&q=80&fit=crop'),

('First Aid & Emergency Response Team (FERT)', 'fert', 'Skills',
 'Student-led first aid responders and training group. Provides first aid coverage at all campus events, trains students in BLS and ALS, and runs community first aid workshops in Malindi town.',
 'firstaid@bluewest.ac.ke', 'Every Wednesday 06:00–07:30, Clinical Skills Lab',
 NULL);
