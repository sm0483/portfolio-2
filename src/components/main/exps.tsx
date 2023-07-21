import Exp from '../experience/experience'
import experienceItems from '#/data/experience'

const Exps = () => {
    const expRef = null
    return (
        <section ref={expRef} data-id="section2" id="experience">
            <div className="container  text-white">
                <h2 className="font-bold uppercase">Experience</h2>
                {experienceItems.map((item, index) => (
                    <Exp key={index} {...item} />
                ))}
            </div>
            <div className="group capitalize">
                <a
                    href="/path/to/resume.pdf"
                    download
                    className="text-animation text-white hover:underline"
                >
                    Download Resume
                    <span
                        className="transition-all 
                     duration-300 ease-in-out group-hover:ml-2 group-focus:ml-1"
                    >
                        &#8594;
                    </span>
                </a>
            </div>
        </section>
    )
}

export default Exps
