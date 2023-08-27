<template>
  <div class="flex flex-col gap-6 p-5">
    <div>
      <h1 class="text-[2rem] leading-10 font-bold">Lupa Password</h1>
      <p class="mt-2 text-lg font-light">
        Masukkan email yang terdaftar. Kami akan mengirimkan kode verifikasi
        untuk mengatur ulang kata sandi
      </p>
    </div>
    <form action="post" class="flex flex-col gap-y-2">
      <InputField :type="email" :placeholder="emailPlaceholder" />
    </form>
    <button
      class="w-full px-5 py-2 bg-[#338b16] text-white text-xl rounded-full"
    >
      Lanjut
    </button>
    <span class="text-center"
      >Kembali ke
      <router-link class="text-[#338b16] font-bold" to="/account/login">
        login
      </router-link>
    </span>
  </div>
</template>

<script>
import InputField from "../components/InputField.vue";
export default {
  components: {
    InputField,
  },
  data() {
    return {
      emailPlaceholder: "Email",
    };
  },
};
</script>
