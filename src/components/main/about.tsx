const About = () => {
    const aboutRef = null
    return (
        <section ref={null} data-id="section1" id="about">
            <div className="container text-white ">
                <h2 className="font-bold uppercase">About</h2>
                <p className="">
                    Hi there! My name is{' '}
                    <a className="text-animation font-medium">Sreerag M</a> and I am a
                    student at{' '}
                    <a className="text-animation font-medium">
                        Rajiv Gandhi Institute Of Technology
                    </a>
                    . I am passionate about building backend applications and
                    web development in general.
                </p>
                <p className="">
                    Ever since I discovered the power of code, I have been
                    fascinated by the endless possibilities it offers. I love
                    the challenge of solving complex problems and building
                    efficient and scalable systems
                </p>
                <p className="">
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
