const app = Vue.createApp({
    data() {
        return {
            landing: "./assets/images/gagan.jpg",
            about: 'A senior year student pursuing B.Tech in Computer Science and Engineering at Vellore Institute of Technology (VIT), Vellore. I\'m intriguied by UI/UX and Machine Learning.',
            aboutImage: '',
            experience: [
                {
                    designation: 'SDE Intern',
                    company: 'Amazon',
                    period: 'Jan 2023 - Present',
                    works: []
                },
                {
                    designation: 'UI/UX Intern',
                    company: 'House of Babas',
                    period: 'July 2020 - Nov 2020',
                    works: [
                        {work: 'Designed interface for the official app using Figma'},
                        {work: 'Created prototypes for the interface using Framer'}
                    ]
                }
            ],
            organizations: [
                {
                    designation: "Management Chair",
                    organization: "Mozilla Firefox Club",
                    period: "January 2021 - February 2022",
                    works:[
                        {work: "Organized MozCode'21"},
                        {work: "Conducted and organized multiple events"},
                        {work: "Led a group of 100+ people"}
                    ]
                },
                {
                    designation: "Digital Content Head",
                    organization: "Hindi Literary Association",
                    period: "April 2021 - January 2022",
                    works:[
                        {work: "Designed and developed the organizations official website"},
                        {work: "Managed all digital platforms"}
                    ]
                }
            ],
            education: [
                {
                    certificate: 'Bachelor\'s of Technology',
                    institute: 'Vellore Institiute of Technology, Vellore',
                    period: 'July 2019 - Present',
                    additionals: [
                        {add: 'Major - Computer Science and Engineering'},
                        {add: 'CGPA - 8.25'}
                    ]
                },
                {
                    certificate: 'AISSCE',
                    institute: 'Chettinad Vidyashram, Chennai',
                    period: 'Apr 2017 - May 2019',
                    additionals: [
                        {add: 'Subjects - Physics, Chemistry, Mathematics & Biotechnology'},
                        {add: 'Percentage - 81.8'}
                    ]
                },
                {
                    certificate: 'AISSE',
                    institute: 'Chettinad Vidyashram, Chennai',
                    period: 'Jun 2008 - Apr 2017',
                    additionals: [
                        {add: 'CGPA - 8.80'}
                    ]
                }
            ],
            skills: [
                {
                    image: '',
                    skill: 'Java'
                },
                {
                    image: '',
                    skill: 'Spring Boot'
                },
                {
                    image: '',
                    skill: 'Python'
                },
                {
                    image: '',
                    skill: 'R Programming'
                },
                {
                    image: '',
                    skill: 'PostgreSQL'
                },
                {
                    image: '',
                    skill: 'Ubuntu'
                },
                {
                    image: '',
                    skill: 'Figma'
                }
            ],
            projects: [
                {
                    imagePath: "../images/ek-rakht.png",
                    title: "Ek Rakht",
                    desc: "An interface design to simplify the task to find blood donors & camps",
                    link: "https://www.behance.net/gallery/157046333/Ek-Rakht-Blood-Donation-App",
                    linkTo: "Behance"
                },
                {
                    imagePath: "../images/codon.png",
                    title: "Codon",
                    desc: "A basic code editor compatible with Python, Java, R, C, C++ and Go. Developed in Python.",
                    link: "https://github.com/gagan-gv/Code-Editor",
                    linkTo: "GitHub"
                },
                {
                    imagePath: "../images/coviddaily.png",
                    title: "COVID Daily",
                    desc: "An android app which shows the daily statistics of COVID cases in India. Developed in Java and XML.",
                    link: "https://dumblabs-co.github.io/coviddaily",
                    linkTo: "Website"
                },
                {
                    imagePath: "../images/codescript.png",
                    title: "Code Script",
                    desc: "A case study between 2 code to image converter websites and designing an interface based on both of their pros and cons.",
                    link: "https://www.behance.net/gallery/146008979/Code-Script-A-UXUI-Case-Study",
                    linkTo: "Behance"
                }
            ]
        }
    }
})

app.mount("#app")