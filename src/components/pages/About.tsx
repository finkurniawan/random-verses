import clsx from "clsx";
import {FiTwitter} from "react-icons/fi";
import {FaInstagram} from "react-icons/fa";
import {TbBrandLinkedin} from "react-icons/tb";
import LoadingSkeleton from "../ui/Loading.tsx";
import {Suspense} from "react";

const socialMedia: { name: string, link: string, icon?: JSX.Element }[] = [
    {
        name: "Twitter",
        link: "https://twitter.com/twitter",
        icon: <FiTwitter/>,
    },
    {
        name: "Instagram",
        link: "https://instagram.com/instagram",
        icon: <FaInstagram/>,
    },
    {
        name: "Linkedin",
        link: "https://linkedin.com/linkedin",
        icon: <TbBrandLinkedin/>,
    }
];

const About = () => {

    return (
        <section
            className={clsx("bg-gradient-to-br from-indigo-500 to-purple-600 h-screen flex items-center justify-center")}>
            <div className={clsx("shadow-xl w-[80vw] mx-auto rounded-md  space-y-5 bg-white p-10", "md:w-[40vw]")}>
                <Suspense fallback={<LoadingSkeleton/>}>
                    <div className={clsx("text-lg text-center font-bold")}>About</div>
                    <ul className={"flex flex-col gap-8"}>
                        {
                            socialMedia.map((item, index) => (
                                <li key={index}
                                    className={clsx("flex flex-row items-center gap-2  justify-center shadow-lg rounded-lg p-4 ring-1 ring-purple-600")}>{item.icon}
                                    <a
                                        href={item.link}>{item.name}</a></li>
                            ))
                        }
                    </ul>
                </Suspense>
            </div>
        </section>
    )
}

export default About;