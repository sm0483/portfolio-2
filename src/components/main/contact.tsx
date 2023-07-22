import { useNavContext } from '#/context/nav.context'
import { messageType } from '#/types/message.type'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

const Contact = () => {
    const { ref4 } = useNavContext()
    const [send, setSend] = useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const data = new FormData(form)
        const temp: messageType = {
            name: data.get('name'),
            email: data.get('email'),
            reply_to: data.get('email'),
            message: data.get('message'),
        }
        console.log(temp)
        try {
            const res = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
                temp,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            if (res.status == 200) setSend(true)
        } catch (error) {
            setSend(false)
        }
    }
    return (
        <section ref={ref4} data-id="section4" id="contact">
            <div className="container space-y-3 text-white lg:space-y-4 ">
                <h2 className="sm-head font-bold uppercase">Get in Touch</h2>
                <p className="min-w-md">
                    I’m always eager to collaborate on new projects, develop
                    innovative ideas, or contribute to your mission. To get in
                    touch with me, please fill out the form below
                </p>
                <form
                    className=" min-w-md space-y-8 uppercase  "
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col space-y-4">
                        <label htmlFor="name" className="">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="min-h-[40px] rounded border-none bg-black_grey p-3 outline-none
                            hover:ring-offset-[0.25px] hover:ring-offset-white md:rounded-lg lg:ring-0
                             lg:ring-offset-0 lg:ring-offset-black
                             lg:transition-all lg:duration-500 lg:ease-out lg:hover:shadow-lg lg:hover:ring-opacity-5"
                        />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <label htmlFor="email" className="">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className=" min-h-[40px] rounded border-none bg-black_grey p-3 outline-none
                            hover:ring-offset-[0.25px] hover:ring-offset-white md:rounded-lg lg:ring-0
                             lg:ring-offset-0 lg:ring-offset-black
                             lg:transition-all lg:duration-500 lg:ease-out lg:hover:shadow-lg lg:hover:ring-opacity-5
                            "
                        />
                    </div>
                    <div className="flex flex-col space-y-4 ">
                        <label htmlFor="message" className="">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            name="message"
                            className="glass min-h-[140px] resize-none rounded border-none bg-black_grey p-3 outline-none"
                        ></textarea>
                    </div>
                    <div className="">
                        <button
                            type="submit"
                            className=" flex 
                             min-h-[50px] min-w-[150px] items-center
                             justify-center rounded border-[0.1px] border-white border-opacity-5 bg-black_grey
                             font-bold 
                             uppercase
                              ring-offset-[0.25px] 
                              ring-offset-white transition-all duration-300
                              ease-out hover:border-opacity-20
                              hover:bg-black hover:pl-4 lg:ring-opacity-5
                              lg:ring-offset-0
                             "
                        >
                            {send ? 'Done' : 'Send'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
