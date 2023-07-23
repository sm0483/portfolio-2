import { ProjectType } from '#/types/project.type'
import Links from '../links/link'
import Tech from '../tech/tech'

const Project = ({
    title,
    points,
    links: LinkProps,
    technologies,
}: ProjectType) => {
    return (
        <div className="glass space-y-4 text-white text-opacity-70">
            <h3 className="font-bold capitalize opacity-100 ">{title}</h3>
            <ul className="min-w-md space-y-2 text-sm">
                {points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            <Links {...LinkProps} />
            <ul className=" flex flex-wrap gap-1">
                {technologies.map((technology, index) => (
                    <li key={index} className="m-0">
                        <Tech technology={technology} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Project
