import Nav from "./components/Nav"
import Banner from "./components/Banner"
import About from "./components/About"
import Services from "./components/Services"
import Projects from "./components/Projects"


const App = () => {
  return (
    <div className="bg-slate-900">
      <Nav />
      <Banner />
      <About />
      <Services />
      <Projects />
    </div>
  )
}

export default App
