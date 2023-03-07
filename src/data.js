import { ref } from 'vue'
import collect from 'collect.js';

const universities = [{
    name: 'Universitas Negeri Malang',
    url: 'https://um.ac.id',
    logo: 'universities/um.png',
    image: 'universities/show-um.jpg',
}, {
    name: 'Universitas Brawijaya',
    url: 'https://ub.ac.id',
    logo: 'universities/ub.png',
    image: 'universities/show-ub.jpg',
}, {
    name: 'Institut Teknologi Sepuluh Nopember',
    url: 'https://its.ac.id',
    logo: 'universities/its.png',
    image: 'universities/show-its.jpg',
}, {
    name: 'Universitas Airlangga',
    url: 'https://unair.ac.id',
    logo: 'universities/unair.png',
    image: 'universities/show-unair.jpg',
}, {
    name: 'UPN Veteran Jawa Timur',
    url: 'https://upnjatim.ac.id',
    logo: 'universities/upn.png',
    image: 'universities/show-upn.jpg',
}, {
    name: 'Universitas Negeri Surabaya',
    url: 'https://unesa.ac.id',
    logo: 'universities/unesa.png',
    image: 'universities/show-unesa.jpg',
}, {
    name: 'Universitas Trunojoyo',
    url: 'https://utm.ac.id',
    logo: 'universities/utm.png',
    image: 'universities/show-utm.jpg',
}, {
    name: 'UIN Sunan Ampel Surabaya',
    url: 'https://uinsby.ac.id',
    logo: 'universities/uinsa.png',
    image: 'universities/show-uinsa.jpg',
}, {
    name: 'Universitas Jember',
    url: 'https://unej.ac.id',
    logo: 'universities/unej.png',
    image: 'universities/show-unej.jpg',
}, {
    name: 'Universitas Islam Negeri Maulana Malik Ibrahim',
    url: 'https://uin-malang.ac.id',
    logo: 'universities/uin-maliki.png',
    image: 'universities/show-uin-maliki.jpg',
}]

const programs = [{
    title: 'Credit Earning Program',
    description: 'Participants who apply to the credit earning program will get a transcript and a certificate of completion. Credit earning program participants are required to complete a final paper and group presentation.',
}, {
    title: 'Non-Credit Program',
    description: 'Participants who do not apply for the credit program will just receive a certificate of completion based on the minimum entry requirements of the program. Non credit earning program participants are required to complete a final group presentation.',
}, {
    title: 'Grouping',
    contents: [
        'Upon registering, participants will be able to choose three out of nine materials that interest them;',
        'Those choices will be used to divide participants into 10 groups, which will determine their final projects;',
        'One group consists of 4-5 individuals, of which one of them is a student from the respective university;',
        // 'Every participant must join a class in Google Classroom that will be provided by the committees.',
    ]
}, {
    title: 'Lectures',
    contents: [
        'Every participant needs to take part in at least 80% of the lectures in order to obtain a certificate;',
        // 'All information regarding the lectures (e.g., reminder, zoom link, summary form) will be posted in Google Classroom;',
        'Each lecture will last for 120 minutes;',
        'After every lecture, participants need to fill a summary form that must be submitted before the deadline approaches.',
    ]
}, {
    title: 'Final Project',
    contents: [
        'Each group is required to do a presentation based on the material allocated to them on the last day;',
        'The presentation will run at the maximum time of 7 minutes;',
        'For those who take a credit earning programme, there will be one additional project in the form of a final paper concerning one of the nine materials presented in the lectures;',
        'The participants who fulfilled all of the terms and conditions will receive a report card.',
    ]
}]

const topics = [{
    title: 'Smart City',
    synopsis: 'A city is expected to be an urban area that creates sustainable economic development and high quality of life. A Smart City is a city that manages such development by excelling in multiple key sectors. Smart City has become a major issue in today’s city development in the world. Smart City consists of 6 main pillars, namely Smart Economy, Smart Environment, Smart People, Smart Living, and Smart Government. All these pillars can be achieved through strong human capital, social capital, and ICT infrastructure. This course introduces participants to the concept of smart city and how Surabaya evolves towards a smart city. Many aspects of Smart City including e-government services and one stop public services (Smart Government), Surabaya Intelligent Transport System (SITS – Smart Mobility), 112 Command Centre (Smart Living), Broadband Learning Centre (BLC) and community-based-library (Smart People), and community-based waste treatment (Smart Environment) will be discussed through an interactive teaching method and site visit.',
    coordinator: 'Assoc. Prof. Maria Anityasari',
    university_id: 2,
    opened: ref(true),
}, {
    title: 'Creativity of Indonesian Students in Welcoming the New Normal Era',
    synopsis: 'The conditions of the COVID-19 pandemic have various impacts on people in various sectors of life. Therefore, everyone must play an active role in overcoming it according to their profession. Indonesian students especially at UPNVJT during WFH (Work From Home) are directed to practice their knowledge according to their expertise, in this case the three study programs will share their respective knowledge, from the field of Agriculture, will share knowledge about how to grow purple sweet potatoes. After being researched, it turns out that this plant contains various kinds of vitamins as intake that can increase endurance; The Chemical Engineering Department will show you how to make an effective, inexpensive, and easy hand sanitizer. The Department of Communication Science will convey how to express to the public about Health Protocols that are effective, interesting, and obeyed. .',
    coordinator: '<b>TBD</b>',
    university_id: 4,
    opened: ref(true),
}].map(topic => {
    topic.university = universities[topic.university_id]
    return topic
})

const schedules = [{
    date: '20 June 2023',
    time: '08:30 - 10:30 (GMT+7)',
    title: 'Opening Ceremony',
    description: 'Welcoming Ceremony, Overview of General Program',
    icon: 'icon.png',
    details: [{
        time: '08:00',
        block: 6,
        span: 6,
        date: '08:30 - 09:30',
        agenda: 'Arriving at ITS & Registration'
    }, {
        time: '09:00',
        block: 0,
        span: 18,
        date: '09:00 - 10:30',
        agenda: 'Opening of EJx'
    }]
}, {
    date: '20 June 2023',
    time: '10:30 - 20:00 (GMT+7)',
    title: 'Smart City',
    university_id: 2,
    opened: ref(true),
    lectures: [
        'Smart City'
    ],
    details: [{
        time: '10:00',
        block: 6,
        span: 24,
        date: '10:30 - 12:30',
        agenda: 'Smart City<br><small class="text-sm">Progress and Challenges of Surabaya\' Endeavours toward Smart City</small>'
    }, {
        time: '12:00',
        block: 6,
        span: 12,
        date: '12:30 - 13:30',
        agenda: 'Lunch Break'
    }, {
        time: '13:00',
        block: 6,
        span: 63,
        date: '13:30 - 18:45',
        agenda: 'Trip to SIOLA - Public Service Center of Surabaya City Government'
    }, {
        time: '18:00',
        block: 9,
        span: 15,
        date: '18:45 - 20:00',
        agenda: 'Exploring Alun-Alun of Surabaya City & Ice Cream Time'
    }]
}, {
    date: '21 June 2023',
    time: '08:30 - 18:30 (GMT+7)',
    title: 'Biotechnology Startup',
    university_id: 3,
    opened: ref(true),
    lectures: [
        'Biotechnology Startup in Indonesia: Opportunities and Challenges',
        'Case Study of a Biotechnology Startup in Indonesia: Lessons Learned from Spiralife'
    ],
    details: [{
        time: '08:00',
        block: 0,
        span: 6,
        date: '08:00 - 08:30',
        agenda: 'Heading to the B campus UNAIR'
    }, {
        time: '08:00',
        block: 6,
        span: 12,
        date: '08:30 - 09:30',
        agenda: 'Biotechnology Startup in Indonesia: Opportunities and Challenges'
    }, {
        time: '09:00',
        block: 6,
        span: 6,
        date: '09:30 - 10:00',
        agenda: 'Discussion and QnA'
    }, {
        time: '10:00',
        block: 0,
        span: 12,
        date: '10:00 - 11:00',
        agenda: 'Case Study of a Biotechnology Startup in Indonesia: Lessons Learned from Spiralife'
    }, {
        time: '11:00',
        block: 0,
        span: 6,
        date: '11:00 - 11:30',
        agenda: 'Discussion and QnA'
    }, {
        time: '11:00',
        block: 6,
        span: 12,
        date: '11:30 - 12:30',
        agenda: 'Lunch Break'
    }, {
        time: '12:00',
        block: 6,
        span: 12,
        date: '12:30 - 13:30',
        agenda: 'Heading to PT. Petrokimia Gresik'
    }, {
        time: '13:00',
        block: 6,
        span: 24,
        date: '13:30 - 15:30',
        agenda: 'Excursion Activity at PT. Petrokimia Gresik'
    }, {
        time: '16:00',
        block: 0,
        span: 12,
        date: '16:00 - 17:00',
        agenda: 'Shopping for Gresik Souvenirs'
    }, {
        time: '17:00',
        block: 0,
        span: 12,
        date: '17:00 - 18:00',
        agenda: 'Heading back to Surabaya'
    }]
}, {
    date: '22 June 2023',
    time: '08:00 - 18:00 (GMT+7)',
    title: 'Surabaya, The Multicultural City',
    university_id: 4,
    opened: ref(true),
    lectures: [
        'East Javanese Culture and Languages'
    ],
    details: [{
        time: '07:00',
        block: 0,
        span: 12,
        date: '07:00 - 08:00',
        agenda: 'Heading to UPN'
    }, {
        time: '08:00',
        block: 0,
        span: 6,
        date: '08:00 - 08:30',
        agenda: 'Registration'
    }, {
        time: '08:00',
        block: 6,
        span: 6,
        date: '08:30 - 09:00',
        agenda: 'Opening Remarks'
    }, {
        time: '09:00',
        block: 0,
        span: 12,
        date: '09:00 - 10:00',
        agenda: 'East Javanese Culture and Languages'
    }, {
        time: '10:00',
        block: 0,
        span: 3,
        date: '10:00 - 10:15',
        agenda: 'QnA'
    }, {
        time: '10:00',
        block: 3,
        span: 3,
        date: '10:15 - 10:30',
        agenda: 'Quiz'
    }, {
        time: '10:00',
        block: 6,
        span: 6,
        date: '10:30 - 11:00',
        agenda: 'Art Performance'
    }, {
        time: '11:00',
        block: 0,
        span: 6,
        date: '11:00 - 11:30',
        agenda: 'Closing Ceremony'
    }, {
        time: '11:00',
        block: 6,
        span: 12,
        date: '11:30 - 12:30',
        agenda: 'Lunch Break'
    }, {
        time: '12:00',
        block: 6,
        span: 24,
        date: '12:30 - 14:30',
        agenda: 'Historical Visit to Sanggar Agung Temple Kenjeran'
    }, {
        time: '14:00',
        block: 6,
        span: 24,
        date: '14:30 - 16:30',
        agenda: 'Historical Visit to Kawasan Wisata Religi Sunan Ampel'
    }, {
        time: '16:00',
        block: 6,
        span: 12,
        date: '16:30 - 17:30',
        agenda: 'Return to the hotel'
    }]
}, {
    date: '23 June 2023',
    time: '09:00 - 18:00 (GMT+7)',
    title: 'The Dynamic Life of Pesantren: Indigenous Islamic Education of Indonesia',
    university_id: 7,
    opened: ref(true),
    lectures: [
        'The dynamic life of Pesantren: Indigenous Islamic education of Indonesia ',
        'Cultural activities: Learning Rebana',
        'Education system, type and activities in Pesantren',
        'Cultural activities: Traditional costume in Pesantren'
    ],
    details: [{
        time: '09:00',
        block: 0,
        span: 6,
        date: '09:00 - 09:30',
        agenda: 'Opening Ceremony'
    }, {
        time: '09:00',
        block: 6,
        span: 2,
        date: '09:30 - 09:40',
        agenda: 'Brief Overview'
    }, {
        time: '09:00',
        block: 8,
        span: 12,
        date: '09:40 - 10:40',
        agenda: 'The dynamic life of Pesantren: Indigenous Islamic education of Indonesia'
    }, {
        time: '10:00',
        block: 8,
        span: 4,
        date: '10:40 - 11:00',
        agenda: 'Coffee Break'
    }, {
        time: '11:00',
        block: 0,
        span: 18,
        date: '11:00 - 12:30',
        agenda: 'Cultural activities – Learning <i>Rebana</i> <small>(Islamic traditional musical instrument)</small>'
    }, {
        time: '12:00',
        block: 6,
        span: 12,
        date: '12:30 - 13:30',
        agenda: 'Lunch Break'
    }, {
        time: '13:00',
        block: 6,
        span: 12,
        date: '13:30 - 14:30',
        agenda: 'Education system, type and activities in Pesantren'
    }, {
        time: '14:00',
        block: 6,
        span: 6,
        date: '14:30 - 15:00',
        agenda: 'Cultural activities: traditional costume in Pesantren'
    }, {
        time: '15:00',
        block: 0,
        span: 24,
        date: '15:00 - 17:00',
        agenda: 'Field trip to Pesantren in Surabaya'
    }, {
        time: '17:00',
        block: 0,
        span: 12,
        date: '17:00 - 18:00',
        agenda: 'Back to Hotel'
    }]
}, {
    date: '24 - 25 June 2023',
    time: 'N/A',
    title: 'Personal Exploration',
    icon: 'icon.png',
}, {
    date: '26 June 2023',
    time: '08:00 - 15:00 (GMT+7)',
    title: 'Mangrove Conservation',
    university_id: 6,
    opened: ref(true),
    lectures: [
        'Mangrove Conservation',
        'Mangrove Planting at Taman Pendidikan Mangrove Labuhan'
    ],
    details: [{
        time: '08:00',
        block: 0,
        span: 3,
        date: '08:00 - 08:15',
        agenda: 'Check in'
    }, {
        time: '08:00',
        block: 3,
        span: 3,
        date: '08:15 - 08:30',
        agenda: 'Welcome Party'
    }, {
        time: '08:00',
        block: 6,
        span: 3,
        date: '08:30 - 08:45',
        agenda: 'Welcome Dance'
    }, {
        time: '08:00',
        block: 9,
        span: 3,
        date: '08:45 - 09:00',
        agenda: 'Enjoying Madurese Snacks'
    }, {
        time: '09:00',
        block: 0,
        span: 18,
        date: '09:00 - 10:30',
        agenda: 'Mangrove Conservation'
    }, {
        time: '10:00',
        block: 6,
        span: 15,
        date: '10:30 - 11:45',
        agenda: 'Heading to TPM Labuhan'
    }, {
        time: '11:00',
        block: 9,
        span: 3,
        date: '11:45 - 12:00',
        agenda: 'Brief Overview from TPM Labuhan\'s Management'
    }, {
        time: '12:00',
        block: 0,
        span: 12,
        date: '12:00 - 13:00',
        agenda: 'Lunch Break'
    }, {
        time: '13:00',
        block: 0,
        span: 12,
        date: '13:00 - 14:00',
        agenda: 'Mangrove Planting'
    }, {
        time: '14:00',
        block: 0,
        span: 12,
        date: '14:00 - 15:00',
        agenda: 'Heading back to UTM'
    }]
}, {
    date: '28 June 2023',
    time: '07:00 - 18:00 (GMT+7)',
    title: 'Institutional Arrangement of Tobacco for Community Welfare and Tobacco for Health',
    university_id: 8,
    opened: ref(true),
    lectures: [
        'Agroindustry of Tobacco: from Lab to Industry',
        'Culture immersion: The local culture of Jember, Pandalungan'
    ],
    details: [{
        time: '07:00',
        block: 0,
        span: 6,
        date: '07:00 - 07:30',
        agenda: 'Heading to UNEJ'
    }, {
        time: '07:00',
        block: 6,
        span: 6,
        date: '07:30 - 08:00',
        agenda: 'Registration'
    }, {
        time: '08:00',
        block: 0,
        span: 6,
        date: '08:00 - 08:30',
        agenda: 'Opening Remarks'
    }, {
        time: '08:00',
        block: 6,
        span: 6,
        date: '08:30 - 09:00',
        agenda: 'Pre-test'
    }, {
        time: '09:00',
        block: 0,
        span: 12,
        date: '09:00 - 10:00',
        agenda: 'Agroindustry of Tobacco: from Lab to Industry'
    }, {
        time: '11:00',
        block: 0,
        span: 12,
        date: '11:00 - 12:00',
        agenda: 'Case-study & discussion'
    }, {
        time: '12:00',
        block: 0,
        span: 12,
        date: '12:00 - 13:00',
        agenda: 'Lunch Break'
    }, {
        time: '13:00',
        block: 0,
        span: 12,
        date: '13:00 - 14:00',
        agenda: 'The local culture of Jember, Pandalungan'
    }, {
        time: '14:00',
        block: 0,
        span: 6,
        date: '14:00 - 14:30',
        agenda: 'Closing Ceremony'
    }, {
        time: '14:00',
        block: 6,
        span: 18,
        date: '14:30 - 16:00',
        agenda: 'Tobacco Museum Visit'
    }, {
        time: '16:00',
        block: 0,
        span: 18,
        date: '16:00 - 17:30',
        agenda: 'Pandalungan’ Tobacco farmers'
    }, {
        time: '17:00',
        block: 6,
        span: 6,
        date: '17:30 - 18:00',
        agenda: 'Return to the hotel'
    }]
}, {
    date: '29 June 2023',
    time: '07:00 - 17:00 (GMT+7)',
    title: 'Ied Adha',
    icon: 'icon.png',
    details: [{
        time: '07:00',
        block: 0,
        span: 60,
        date: '07:00 - 12:00',
        agenda: 'Personal Exploration & Eid Celebration'
    }, {
        time: '12:00',
        block: 0,
        span: 12,
        date: '12:00 - 13:00',
        agenda: 'Trip to Pancasila Village'
    }, {
        time: '13:00',
        block: 0,
        span: 12,
        date: '13:00 - 14:00',
        agenda: 'Lunch Break'
    }, {
        time: '14:00',
        block: 0,
        span: 24,
        date: '14:00 - 16:00',
        agenda: 'Exploring Pancasila Village'
    }, {
        time: '16:00',
        block: 0,
        span: 12,
        date: '16:00 - 17:00',
        agenda: 'Heading back to hotel'
    }]
}, {
    date: '30 June - 1 July 2023',
    time: 'N/A',
    title: 'Personal Exploration',
    icon: 'icon.png',
}, {
    date: '3 July 2023',
    time: '08:30 - 18:45 (GMT+7)',
    title: 'Mainstreaming Ecotourism as An Integral Part of Sustainable Tourism',
    university_id: 1,
    opened: ref(true),
    lectures: [
        'Integrating a sustainable approach to eco-tourism practices in Malang',
        'Case Study and Best Practice to sustainable tourism',
        'Practice of sustainable ecotourism management system in Kaliandra'
    ],
    details: [{
        time: '08:30',
        block: 6,
        span: 6,
        date: '08:30 - 09:00',
        agenda: 'Registration'
    }, {
        time: '09:00',
        block: 0,
        span: 6,
        date: '09:00 - 09:30',
        agenda: 'Welcoming dance, video, and speech'
    }, {
        time: '09:00',
        block: 6,
        span: 12,
        date: '09:30 - 10:30',
        agenda: 'Integrating a sustainable approach to eco-tourism practices in Malang'
    }, {
        time: '10:00',
        block: 6,
        span: 6,
        date: '10:30 - 11:00',
        agenda: 'Coffee Break'
    }, {
        time: '11:00',
        block: 0,
        span: 12,
        date: '11:00 - 12:00',
        agenda: 'Case Study and Best Practice to Sustainable Tourism'
    }, {
        time: '12:00',
        block: 0,
        span: 12,
        date: '12:00 - 13:00',
        agenda: 'Lunch Break'
    }, {
        time: '13:00',
        block: 0,
        span: 12,
        date: '13:00 - 14:00',
        agenda: 'Trip to Kaliandra'
    }, {
        time: '14:00',
        block: 0,
        span: 3,
        date: '14:00 - 14:15',
        agenda: 'Coffee Break'
    }, {
        time: '14:00',
        block: 3,
        span: 33,
        date: '14:15 - 17:00',
        agenda: 'The practice of sustainable ecotourism management system in Kaliandra'
    }, {
        time: '17:00',
        block: 0,
        span: 12,
        date: '17:00 - 18:00',
        agenda: 'Dinner at Kaliandra'
    }, {
        time: '18:00',
        block: 0,
        span: 9,
        date: '18:00 - 18:45',
        agenda: 'Heading back to hotel'
    }]
}, {
    date: '4 July 2023',
    time: '07:00 - 19:00 (GMT+7)',
    title: 'Space and Memory: Preserving Malang Heritage',
    university_id: 0,
    opened: ref(true),
    lectures: [
        'Kajoetangan historical tourism preservation',
        'Historical Visit : Kajoetangan historical tourism preservation',
    ],
    details: [{
        time: '07:00',
        block: 0,
        span: 12,
        date: '07:00 - 08:00',
        agenda: 'Heading to UM'
    }, {
        time: '08:00',
        block: 0,
        span: 6,
        date: '08:00 - 08:30',
        agenda: 'Registration'
    }, {
        time: '08:00',
        block: 6,
        span: 6,
        date: '08:30 - 09:00',
        agenda: 'Opening Remarks'
    }, {
        time: '09:00',
        block: 0,
        span: 24,
        date: '09:00 - 11:00',
        agenda: 'Kajoetangan historical tourism preservation'
    }, {
        time: '11:00',
        block: 0,
        span: 6,
        date: '11:00 - 11:30',
        agenda: 'Art performance'
    }, {
        time: '11:00',
        block: 6,
        span: 6,
        date: '11:30 - 12:00',
        agenda: 'Closing ceremony'
    }, {
        time: '12:00',
        block: 0,
        span: 12,
        date: '12:00 - 13:00',
        agenda: 'Lunch Break'
    }, {
        time: '13:00',
        block: 0,
        span: 18,
        date: '13:00 - 14:30',
        agenda: 'UM Visit'
    }, {
        time: '14:00',
        block: 6,
        span: 36,
        date: '14:30 - 17:30',
        agenda: 'Historical Visit : Kajoetangan historical tourism preservation'
    }, {
        time: '17:00',
        block: 6,
        span: 12,
        date: '17:30 - 18:30',
        agenda: 'Dinner and local food'
    }, {
        time: '18:00',
        block: 6,
        span: 6,
        date: '18:30 - 19:00',
        agenda: 'Return to Hotel'
    }]
}, {
    date: '5 July 2023',
    time: '06:30 - 18:30 (GMT+7)',
    title: 'Malangese Cultures at Glance',
    university_id: 9,
    opened: ref(true),
    lectures: [
        'Malangese Culture',
        'Site visit to Batik Malang Gallery and/or Sentra Topeng Malang',
        'Cultural Practice: Folk Dance',
        'Ma\'had al-Jami\'ah Tour'
    ],
    details: [{
        time: '06:00',
        block: 6,
        span: 6,
        date: '06:30 - 07:00',
        agenda: 'Heading to UIN'
    }, {
        time: '07:00',
        block: 0,
        span: 6,
        date: '07:00 - 07:30',
        agenda: 'Welcoming Ceremony'
    }, {
        time: '07:00',
        block: 6,
        span: 12,
        date: '07:30 - 08:30',
        agenda: 'Malangese Culture'
    }, {
        time: '08:00',
        block: 6,
        span: 6,
        date: '08:30 - 09:00',
        agenda: 'Discussion & QnA'
    }, {
        time: '09:00',
        block: 0,
        span: 30,
        date: '09:00 - 11:30',
        agenda: 'Site visit'
    }, {
        time: '11:00',
        block: 6,
        span: 6,
        date: '11:30 - 12:00',
        agenda: 'Heading back to UIN'
    }, {
        time: '12:00',
        block: 0,
        span: 18,
        date: '12:00 - 13:30',
        agenda: 'Lunch & Prayer Break'
    }, {
        time: '13:00',
        block: 6,
        span: 24,
        date: '13:30 - 15:30',
        agenda: 'Cultural Practice: Folk Dance'
    }, {
        time: '15:00',
        block: 6,
        span: 12,
        date: '15:30 - 16:30',
        agenda: 'Campus & Ma’had al-Jami’ah Tour'
    }, {
        time: '16:00',
        block: 6,
        span: 12,
        date: '16:30 - 17:30',
        agenda: 'Wrap-up and Closing Ceremony'
    }, {
        time: '17:00',
        block: 6,
        span: 12,
        date: '17:30 - 18:30',
        agenda: 'Heading back to hotel'
    }]
}, {
    date: '6 July 2023',
    time: '06:00 - 18:00 (GMT+7)',
    title: 'Understanding Indonesian Language and Culture Diversity',
    university_id: 5,
    opened: ref(true),
    lectures: [
        'Cultural Diversity',
        'Beginner Indonesian Language and Quiz',
        'Art Lecture',
        'Sport Immersion'
    ],
    details: [{
        time: '06:00',
        block: 0,
        span: 12,
        date: '06:00 - 07:00',
        agenda: 'Heading to UNESA'
    }, {
        time: '07:00',
        block: 0,
        span: 2,
        date: '07:00 - 07:10',
        agenda: 'Opening Lecture'
    }, {
        time: '07:00',
        block: 2,
        span: 10,
        date: '07:10 - 08:00',
        agenda: 'Cultural Lecture'
    }, {
        time: '08:00',
        block: 0,
        span: 6,
        date: '08:00 - 08:30',
        agenda: 'QnA'
    }, {
        time: '08:00',
        block: 6,
        span: 3,
        date: '08:30 - 08:45',
        agenda: 'Cultural Quiz'
    }, {
        time: '09:00',
        block: 0,
        span: 12,
        date: '09:00 - 10:00',
        agenda: 'Beginner Indonesian Language and Quiz'
    }, {
        time: '10:00',
        block: 0,
        span: 6,
        date: '10:00 - 10:30',
        agenda: 'QnA'
    }, {
        time: '10:00',
        block: 6,
        span: 3,
        date: '10:30 - 10:45',
        agenda: 'Quiz'
    }, {
        time: '11:00',
        block: 0,
        span: 24,
        date: '11:00 - 13:00',
        agenda: 'Lunch & Prayer Break'
    }, {
        time: '13:00',
        block: 2,
        span: 10,
        date: '13:10 - 14:00',
        agenda: 'Art Lecture'
    }, {
        time: '14:00',
        block: 0,
        span: 6,
        date: '14:00 - 14:30',
        agenda: 'QnA'
    }, {
        time: '14:00',
        block: 6,
        span: 3,
        date: '14:30 - 14:45',
        agenda: 'Quiz'
    }, {
        time: '14:00',
        block: 9,
        span: 3,
        date: '14:45 - 15:00',
        agenda: 'Closing of lectures'
    }, {
        time: '15:00',
        block: 0,
        span: 6,
        date: '15:00 - 15:30',
        agenda: 'Prayer & Coffee Break'
    }, {
        time: '15:00',
        block: 7,
        span: 2,
        date: '15:35 - 15:45',
        agenda: 'Briefing for sport excursion'
    }, {
        time: '16:00',
        block: 0,
        span: 9,
        date: '16:00 - 16:45',
        agenda: 'Sport Immersion'
    }, {
        time: '16:00',
        block: 9,
        span: 3,
        date: '16:45 - 17:00',
        agenda: 'Heading back to UNESA'
    }, {
        time: '17:00',
        block: 0,
        span: 12,
        date: '17:00 - 18:00',
        agenda: 'Heading back to Hotel'
    }]
}, {
    date: '7 July 2023',
    time: '06:00 - 15:00 (GMT+7)',
    title: 'Final Project Presentation, Reflection, and Closing Ceremony',
    icon: 'icon.png',
    opened: ref(true),
    lectures: [
        'Group Project Presentations',
        'Best Project Announcement'
    ],
    details: [{
        time: '06:00',
        block: 0,
        span: 12,
        date: '06:00 - 07:00',
        agenda: 'Heading to UNESA'
    }, {
        time: '07:00',
        block: 0,
        span: 6,
        date: '07:00 - 07:30',
        agenda: 'Opening Lecture'
    }, {
        time: '07:00',
        block: 6,
        span: 36,
        date: '07:30 - 10:30',
        agenda: 'Group Project Presentation & QnA'
    }, {
        time: '10:00',
        block: 6,
        span: 3,
        date: '10:30 - 10:45',
        agenda: 'Scoring'
    }, {
        time: '10:00',
        block: 9,
        span: 3,
        date: '10:45 - 11:00',
        agenda: 'Announcement'
    }, {
        time: '11:00',
        block: 0,
        span: 24,
        date: '11:00 - 13:00',
        agenda: 'Lunch & Prayer Break'
    }, {
        time: '13:00',
        block: 0,
        span: 2,
        date: '13:00 - 13:10',
        agenda: 'Australian Consulate Impression'
    }, {
        time: '13:00',
        block: 2,
        span: 10,
        date: '13:10 - 14:00',
        agenda: 'Participants\' Impressions'
    }, {
        time: '14:00',
        block: 0,
        span: 3,
        date: '14:00 - 14:15',
        agenda: 'Closing'
    }]
}, {
    date: '8 July 2023',
    time: 'N/A',
    title: 'Departure to Australia',
    icon: 'icon.png',
    details: [{
        time: '06:00',
        block: 0,
        span: 168,
        date: '06:00 - 20:00',
        agenda: 'Departure to Australia'
    }]
}].map(schedule => {
    schedule.university = universities[schedule.university_id]
    return schedule
})

const compressedSchedules = []

schedules.forEach(schedule => {
    let check = compressedSchedules.filter((v, i) => {
        return v.date === schedule.date
    })

    if (! check.length) {
        compressedSchedules.push({
            date: schedule.date,
            details: schedule.details/* .map(detail => {
                detail.icon = schedule.icon ?? schedule.university?.logo
                detail.title = schedule.title
                detail.description = schedule.description ?? schedule.university?.name
                return detail
            }) */,
            icons: [
                schedule.icon ?? schedule.university?.logo
            ],
            title: [
                schedule.title
            ],
            description: [
                schedule.description ?? schedule.university?.name
            ],
        })
    } else {
        let index = compressedSchedules.indexOf(check[0])

        Array.prototype.push.apply(compressedSchedules[index].details, schedule.details)

        compressedSchedules[index].icons = compressedSchedules[index].icons.concat(schedule.icon ?? schedule.university?.logo)
        compressedSchedules[index].title = compressedSchedules[index].title.concat(schedule.title)
        compressedSchedules[index].description = compressedSchedules[index].description.concat(schedule.description ?? schedule.university?.name)
    }
})

// console.log(compressedSchedules)

const timeBlocks = collect([
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
])

timeBlocks.transform((block, i) => {
    return {
        time: block,
        schedules: compressedSchedules.map(schedule => {
            return schedule.details?.filter((detail, j) => detail.time == block)
        }),
        blocked: Array(timeBlocks.count()).fill(null).map(() => Array(12).fill(undefined))
    }
})

for (let index = 0; index < compressedSchedules.length; index++) {
    const schedules = timeBlocks.pluck(`schedules.${index}`).flatten(1)
    
    schedules.each((schedule, i) => {
        if (schedule) {
            let selected = timeBlocks.search((time) => time.time == schedule.time),
                position = schedule.block,
                span = schedule.span - 1

            timeBlocks.all()[selected].blocked[index][position] = schedule;

            for (; span > 0; span--) {
                position++

                if (position == 12) {
                    position = 0
                    selected++
                }

                timeBlocks.all()[selected].blocked[index][position] = true;

            }
        }
    })
}

const dates = [{
//     title: 'Open Registration',
//     date: '12 April 2023'
// },{
    title: 'Registration Deadline',
    date: '12 April 2023'
},/*  {
    title: 'Selection',
    date: 'May - June, 2023'
}, */ {
    title: 'Result Announcement',
    date: '5 June, 2023'
}, {
    title: 'EJx 2023',
    date: '20 June - 7 July, 2023'
}, {
    title: 'Departure to Australia',
    date: '8 July, 2023'
}]

const requirements = [{
    name: 'Eligilibity',
    details: [
        // 'Open for Public;',
        'Being recommended by the International Office of Home University or Home Institution (template is provided).',
        'Good command of English',
        'A strong desire to explore new places, meet new people and (expand/grow/further develop) inter-cultural communication skills'
    ]
}, {
    name: 'Required Documents (Students)',
    details: [
        // 'CV (in English);',
        'Motivation Letter (in English; 200 words);',
        // 'Able to speak in English;',
        'Academic Transcript (all semesters for students);',
        'Recommendation Letter (Download template <a href="https://docs.google.com/document/d/1wgDoINg31P4jRO1hebNu3MO993_xfhVy/edit?usp=sharing&ouid=110456921852231717325&rtpof=true&sd=true" target="_blank">here</a>);',
        'Scan of Passport or Student Card.',
    ]
}, {
    name: 'Required Documents (Non-Students)',
    details: [
        'Motivation Letter (in English);',
        'Scan of Passport or Identity Card.',
    ]
}]

const testimonials = [{
    image: 'testimonials/1.png',
    description: 'In this program, I made many international friends, and we are somehow connected even after the program. We create a short bonding and share knowledge through a lot of things. <br>I am very happy to be part of EJx 2020.',
    name: 'Monica Morales',
    university: 'Far Eastern University',
}, {
    image: 'testimonials/2.png',
    description: 'I love all the topics in this program, I learn a lot about Indonesia and other parts of East Java. <br>Featured topics like ethnic groups and language help me to gain a new <br>perspective about Indonesia as well.',
    name: 'Keren Joy Otanes',
    university: 'Far Eastern University',
}, {
    image: 'testimonials/3.png',
    description: 'The topics were so good, the experience and the journey during this program were really amazing.<br>I can\'t wait to spread the knowledge that I got to society.<br>I hope that I can join with this kind of event again.',
    name: 'Arisandi Tri Hardiansyah',
    university: 'Universitas Trunojoyo Madura',
}, {
    image: 'testimonials/4.png',
    description: 'As a whole I feel that the program was a great success allowing participants the opportunity to network and form bonds with not only other students with their home country but also externally. I am very happy i participated in this program.',
    name: 'Georgia Lender',
    university: 'Edith Cowan University',
}, {
    image: 'testimonials/5.png',
    description: 'I am very happy to be part of this program. studying during East Java Exploration gave me the opportunity to collaborate with Australian students in finding solutions about the problems faced by people in east java. From this activity i gained knowledge. Each university provided the best explanation to the topic.',
    name: 'Dini Puji Rahayu',
    university: 'UIN Maulana Malik Ibrahim',
}, {
    image: 'testimonials/6.png',
    description: 'There was many interesting topics, from traditional to modern culture. By the end of the program, student delt that their knowledge had been expanded. i belive that all future students<br> will find many things to learn in this program.',
    name: 'Jason Yong Yu',
    university: 'The University of Western Australia',
}]

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

export { universities, topics, dates, programs, schedules, requirements, testimonials, galleries, compressedSchedules, timeBlocks }