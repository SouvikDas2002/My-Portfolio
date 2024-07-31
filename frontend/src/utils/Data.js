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
            link: '',
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
        title:'porject-1',
        date:'2024 - present',
        description:'bjbsjbjbjss'
        },
        {
        title:'project-2',
        date:'2024 - present',
        description:'bjbsjbjbjss'
        },
        {
        title:'project-3',
        date:'2024 - present',
        description:'bjbsjbjbjss'
        },
        {
        title:'project-4',
        date:'2024 - present',
        description:'bjbsjbjbjss'
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
            image:'./SouvikDas.jpg',
            title:'SHOPSITE',
            caption:"E-comm webapp with Node js and mongodb",
            description:'This is my p1 description.',
            links:[
                {link:'https://www.google.com', text:'websitelink'},
                {link:'https://github.com/SouvikDas2002/Eccomerce-Website', text:'Source Code'},
            ],
        },
        {
            tag:'ejs',
            image:'./SouvikDas.jpg',
            title:'FEAST-FLY',
            caption:"IThe online food delivery webapp with Express and mongodb",
            description:'This is my p1 description.',
            links:[
                {link:'https://www.google.com', text:'websitelink'},
                {link:'https://github.com/SouvikDas2002/FeastFly', text:'Source Code'},
            ]
        },
        {
            tag:'C++',
            image:'./SouvikDas.jpg',
            title:'Task Manager',
            caption:"Task Manager cpp GUI application",
            description:'This is my p1 description.',
            links:[
                {link:'https://www.google.com',text:'websitelink'},
                {link:'https://github.com/SouvikDas2002/todo-list-GUI-Cpp-', text:'Source Code'},
            ]
        },
        {
            tag:'Java',
            image:'./SouvikDas.jpg',
            title:'Email Generator',
            caption:"Email generator command line application based on basic OOPS concepts",
            description:'This is my p1 description.',
            links:[
                {link:'https://www.google.com', text:'websitelink'},
                {link:'https://github.com/SouvikDas2002/Email-Generate', text:'Source Code'},
            ]
        },
        {
            tag:'React',
            image:'./SouvikDas.jpg',
            title:'Investment Calculator',
            caption:"An Investment Calculator web app with React Basic",
            description:'This is my p1 description.',
            links:[
                {link:'https://www.google.com', text:'websitelink'},
                {link:'https://github.com/SouvikDas2002/Investment-Calculator', text:'Source Code'},
            ]
        },
        {
            tag:'React',
            image:'./SouvikDas.jpg',
            title:'Tic-Tac-Toe',
            caption:"Tic-Tac-Toe game web application with React js",
            description:'This is my p1 description.',
            links:[
                {link:'https://www.google.com', text:'websitelink'},
                {link:'https://github.com/SouvikDas2002/Tic-Tac-Toe', text:'Source Code'},
            ]
        },
        {
            tag:'React',
            image:'./SouvikDas.jpg',
            title:'Expense Tracker',
            caption:"An Basic Expense Tracker UI with React js",
            description:'This is my p1 description.',
            links:[
                {link:'https://www.google.com', text:'websitelink'},
                {link:'https://github.com/SouvikDas2002/ExpenseTracker-UI', text:'Source Code'},
            ]
        },
        {
            tag:'MERN',
            image:'./SouvikDas.jpg',
            title:'WebRTC',
            caption:"React time communication web app",
            description:'This is my p1 description.',
            links:[
                {link:'https://www.google.com', text:'websitelink'},
                {link:'https://github.com/SouvikDas2002/WebRTC', text:'Source Code'},
            ]
        },
        {
            tag:'MERN',
            image:'./SouvikDas.jpg',
            title:'TechBuzz',
            caption:"Tech Blogging WebApp with MERN",
            description:'This is my p1 description.',
            links:[
                {link:'https://www.google.com', text:'websitelink'},
                {link:'https://github.com/SouvikDas2002/TechBuzz', text:'Source Code'},
            ]
        },
    ]
};

export default profile;
