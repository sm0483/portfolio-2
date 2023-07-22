import { LinksType } from '#/types/link.type'
import { FaGithub, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa'

const Links = ({ github, docs, live }: LinksType) => {
    return (
        <>
            <ul className="flex flex-wrap  gap-4 text-blue">
                {github && (
                    <li className="flex hover:underline">
                        <a href={github} className="flex items-center  ">
                            <FaGithub className="mr-1" />
                            repo
                        </a>
                    </li>
                )}
                {docs && (
                    <li className="flex hover:underline">
                        <a href={docs} className="flex items-center  ">
                            <FaFileAlt className="mr-1" />
                            docs
                        </a>
                    </li>
                )}
                {live && (
                    <li className="flex hover:underline">
                        <a href={live} className="flex items-center  ">
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
