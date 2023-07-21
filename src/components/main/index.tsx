import Footer from '#/layouts/footer/footer'
import Project from './projects'
import About from './about'
import Exps from './exps'
import Contact from './contact'

const Main = () => {
    return (
        <main className="mt-28 space-y-16 opacity-90 lg:mt-0 lg:space-y-24 ">
            <About />
            <Exps />
            <Project />
            <Contact />
            <Footer />
        </main>
    )
}

export default Main
