const Contact = () => {
    const contactRef = null
    return (
        <section ref={contactRef} data-id="section4" id="contact">
            <div className="container text-white ">
                <h2 className="font-bold uppercase">Get in Touch</h2>
                <p className="">
                    I’m always eager to collaborate on new projects, develop
                    innovative ideas, or contribute to your mission. To get in
                    touch with me, please fill out the form below
                </p>
                <form className=" ">
                    <div className=" ">
                        <label htmlFor="name" className="">
                            Your Name
                        </label>
                        <input type="text" id="name" className="" />
                    </div>
                    <div className="">
                        <label htmlFor="email" className="">
                            Your Email
                        </label>
                        <input type="email" id="email" className="" />
                    </div>
                    <div className="">
                        <label htmlFor="message" className="">
                            Your Message
                        </label>
                        <textarea id="message" rows={4} className=""></textarea>
                    </div>
                    <div className="">
                        <button type="submit" className="">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
