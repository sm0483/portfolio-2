const Nav = () => {
    return (
        <nav>
            <ul className="text-sm font-bold uppercase text-white">
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
