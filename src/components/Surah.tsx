import React, {useState} from 'react';
import clsx from 'clsx';
import {TbArrowsRandom} from 'react-icons/tb';
import {useSurahs} from '../features/random/useSurahs';
import {Surah as SurahType} from '../types/types.ts';

const Surah: React.FC = () => {
    const {data, isLoading, isError} = useSurahs();
    const [randomSurah, setRandomSurah] = useState<SurahType | null>(null);

    const getRandomSurah = () => {
        if (data) {
            const randomIndex = Math.floor(Math.random() * data.length);
            setRandomSurah(data[randomIndex]);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching surahs</div>;

    return (
        <section className={clsx('mt-10')}>
            <div
                className={clsx(
                    'shadow-xl max-w-[90vw] mx-auto rounded-md px-4 py-10 space-y-5 bg-gradient-to-bl from-indigo-500 to-purple-600 text-slate-200',
                    'md:w-[40vw] md:px-14'
                )}
            >
                {randomSurah ? (
                    <>
                        <div className={clsx('text-lg text-center font-bold')}>
                            {randomSurah.surah_name}: Surah {randomSurah.surah_number}
                        </div>
                        <div className={clsx('text-end')}>
                            {randomSurah.verses[0].arabic_text}
                        </div>
                        <div>{randomSurah.verses[0].translation}</div>

                        {/* Context */}
                        <div className={clsx('font-bold')}>Context:</div>
                        <div>{randomSurah.verses[0].context}</div>

                        {/* Tafsir */}
                        <div className={clsx('font-bold')}>Tafsir:</div>
                        <div>{randomSurah.verses[0].tafsir}</div>
                    </>
                ) : (
                    <div>Pilih surah secara acak</div>
                )}

                <button
                    className={clsx('flex mx-auto pt-10')}
                    onClick={getRandomSurah}
                >
                    <TbArrowsRandom size={50} className={clsx('ring-1 ring-white p-1 rounded-full')}/>
                </button>
            </div>
        </section>
    );
};

export default Surah;
