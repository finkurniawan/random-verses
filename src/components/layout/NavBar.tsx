import clsx from "clsx";
import {IoHomeOutline} from "react-icons/io5";
import {TbArrowsRandom} from "react-icons/tb";
import {MdOutlineInfo} from "react-icons/md";
import {useLocation} from "react-router-dom";

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
        title: 'About',
        link: '/about',
        icon: <MdOutlineInfo/>
    }
]

const NavBar = () => {
    const pathname = useLocation().pathname;

    return (
        <header className="bg-white shadow-lg">
            <div className={clsx("w-[95vw] mx-auto")}>
                <ul className={clsx("flex flex-row justify-center items-center gap-4 font-semibold text-gray-800 py-6")}>
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
            </div>
            {/*<div className={clsx("py-1 bg-purple-200")}></div>*/}
        </header>
    )
}

export default NavBar