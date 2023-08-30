<script setup>
import NotFoundImage from "../assets/404-2021.svg";
</script>

<template>
  <div class="flex flex-col items-center justify-center px-5 space-y-5 my-10">
    <h1 class="text-[64px] leading-10 font-bold">404</h1>
    <img :src="NotFoundImage" alt="404 - Not Found" />
    <p class="text-center">
      Mohon maaf karena kami tidak dapat menemukan halaman yang Anda Harap
      periksa kembali apakah alamat URL yang Anda ketik telah benar.
    </p>
    <router-link
      to="/"
      class="text-white bg-[#2f8d03] px-8 py-3 w-full text-center rounded-full font-semibold"
    >
      Kembali ke Halaman Beranda
    </router-link>
  </div>
</template>
