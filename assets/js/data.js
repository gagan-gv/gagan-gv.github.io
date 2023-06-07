const app = Vue.createApp({
    data() {
        return {
            landing: "./assets/images/gagan.jpg",
            about: 'A senior year student pursuing B.Tech in Computer Science and Engineering at Vellore Institute of Technology (VIT), Vellore. I\'m intriguied by UI/UX and Machine Learning.',
            aboutImage: './assets/images/gagan_about.jpg',
            experience: [
                {
                    designation: 'SDE Intern',
                    company: 'Amazon',
                    period: 'Jan 2023 - Present',
                    works: [
                        {work: 'Build Amazon Alexa features on Amazon iOS App'},
                        {work: 'Work with AWS and building resource stacks with AWS CDK library'},
                        {work: 'Build and manage pipelines for proper delivery'}
                    ]
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
                    period: 'July 2019 - June 2023',
                    additionals: [
                        {add: 'Major - Computer Science and Engineering'},
                        {add: 'CGPA - 8.30'}
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
                    image: './assets/images/java.png',
                    skill: 'Java'
                },
                {
                    image: './assets/images/springboot.png',
                    skill: 'Spring Boot'
                },
                {
                    image: './assets/images/python.png',
                    skill: 'Python'
                },
                {
                    image: './assets/images/r.png',
                    skill: 'R Programming'
                },
                {
                    image: './assets/images/psql.png',
                    skill: 'PostgreSQL'
                },
                {
                    image: './assets/images/Ubuntu.png',
                    skill: 'Ubuntu'
                },
                {
                    image: './assets/images/Figma.png',
                    skill: 'Figma'
                }
            ],
            projects: [
                {
                    title: "Ek Rakht",
                    desc: "An application design for a blood donation app, which can simplify the task for both blood banks as well as donors.",
                    link: "https://www.behance.net/gallery/157046333/Ek-Rakht-Blood-Donation-App",
                    linkTo: "Behance"
                },
                {
                    title: "Code Script",
                    desc: "A case study between 2 code to image converter websites and designing an interface based on both of their pros and cons.",
                    link: "https://www.behance.net/gallery/146008979/Code-Script-A-UXUI-Case-Study",
                    linkTo: "Behance"
                },
                {
                    title: "AlcSplash",
                    desc: "An e-commerce mobile design for popular alcohol brands with some contemporary features.",
                    link: "https://www.behance.net/gallery/128924549/AlcSplash",
                    linkTo: "Behance"
                },
                {
                    title: "Codon",
                    desc: "A basic code editor compatible with Python, Java, R, C, C++ and Go. Developed in Python.",
                    link: "https://github.com/gagan-gv/Code-Editor",
                    linkTo: "GitHub"
                },
                {
                    title: "COVID Daily",
                    desc: "An android app which shows the daily statistics of COVID cases in India. Developed in Java and XML & using covid19india API.",
                    link: "https://dumblabs-co.github.io/coviddaily",
                    linkTo: "Website"
                },
                {
                    title: "Edusite",
                    desc: "An e-learning website developed with HTML, CSS, JS, Bootstrap, JQuery, PHP and MySQL.",
                    link: "https://github.com/gagan-gv/Edusite",
                    linkTo: "GitHub"
                }
            ]
        }
    },
    methods: {
        whichIcon(linkTo) {
            if(linkTo === "GitHub") {
                return "fa-brands fa-github"
            } else if(linkTo === "Behance") {
                return "fa-brands fa-behance"
            } else {
                return "fa-solid fa-globe"
            }
        }
    }
})

app.mount("#app")