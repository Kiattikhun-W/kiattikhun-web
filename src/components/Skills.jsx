import html5logo from "../assets/html-5.png";
import reactlogo from "../assets/react.png";
import express from "../assets/express.png";
import jslogo from "../assets/js.png";
import mysqllogo from "../assets/mysql.png";
import tailwindlogo from "../assets/tailwindlogo.png";
import boostraplogo from "../assets/bootstraplogo.png";
import robotframeworklogo from "../assets/rf3.png"

const Skills = () => {
    const skills = [{
        name: "HTML",
        logo: html5logo,
    }, {
        name: "REACT",
        logo: reactlogo,
    }, {
        name: "EXPRESS",
        logo: express,
    }, {
        name: "JAVASCRIPT",
        logo: jslogo,
    },
        {
            name: "MYSQL",
            logo: mysqllogo,
        },
        {
            name: "tailwind",
            logo: tailwindlogo,
        },
        {
            name: "Boostrap",
            logo: boostraplogo,
        },
        {
            name: 'Robot \n Framework',
            logo: robotframeworklogo,
        }
    ]


    return (
        <div>
            <div id={'skillsSection'}>

                <h1 className={'text-center  text-5xl md:text-7xl  text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-[#11998e] to-[#38ef7d] mt-[12rem] md:mt-[40rem]'}>
                    Skills
                </h1>
            </div>

            <div
                className={'mt-10 md:mt-24 grid grid-cols-4   gap-10 md:gap-16 w2/4  whitespace-pre-line '}>
                {skills.map(item => (
                    <div key={item.name}
                         className={'text-white text-center grayscale hover:grayscale-0 '}>
                        <img src={item?.logo} alt={item?.name} width={96}/>
                        <span className={'text-white font-extrabold  text-sm'}> {item?.name} </span>
                    </div>))}

            </div>

        </div>
    )
}
export default Skills