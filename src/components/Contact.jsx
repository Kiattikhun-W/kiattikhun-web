import revelsoft from "../assets/revelsoft.png";

const Contact = () => {
    return (
        <div>
            <div id={'contactSection'}>

                <h1 className={'text-center  text-5xl md:text-7xl  text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-[#7F00FF] to-[#E100FF] mt-[12rem] md:mt-[19rem]'}>
                    Contact Me
                </h1>
            </div>
            <div
                id={'experienceSection'}
                className={'mt-9 bg-transparent border border-gray-700 p-4 md:p-24 rounded'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <div>
                        <button
                            onClick={() => window.open('mailto:kiattikhun.wantamard@gmail.com')}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-4 rounded-full">
                            contact me via email 📧
                        </button>
                        <p className={'pt-3 text-white font-bold text-center'}>
                            Phone : +669-8881-6208
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Contact