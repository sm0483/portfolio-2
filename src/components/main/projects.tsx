import Project from '../project/project'
import projects from '#/data/project'
import Link from 'next/link'

const Projects = () => {
    const projectRef = null
    return (
        <section ref={projectRef} data-id="section3" id="project">
            <div className="container text-white ">
                <h2 className="font-bold uppercase">Projects</h2>
                {projects.slice(0, 3).map((item, index) => (
                    <Project key={index} {...item} />
                ))}

                <div className="text-animation group capitalize hover:underline">
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
