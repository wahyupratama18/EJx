import { ref } from 'vue'

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
        'Those choices will be used to divide participants into 9 groups, which will determine their final projects;',
        'One group consists of 4-5 individuals, of which one of them is a student from the respective university;',
        'Every participant must join a class in Google Classroom that will be provided by the committees.',
    ]
}, {
    title: 'Lectures',
    contents: [
        'Every participant needs to take part in at least 80% of the lectures in order to obtain a certificate;',
        'All information regarding the lectures (e.g., reminder, zoom link, summary form) will be posted in Google Classroom;',
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
        block: 7,
        span: 6,
        date: '08:30 - 09:00',
        agenda: 'Arriving at ITS'
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
    ]
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
}, {
    date: '22 June 2023',
    time: '08:00 - 18:00 (GMT+7)',
    title: 'Culture',
    university_id: 4,
    opened: ref(true),
    lectures: [
        'East Javanese Culture and Languages'
    ],
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
}, {
    date: '29 June 2023',
    time: '07:00 - 17:00 (GMT+7)',
    title: 'Ied Adha',
    icon: 'icon.png',
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
}, {
    date: '4 July 2023',
    time: '07:00 - 19:00 (GMT+7)',
    title: 'Malangan Heritage Preservation',
    university_id: 0,
    opened: ref(true),
    lectures: [
        'Kajoetangan historical tourism preservation',
        'Historical Visit : Kajoetangan historical tourism preservation',
    ],
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
        'Ma’had al-Jami’ah Tour'
    ],
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
}, {
    date: '8 July 2023',
    time: 'N/A',
    title: 'Departure to Australia',
    icon: 'icon.png',
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
            details: schedule.details,
            icon: [
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

        compressedSchedules[index].icon = compressedSchedules[index].icon.concat(schedule.icon ?? schedule.university?.logo)
        compressedSchedules[index].title = compressedSchedules[index].title.concat(schedule.title)
        compressedSchedules[index].description = compressedSchedules[index].description.concat(schedule.description ?? schedule.university?.name)
    }
})

const timeBlocks = [
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
].map((block, i) => {
    return {
        time: block,
        schedules: compressedSchedules.map(schedule => {
            return schedule.details?.filter((detail, j) => detail.time == block)
        }).map((schedule, j) => {
            if (schedule) {

                if (schedule.lecture_id != undefined) {
                    schedule.lecture = lectures[schedule.lecture_id]
                    schedule.lecture.profile = profiles[schedule.lecture.profile_id]
                }
    
                return schedule
            }
    
            for (let index = 0; index < i; index++) {
                const previous = blocks[index].schedules[j]
                if (previous == undefined) {
                    continue
                }
    
                if (index + previous.block > i) {
                    return 1
                }
            }
    
            return undefined
        })
    }
})

console.log(timeBlocks)

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
    date: '20 June - 8 July, 2023'
}]

const requirements = [{
    name: 'Eligilibity',
    details: [
        'Open for Public;',
        'Being recommended by the International Office of Home University or Home Institution (template is provided).',
    ]
}, {
    name: 'Required Documents (Students)',
    details: [
        'CV (in English);',
        'Motivation Letter (in English; 200 words);',
        'Able to speak in English;',
        'Academic Transcript (all semesters for students);',
        'Recommendation Letter (Download template <a href="https://drive.google.com/file/d/1s_EE_zoTIx5Y8BdPZpK6KIlgzs2iaqge/view?usp=sharing" target="_blank">here</a>);',
        'Scan of Passport or Student Card.',
    ]
}, {
    name: 'Required Documents (Non-Students)',
    details: [
        'Motivation Letter (in English);',
        'Scan of Passport or Identity Card.',
    ]
}]

const testimonials = [
    /* 'testimonials/1.png',
    'testimonials/2.png',
    'testimonials/3.png', */
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

export { universities, topics, dates, programs, schedules, requirements, testimonials, galleries, compressedSchedules, timeBlocks }