import { defineStore } from "pinia";

export const useDeliveryAreaStore = defineStore("deliveryAreaStore", {
  state: () => ({
    deliveryArea: {
      title: "Area Pengantaran",
      area: [
        {
          id: 1,
          city: "DKI Jakarta",
          subdistrict: "Mencakup seluruh wilayah Jakarta",
          isHide: true,
        },
        {
          id: 2,
          city: "Tangerang (sebagian)",
          subdistrict:
            "Kecamatan Batuceper, Benda, Ciledug, Cipondoh, Karang Tengah, Larangan, Pinang",
          isHide: true,
        },
        {
          id: 3,
          city: "Tangerang Selatan (sebagian)",
          subdistrict:
            "Kecamatan Ciputat, Ciputat Timur, Pamulang, Pondok Aren, Serpong Utara",
          isHide: true,
        },
        {
          id: 4,
          city: "Depok (sebagian)",
          subdistrict: "Kecamatan Beji, Cimanggis, Cinere, Cipayung, Limo",
          isHide: true,
        },
        {
          id: 5,
          city: "Bekasi (sebagian)",
          subdistrict:
            "Kecamatan Bekasi Barat, Bekasi Selatan, Bekasi Utara, Jatisampurna, Medan Satria, Pondok Gede, Pondok Melati",
          isHide: true,
        },
      ],
    },
  }),
});
