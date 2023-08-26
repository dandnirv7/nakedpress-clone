<template>
  <div class="px-5 mb-10">
    <router-link to="/pages/location">
      <div class="rounded-xl bg-[#13452c] flex flex-col relative p-5 gap-10">
        <div class="relative">
          <h1 class="text-[#e5f4c9] font-bold text-[2rem] mb-5">Lokasi Toko</h1>
          <div class="block w-40 mb-5 ml-16">
            <img src="../assets/store-location.png" alt="" />
          </div>
          <span
            class="border-b-2 border-[#e5f4c9] font-bold text-xl text-[#e5f4c9]"
          >
            Selengkapnya
          </span>
        </div>
      </div>
    </router-link>
    <router-link to="/pages/location">
      <div
        class="rounded-xl bg-[#ffe866] flex flex-col relative p-5 gap-10 mt-8"
      >
        <div class="relative">
          <h1 class="text-black font-bold text-[2rem] mb-5">Tentang Kami</h1>
          <div class="pl-8 mb-5 w-60">
            <img src="../assets/about-us.png" alt="" />
          </div>
          <span class="text-xl font-bold text-black border-b-2 border-black">
            Selengkapnya
          </span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Lokasi Toko",
    };
  },
};
</script>
