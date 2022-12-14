import devpic from "../assets/dev-male.png";
import Tilt from 'react-parallax-tilt';

const About = () => {
    return (
        <div
            className={'grid place-items-center grid-cols-1 lg:grid-cols-2 mt-[12rem] md:mt-[22rem] w-full lg:w-2/4'}>
            <div data-aos="fade-right" data-aos-delay="50" className={''} id={'aboutSection'}>
                <Tilt

                >
                    <img src={devpic} alt={'dev-pic'}/>

                </Tilt>
            </div>
            <div className={' place-items-center p-5'}>
                <div>
                    <p className={'text-center  text-5xl md:text-7xl  text-transparent font-extrabold bg-clip-text bg-gradient-to-b from-[#7F00FF] to-[#E100FF]'}>About
                        me</p>

                </div>
                <div>
                    <p className={' text-xl font-medium mt-5 md:mt-12 text-white '}>
                        👋 Hello my name is Kiadtikhun Wanthamat, you can call me toey (bai-toey).I'm interested in a
                        fullstack developer position or a related position.I graduated in 2022.
                        I'm eager to learn everything.
                    </p>
                </div>
            </div>

        </div>)
}
export default About