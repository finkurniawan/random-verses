import clsx from "clsx";

const menu: { title: string, link: string }[] = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Rendom First',
        link: '/rendom-first'
    },
    {
        title: 'Other',
        link: '/other'
    }
]

const NavBar = () => {


    return (
        <header>
            <div className={clsx("w-[90vw] mx-auto ")}>
                <ul className={clsx("flex flex-row justify-center items-center gap-10 my-3 font-xl font-bold text-slate-700 py-2")}>
                    {
                        menu.map((menu, index) => (
                            <li key={index} className={clsx("bg-slate-100 rounded-full px-3")}>{menu.title}</li>
                        ))
                    }
                </ul>
            </div>
            <div className={clsx("py-px bg-slate-200 mb-10")}></div>
        </header>
    )
}

export default NavBar