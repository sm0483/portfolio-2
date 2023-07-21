import Content from '#/components/header/content'
import Nav from '#/components/header/nav'
import Social from '#/components/header/social'

const Header = () => {
    return (
        <header>
            <div className="container">
                <Content />
                <Nav />
                <Social />
            </div>
        </header>
    )
}

export default Header
