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
            <div className={clsx("w-[90vw] mx-auto bg-slate-200 rounded-full")}>
                <ul className={clsx("flex flex-row justify-center items-center gap-10 my-3 font-xl font-bold text-slate-700 py-2")}>
                    {
                        menu.map((menu, index) => (
                            <li key={index}>{menu.title}</li>
                        ))
                    }
                </ul>
            </div>
        </header>
    )
}

export default NavBar