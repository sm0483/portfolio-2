import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Social = () => {
    return (
        <div className="mt-6 flex gap-6 text-white lg:mt-44">
            <a
                href="https://github.com/your-github-profile"
                aria-label="github"
                target="_blank"
                rel="noopener noreferrer"
                className=""
            >
                <FaGithub size={24} />
            </a>
            <a
                href="https://twitter.com/your-twitter-profile"
                target="_blank"
                aria-label="twitter"
                rel="noopener noreferrer"
                className=""
            >
                <FaTwitter size={24} />
            </a>
            <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                aria-label="linkedin"
                rel="noopener noreferrer"
            >
                <FaLinkedin size={24} />
            </a>
        </div>
    )
}

export default Social
