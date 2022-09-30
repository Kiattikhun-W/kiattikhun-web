import resume from "../assets/resume.pdf";

const Header = () => {
    return (
        <div>
            <div id={'homeSection'}>
                <h1 className="text-7xl lg:text-8xl font-extrabold animate-pulse text-transparent bg-clip-text bg-gradient-to-b from-[#800080] to-[#ffc0cb] text-center">
                    Welcome
                </h1>
                <h1 className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#B2FEFA] to-[#0ED2F7] text-center">
                    I'm Kiattikhun Wantamard
                </h1>
            </div>
            <div className={'mt-2 text-center'}>
                     <span className="relative">
                        <span
                            className="block absolute top-4 bottom-0 left-[60%] -skew-y-3 right-0 rounded-full bg-pink-500"
                            aria-hidden="true"></span>
                        <span className="relative text-white text-xl md:text-3xl  text-white">
                            Interested in Fullstack Developer
                        </span>
                     </span>
            </div>
            <div className={'mt-5 text-center'}>
                <a href={resume} target="_blank">
                    <button type="button"

                            className="inline-block mt-3 text-white  bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">
                        Download Resume 📄
                    </button>
                </a>
            </div>
        </div>
    )
}
export default Header