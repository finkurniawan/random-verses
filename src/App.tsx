import './App.css'
import clsx from "clsx";
import {FiRepeat} from "react-icons/fi";
import {FaMagnifyingGlass} from "react-icons/fa6";
import {MdOutlineGTranslate} from "react-icons/md";
import {IoKeySharp} from "react-icons/io5";
import {useEffect, useState} from "react";

function App() {
    const [index, setIndex] = useState(0);
    const text = "Find\u00A0Relevant\u00A0Verses\u00A0Every\u00A0Day";
    const characters = text.split("");

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < characters.length) {
                setIndex(index + 1);
            } else {
                setTimeout(() => setIndex(0), 100)
            }
        }, 100);

        return () => clearInterval(interval);
    }, [index]);

    return (
        <div>
            <main className="flex-grow">
                <section
                    className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-5xl font-bold leading-tight mb-4">  {characters.map((char, i) => (
                            <span
                                key={i}
                                className={`inline-block ${i < index ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                            >
          {char}
        </span>
                        ))}</h2>
                        <p className="text-lg mb-8">
                            Sometimes, a verse from the Quran can be incredibly relevant to our current situation. This
                            app provides you with random verses that can inspire and motivate you.
                        </p>
                        <a href="#features"
                           className="bg-white text-purple-700 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition">Learn
                            More</a>
                    </div>
                </section>

                <section className="py-12 bg-gray-100" id="features">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-semibold text-purple-500 mb-8 flex flex-row gap-2 justify-center items-center">
                            <IoKeySharp/> Key <span
                            className="text-blue-500">Features</span></h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div
                                className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105 border-l-4 border-purple-500">
                                <h3 className="text-xl font-semibold text-gray-700 flex flex-row gap-2 justify-center items-center">
                                    <FiRepeat/> Daily
                                    Verse</h3>
                                <p className="mt-2 text-gray-600">
                                    Discover a random verse each day that can motivate and offer new insights into your
                                    life.
                                </p>
                            </div>
                            <div
                                className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105 border-l-4 border-indigo-500">
                                <h3 className="text-xl font-semibold text-gray-700 flex flex-row gap-2 justify-center items-center">
                                    <MdOutlineGTranslate/> Recitation
                                    &
                                    Translation
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    The verse is provided in Arabic text along with its translation in English.
                                </p>
                            </div>
                            <div
                                className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105 border-l-4 border-pink-500">
                                <h3 className="text-xl font-semibold text-gray-700 flex flex-row gap-2 justify-center items-center">
                                    <FaMagnifyingGlass/> Context
                                    & Tafsir</h3>
                                <p className="mt-2 text-gray-600">
                                    Explanation and tafsir to provide a deeper understanding of each verse.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={clsx("w-[90vw] my-10 mx-auto", "md:w-[70vw]")}>
                    <div
                        className="py-12 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 text-white rounded-lg"
                        id="about">
                        <div className={clsx("container mx-auto px-4 text-center", "md:px-10")}>
                            <h2 className="text-4xl font-extrabold mb-6">About Our App</h2>
                            <p className="text-lg mb-8 leading-relaxed">
                                The Random Quran Surahs app is designed to help you find verses that may be relevant to
                                your
                                current circumstances. With each visit, you'll be presented with a verse complete with
                                recitation, translation, context, and tafsir.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-t-xl"
                         id="contact">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-extrabold mb-6">Contact Us</h2>
                        <p className="text-lg mb-8 leading-relaxed">
                            We’d love to hear from you! If you have any questions or feedback, feel free to reach
                            out to
                            us using the contact information below.
                        </p>
                        <a href="mailto:contact@example.com"
                           className="bg-white text-purple-700 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition">
                            contact@example.com
                        </a>
                    </div>
                </section>


            </main>
        </div>
    )
}

export default App
