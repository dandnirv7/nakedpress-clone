<template>
  <div class="flex flex-col px-6 py-8 gap-y-5">
    <div>
      <h1 class="text-[2rem] leading-10 font-extrabold">Daftar Akun Baru</h1>
      <div class="flex flex-col mt-2.5 gap-y-2">
        <div class="flex flex-row gap-x-3">
          <vue-feather type="check" stroke="#338b16"></vue-feather>
          <p class="font-light">Pemberitahuan diskon khusus</p>
        </div>
        <div class="flex flex-row gap-x-3">
          <vue-feather type="check" stroke="#338b16"></vue-feather>
          <p class="font-light">Pengisian data selanjutnya otomatis</p>
        </div>
        <div class="flex flex-row gap-x-3">
          <vue-feather type="check" stroke="#338b16"></vue-feather>
          <p class="font-light">Cek riwayat pembelian & status pengiriman</p>
        </div>
      </div>
    </div>
    <form action="post" class="flex flex-col gap-y-2">
      <InputField :type="emailType" :placeholder="emailPlaceholder" />
      <InputField :type="textType" :placeholder="firstNamePlaceholder" />
      <InputField :type="textType" :placeholder="lastNamePlaceholder" />
      <InputField :type="passwordType" :placeholder="passwordPlaceholder" />
      <InputField
        :type="passwordType"
        :placeholder="confirmPasswordPlaceholder"
      />
    </form>
    <button
      class="w-full px-5 py-2.5 bg-[#338b16] text-white text-xl rounded-full"
    >
      Daftar
    </button>
    <span class="text-center"
      >Sudah punya akun?
      <router-link class="text-[#338b16] font-bold" to="/account/login">
        Login
      </router-link>
    </span>
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
      emailPlaceholder: "Email",
      firstNamePlaceholder: "Nama Depan",
      lastNamePlaceholder: "Nama Belakang",
      passwordPlaceholder: "Password",
      confirmPasswordPlaceholder: "Ulangi Password",
      emailType: "email",
      passwordType: "password",
      textType: "text",
    };
  },
};
</script>
