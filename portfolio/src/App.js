import { useEffect } from "react";
import "./App.css";
import { LandingSection } from "./Components/LandingSection";
import { About } from "./Components/About/About";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";



export default function App() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="App">
            <div >
                <LandingSection />
                <About />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}