const Navbar = () => {
    const navId = ['About', 'Skills', 'Project', 'Experience', 'Contact']
    const handleNav = (name) => {
        let sectionId = `${name.toLowerCase()}Section`
        document.getElementById(sectionId).scrollIntoView({behavior: "smooth"})
    }
    return (
        <nav className={'fixed top-0 left-0 right-0  flex items-center justify-center w-full z-20 backdrop-blur-sm'}>
            <ul className={'flex flex-row items-center justify-center w-full my-4  text-md lg:text-2xl '}>
                {navId.map((nav) => <li
                    key={nav}
                    onClick={() => handleNav(nav)}
                    className="px-4 font-semibold  text-slate-500 md:mx-12 hover:text-white hover:cursor-pointer">{nav}

                </li>)}

            </ul>
        </nav>
    )
}
export default Navbar