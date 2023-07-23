import { useNavContext } from '#/context/nav.context'

const Nav = () => {
    const { activeButton } = useNavContext()
    return (
        <nav>
            <ul
                className="hidden space-y-4 text-sm font-bold uppercase
             text-white lg:mt-16 lg:block"
            >
                <li
                    className="group flex items-center"
                    onMouseEnter={(e) => {
                        ;(
                            e.currentTarget.firstChild as HTMLElement
                        ).style.width = '64px'
                        ;(
                            e.currentTarget.firstChild as HTMLElement
                        ).style.transitionTimingFunction = 'ease-in'
                    }}
                    onMouseLeave={(e) => {
                        ;(
                            e.currentTarget.firstChild as HTMLElement
                        ).style.width =
                            activeButton == 'section1' ? '64px' : '32px'
                        ;(
                            e.currentTarget.firstChild as HTMLElement
                        ).style.transitionTimingFunction = 'ease-out'
                    }}
                >
                    <div
                        style={{
                            height: '1.5px',
                            width: activeButton == 'section1' ? '64px' : '32px',
                            backgroundColor: 'white',
                            transition: 'all 300ms ease-out',
                            opacity: activeButton == 'section1' ? 1 : 0.7,
                        }}
                    ></div>

                    <a
                        className="nav-a-animation group-hover:w-16"
                        href="#about"
                        style={{
                            opacity: activeButton == 'section1' ? 1 : 0.7,
                        }}
                    >
                        About
                    </a>
                </li>

                <li
                    className="group flex items-center"
                    onMouseEnter={(e) => {
                        ;(
                            e.currentTarget.firstChild as HTMLElement
                        ).style.width = '64px'
                        ;(
                            e.currentTarget.firstChild as HTMLElement
                        ).style.transitionTimingFunction = 'ease-in'
                    }}
                    onMouseLeave={(e) => {
                        ;(
                            e.currentTarget.firstChild as HTMLElement
                        ).style.width =
                            activeButton == 'section2' ? '64px' : '32px'
                        ;(
                            e.currentTarget.firstChild as HTMLElement
                        ).style.transitionTimingFunction = 'ease-out'
                    }}
                >
                    <div
                        style={{
                            height: '1.5px',
                            width: activeButton == 'section2' ? '64px' : '32px',
                            backgroundColor: 'white',
                            transition: 'all 300ms ease-out',
                            opacity: activeButton == 'section2' ? 1 : 0.7,
                        }}
                    ></div>

                    <a
                        className="nav-a-animation group-hover:w-16"
                        href="#experience"
                        style={{
                            opacity: activeButton == 'section2' ? 1 : 0.7,
                        }}
                    >
                        Experience
                    </a>
                </li>

                <li
                    className="group flex items-center"
                    onMouseEnter={(e) => {
                        ;(
                            e.currentTarget.firstChild as HTMLElement
                        ).style.width = '64px'
                        ;(
                            e.currentTarget.firstChild as HTMLElement
                        ).style.transitionTimingFunction = 'ease-in'
                    }}
                    onMouseLeave={(e) => {
                        ;(
                            e.currentTarget.firstChild as HTMLElement
                        ).style.width =
                            activeButton == 'section3' ? '64px' : '32px'
                        ;(
                            e.currentTarget.firstChild as HTMLElement
                        ).style.transitionTimingFunction = 'ease-out'
                    }}
                >
                    <div
                        style={{
                            height: '1.5px',
                            width: activeButton == 'section3' ? '64px' : '32px',
                            backgroundColor: 'white',
                            transition: 'all 300ms ease-out',
                            opacity: activeButton == 'section3' ? 1 : 0.7,
                        }}
                    ></div>

                    <a
                        className="nav-a-animation group-hover:w-16"
                        href="#project"
                        style={{
                            opacity: activeButton == 'section3' ? 1 : 0.7,
                        }}
                    >
                        Projects
                    </a>
                </li>

                <li
                    className="group flex items-center"
                    onMouseEnter={(e) => {
                        ;(
                            e.currentTarget.firstChild as HTMLElement
                        ).style.width = '64px'
                        ;(
                            e.currentTarget.firstChild as HTMLElement
                        ).style.transitionTimingFunction = 'ease-in'
                    }}
                    onMouseLeave={(e) => {
                        ;(
                            e.currentTarget.firstChild as HTMLElement
                        ).style.width =
                            activeButton == 'section4' ? '64px' : '32px'
                        ;(
                            e.currentTarget.firstChild as HTMLElement
                        ).style.transitionTimingFunction = 'ease-out'
                    }}
                >
                    <div
                        style={{
                            height: '1.5px',
                            width: activeButton == 'section4' ? '64px' : '32px',
                            backgroundColor: 'white',
                            transition: 'all 300ms ease-out',
                            opacity: activeButton == 'section4' ? 1 : 0.7,
                        }}
                    ></div>

                    <a
                        className="nav-a-animation group-hover:w-16"
                        href="#contact"
                        style={{
                            opacity: activeButton == 'section4' ? 1 : 0.7,
                        }}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
