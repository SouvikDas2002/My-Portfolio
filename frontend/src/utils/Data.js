import { FacebookOutlined, GitHub, LinkedIn, WebOutlined } from "@mui/icons-material";

const profile = {
    name: 'Souvik Das',
    title: 'Jr. Software Developer',
    DoB: '12th December 2002',
    email: 'dev.souvik2002@gmail.com',
    address: 'Jamna, Pingla, West Medinipur, pin - 721140',
    curraddress: 'Baddi,Solan,Chitkara University,Himachal Pradesh, pin - 174103',
    state: 'West Bengal',
    phone: '+91 9875666104',

    socials: {
        facebook: {
            link: 'https://www.facebook.com/souvik.papu.3',
            text: 'Souvik Das - fb',
            icon: 'FacebookOutlined', 
        },
        github: {
            link: 'https://github.com/SouvikDas2002',
            text: 'SouvikDas2002',
            icon: 'GitHub',
        },
        linkedin: {
            link: 'https://linkedin.com/in/souvik-das-0793b0238',
            text: 'Souvik Das',
            icon: 'LinkedIn',
        }
    },
    about:"Hello! I'm Souvik Das, a dedicated and passionate Bachelor of Engineering student specializing in Computer Science and Engineering. I have been coding for 3 years and mainly focusing on different appraoch of problem solving and fully passionate on full stack web development. My academic journey has equipped me with a robust understanding of core concepts, and I continually seek opportunities to apply my knowledge in practical and impactful ways. I have learned to code in quite a few programming languages but the one's I'm practiced in are C++ and java. I believe there's always room for improvement. That's why I always keep learning new things and I also like to confirm my new skills by implementing them.",
    projects:[
        {
        title:'ShopSite',
        date:'2024 Jan - March',
        description:'Online shopping webapp in express and mongodb'
        },
        {
        title:'WebRtc',
        date:'2024 March - June',
        description:'Real time communication web app in MERN'
        },
        {
        title:'FeastFly',
        date:'2023 October- December',
        description:'Online food order platform in ejs,express and mongodb'
        },
        {
        title:'ChatApp',
        date:'2024 July - present',
        description:'Real time messaging webapp in MERN stack'
        },
    ],
    education:[
        {
        title:'Saharda Kalipada Vidyapith (X)',
        date:'Date : 2017 January - 2019 March',
        marks:'Marks : 75.6 %'
        },
        {
        title:'Saharda Kalipada Vidyapith (XII)',
        date:'Date : 2019 January - 2021 June',
        marks:'Marks : 76.6 %'
        },
        {
        title:'Chitkara University',
        date:'Date : 2021 August - present',
        description:'Bachelor of Engineering in Computer Science',
        marks:'Marks : 9.01 cgpa'
        },
    ],
    skills:[
        {
        title:"Programming languages",
        description:["C++","Java"]
    },
        {
        title:"Front-End",
        description:["HTML","CSS","Javascript","React js","Material UI","ejs"]
    },
    {
        title:"Back-End",
        description:["Nodejs","Express",]
        },
    {
        title:"DataBases",
        description:["MySQL","MongoDB",]
        },
    {
        title:"Source Control",
        description:["Git","GitHub",]
        },
    ],
    portfolio:[
        {
            tag:'ejs',
            image:'./projectimages/e-1.png',
            title:'SHOPSITE',
            caption:"E-comm webapp with Node js and mongodb",
            description:'Creating an e-commerce website using MongoDB, Express, EJS, OAuth Google Authentication, bcrypt, session management, Multer, and Nodemailer involves a comprehensive tech stack to ensure a secure, dynamic, and feature-rich user experience. You can also visit my github for source code and more details. Thank You.',
            links:[
                {link:'https://www.google.com', text:'websitelink'},
                {link:'https://github.com/SouvikDas2002/Eccomerce-Website', text:'Source Code'},
            ],
        },
        {
            tag:'ejs',
            image:'./projectimages/f-1.png',
            title:'FEAST-FLY',
            caption:"IThe online food delivery webapp with Express and mongodb",
            description:'Creating an online food ordering platform using EJS, Mongoose, Express, SaaS (Software as a Service), and a mix of Laravel involves integrating multiple technologies to provide a seamless and efficient user experience. You can also visit my github for source code. Thank You.',
            links:[
                {link:'https://www.google.com', text:'websitelink'},
                {link:'https://github.com/SouvikDas2002/FeastFly', text:'Source Code'},
            ]
        },
        {
            tag:'C++',
            image:'./projectimages/c-1.jpg',
            title:'Task Manager',
            caption:"Task Manager cpp GUI application",
            description:'Creating a task manager desktop application using wxWidgets involves developing a user interface and backend functionality for managing tasks. wxWidgets is a C++ library that allows you to create cross-platform applications with native look and feel. You can also visit my github for source code. Thank You.',
            links:[
                {link:'https://www.google.com',text:'websitelink'},
                {link:'https://github.com/SouvikDas2002/todo-list-GUI-Cpp-', text:'Source Code'},
            ]
        },
        {
            tag:'Java',
            image:'./projectimages/eg-1.jpg',
            title:'Email Generator',
            caption:"Email generator command line application based on basic OOPS concepts. You can also visit my github for source code and more details. Thank You.",
            description:'This is my p1 description.',
            links:[
                {link:'https://www.google.com', text:'websitelink'},
                {link:'https://github.com/SouvikDas2002/Email-Generate', text:'Source Code'},
            ]
        },
        {
            tag:'React',
            image:'./projectimages/ic-1.png',
            title:'Investment Calculator',
            caption:"An Investment Calculator web app with React Basic",
            description:'Creating an email generator in Java using Object-Oriented Programming (OOP) principles involves designing a class that encapsulates the properties and behaviors required to generate emails. You can also visit my github for source code and more details. Thank You.',
            links:[
                {link:'https://investment-calculator-2w78.vercel.app/', text:'websitelink'},
                {link:'https://github.com/SouvikDas2002/Investment-Calculator', text:'Source Code'},
            ]
        },
        {
            tag:'React',
            image:'./projectimages/t-1.png',
            title:'Tic-Tac-Toe',
            caption:"Tic-Tac-Toe game web application with React js",
            description:'Creating a Tic Tac Toe web application using React involves setting up the game logic and creating a user interface to interact with the game. You can also visit my github for source code and more details. Thank You.',
            links:[
                {link:'https://tic-tac-toe-drab-omega.vercel.app/', text:'websitelink'},
                {link:'https://github.com/SouvikDas2002/Tic-Tac-Toe', text:'Source Code'},
            ]
        },
        {
            tag:'React',
            image:'./projectimages/et-1.png',
            title:'Expense Tracker',
            caption:"An Basic Expense Tracker UI with React js",
            description:'Creating an expense tracker in React involves setting up the components to handle input, display expense items, and calculate totals. You can also visit my github for source code and more details. Thank You.',
            links:[
                {link:'https://www.google.com', text:'websitelink'},
                {link:'https://github.com/SouvikDas2002/ExpenseTracker-UI', text:'Source Code'},
            ]
        },
        {
            tag:'MERN',
            image:'./projectimages/w-1.png',
            title:'WebRTC',
            caption:"React time communication web app",
            description:'Create a robust real-time communication web app that handles user authentication, real-time messaging, and persistent storage of messages. The backend with Node.js and Express manages the server-side logic and database interactions, while the frontend with React provides a dynamic and interactive user interface. Socket.io ensures real-time communication between the client and server, enabling instant message exchange. You can also visit my github for source code and more details. Thank You.',
            links:[
                {link:'https://www.google.com', text:'websitelink'},
                {link:'https://github.com/SouvikDas2002/WebRTC', text:'Source Code'},
            ]
        },
        {
            tag:'MERN',
            image:'./projectimages/b-1.jpg',
            title:'TechBuzz',
            caption:"Tech Blogging WebApp with MERN",
            description:'Creating a blogging web app using the MERN stack (MongoDB, Express, React, Node.js) involves setting up both the backend and frontend to handle blog posts, user authentication, and possibly comments. You can also visit my github for source code and more details. Thank You.',
            links:[
                {link:'https://www.google.com', text:'websitelink'},
                {link:'https://github.com/SouvikDas2002/TechBuzz', text:'Source Code'},
            ]
        },
    ]
};

export default profile;
