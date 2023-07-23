import { useNavContext } from '#/context/nav.context'

const About = () => {
    const { ref1 } = useNavContext()
    return (
        <section ref={ref1} data-id="section1" id="about">
            <div
                className="container 
             space-y-3 text-white lg:min-h-[50vh]
              lg:space-y-4 lg:px-3 text-opacity-70 "
            >
                <h2
                    className="sm-head  font-bold uppercase 
                opacity-100 "
                >
                    About
                </h2>
                <p className=" max-w-md  ">
                    Hi there! My name is{' '}
                    <a
                        href="http://www.sreerag.me/"
                        className="text-animation font-medium"
                    >
                        Sreerag M
                    </a>{' '}
                    and I am a student at{' '}
                    <a
                        href="http://www.rit.ac.in/"
                        className="text-animation font-medium"
                    >
                        Rajiv Gandhi Institute Of Technology
                    </a>
                    . I am passionate about building backend applications and
                    web development in general.
                </p>
                <p className="max-w-md">
                    Ever since I discovered the power of code, I have been
                    fascinated by the endless possibilities it offers. I love
                    the challenge of solving complex problems and building
                    efficient and scalable systems
                </p>
                <p className="max-w-md">
                    In my free time, you can find me tinkering with new
                    technologies and experimenting with different frameworks and
                    tools. I am always eager to learn and grow, and I am excited
                    to see where my passion for web development will take me
                </p>
            </div>
        </section>
    )
}

export default About
