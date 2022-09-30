import Tilt from "react-parallax-tilt";
import revelsoft from '../assets/revelsoft.png'

const Experience = () => {
    return (
        <div className={'mt-20'}>
            <div className={''}>
                <h1 className="text-5xl md:text-7xl font-extrabold  text-white text-center underline underline-offset-[1.2rem] p-4 decoration-yellow-300">
                    Experience
                </h1>
            </div>
            <Tilt
            >

                <div
                    id={'expSection'}
                    data-aos="flip-left"
                    data-aos-delay={100}
                    className={'mt-9 bg-slate-900 border border-gray-700 p-4 md:p-24 rounded'}>
                    <div className={'flex flex-col justify-center items-center'}>
                        <img src={revelsoft}
                             className={'inline '}
                             width={140}
                        >
                        </img>
                        <div>
                            <h1 className={'text-xl font-extrabold md:text-2xl text-white text-center'}>
                                Web developer (intership)
                            </h1>
                            <h2 className={'text-lg font-bold text-white text-center'}>
                                REVEL SOFT
                            </h2>
                            <p className={'text-lg font-bold  text-white text-center'}>Nakhon
                                ratchasrima, Thailand</p>
                            <p className={'text-md font-extralight text-white text-center'}>Developed a small part of
                                website using Javascript with Express and React </p>
                        </div>
                    </div>

                </div>
            </Tilt>

        </div>
    )
}
export default Experience