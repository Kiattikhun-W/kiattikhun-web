import Navbar from "./Navbar.jsx";
import devpic from "../assets/dev-male.png"
import resume from "../assets/resume.pdf"
import {saveAs} from "file-saver"
import fileDownload from 'js-file-download';


const Content = () => {


    return (
        <div>
            <Navbar/>
            <div
                className={'flex flex-col justify-center items-center  bg-no-repeat bg-left py-28 p-8'}>
                <div className={''}>
                    <h1 className="text-7xl lg:text-8xl font-extrabold animate-pulse text-transparent bg-clip-text bg-gradient-to-b from-[#800080] to-[#ffc0cb] text-center">
                        Welcome
                    </h1>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#B2FEFA] to-[#0ED2F7] text-center">
                        I'm Kiattikhun Wantamard
                    </h1>
                </div>
                <div className={'mt-2'}>
                     <span className="relative">
                        <span
                            className="block absolute top-4 bottom-0 left-[60%] -skew-y-3 right-0 rounded-full bg-pink-500"
                            aria-hidden="true"></span>
                        <span className="relative text-white text-xl md:text-3xl text-white">
                            Interested in Fullstack Developer
                        </span>
                     </span>
                </div>
                <div className={'mt-5'}>
                    <a href={resume} target="_blank">
                        <button type="button"

                                className="inline-block mt-3 text-white  bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
                            Download Resume
                        </button>
                    </a>

                </div>
                <div
                    className={'grid place-items-center grid-cols-1 lg:grid-cols-2 mt-[12rem] md:mt-[40rem] w-full lg:w-2/4'}>
                    <div className={''}>
                        <img src={devpic} alt={'dev-pic'}/>
                    </div>
                    <div className={' place-items-center p-5'}>
                        <div>
                            <p className={'text-center  text-5xl md:text-7xl  text-transparent font-extrabold bg-clip-text bg-gradient-to-b from-[#fc4a1a] to-[#f7b733]'}>About
                                me</p>

                        </div>
                        <div id={'aboutSection'}>
                            <p className={' text-center text-lg font-medium mt-5 md:mt-12 text-white '}>
                                Hello my name is Kiattikhun Wantamard, I'm interested in a fullstack developer position
                                or a related position.I graduated in 2022.
                                I'm eager to learn everything.
                            </p>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}
export default Content