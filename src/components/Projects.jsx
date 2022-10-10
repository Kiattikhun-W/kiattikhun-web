import ImageGallery from 'react-image-gallery';
import projectImg from '../assets/projects1.png'
import ohQuizImg from '../assets/ohQuiz.png'
const Projects = () => {
    return (
        <div className={''}>
            <div id={'projectSection'}>
                <h1 className={'underline underline-offset-8  decoration-yellow-500 text-center text-5xl md:text-7xl  text-white font-extrabold mt-[12rem] md:mt-[22rem]'}>
                    PROJECT
                </h1>
            </div>
            <div
                className={'mt-10 md:mt-24 grid grid-cols-1  xl:grid-cols-2  gap-10 md:gap-2 xl:mx-24  '}>
                <figure
                    className={'text-white text-center'}>
                    <img src={projectImg} alt={''} width={800}/>
                </figure>
                <div className={'  '}>
                    <h1 className={'text-4xl text-white  text-center lg:text-left  underline underline-offset-8  decoration-orange-500 py-3'}>The
                        HEAVEN 🏠</h1>
                    <p className={'text-white font-thin'}> Web application to manage condo or dormitory residents,
                        developed with
                        ReactJS, NestJs, Line LIFF and
                        PostgreSQL database, my responsibility is to develop admin website with ReactJS .
                    </p>

                    <p className={'text-white mt-3'}> for this project can use it in 2 ways.
                    </p>
                    <p className={'list-decimal text-white '}>
                        <li>
                            Line Official Account (For User)
                        </li>
                        <li>
                            Admin Website (For Admin)
                        </li>
                    </p>
                    <p className={'text-gray-100  font-thin'}>
                        *You can visit the project in the video on my youtube channel.
                    </p>
                    <div className={'flex flex-row justify-center lg:justify-start'}>
                        <div className={'mt-2 '}>
                            <a href={'https://youtu.be/09oyn5eEbgk'} target={'_blank'}>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                                    Youtube ▶
                                </button>
                            </a>
                            {/*<button*/}
                            {/*    className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">*/}
                            {/*    Gallery 🌷*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={'mt-10 md:mt-24 grid grid-cols-1  xl:grid-cols-2  gap-10 md:gap-2 xl:mx-24  '}>
                <figure
                    className={'text-white text-center'}>
                    <img src={ohQuizImg} alt={''} width={800}/>
                </figure>
                <div className={'  '}>
                    <h1 className={'text-4xl text-white  text-center lg:text-left  underline underline-offset-8  decoration-orange-500 py-3'}>Oh! Quiz</h1>
                    <p className={'text-white font-thin'}> A full stack project i do when I have free time.
                         Zup! quiz is a web application where you can choose the test you want to do. And your score will be displayed when you complete it.


                    </p>

                    <p className={'text-white mt-3'}> Tech Stack.
                    </p>
                    <p className={'list-decimal text-white '}>
                        <li>
                           REACT
                        </li>
                        <li>
                            EXPRESS
                        </li>
                        <li>
                            MYSQL
                        </li>
                        <li>
                            TAILWIND
                        </li>
                    </p>
                    <p className={'text-gray-100  font-thin'}>
                        *You can visit the project in my github.

                    </p>
                    <p className={'text-purple-400'}>
                        However, this project is under development.
                    </p>
                    <div className={'flex flex-row justify-center lg:justify-start'}>
                        <div className={'mt-2 '}>
                            <a href={'https://github.com/Kiattikhun-W/react-quiz-frontend/'} target={'_blank'}>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    GITHUB Front-end
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Projects