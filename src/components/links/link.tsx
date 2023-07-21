import { LinksType } from '#/types/link.type'
import { FaGithub, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa'

const Links = ({ github, docs, live }: LinksType) => {
    return (
        <>
            <ul className="">
                {github && (
                    <li>
                        <a href={github} className="">
                            <FaGithub className="mr-1" />
                            repo
                        </a>
                    </li>
                )}
                {docs && (
                    <li>
                        <a href={docs} className="">
                            <FaFileAlt className="mr-1" />
                            docs
                        </a>
                    </li>
                )}
                {live && (
                    <li>
                        <a href={live} className="">
                            <FaExternalLinkAlt className="mr-1" />
                            live
                        </a>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Links
