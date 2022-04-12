const text = {
    pl: {
        header:{
            title: 'Dawid Dębiec',
            presentation: 'Zapalony programista po kursach, który szuka okazji do zmiany pracy',
            shortIntro: 'Poniżej moje projekty i krótki opis doświadczenia'
        },
        courses: {
            title: 'Kursy i Szkoły',
            courses: [{
                title: 'JS, React, Redux programistyczny bootcamp w Coderslab', 
                description: "Dowiedziałem podczas kursu dużo o dobrych praktykach "+
                "w programowaniu oraz doszlifowałem wiedzę o Redux. "+
                "Warto również wspomnieć, że dowiedziałem się o nowościach w ES6"
            },{
                title: 'Front End Engineer Career Path na Codecademy',
                description: "350 godzinny kurs, 71 Projektów, oraz 121 Lekcji. "+
                "To mój początek poważnego podejścia do programowania. "+
                "Nauczyłem się w tym okresie bardzo dużo na temat Javascriptu "+
                "i złapałem bakcyla do programowania"
            },{
                title: 'Studia na Grafice Reklamowej i multimediach',
                description: "Grafika użytkowa – multimedia, druk, ilustracja cyfrowa, "+
                "projektowanie informacji, typografia, skład, identyfikacja i komunikacja wizualna, "+
                "to tylko niektóre zagadnienia omawiane podczas studiów. Jest to na pewno "+
                "doświadczenie, które pomaga mi w świadomym projektowaniu stron internetowych. "+
                "Ponadto nauczyłem się pracować na oprogramowaniu Adobe"
            }]
        },
        projects: [{
            name: 'Filmxteka',
            technologies: ['React', 'Typescript', 'Netlify Functions', 'Fauna'],
            links: [{name: 'Podgląd', url: 'https://filmxteka.netlify.app'}, {name: 'Github', url: 'https://github.com/Dawidx3p/filmxteka_v2.0'}]
        },{
            name: 'Blog',
            technologies: ['React', 'Netlify Functions', 'Fauna'],
            links: [{name: 'Podgląd', url: 'https://joanneart.netlify.app'}, {name: 'Github', url: 'https://github.com/Dawidx3p/joanna-blog'}]
        },{
            name: 'Coderslab Workshop',
            technologies: ['React', 'Redux'],
            links: [{name: 'Github', url: 'https://github.com/Dawidx3p/Warsztat_Coderslab'}]
        },{
            name: 'Scheduler',
            technologies: ['React', 'Redux'],
            links: [{name: 'Podgląd', url: 'https://schedulerx3p.netlify.app'}, {name: 'Github', url: 'https://github.com/Dawidx3p/It.focus'}]
        },{
            name: 'Spot The List',
            technologies: ['React'],
            links: [{name: 'Podgląd', url: 'https://spotthelist.netlify.app'}, {name: 'Github', url: 'https://github.com/Dawidx3p/spotTheList'}]
        },{
            name: 'Orange Homepage',
            technologies: ['HTML', 'CSS'],
            links: [{name: 'Podgląd', url: 'https://orange-homepage.netlify.app'}, {name: 'Github', url: 'https://github.com/Dawidx3p/Orange'}]
        }],
        about: {
            title: 'O mnie',
            description: 'Uczę się na własną rękę po pracy co wcale nie jest proste, '+
            'wymaga dużego zaangażowania i samozaparcia, ale wierzę że warto. '+
            'Chcę znaleźć pracę, w której będę mógł dalej rozwijać swoje umiejętności, ale znacznie szybciej. '+
            'Wybrałem programowanie, ponieważ jest to najbardziej rozwijająca się dziedzina. '+
            'Uwielbiam wyzwania, a rozwiązywanie problemów sprawia mi frajdę. Jeżeli szukasz programisty skontaktuj się ze mną'
        },
        footer: {
            title: 'Kontakt',
            links: [
                {
                    name: 'E-Mail', 
                    url: 'mailto:dawiddebiecx@gmail.com'
                }, {
                    name: 'LinkedIn', 
                    url: 'https://www.linkedin.com/in/dawid-debiec/'
                }, {
                    name: 'GitHub', 
                    url: 'https://github.com/Dawidx3p'
                }
            ]
        }
    },
    en: {
        header:{
            title: 'Dawid Dębiec',
            presentation: 'Talkative, energetic, and sociable individual, who seeks the company of other '+
            'people and most likely prefer a good party over a calm evening spent on a couch. '+
            'Altruistic, sympathetic to others, and eager to help, but most importantly a good developer',
            shortIntro: 'Nice to meet You! You can check out my Projects below, enjoy!'
        },
        courses: {
            title: 'Courses & Schools',
            courses: [{
                title: 'JS, React, Redux for programmers at Coderslab', 
                description: "I've had a great 130 hours of improving my React/Redux skills. "+
                "Learned a lot about the Ecosystem and how to manage it. "+
                "I've also gained understanding of good coding practices. "+
                "Ready to use my knowledge on a daily basis"
            },{
                title: 'Front End Engineer Career Path at Codecademy',
                description: "350 hour course, 71 Projects, 121 Lessons"
            },{
                title: 'Graphic Design & Multimedia',
                description: "Undergraduate studies, that prepare for work in the broadly "+
                "understood field of applied graphics, as well as for master’s "+
                "studies. The core courses, which are compulsory for everyone, "+
                "cover the essential theoretical knowledge and practical skills "+
                "that a modern designer needs to succeed in the design industry. "+
                "Students learn not only the key skills in software, but also the basics "+
                "of visual language: its grammar, tools, purposes and the ways "+
                "in which it can be used. This means not only being fluent in "+
                "Illustrator, Photoshop, and After Effects, but also understanding "+
                "how visual language is read by other people and how it is "+
                "used in business, politics, and our daily social life. "+
                "The core courses also include photography and drawing. "
            },{
                title: 'Digital & Interaction Design specialization',
                description: "Focused on graphics that can be viewed on a screen. "+
                "The projects were mainly related to film and animation, but also "+
                "UX and UI design of applications and websites. In addition to digital "+
                "image and sound processing, I also created storyboards and my "+
                "own movies. I used Adobe Premiere, After Effects and other software. "+
                "I improved my digital photography skills."
            }]
        },
        projects: [{
            name: 'Filmxteka',
            technologies: ['React', 'Typescript', 'Netlify Functions', 'Fauna'],
            links: [{name: 'Preview', url: 'https://filmxteka.netlify.app'}, {name: 'Github', url: 'https://github.com/Dawidx3p/filmxteka_v2.0'}]
        },{
            name: 'Blog',
            technologies: ['React', 'Netlify Functions', 'Fauna'],
            links: [{name: 'Preview', url: 'https://joanneart.netlify.app'}, {name: 'Github', url: 'https://github.com/Dawidx3p/joanna-blog'}]
        },{
            name: 'Coderslab Workshop',
            technologies: ['React', 'Redux'],
            links: [{name: 'Github', url: 'https://github.com/Dawidx3p/Warsztat_Coderslab'}]
        },{
            name: 'Scheduler',
            technologies: ['React', 'Redux'],
            links: [{name: 'Preview', url: 'https://schedulerx3p.netlify.app'}, {name: 'Github', url: 'https://github.com/Dawidx3p/It.focus'}]
        },{
            name: 'Spot The List',
            technologies: ['React'],
            links: [{name: 'Preview', url: 'https://spotthelist.netlify.app'}, {name: 'Github', url: 'https://github.com/Dawidx3p/spotTheList'}]
        },{
            name: 'Orange Homepage',
            technologies: ['HTML', 'CSS'],
            links: [{name: 'Preview', url: 'https://orange-homepage.netlify.app'}, {name: 'Github', url: 'https://github.com/Dawidx3p/Orange'}]
        }],
        about: {
            title: 'About me',
            description: 'I am aspiring to be the best front end developer ever. '+
            'Currently learning by my own, from home after working hours, '+
            'but I Hope to get a well paid job and to serve people with '+
            'my skills, and improve them constantly'
        },
        footer: {
            title: 'Contact me',
            links: [
                {
                    name: 'E-Mail', 
                    url: 'mailto:dawiddebiecx@gmail.com'
                }, {
                    name: 'LinkedIn', 
                    url: 'https://www.linkedin.com/in/dawid-debiec/'
                }, {
                    name: 'GitHub', 
                    url: 'https://github.com/Dawidx3p'
                }
            ]
        }
    }
}


export default text