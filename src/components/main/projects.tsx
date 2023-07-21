import Project from '../project/project'
import projects from '#/data/project'
import Link from 'next/link'
import { useNavContext } from '#/context/nav.context'

const Projects = () => {
    const projectRef = null
    const { ref3 } = useNavContext()
    return (
        <section
            ref={ref3}
            data-id="section3"
            id="project"
            className="space-y-8"
        >
            <div className="container space-y-7 text-white lg:space-y-10 ">
                <h2 className="sm-head font-bold uppercase opacity-100">
                    Projects
                </h2>
                {projects.slice(0, 3).map((item, index) => (
                    <Project key={index} {...item} />
                ))}

                <div className="text-animation group capitalize hover:underline ">
                    <Link href="/projects">View Full project Archive</Link>
                    <span
                        className="transition-all duration-300 ease-in-out
                     group-hover:ml-1 group-focus:ml-2"
                    >
                        &#8594;
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Projects
