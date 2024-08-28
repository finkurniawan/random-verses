import React from 'react';
import QuoteCard from '../../components/QuoteCard.tsx';

const quotes = [
    {
        "quote": "Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya.",
        "author": "QS. Al-Baqarah 286"
    },
    {"quote": "Sabar itu adalah separuh dari iman.", "author": "Hadis"},
    {"quote": "Sesungguhnya setelah kesulitan ada kemudahan.", "author": "QS. Al-Insyirah 6"},
    {"quote": "Doa adalah senjata orang beriman.", "author": "Hadis"},
    {"quote": "Cinta adalah sumber kekuatan.", "author": "Hadis"},
    {
        "quote": "Dan tidaklah sama kebaikan dan keburukan. Tolaklah (keburukan) dengan cara yang lebih baik.",
        "author": "QS. Fussilat 34"
    },
    {
        "quote": "Seseorang yang memudahkan urusan orang lain, Allah akan memudahkan urusannya di dunia dan akhirat.",
        "author": "Hadis"
    },
    {"quote": "Ilmu adalah cahaya, dan kebodohan adalah kegelapan.", "author": "Hadis"},
    {"quote": "Setiap amal baik adalah sedekah.", "author": "Hadis"},
    {"quote": "Janganlah kamu bersedih, sesungguhnya Allah bersama kita.", "author": "QS. At-Taubah 40"},
    {
        "quote": "Sesungguhnya Allah tidak melihat kepada bentuk tubuhmu dan rupa parasmu, tetapi Allah melihat kepada hati dan amalmu.",
        "author": "Hadis"
    },
    {"quote": "Tidak ada yang lebih baik bagi seorang mukmin daripada berdoa kepada Allah.", "author": "Hadis"},
    {"quote": "Janganlah kamu putus asa dari rahmat Allah.", "author": "QS. Az-Zumar 53"},
    {"quote": "Sebaik-baik manusia adalah yang paling banyak manfaatnya bagi manusia lainnya.", "author": "Hadis"},
    {
        "quote": "Keberanian bukan berarti tidak merasa takut, tapi kemampuan untuk menghadapi rasa takut.",
        "author": "Hadis"
    },
    {"quote": "Allah bersama orang-orang yang sabar.", "author": "QS. Al-Baqarah 153"},
    {"quote": "Kesabaran adalah kunci kepada kejayaan.", "author": "Hadis"},
    {"quote": "Harta bukanlah ukuran kemuliaan seseorang, melainkan takwa dan amal baik.", "author": "Hadis"},
    {"quote": "Senyummu kepada saudaramu adalah sedekah.", "author": "Hadis"},
    {"quote": "Bersedekah tidak akan mengurangi harta, tetapi akan menambah berkah.", "author": "Hadis"},
    {"quote": "Satu langkah ke arah kebaikan lebih baik daripada seribu langkah menuju kesesatan.", "author": "Hadis"},
    {
        "quote": "Allah tidak mengubah keadaan suatu kaum kecuali kaum itu sendiri yang mengubahnya.",
        "author": "QS. Ar-Ra'd 11"
    },
    {"quote": "Berbuat baiklah kepada siapa pun, dan Allah akan berbuat baik kepadamu.", "author": "Hadis"},
    {"quote": "Seseorang yang tidak bersyukur kepada manusia, tidak akan bersyukur kepada Allah.", "author": "Hadis"},
    {"quote": "Jangan menilai seseorang hanya dari apa yang terlihat, tapi lihatlah hatinya.", "author": "Hadis"},
    {
        "quote": "Kehidupan ini adalah ujian, dan setiap ujian adalah kesempatan untuk meningkatkan iman kita.",
        "author": "Hadis"
    },
    {
        "quote": "Orang yang paling dekat dengan Allah adalah orang yang paling bermanfaat bagi sesama.",
        "author": "Hadis"
    },
    {"quote": "Hidup yang bahagia adalah hidup yang dipenuhi dengan rasa syukur dan sabar.", "author": "Hadis"},
    {"quote": "Kepada Allah kita meminta pertolongan dan petunjuk.", "author": "QS. Al-Fatihah 5"},
    {"quote": "Tidak ada kemuliaan tanpa keikhlasan.", "author": "Hadis"},
    {"quote": "Setiap kebaikan yang dilakukan akan dibalas dengan yang lebih baik oleh Allah.", "author": "Hadis"},
    {"quote": "Keberhasilan tidak datang dengan sendirinya, tetapi dengan usaha dan doa.", "author": "Hadis"},
    {"quote": "Keberanian terbesar adalah kemampuan untuk memaafkan.", "author": "Hadis"},
    {"quote": "Jangan biarkan kemarahan menguasai dirimu; kontrol emosi dan bersikaplah bijaksana.", "author": "Hadis"},
    {"quote": "Jangan meremehkan kebaikan sekecil apa pun, meski hanya sekedar senyuman.", "author": "Hadis"},
    {"quote": "Setiap hari adalah kesempatan baru untuk mendekatkan diri kepada Allah.", "author": "Hadis"},
    {"quote": "Sabar adalah kunci dalam menghadapi ujian hidup.", "author": "Hadis"},
    {"quote": "Hiduplah dengan penuh syukur, dan Allah akan menambah nikmat-Nya.", "author": "Hadis"},
    {"quote": "Kebaikan yang kamu lakukan tidak akan sia-sia di hadapan Allah.", "author": "Hadis"},
    {"quote": "Pendidikan adalah hak setiap Muslim, baik laki-laki maupun perempuan.", "author": "Hadis"},
    {"quote": "Tegakkan shalat dan jadikan itu sebagai penolong di dunia dan akhirat.", "author": "Hadis"},
    {"quote": "Keluarga adalah tiang utama dalam membentuk karakter yang baik.", "author": "Hadis"},
    {"quote": "Sesungguhnya orang-orang yang beriman itu bersaudara.", "author": "QS. Al-Hujurat 10"},
    {"quote": "Rasa cinta dan kasih sayang adalah dasar hubungan yang baik.", "author": "Hadis"},
    {"quote": "Kebaikan tidak akan hilang, dan kejahatan tidak akan mendapatkan kemenangan.", "author": "Hadis"},
    {"quote": "Hidup ini tidak selamanya mudah, tapi iman akan selalu menjadi pegangan.", "author": "Hadis"},
    {"quote": "Perbanyaklah istighfar, dan Allah akan menghapus dosa-dosamu.", "author": "Hadis"},
    {"quote": "Selalu bersyukur dan sabar dalam menghadapi segala ujian.", "author": "Hadis"},
    {
        "quote": "Seseorang yang mendekatkan diri kepada Allah dengan amal shaleh akan mendapatkan kemuliaan.",
        "author": "Hadis"
    },
    {"quote": "Doa adalah sumber kekuatan dan ketenangan hati.", "author": "Hadis"},
    {
        "quote": "Jangan pernah putus asa dari rahmat Allah, meskipun dalam keadaan yang paling sulit.",
        "author": "Hadis"
    },
    {"quote": "Hargai setiap nikmat yang Allah berikan, sekecil apapun itu.", "author": "Hadis"},
    {"quote": "Allah tidak pernah mengabaikan doa hamba-Nya.", "author": "Hadis"},
    {"quote": "Keberhasilan di dunia adalah bagian dari ujian menuju akhirat.", "author": "Hadis"},
    {"quote": "Berbuat baik kepada orang lain akan mendatangkan kebaikan bagi dirimu sendiri.", "author": "Hadis"},
    {"quote": "Setiap amalan baik akan mendapatkan balasan yang lebih baik di sisi Allah.", "author": "Hadis"},
    {
        "quote": "Allah memberikan kemudahan kepada orang-orang yang berusaha dengan tekun dan ikhlas.",
        "author": "Hadis"
    },
    {"quote": "Keberanian adalah bagian dari iman, dan iman adalah bagian dari hidup.", "author": "Hadis"},
    {"quote": "Hiduplah dengan penuh kasih sayang dan perhatian kepada sesama.", "author": "Hadis"},
    {"quote": "Kesalahan adalah bagian dari proses belajar, dan Allah Maha Pengampun.", "author": "Hadis"}
];


const InspirationalQuotes: React.FC = () => {
    return (
        <div className="min-h-screen bg-light p-8 flex flex-col items-center justify-center gap-6 mt-20">
            <h1 className="text-3xl font-bold text-dark mb-6 animate-fade-in">Inspirational Islamic Quotes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {quotes.map((quote, index) => (
                    <QuoteCard
                        key={index}
                        quote={quote.quote}
                        author={quote.author}
                    />
                ))}
            </div>
        </div>
    );
};

export default InspirationalQuotes;
