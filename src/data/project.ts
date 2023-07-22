import { ProjectType } from '#/types/project.type'

const projects: ProjectType[] = [
    {
        title: 'Skillvine Api',
        points: [
            'Developed a fully functional backend service for activity point manager',
            'Implemented teacher and student authentication, activity point calculation',
            'Utilized technologies such as Express, Typescript, Node.js, MongoDB, and AWS S3',
        ],
        technologies: ['Express', 'Typescript', 'Node.js', 'MongoDB', 'AWS S3'],
        links: {
            github: 'https://github.com/sm0483/skillvine-api',
            live: 'https://rit.skillvine.tech/',
        },
    },
    {
        title: 'Provision a Three tier Architecture in AWS',
        points: [
            'Terraform configurations for provisioning a 3-tier architecture on AWS to host a WordPress application',
        ],
        technologies: ['Terraform', 'AWS', 'WordPress'],
        links: {
            github: 'https://github.com/sm0483/wp-3tier-aws',
        },
    },

    {
        title: ' Social Media api',
        points: [
            'A simple rest api for Social media app',
            'Implemented Oauth2',
            'Implemented  image storage functionality and pagination',
        ],
        technologies: ['TypeScript', 'Express', 'Aws-S3', 'MongoDB'],
        links: {
            github: 'https://github.com/sm0483/social-media-api',
            docs: 'https://documenter.getpostman.com/view/21080448/2s93Y2Sgkf',
        },
    },
]

export default projects
