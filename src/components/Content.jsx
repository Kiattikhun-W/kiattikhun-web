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

const Content = () => {


    return (
        <div>
            <Navbar/>

            <div
                className={'flex flex-col justify-center items-center  bg-no-repeat bg-left py-28 p-8'}>
                <Header/>
                <About/>
                <Skills/>
            </div>


        </div>
    )
}
export default Content