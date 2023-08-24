import { defineStore } from "pinia";

export const useFaqStore = defineStore("faqStore", {
  state: () => ({
    faq: {
      title: "FAQ",
      description:
        "Pertanyaan umum seputar nakedpress, detox, dan cold pressed juice",
      qna: [
        {
          id: 1,
          question: "Apa itu nakedpress?",
          answer:
            "nakedpress adalah brand cold pressed juice yang berdiri sejak tahun 2015. Semua produk diformulasi oleh tim riset medis nakedpress berdasarkan jurnal medis dan studi kasus pelanggan yang selalu dikembangkan.",
          isHide: true,
        },
        {
          id: 2,
          question: "Apa itu detox nakedpress?",
          answer:
            "Puasa makan seharian dengan minum 8 botol jus nakedpress dan 2 liter air mineral. Cukup 1 hari setiap minggu untuk membantu hormon seimbang, yang menjaga kesehatan sistem imun, metabolisme dan reproduksi.",
          isHide: true,
        },
        {
          id: 3,
          question: "Bagaimana cara minum paket detox?",
          answer:
            "Minum 1 botol setiap 1-2 jam. Mulai dari botol nomor 1 antara jam 7-10 pagi, lanjut ke botol berikutnya sesuai nomor. Jika tidak habis 8 botol, bisa diminum esok harinya. Jangan lupa tetap minum air putih 2 liter dalam sehari. Cukup ulang 1 hari setiap minggu untuk merasakan manfaat maksimal.",
          isHide: true,
        },
        {
          id: 4,
          question: "Jam berapa jus bisa sampai ke rumah saya?",
          answer:
            "Estimasi jus sampai antara jam 7 pagi dan 11 siang. Waktu tiba tergantung kemacetan, cuaca, dan jumlah antaran. Disarankan pilih pengantaran sehari sebelum detox agar bisa mulai detox sepagi mungkin tanpa perlu menunggu kurir. Sebagai catatan, kami close order online jam 3 sore setiap hari untuk pengantaran esok hari.",
          isHide: true,
        },
        {
          id: 5,
          question: "Apakah jusnya aman dikonsumsi ibu hamil dan menyusui?",
          answer:
            "Semua jus nakedpress aman diminum ibu hamil dan menyusui. Proses produksi kami melalui pencucian berulang dengan air layak minum sehingga terhindar dari mikroorganisme yg ada pada sayur buah mentah.",
          isHide: true,
        },
        {
          id: 6,
          question: "Apakah jusnya aman dikonsumsi anak-anak?",
          answer:
            "Jus nakedpress aman diminum untuk anak usia 1 tahun ke atas. Baik untuk membiasakan rasa sayur sedari dini. Bisa mulai dari varian yg manis seperti sweet green, endless summer, silk.",
          isHide: true,
        },
      ],
    },
  }),
});
