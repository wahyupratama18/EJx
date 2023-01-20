import { ref } from 'vue'

const infos = [{
    name: 'Objective',
    contents: [
         'To contribute in the human resource development in the developing countries;',
         'To promote deeper cultural understanding between developing countries;',
         'To strengthen the relationship and cooperation between developing countries.',
         'Enhancing the research capacity of Indonesian higher education institutions in order to increase the number of world class universities in Indonesia.'
    ]
}, {
    name: 'Scholarship Coverage',
    contents: [
        'Settlement allowance;',
        'Living allowance;',
        'Book allowance;',
        'Research Allowance;',
        'Health insurance;',
        'A round-trip international airfare (economy class).',
    ]
}]

const flyers = [{
    text: 'Download Brochure',
    url: 'https://drive.google.com/file/d/1yCKCvh_s_GuxI7YFjSAOxCnAPJkXgfmr/view?usp=sharing'
}, {
    text: 'Download Guideline',
    url: 'https://drive.google.com/file/d/1ZI8AFnVK0154CDz2EJwFOpExC9iZmue9/view?usp=sharing'
}]

const faculties = [{
    name: 'Faculty of Economics (FE)',
    url: 'http://feb.um.ac.id/',
}, {
    name: 'Faculty of Letters (FS)',
    url: 'http://sastra.um.ac.id/en/',
}, {
    name: 'Faculty of Mathematics and Natural Sciences (FMIPA)',
    url: 'http://fmipa.um.ac.id/',
}, {
    name: 'Faculty of Engineering (FT)',
    url: 'http://ft.um.ac.id/en/',
}, {
    name: 'Faculty of Sports Science (FIK)',
    url: 'http://fik.um.ac.id/en/',
}, {
    name: 'Faculty of Social Sciences (FIS)',
    url: 'http://fis.um.ac.id/',
}, {
    name: 'Faculty of Education (FIP)',
    url: 'http://fip.um.ac.id/',
}, {
    name: 'Faculty of Psychology (FPSi)',
    url: 'http://fpsi.um.ac.id/',
}, {
    name: 'Interdisciplinary Postgraduate Program',
    url: 'http://pasca.um.ac.id/en/s3-pendidikan-dasar/',
}]

const programs = [{
    name: 'Bachelor',
    eligibilities: [
        'Be a citizen of a developing country;',
        'Be in good health;',
        'Maximum age is 25 years old;',
        'Have graduated from High School;',
        'Have a good command of English and/or Indonesian;',
        'Have a recommendation from an Indonesian Embassy in your (nearest) country.',
    ],
    notes: [
        'The type and the maximum size of the documents are pdf, 5 Mb.',
        'The language proficiency certificate must be obtained within the last 2 years.',
        'All the required documents must be in English.',
        'Bachelor degree holder is not eligible to apply for the bachelor degree scholarship.',
        'Not registered as a student in one of the universities in Indonesia.',
    ],
    documents: [
        'A Scan Copy of Passport ID Page/Citizenship ID;',
        'A Scan Copy of Academic/Degree Sertificate(s) (High School);',
        'A Scan Copy of Academic Transcript(s) (High School);',
        'A Letter of Recommendation from an Indonesian Embassy/Consulate General of Indonesia;',
        'A Letter of Recommendation from the Employer/Immediate Supervisor',
        'A Letter of Academic Recommendation from previous schools;',
        'A Certificate of English Proficiency Test (IBT TOEFL of 80 / IELTS of 6.0 / TOEIC of 700).',
    ],
    faculties: [{
        faculty_id: 0,
        opened: ref(true),
        programs: [
            'Development Economics',
            'Development Economics Education',
            'Accounting',
            'Accounting Education',
            'Management',
            'Office Administration Education',
            'Economics Education',
            'Distributive and Marketing Education',
            'Education Administration',
        ]
    }, {
        faculty_id: 1,
        opened: ref(true),
        programs: [
            'Indonesian Language and Literature',
            'Indonesian and Local Language and Literature',
            'English Language Education',
            'English Language and Literature',
            'German Language Education',
            'Mandarin Language Education',
            'Arabic Language Education',
            'Visual Communication Design',
            'Fine Arts Education',
            'Librarianship',
            'Dancing and Music Education',
        ]
    }, {
        faculty_id: 2,
        opened: ref(true),
        programs: [
            'Biology',
            'Physics',
            'Chemistry Education',
            'Chemistry',
            'Mathematics Education',
            'Mathematics',
            'Biology Education',
            'Physics Education',
            'Science Education',
            'Biotechnology',
        ]
    }, {
        faculty_id: 3,
        opened: ref(true),
        programs: [
            'Mechanical Engineering Vocational',
            'Mechanical Engineering',
            'Automotive Engineering Education',
            'Civil Engineering Education',
            'Civil Engineering',
            'Informatics Education',
            'Informatics',
            'Industrial Engineering',
            'Electrical Engineering Education',
            'Electrical Engineering',
            'Cookery Education',
            'Apparel Design Education',
        ]
    }],
    application: {
        documents: [
            'A Scan Copy of Passport ID Page/Citizenship ID;',
            'A Scan Copy of Academic/Degree Certificate(s);',
            'A Scan Copy of Academic Transcript(s);',
            'A Letter of Recommendation from an Indonesian Embassy/Consulate General of Indonesia;',
            'A Letter of Recommendation from the Employer/Immediate Supervisor',
            'A Letter of Academic Recommendation from previous schools;',
            'A Certificate of English Proficiency Test (IBT TOEFL of 80 / IELTS of 6.0 / TOEIC of 700).',
        ],
        notes: [
            'The type and the maximum size of the documents are .pdf, 5 Mb.',
            'All the required documents must be in English.',
        ],
        steps: [{
            name: 'Request for a Letter of Recommendation.',
            details: [
                'Download the Invitation Letter on the KNB Scholarship Official website: <a href="https://knb.kemdikbud.go.id/" target="_blank">Click here.</a>',
                'Submit the offer letter by attaching <b>a scanned copy of passport, academic certificate(s), and academic transcript(s)</b> to the Indonesian Representative (The Embassy of The Republic of Indonesia or Consulate General of the Republic of Indonesia) in the relevant country to obtain a Letter of Recommendation from the Indonesian Representative as the main requirement to continue the registration process.',
            ]
        }, {
            name: 'KNB Online Application.',
            details: [
                'Visit <b>the official website of KNB Scholarship:</b> <a href="https://knb.kemdikbud.go.id/" target="_blank">Click here.</a>',
                'Create an account and register on the KNB Scholarship website by clicking <b>\'Apply Now\'</b> and fill in your email address. Check your email and click on the confirmation link sent by KNB to activate your account.',
                'Fill in your application by clicking the <b>‘Create Application’.</b> The required information contains different sections (personal information, academic information, university and study program, statement, and submit data).',
                'Upload a scan copy of Passport ID Page/Citizenship ID and your photo in the personal information section.',
                'For the Academic Information section, please upload your documents (Indonesian Embassy / Consulate General Recommendation, The Employer / Immediate Supervisor Recommendation, Academic Recommendation, Academic Transcript, Academic Certificate) in the place provided.',
                'For the University and Study Program section, choose your 2 preferred universities and study program offered by KNB.',
                'In the last section, read the personal statement carefully and fill in the medical condition based on your actual circumstances.',
                'After you have successfully provided all the information and required documents, click <b>‘Submit’.</b>',
            ]
        }, {
            name: 'Selection and Final Result.',
            details: [
                '<b>Selection process:</b> administrative and online interview.',
                'Final Announcement will be announced no later than the 2nd week of June 2023 and available online on the KNB Scholarship Official website: <a href="https://knb.kemdikbud.go.id/" target="_blank">Click here.</a> and through the Indonesian Representative publication network.',
                'After receiving the selection results, candidates who receive the KNB Scholarship are required to submit a Statement of Receiving KNB Scholarship, Letter of Agreement KNB Scholarship, scanned passport biodata page, and Confirmation Willingness to come to Indonesia, on July 2023, through the Indonesian Representative in the country concerned.',
            ]
        }]
    }
}, {
    name: 'Master',
    eligibilities: [
        'Be a citizen of a developing country;',
        'Be in good health;',
        'Maximum age is 35 years old;',
        'Hold a bachelor’s degree with a minimum grade point average (GPA) of 3.25 out of 4.00;',
        'Have a good command of English and/or Indonesian;',
        'Have a recommendation from an Indonesian Embassy in your (nearest) country.',
    ],
    notes: [
        'The type and the maximum size of the documents are pdf, 5 Mb.',
        'The language proficiency certificate must be obtained within the last 2 years.',
        'All the required documents must be in English.',
        'Master degree holder is not eligible to apply for the master degree scholarship.',
        'Not registered as a student in one of the universities in Indonesia.',
    ],
    documents: [
        'A Scan Copy of Passport ID Page/Citizenship ID;',
        'A Scan Copy of Academic/Degree Certificate(s) (S1);',
        'A Scan Copy of Academic Transcript(s) (S1);',
        'A Letter of Recommendation from an Indonesian Embassy/Consulate General of Indonesia;',
        'A Letter of Recommendation from the Employer/Immediate Supervisor',
        'A Letter of Academic Recommendation from previous schools;',
        'A Certificate of English Proficiency Test (IBT TOEFL of 80 / IELTS of 6.0 / TOEIC of 700).',
    ],
    faculties: [{
        faculty_id: 0,
        opened: ref(true),
        programs: [
            'Development Economics',
            'Development Economics Education',
            'Accounting',
            'Accounting Education',
            'Management',
            'Office Administration Education',
            'Economics Education',
            'Distributive and Marketing Education',
            'Education Administration',
        ]
    }, {
        faculty_id: 1,
        opened: ref(true),
        programs: [
            'Indonesian Language and Literature',
            'Indonesian and Local Language and Literature',
            'English Language Education',
            'English Language and Literature',
            'German Language Education',
            'Mandarin Language Education',
            'Arabic Language Education',
            'Visual Communication Design',
            'Fine Arts Education',
            'Librarianship',
            'Dancing and Music Education',
        ]
    }, {
        faculty_id: 2,
        opened: ref(true),
        programs: [
            'Biology',
            'Physics',
            'Chemistry Education',
            'Chemistry',
            'Mathematics Education',
            'Mathematics',
            'Biology Education',
            'Physics Education',
            'Science Education',
            'Biotechnology',
        ]
    }, {
        faculty_id: 3,
        opened: ref(true),
        programs: [
            'Mechanical Engineering Vocational',
            'Mechanical Engineering',
            'Automotive Engineering Education',
            'Civil Engineering Education',
            'Civil Engineering',
            'Informatics Education',
            'Informatics',
            'Industrial Engineering',
            'Electrical Engineering Education',
            'Electrical Engineering',
            'Cookery Education',
            'Apparel Design Education',
        ]
    }],
    application: {
        documents: [
            'A Scan Copy of Passport ID Page/Citizenship ID;',
            'A Scan Copy of Academic/Degree Certificate(s);',
            'A Scan Copy of Academic Transcript(s);',
            'A Letter of Recommendation from an Indonesian Embassy/Consulate General of Indonesia;',
            'A Letter of Recommendation from the Employer/Immediate Supervisor',
            'A Letter of Academic Recommendation from previous schools;',
            'A Certificate of English Proficiency Test (IBT TOEFL of 80 / IELTS of 6.0 / TOEIC of 700).',
        ],
        notes: [
            'The type and the maximum size of the documents are .pdf, 5 Mb.',
            'All the required documents must be in English.',
        ],
        steps: [{
            name: 'Request for a Letter of Recommendation.',
            details: [
                'Download the Invitation Letter on the KNB Scholarship Official website: <a href="https://knb.kemdikbud.go.id/" target="_blank">Click here.</a>',
                'Submit the offer letter by attaching <b>a scanned copy of passport, academic certificate(s), and academic transcript(s)</b> to the Indonesian Representative (The Embassy of The Republic of Indonesia or Consulate General of the Republic of Indonesia) in the relevant country to obtain a Letter of Recommendation from the Indonesian Representative as the main requirement to continue the registration process.',
            ]
        }, {
            name: 'KNB Online Application.',
            details: [
                'Visit <b>the official website of KNB Scholarship:</b> <a href="https://knb.kemdikbud.go.id/" target="_blank">Click here.</a>',
                'Create an account and register on the KNB Scholarship website by clicking <b>\'Apply Now\'</b> and fill in your email address. Check your email and click on the confirmation link sent by KNB to activate your account.',
                'Fill in your application by clicking the <b>‘Create Application’.</b> The required information contains different sections (personal information, academic information, university and study program, statement, and submit data).',
                'Upload a scan copy of Passport ID Page/Citizenship ID and your photo in the personal information section.',
                'For the Academic Information section, please upload your documents (Indonesian Embassy / Consulate General Recommendation, The Employer / Immediate Supervisor Recommendation, Academic Recommendation, Academic Transcript, Academic Certificate) in the place provided.',
                'For the University and Study Program section, choose your 2 preferred universities and study program offered by KNB.',
                'In the last section, read the personal statement carefully and fill in the medical condition based on your actual circumstances.',
                'After you have successfully provided all the information and required documents, click <b>‘Submit’.</b>',
            ]
        }, {
            name: 'Selection and Final Result.',
            details: [
                '<b>Selection process:</b> administrative and online interview.',
                'Final Announcement will be announced no later than the 2nd week of June 2023 and available online on the KNB Scholarship Official website: <a href="https://knb.kemdikbud.go.id/" target="_blank">Click here.</a> and through the Indonesian Representative publication network.',
                'After receiving the selection results, candidates who receive the KNB Scholarship are required to submit a Statement of Receiving KNB Scholarship, Letter of Agreement KNB Scholarship, scanned passport biodata page, and Confirmation Willingness to come to Indonesia, on July 2023, through the Indonesian Representative in the country concerned.',
            ]
        }]
    }
}, {
    name: 'Doctoral',
    eligibilities: [
        'Be a citizen of a developing country;',
        'Be in good health;',
        'Maximum age is 40 years old;',
        'Hold a master’s degree with a minimum grade point average (GPA) of 3.00 out of 4.00;',
        'Have a good command of English and/or Indonesian;',
        'Have a recommendation from an Indonesian Embassy in your (nearest) country;',
        'Have a recommendation from the prospective supervisor from UM.',
    ],
    notes: [
        'The type and the maximum size of the documents are pdf, 5 Mb.',
        'The language proficiency certificate must be obtained within the last 2 years.',
        'All the required documents must be in English.',
        'Doctorate degree holder is not eligible to apply for the doctorate degree scholarship.',
        'Not registered as a student in one of the universities in Indonesia.',
    ],
    documents: [
        'A Scan Copy of Passport ID Page/Citizenship ID;',
        'A Scan Copy of Academic/Degree Certificate(s) (S1 & S2);',
        'A Scan Copy of Academic Transcript(s) (S1 & S2);',
        'A Letter of Recommendation from an Indonesian Embassy/Consulate General of Indonesia;',
        'A Letter of Recommendation from the Employer/Immediate Supervisor',
        'A Letter of Academic Recommendation from previous schools;',
        'A Certificate of English Proficiency Test (IBT TOEFL of 90 / IELTS of 7.0 / equivalent);',
        'A Letter of Recommendation from a Prospective Supervisor at UM;',
        'A Statement of Purpose.',
    ],
    faculties: [{
        faculty_id: 6,
        opened: ref(true),
        programs: [
            'Learning Technology',
            'Guidance and Counseling',
            'Educational Management',
            'Non-Formal Education',
        ]
    }, {
        faculty_id: 5,
        opened: ref(true),
        programs: [
            'Geography Education',
        ]
    }, {
        faculty_id: 3,
        opened: ref(true),
        programs: [
            'Vocational Education',
        ]
    }, {
        faculty_id: 1,
        opened: ref(true),
        programs: [
            'Indonesian Language Education',
            'English Language Education',
        ]
    }],
    application: {
        documents: [
            'A Scan Copy of Passport ID Page/Citizenship ID;',
            'A Scan Copy of Academic/Degree Certificate(s) (S1 & S2);',
            'A Scan Copy of Academic Transcript(s) (S1 & S2);',
            'A Letter of Recommendation from an Indonesian Embassy/Consulate General of Indonesia;',
            'A Letter of Recommendation from the Employer/Immediate Supervisor',
            'A Letter of Academic Recommendation from previous schools;',
            'A Certificate of English Proficiency Test (IBT TOEFL of 80 / IELTS of 6.0 / TOEIC of 700).',
            'A Letter of Recommendation from a Prospective Supervisor at UM;',
            'A Statement of Purpose.',
        ],
        notes: [
            'The type and the maximum size of the documents are .pdf, 5 Mb.',
            'All the required documents must be in English.',
            'Attach points 6, 8, and 9 into one pdf document and upload it in KNB portal, \'academic recommendation\' section 2.',
        ],
        steps: [{
            name: 'Request for a Letter of Recommendation.',
            details: [
                'Download the Invitation Letter on the KNB Scholarship Official website: <a href="https://knb.kemdikbud.go.id/" target="_blank">Click here.</a>',
                'Submit the offer letter by attaching <b>a scanned copy of passport, academic certificate(s), and academic transcript(s)</b> to the Indonesian Representative (The Embassy of The Republic of Indonesia or Consulate General of the Republic of Indonesia) in the relevant country to obtain a Letter of Recommendation from the Indonesian Representative as the main requirement to continue the registration process.',
                '<b>Contact your potential supervisor at Universitas Negeri Malang</b> and ask for a Letter of recommendation from a Prospective Supervisor.'
            ]
        }, {
            name: 'KNB Online Application.',
            details: [
                'Visit <b>the official website of KNB Scholarship:</b> <a href="https://knb.kemdikbud.go.id/" target="_blank">Click here.</a>',
                'Create an account and register on the KNB Scholarship website by clicking <b>\'Apply Now\'</b> and fill in your email address. Check your email and click on the confirmation link sent by KNB to activate your account.',
                'Fill in your application by clicking the <b>‘Create Application’.</b> The required information contains different sections (personal information, academic information, university and study program, statement, and submit data).',
                'Upload a scan copy of Passport ID Page/Citizenship ID and your photo in the personal information section.',
                `For the Academic Information section, please upload your documents (Indonesian Embassy / Consulate General Recommendation, The Employer / Immediate Supervisor Recommendation, Academic Recommendation, Academic Transcript, Academic Certificate) in the place provided.
                <br><b>Note:</b><br>
                Attach Letter of Academic Recommendation from previous schools, Letter of Recommendation from a Prospective Supervisor at UM, and Statement of Purpose into one pdf document and upload it in the 'academic recommendation'.
                `,
                'For the University and Study Program section, choose your 2 preferred universities and study program offered by KNB.',
                'In the last section, read the personal statement carefully and fill in the medical condition based on your actual circumstances.',
                'After you have successfully provided all the information and required documents, click <b>‘Submit’.</b>',
            ]
        }, {
            name: 'Selection and Final Result.',
            details: [
                '<b>Selection process:</b> administrative and online interview.',
                'Final Announcement will be announced no later than the 2nd week of June 2023 and available online on the KNB Scholarship Official website: <a href="https://knb.kemdikbud.go.id/" target="_blank">Click here.</a> and through the Indonesian Representative publication network.',
                'After receiving the selection results, candidates who receive the KNB Scholarship are required to submit a Statement of Receiving KNB Scholarship, Letter of Agreement KNB Scholarship, scanned passport biodata page, and Confirmation Willingness to come to Indonesia, on July 2023, through the Indonesian Representative in the country concerned.',
            ]
        }]
    }
}].map(program => {
    program.faculties = program.faculties.map(faculty => {
        faculty.faculty = faculties[faculty.faculty_id]

        return faculty
    })

    return program
})

const howTos = [
    'Download the Invitation Letter from the KNB Scholarship website.',
    'Submit the Invitation letter, a scanned copy of Passport, Academic Certificates and Academic Transcripts to the Indonesian Embassy or Indonesian Consulate to acquire the recommendation letter.',
    'Complete the online application process.',
    'Selection process.',
    'The Selection Results will be broadcasted online through the KNB Scholarship Website and officially announced through the Indonesian Embassy publication network.',
]

const testimonials = [
    'testimonials/1.png',
    'testimonials/2.png',
    'testimonials/3.png',
]

const galleries = [
    'gallery/42.jpg',
    'gallery/51.jpg',
    'gallery/50.jpg',
    'gallery/21.jpg',
    'gallery/31.jpg',
    'gallery/14.jpg',

    'gallery/1.jpg',
    'gallery/2.jpg',
    'gallery/3.jpg',
    'gallery/69.jpg',
    'gallery/70.jpg',
    'gallery/6.jpg',
    'gallery/7.jpg',
    'gallery/8.jpg',
    'gallery/9.jpg',
    'gallery/10.jpg',
    'gallery/11.jpg',
    'gallery/12.jpg',
    'gallery/13.jpg',
    'gallery/15.jpg',
    'gallery/16.jpg',
    'gallery/17.jpg',
    'gallery/18.jpg',
    'gallery/19.jpg',
    'gallery/20.jpg',
    'gallery/22.jpg',
    'gallery/23.jpg',
    'gallery/24.jpg',
    'gallery/25.jpg',
    'gallery/26.jpg',
    'gallery/27.jpg',
    'gallery/28.jpg',
    'gallery/29.jpg',
    'gallery/30.jpg',
    'gallery/32.jpg',
    'gallery/33.jpg',
    'gallery/34.jpg',
    'gallery/35.jpg',
    'gallery/36.jpg',
    'gallery/37.jpg',
    'gallery/38.jpg',
    'gallery/39.jpg',
    'gallery/40.jpg',
    'gallery/41.jpg',
    'gallery/43.jpg',
    'gallery/44.jpg',
    'gallery/45.jpg',
    'gallery/46.jpg',
    'gallery/47.jpg',
    'gallery/48.jpg',
    'gallery/49.jpg',
    'gallery/52.jpg',
    'gallery/53.jpg',
    'gallery/54.jpg',
    'gallery/55.jpg',
    'gallery/56.jpg',
    'gallery/57.jpg',
    'gallery/58.jpg',
    'gallery/59.jpg',
    'gallery/60.jpg',
    'gallery/61.jpg',
    'gallery/62.jpg',
    'gallery/63.jpg',
    'gallery/64.jpg',
    'gallery/65.jpg',
    'gallery/66.jpg',
    'gallery/67.jpg',
    'gallery/68.jpg',
    'gallery/4.jpg',
    'gallery/5.jpg',
]

export { infos, flyers, faculties, programs, howTos, testimonials, galleries }