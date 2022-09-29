import sutlog from '../assets/SUTremove.png'
import Tilt from 'react-parallax-tilt';

const Education = () => {
    return (
        <div>
            <div className={''}>
                <h1 className="text-5xl md:text-7xl font-extrabold  text-white text-center underline underline-offset-[1.2rem] p-4 decoration-yellow-300	">
                    Education
                </h1>
            </div>
            <Tilt
            >
                <div
                    className={'mt-9 bg-gradient-to-l from-[#ad5389] to-[#3c1053] border border-gray-700 p-4 md:p-24 rounded'}>
                    <h1 className={'text-xl md:text-2xl text-white text-center'}>
                        Bachelor's Degree in Information Science (Enterprise
                        Software) <span className={'text-white font-bold'}>GPAX 3.74</span>
                    </h1>
                    <h2 className={'text-lg font-extralight text-white text-center'}>
                        Suranaree University Of Technology (2018-2022)
                        <span>
                            <img src={sutlog}
                                 className={'inline'}
                                 width={36}
                            >
                            </img>
                        </span>
                    </h2>
                </div>
            </Tilt>

        </div>
    )
}
export default Education