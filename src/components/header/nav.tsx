import { useNavContext } from '#/context/nav.context'
import { useState } from 'react'

const Nav = () => {
    const { activeButton } = useNavContext()
    const [exp, setExp] = useState<boolean>(false)
    const [about, setAbout] = useState<boolean>(false)
    const [contact, setContact] = useState<boolean>(false)
    const [project, setProject] = useState<boolean>(false)
    return (
        <nav>
            <ul
                className="hidden space-y-4 text-sm font-bold uppercase
             text-white lg:mt-16 lg:block"
            >
                <li className="group flex items-center">
                    <div className="nav-div-animation"></div>
                    <a className="nav-a-animation" href="#about">
                        About
                    </a>
                </li>

                <li className="group flex items-center">
                    <div className="nav-div-animation"></div>
                    <a className="nav-a-animation" href="#experience">
                        Experience
                    </a>
                </li>
                <li className="group flex items-center">
                    <div className="nav-div-animation"></div>

                    <a href="#project" className="nav-a-animation">
                        Projects
                    </a>
                </li>
                <li className="group flex items-center">
                    <div className="nav-div-animation"></div>
                    <a className="nav-a-animation" href="#contact">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
