import { useNavContext } from '#/context/nav.context'

const Contact = () => {
    const { ref4 } = useNavContext()
    return (
        <section ref={ref4} data-id="section4" id="contact" className="">
            <div className="container space-y-3 text-white lg:space-y-4">
                <h2 className="sm-head font-bold uppercase">Get in Touch</h2>
                <p className="min-w-md">
                    I’m always eager to collaborate on new projects, develop
                    innovative ideas, or contribute to your mission. To get in
                    touch with me, please fill out the form below
                </p>
                <form className=" min-w-md space-y-8 uppercase ">
                    <div className="flex flex-col space-y-4">
                        <label htmlFor="name" className="">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="min-h-[40px] rounded border-none
                             bg-black_grey outline-none"
                        />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <label htmlFor="email" className="">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="min-h-[40px] rounded border-none bg-black_grey outline-none"
                        />
                    </div>
                    <div className="flex flex-col space-y-4 ">
                        <label htmlFor="message" className="">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="min-h-[140px] resize-none rounded border-none bg-black_grey outline-none"
                        ></textarea>
                    </div>
                    <div className="">
                        <button
                            type="submit"
                            className="min-h-[40px]
                             min-w-[150px] rounded bg-red font-bold uppercase"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
