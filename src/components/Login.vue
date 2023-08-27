<template>
  <div class="flex flex-col px-6 py-8 gap-y-5">
    <div>
      <h1 class="text-[2rem] leading-10 font-bold">Selamat Datang</h1>
      <span class="mt-20 text-lg font-light"
        >Silahkan masuk ke dalam akun anda atau
        <router-link to="/account/register" class="text-[#338b16] font-semibold"
          >Buat Akun Baru</router-link
        >.</span
      >
    </div>
    <form action="post" class="flex flex-col gap-y-2">
      <InputField :type="emailType" :placeholder="emailPlaceholder" />
      <InputField :type="passwordType" :placeholder="passwordPlaceholder" />
    </form>
    <router-link class="text-[#338b16] font-bold" to="/account/forgot-password">
      Lupa Password?
    </router-link>
    <button
      class="w-full px-5 py-2.5 bg-[#338b16] text-white text-xl rounded-full"
    >
      Masuk
    </button>
  </div>
</template>

<script>
import InputField from "./InputField.vue";
export default {
  components: {
    InputField,
  },
  data() {
    return {
      isHide: false,
      emailPlaceholder: "Masukkan Email",
      passwordPlaceholder: "Masukkan Password",
      emailType: "email",
      passwordType: "password",
    };
  },
};
</script>
