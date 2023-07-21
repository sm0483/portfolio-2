import Footer from '#/layouts/footer/footer'
import Project from './projects'
import About from './about'
import Exps from './exps'
import Contact from './contact'

const Main = () => {
    return (
        <main>
            <About />
            <Exps />
            <Project />
            <Contact />
            <Footer />
        </main>
    )
}

export default Main
