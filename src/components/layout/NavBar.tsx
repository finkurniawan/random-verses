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
        <header>
            <div className={clsx("w-[90vw] mx-auto ")}>
                <ul className={clsx("flex flex-row justify-center items-center gap-2 my-3 font-xl font-bold text-slate-700 py-2")}>
                    {
                        menu.map((menu, index) => (
                            <li key={index}
                                className={clsx("bg-slate-100 rounded-full px-3",
                                    "hover:text-blue-500",
                                    pathname == menu.link && "text-blue-500")}><a
                                href={menu.link}
                                className={clsx("flex flex-row items-center gap-1")}>{menu.icon} {menu.title}</a></li>
                        ))
                    }
                </ul>
            </div>
            <div className={clsx("py-px bg-slate-200 mb-10")}></div>
        </header>
    )
}

export default NavBar