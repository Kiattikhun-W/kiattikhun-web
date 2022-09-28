const Navbar = () => {
    return (
        <nav className={'fixed top-0 left-0 right-0  flex items-center justify-center w-full z-20 backdrop-blur-sm'}>
            <ul className={'flex flex-row items-center justify-center w-full my-4  text-md lg:text-2xl '}>
                <li className="px-4 font-semibold  text-slate-500 md:mx-12 hover:text-white hover:cursor-pointer">About
                    me
                </li>
                <li className="px-4 font-semibold   text-slate-500 md:mx-12 hover:text-white hover:cursor-pointer">Skills</li>
                <li className="px-4 font-semibold   text-slate-500 md:mx-12 hover:text-white hover:cursor-pointer">Project</li>
                <li className="px-4 font-semibold    text-slate-500 md:mx-12 hover:text-white hover:cursor-pointer">Experience</li>
            </ul>
        </nav>
    )
}
export default Navbar