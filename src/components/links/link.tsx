import { LinksType } from '#/types/link.type'
import { FaGithub, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa'

const Links = ({ github, docs, live }: LinksType) => {
    return (
        <>
            <ul className="flex flex-wrap  gap-4 text-blue">
                {github && (
                    <li className="flex hover:underline">
                        <a
                            href={github}
                            className="flex items-center  "
                        >
                            <FaGithub className="mr-1" />
                        </a>
                        <div> repo</div>
                    </li>
                )}
                {docs && (
                    <li className="flex hover:underline">
                        <a href={docs} className="">
                            <FaFileAlt className="mr-1" />
                        </a>
                        <div> docs</div>
                    </li>
                )}
                {live && (
                    <li className="flex hover:underline">
                        <a href={live} className="">
                            <FaExternalLinkAlt className="mr-1" />
                        </a>
                        <div> live</div>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Links
