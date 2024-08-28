import NameCard from "../../NameCard.tsx";

const names = [
    {
        "arab": "الرحمن",
        "indonesia": "Yang Maha Pengasih",
        "english": "The Most Gracious"
    },
    {
        "arab": "الرحيم",
        "indonesia": "Yang Maha Penyayang",
        "english": "The Most Merciful"
    },
    {
        "arab": "الملك",
        "indonesia": "Yang Maha Merajai",
        "english": "The King"
    },
    {
        "arab": "القدوس",
        "indonesia": "Yang Maha Suci",
        "english": "The Most Sacred"
    },
    {
        "arab": "السلام",
        "indonesia": "Yang Maha Memberi Kesejahteraan",
        "english": "The Source of Peace"
    },
    {
        "arab": "المؤمن",
        "indonesia": "Yang Maha Memberi Keamanan",
        "english": "The Infuser of Faith"
    },
    {
        "arab": "المهيمن",
        "indonesia": "Yang Maha Mengawasi",
        "english": "The Preserver of Safety"
    },
    {
        "arab": "العزيز",
        "indonesia": "Yang Maha Perkasa",
        "english": "The Almighty"
    },
    {
        "arab": "الجبار",
        "indonesia": "Yang Maha Memaksa",
        "english": "The Compeller"
    },
    {
        "arab": "المتكبر",
        "indonesia": "Yang Maha Besar",
        "english": "The Supreme"
    },
    {
        "arab": "الخالق",
        "indonesia": "Yang Maha Mencipta",
        "english": "The Creator"
    },
    {
        "arab": "البارئ",
        "indonesia": "Yang Maha Membentuk",
        "english": "The Evolver"
    },
    {
        "arab": "المصور",
        "indonesia": "Yang Maha Membentuk Rupa",
        "english": "The Fashioner"
    },
    {
        "arab": "الغفار",
        "indonesia": "Yang Maha Pengampun",
        "english": "The Forgiving"
    },
    {
        "arab": "القهار",
        "indonesia": "Yang Maha Menundukkan",
        "english": "The Subduer"
    },
    {
        "arab": "الوهاب",
        "indonesia": "Yang Maha Pemberi Karunia",
        "english": "The Supreme Bestower"
    },
    {
        "arab": "الرازق",
        "indonesia": "Yang Maha Memberi Rezeki",
        "english": "The Provider"
    },
    {
        "arab": "الفتاح",
        "indonesia": "Yang Maha Membuka",
        "english": "The Opener"
    },
    {
        "arab": "العليم",
        "indonesia": "Yang Maha Mengetahui",
        "english": "The All-Knowing"
    },
    {
        "arab": "القبيل",
        "indonesia": "Yang Maha Menahan",
        "english": "The Withholder"
    },
    {
        "arab": "الباسط",
        "indonesia": "Yang Maha Meluaskan",
        "english": "The Extender"
    },
    {
        "arab": "الخافض",
        "indonesia": "Yang Maha Merendahkan",
        "english": "The Reducer"
    },
    {
        "arab": "الرافع",
        "indonesia": "Yang Maha Meninggikan",
        "english": "The Exalter"
    },
    {
        "arab": "المعز",
        "indonesia": "Yang Maha Memuliakan",
        "english": "The Honorer"
    },
    {
        "arab": "المذل",
        "indonesia": "Yang Maha Menghinakan",
        "english": "The Dishonorer"
    },
    {
        "arab": "السمع",
        "indonesia": "Yang Maha Mendengar",
        "english": "The All-Hearing"
    },
    {
        "arab": "البصير",
        "indonesia": "Yang Maha Melihat",
        "english": "The All-Seeing"
    },
    {
        "arab": "الحكم",
        "indonesia": "Yang Maha Menilai",
        "english": "The Judge"
    },
    {
        "arab": "العدل",
        "indonesia": "Yang Maha Adil",
        "english": "The Utterly Just"
    },
    {
        "arab": "اللطيف",
        "indonesia": "Yang Maha Halus",
        "english": "The Subtle One"
    },
    {
        "arab": "الخبير",
        "indonesia": "Yang Maha Mengenal",
        "english": "The All-Aware"
    },
    {
        "arab": "الحليم",
        "indonesia": "Yang Maha Penyantun",
        "english": "The Forbearing"
    },
    {
        "arab": "العظيم",
        "indonesia": "Yang Maha Agung",
        "english": "The Magnificent"
    },
    {
        "arab": "الغفور",
        "indonesia": "Yang Maha Pengampun",
        "english": "The Forgiving"
    },
    {
        "arab": "الشكور",
        "indonesia": "Yang Maha Bersyukur",
        "english": "The Appreciative"
    },
    {
        "arab": "العلي",
        "indonesia": "Yang Maha Tinggi",
        "english": "The Most High"
    },
    {
        "arab": "المتعال",
        "indonesia": "Yang Maha Tinggi",
        "english": "The Self Exalted"
    },
    {
        "arab": "البر",
        "indonesia": "Yang Maha Baik",
        "english": "The Source of All Goodness"
    },
    {
        "arab": "التواب",
        "indonesia": "Yang Maha Penerima Taubat",
        "english": "The Ever-Pardoning"
    },
    {
        "arab": "المنتقم",
        "indonesia": "Yang Maha Pembalas",
        "english": "The Avenger"
    },
    {
        "arab": "العفو",
        "indonesia": "Yang Maha Penghapus Dosa",
        "english": "The Pardoner"
    },
    {
        "arab": "الرؤوف",
        "indonesia": "Yang Maha Pengasih",
        "english": "The Compassionate"
    },
    {
        "arab": "مالك",
        "indonesia": "Yang Maha Memiliki",
        "english": "The Owner"
    },
    {
        "arab": "القادر",
        "indonesia": "Yang Maha Kuasa",
        "english": "The Omnipotent"
    },
    {
        "arab": "المقتدر",
        "indonesia": "Yang Maha Berkuasa",
        "english": "The Powerful"
    },
    {
        "arab": "المقدم",
        "indonesia": "Yang Maha Mendahulukan",
        "english": "The Expediter"
    },
    {
        "arab": "المؤخر",
        "indonesia": "Yang Maha Mengakhirkan",
        "english": "The Delayer"
    },
    {
        "arab": "الأول",
        "indonesia": "Yang Maha Awal",
        "english": "The First"
    },
    {
        "arab": "الآخر",
        "indonesia": "Yang Maha Akhir",
        "english": "The Last"
    },
    {
        "arab": "الظاهر",
        "indonesia": "Yang Maha Nyata",
        "english": "The Manifest"
    },
    {
        "arab": "الباطن",
        "indonesia": "Yang Maha Tersembunyi",
        "english": "The Hidden"
    },
    {
        "arab": "الوالي",
        "indonesia": "Yang Maha Mengatur",
        "english": "The Sole Governor"
    }
]

const NamesOfAllah = () => {
    return (
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {names.map((name, index) => (
                <NameCard
                    key={index}
                    arab={name.arab}
                    indonesia={name.indonesia}
                    english={name.english}
                />
            ))}
        </div>
    )
}

export default NamesOfAllah;