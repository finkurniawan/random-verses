import clsx from "clsx";
import {IoHomeOutline} from "react-icons/io5";
import {TbArrowsRandom} from "react-icons/tb";
import {MdOutlineInfo} from "react-icons/md";
import {useLocation} from "react-router-dom";
import {useState} from "react";
import {FiMenu} from "react-icons/fi";

const menu: { title: string, link: string, icon?: JSX.Element }[] = [
    {
        title: 'Home',
        link: '/',
        icon: <IoHomeOutline/>
    },
    {
        title: 'Random',
        link: '/random',
        icon: <TbArrowsRandom/>,
    },
    {
        title: "99 Names of Allah",
        link: "/99-names-of-allah",
        icon: <IoHomeOutline/>
    },
    {
        title: "Inspirational Quotes",
        link: "/inspirational-quotes",
        icon: <IoHomeOutline/>
    },
    {
        title: 'About',
        link: '/about',
        icon: <MdOutlineInfo/>
    },
]

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = useLocation().pathname;

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            <header className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
                <div className={clsx("w-[95vw] mx-auto flex justify-between items-center py-4")}>
                    <div className="text-xl font-bold text-purple-600"></div>
                    <button className="lg:hidden text-2xl" onClick={toggleMenu}>
                        <FiMenu/>
                    </button>
                </div>
                <nav className={clsx(
                    "absolute left-0 w-full bg-white shadow-lg transition-transform duration-300",
                    menuOpen ? "block" : "hidden",
                    "lg:relative lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-4 lg:font-semibold lg:text-gray-800 lg:bg-transparent lg:shadow-none"
                )}>
                    <ul className={clsx("flex flex-col gap-3 max-w-[90vw] mx-auto pb-5", "lg:flex-row lg:gap-4 lg:mx-0 lg:max-w-fit")}>
                        {
                            menu.map((item, index) => (
                                <li key={index}
                                    className={clsx(
                                        "px-4 py-2 rounded-full transition-colors duration-300",
                                        pathname === item.link ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-800",
                                        "hover:bg-purple-500 hover:text-white"
                                    )}
                                >
                                    <a href={item.link} className="flex flex-row items-center gap-2">
                                        {item.icon}
                                        {item.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </header>
            <div className="pt-16 lg:pt-20"></div>
        </>
    )
}

export default NavBar;
