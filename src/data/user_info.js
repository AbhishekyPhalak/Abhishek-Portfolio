const info = {
    main: {
        name: "Abhishek Phalak",
        description: "I am a software engineer specializing in full-stack web development and artificial intelligence. With experience in building scalable, secure, and high-performance applications, I enjoy solving complex challenges and leveraging AI/ML to enhance user experiences. Passionate about writing clean, efficient code, I follow best practices and industry standards to develop innovative and impactful solutions.",
        role: "AI-Driven Software Engineer",
        photo: "../abhis.jpg",
        email: "aphalak@usc.edu",
    },

    socials: {
		github: "https://github.com/AbhishekyPhalak",
		linkedin: "https://linkedin.com/in/abhishek-phalak",
		instagram: "https://www.instagram.com/abhisheky_1510/",
    },

    projects: [
        {
			title: "Automatic Question Generation",
            img: "agq.jpg",
			description: "Developed an automated question generation system using GloVe embeddings and the SQuAD dataset, reducing question creation time by 25%, and designed algorithms to generate multiple-choice, Wh-questions, and dynamic crosswords for comprehensive assessment.",
            technologies: "Tensorflow, NLTK, Flask, SpaCy, NLP",
			github: "https://github.com/AbhishekyPhalak/Automatic-Question-Generation"
		},

        {
			title: "Event Search Portal",
            img: "android.jpg",
			description: "Developed a multi-tier event search application using Angular, Express.js, and the Ticketmaster API, featuring assisted search, auto-detect geolocation, dynamic sorting, in-app favorites, and a Java-based Android app with Express.js REST API integration for exploring 1M+ events.",
			technologies: "AngularJs, TypeScript, Flask, NodeJs, ExpressJs, GCP, Java, Androids",
			github: "https://github.com/AbhishekyPhalak/Event-Search-Android-App"
		},

        {
			title: "Healthcare Dashboard",
            img: "healthcare.png",
			description: "A dynamic, single-page web application that fetches patient data from an API and visualizes health metrics with graphs. This project is built using React, Tailwind CSS, Node.js, Bootstrap, and Chart.js to display detailed health metrics such as blood pressure over time.",
			technologies: "React, Tailwind, NodeJs, ChartJs",
			github: "https://github.com/AbhishekyPhalak/Healthcare_dashboard",
            link: "https://abhishekyphalak.github.io/Healthcare_dashboard/"
		},
        {
			title: "Multimodal Personality Analysis",
            img: "multimodal.jpg",
			description: "Multimodal Personality Analysis is a deep learning model that assesses personality traits using audio and video data, leveraging YAMNet and VGGFace for feature extraction and a multimodal architecture with CNNs and LSTMs to achieve 83.52% accuracy.",
			technologies: "Python, Tensorflow, keras, YAMNet, VGGFace, Matplotlib",
			github: "https://github.com/AbhishekyPhalak/Multimodal-Personality-Analysis"
		},
        {
			title: "Database Managment System",
            img: "dbms.jpg",
			description: "Designed a scalable, JSON-based non-relational data model with memory-efficient chunk processing, developed a custom Query Language for intuitive interactions, and optimized data operations using k-way merge sort and Nested Loop Join, improving execution speed by 30% and reducing memory footprint by 15%.",
			technologies: "Python, Json, CLI",
			github: "https://github.com/AbhishekyPhalak/Database-Management-System"
		},
        {
			title: "Revamping the Pandemic",
            img: "revamping.jpg",
			description: "Revamping the Pandemic is a responsive website designed to support society during COVID-19, featuring categorized resources, blogs, e-learning tools, hackathons, and a teacher registration portal with an admin panel to facilitate future employment opportunities.",
			technologies: "HTML, CSS, JavaScript, PHP, MySQL, Bootstrap",
			github: "https://github.com/AbhishekyPhalak/Revamping-The-Pandemic",
            link: "https://abhishekyphalak.github.io/Revamping-The-Pandemic/"
		},
    ],

    education: [
        {
            school: "University of Soutehrn California",
            degree: "Master of Science in Computer Science",
            duration: "2022 - 2024",
            gpa: "3.7",
            image: "usc.webp"
        },
        {
            school: "University of Mumbai",
            degree: "Bachelor of Engineering in Computer Engineering",
            duration: "2018 - 2022",
            gpa: "3.83",
            image: "vit.jpeg"
        },
    ],

    experience: [
        {
            position: "Software Engineer",
            company: "Amotions Inc.",
            duration: "May 2023 - Present",
            image: "amotions_logo.jpeg",
            descriptions: [
                "Collaborated with an engineering team to create an interactive training portal with tier-based subscription as part of a Real-Time AI Coach and Emotionally Intelligent AI Sales Coach platform targeting 10,000+ customers.",
                "Executed changes to the login flow, enhancing user experience and resulting in a 20% increase in user sign-ups.",
                "Created a Chrome extension with AI coach capabilities, offering an unmatched browsing experience through personalized suggestions and real time insights, boosting productivity by 15% and saving 25%-time.",
                "Integrated LangChain document search and improved the subscription UI, adding restrictions for free-tier users and redirecting to premium flows, cutting query resolution time by 20% and boosting conversion by 30%.",
                "Optimized backend workflows for prompt engineering in roleplay, enhancing context and cutting errors by 50%"
            ]
        },
        {
            position: "Software Engineer",
            company: "Pragati Transmissions Pvt. Ltd.",
            duration: "May 2021 - May 2022",
            image: "pragati.png",
            descriptions: [
                "Designed and deployed a predictive maintenance system that flagged potential equipment failures before they occurred, reducing unplanned downtime by 30%.",
                "Implemented Redis-based rate limiting for APIs, reducing server API calls by 30% and improving scalability.",
                "Introduced Docker containerization for APIs, minimizing single points of failure and cutting downtime by 50%.",
            ]
        },
        {
            position: "Student Researcher",
            company: "USC CKIDS",
            duration: "Jan 2023 - May 2023",
            image: "grids.jpeg",
            descriptions: [
                "Employed guided LDA topic modeling to automate the identification of root causes of nuclear power plant accidents utilizing NLP techniques on incident reports, potentially resulting in an 80% reduction in nuclear accidents."
            ]
        },
        {
            position: "Machine Learning Intern",
            company: "VIT",
            duration: "Jun 2021 - Aug 2021",
            image: "vit.jpeg",
            descriptions: [
                "Managed a team of four in developing a robust model to compute department-wise Net Promoter Score (NPS) based on the extensive National Assessment and Accreditation Council (NAAC) survey data encompassing 2,500 students.",
                "Analyzed and classified sentiment of suggestions with 98.5% accuracy using NLP and an n-gram model, identifying the top 10 most prevalent positive and negative suggestions, enabling the college to address key areas promptly and saving 72 hours."
            ]
        },
        {
            position: "Software Engineering Intern",
            company: "Kids Galaxy",
            duration: "Nov 2020 - Jan 2021",
            image: "kids.png",
            descriptions: [
                "Developed an AI chatbot for the company's web app, assisting students with seamless chat services.",
                "Partnered with a cross-functional team of machine learning and UI experts to customize and implement the AIbased chatbot within the company's web app, resulting in 11% increase in user engagement.",
            ]
        }
    ],

    certificates: [
        {
            title: "Automatic Question Generation",
            description: "Advances in Intelligent Systems and Computing, Springer June 2023",
            img: "springer.png",
            publication: true,
            link: "https://link.springer.com/chapter/10.1007/978-981-99-0550-8_19",
        },
        {
            title: "Career Essentials in Generative AI",
            description: "Provided by Linkedin & Authorized by Microsoft",
            img: "microsoft.png",
            link: "https://www.linkedin.com/learning/certificates/a02bb9cef4449b6f4e403d991f1ef1a2334a718912f4d19ca563937c0e0070f5?trk=share_certificate",
        },
        {
            title: "Best Data Science Teamwork",
            description: "Natural Language Processing of safety reports in nuclear power plants",
            img: "grids.jpeg",
            link: "https://drive.google.com/file/d/1ATFMo2bH_DWiFg_LR2oHxKwsWz5d8JVd/view?usp=sharing",
        },
        {
            title: "Machine Learning",
            description: "Provided by Coursera & Authorized by Stanford University",
            img: "stanford.webp",
            link: "https://drive.google.com/file/d/1b_8x9OVB4yRwt2MOfhSW-CMcZbj0WGJH/view?usp=sharing",
        },
        {
            title: "Neural Networks and Deep Leanring",
            description: "Provided by Coursera & Authorized by deeplearning.ai",
            img: "deeplearning.png",
            link: "https://drive.google.com/file/d/1bvwh0pK9bduAOH3PLuscqn47jU1Px4OG/view?usp=sharing",
        },
        {
            title: "Using Python to Access Web Data",
            description: "Provided by Coursera & Authorized by University of Michigan",
            img: "michigan.png",
            link: "https://coursera.org/share/7278bb1dc1dac37e8dea53bea190fd4b"
        },
        {
            title: "Front-End Web UI Frameworks and Tools",
            description: "Provided by Coursera & Authorized by Hong Kong University",
            img: "hong.png",
            link: "https://coursera.org/share/fe2272fbbd931abc50cd775b80013503"
        }
    ],

    contact: {
        title: "Let's Get in Touch: Ways to Connect with Me",
        description: "Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at aphalak@usc.edu. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Finally, if you prefer to connect on social media, you can connect with me using the social media links below.",
    },

    footer: "© 2025 Abhishek Yashvant Phalak. All Rights Reserved"
}

export default info