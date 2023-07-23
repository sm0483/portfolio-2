import Exp from '../experience/experience'
import experienceItems from '#/data/experience'
import { useNavContext } from '#/context/nav.context'

const Exps = () => {
    const { ref2 } = useNavContext()
    return (
        <section
            ref={ref2}
            data-id="section2"
            id="experience"
            className="space-y-6"
        >
            <div className="container space-y-7  text-white lg:space-y-6  ">
                <h2 className="sm-head font-bold uppercase opacity-100">
                    Experience
                </h2>
                {experienceItems.map((item, index) => (
                    <Exp key={index} {...item} />
                ))}
            </div>
            <div className="group capitalize">
                <a
                    href={process.env.NEXT_PUBLIC_RESUME_LINK}
                    download
                    className="text-animation text-white "
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
