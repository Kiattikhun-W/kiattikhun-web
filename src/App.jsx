import {useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Content from "./components/Content.jsx";

import {FaArrowCircleUp} from "react-icons/fa";


function App() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <div className="App">
            <Content/>
            <FaArrowCircleUp
                className={'text-5xl font-extrabold hover:cursor-pointer text-blue-600'}
                onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }}
                style={{

                    position: 'fixed',
                    bottom: '40px',
                    right: '40px',


                }}
            />

        </div>
    )
}

export default App
