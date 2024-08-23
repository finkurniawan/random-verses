import clsx from "clsx";
import {TbArrowsRandom} from "react-icons/tb";

const Surah = () => {

    return (
        <section>
            <div className={clsx("shadow-xl max-w-[90vw] mx-auto rounded-md p-4 space-y-5")}>
                <div className={clsx("text-lg text-center font-bold")}>Al-Fatihah: Surah 1</div>
                <div className={clsx("text-end")}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur consequuntur,
                    dicta dignissimos dolor doloremque id laudantium soluta tempore vero?
                </div>

                {/* Terjemahan */}
                <div className={clsx("font-bold")}>Terjemahan</div>
                <div>Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.
                </div>

                {/* Context */}
                <div className={clsx("font-bold")}>Context:</div>
                <div>Ayat ini adalah pembukaan dari Al-Qur'an, yang dikenal sebagai Basmala. Ini adalah pengantar untuk
                    setiap surah dalam Al-Qur'an kecuali Surah At-Tawbah.
                </div>

                {/* Tafsir */}
                <div className={clsx("font-bold")}>Tafsir:</div>
                <div>Menurut tafsir Ibn Kathir, Basmala merupakan pengantar yang menunjukkan pentingnya memulai segala
                    sesuatu dengan nama Allah.
                </div>

                <button
                    className={clsx("flex shadow-xl bg-slate-200 flex-row items-center gap-2  mx-auto rounded-lg px-3 mt-2 text-slate-700")}>
                    <TbArrowsRandom/> Rendom
                </button>
            </div>

        </section>
    )
}

export default Surah