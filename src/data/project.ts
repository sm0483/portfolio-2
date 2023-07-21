import { ProjectType } from '#/types/project.type'

const projects: ProjectType[] = [
    {
        title: 'E-commerce Website',
        points: [
            'Developed a fully functional e-commerce website using MERN stack',
            'Implemented user authentication, product listing, cart functionality, and payment integration',
            'Utilized technologies such as Express, React, Node.js, MongoDB, and AWS S3',
        ],
        technologies: ['Express', 'React', 'Node.js', 'MongoDB', 'AWS S3'],
        links: {
            github: 'https://github.com/user/repo',
            docs: 'https://docs.com',
            live: 'https://www.example.com',
        },
    },
    {
        title: 'Task Management App',
        points: [
            'Built a task management application with TypeScript and Express',
            'Implemented CRUD operations for tasks, user authentication, and task assignment features',
        ],
        technologies: ['Express', 'TypeScript'],
    },
    {
        title: 'Social Media Dashboard',
        points: [
            'Created a social media dashboard with React and Redux',
            'Implemented features such as post creation, user profiles, and feed customization',
            'Utilized technologies like React, Redux, and Firebase',
        ],
        technologies: ['React', 'Redux', 'Firebase'],
        links: {
            github: 'https://github.com/user/repo',
            docs: 'https://docs.com',
            live: 'https://www.example.com',
        },
    },
    {
        title: 'Portfolio Website',
        points: [
            'Designed and developed a personal portfolio website to showcase projects and skills',
            'Implemented responsive layouts, animations, and optimized performance',
        ],
        technologies: ['HTML', 'CSS', 'JavaScript'],
        links: {
            github: 'https://github.com/user/repo',
            docs: 'https://docs.com',
            live: 'https://www.example.com',
        },
    },
]

export default projects
