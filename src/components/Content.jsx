import Navbar from "./Navbar.jsx";
import devpic from "../assets/dev-male.png"
import resume from "../assets/resume.pdf"

import html5logo from "../assets/html-5.png"
import reactlogo from "../assets/react.png"
import jslogo from "../assets/js.png"
import express from "../assets/express.png"
import Skills from "./Skills.jsx";
import About from "./About.jsx";
import Header from "./Header.jsx";
import Education from "./Education.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import Contact from "./Contact.jsx";

const Content = () => {


    return (
        <div>
            <Navbar/>

            <div
                className={'flex flex-col justify-center items-center  bg-no-repeat bg-left py-28 p-8 '}>
                <Header/>
                <About/>
                <Education/>
                <Skills/>
                <Projects/>
                <Experience/>
                <Contact/>
            </div>


        </div>
    )
}
export default Content