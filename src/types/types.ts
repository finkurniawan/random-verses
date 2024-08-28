export interface Verse {
    verse_number: number;
    arabic_text: string;
    translation: string;
    context: string;
    tafsir: string;
    asbab_un_nuzul: string | null;
    bacaan_indonesia: string;
    bacaan_latin: string;
}

export interface Surah {
    surah_number: number;
    surah_name: string;
    surah_translation: string;
    verses: Verse[];
}
