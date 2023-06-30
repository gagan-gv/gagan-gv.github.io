const app = Vue.createApp({
    data() {
        return {
            landing: "./assets/images/gagan.jpg",
            about: 'An imaginative code crafter, weaving logic and innovation into software realms, ready to shape the future with lines of endless possibilities.',
            aboutImage: './assets/images/gagan_about.jpg',
            experience: [
                {
                    designation: 'Software Development Engineer Intern',
                    company: 'Amazon',
                    period: 'Jan 2023 - Jun 2023',
                    works: [
                        {work: 'Integrated Amazon Alexa features into the Amazon iOS App'},
                        {work: 'Utilized AWS services and CDK to ease management of ML Model Productionization'},
                        {work: 'Built and managed pipelines to ensure seamless and efficient delivery'}
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