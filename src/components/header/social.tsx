import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Social = () => {
    return (
        <div className="mt-6 flex gap-6 text-white lg:mt-44">
            <a
                href={process.env.NEXT_GITHUB}
                aria-label="github"
                target="_blank"
                rel="noopener noreferrer"
                className=""
            >
                <FaGithub size={24} />
            </a>
            <a
                href={process.env.NEXT_TWITTER}
                target="_blank"
                aria-label="twitter"
                rel="noopener noreferrer"
                className=""
            >
                <FaTwitter size={24} />
            </a>
            <a
                href={process.env.NEXT_LINKEDIN}
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
