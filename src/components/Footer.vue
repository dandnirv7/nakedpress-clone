<script>
import Whatsapp from "./Whatsapp.vue";
export default {
  components: {
    Whatsapp,
  },
};
</script>

<template>
  <footer class="mt-8">
    <Whatsapp />
    <div
      class="p-5 bg-[#13452c] flex flex-col items-start justify-center gap-y-8 text-white pb-20"
    >
      <a href="https://nakedpress.co">
        <img src="../assets/np-logo-footer.png" alt="logo footer" />
      </a>
      <p>
        nakedpress adalah Detox Cold Pressed Juice sangat bermanfaat karena
        tinggi nutrisi dari sayur dan buah segar.
      </p>
      <div class="flex flex-col gap-y-4">
        <a
          href="https://www.nakedpress.co/collections/all"
          class="font-semibold"
          >Belanja</a
        >
        <a
          href="https://www.nakedpress.co/collections/langganan"
          class="font-semibold"
          >Langganan</a
        >
        <a href="https://www.nakedpress.co/blogs/stories" class="font-semibold"
          >Blog</a
        >
        <a
          href="https://www.nakedpress.co/pages/nakedwellness"
          class="font-semibold"
          >Corporate Wellness</a
        >
        <a href="https://www.nakedpress.co/pages/bantuan" class="font-semibold"
          >Bantuan</a
        >
        <a
          href="https://www.nakedpress.co/blogs/stories/tentang-nakedpress"
          class="font-semibold"
          >Tentang nakedpress</a
        >
        <a href="https://www.nakedpress.co/pages/location" class="font-semibold"
          >Lokasi Toko</a
        >
        <a
          href="https://www.nakedpress.co/pages/payment-confirmation"
          class="font-semibold"
          >Konfirmasi Pembayaran</a
        >
        <a href="https://www.nakedpress.co/pages/career" class="font-semibold"
          >Join Our Team</a
        >
      </div>
      <div class="flex flex-col gap-y-4">
        <div class="flex flex-row gap-x-6">
          <a href="https://www.facebook.com/NPjuicery/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="white"
                d="M36 20.0978C36 11.2072 28.8366 4 20 4C11.1634 4 4 11.2072 4 20.0978C4 28.1327 9.85097 34.7924 17.5 36V24.7511H13.4375V20.0978H17.5V16.5513C17.5 12.5168 19.8887 10.2882 23.5434 10.2882C25.294 10.2882 27.125 10.6026 27.125 10.6026V14.5642H25.1074C23.1198 14.5642 22.5 15.8051 22.5 17.0781V20.0978H26.9375L26.2281 24.7511H22.5V36C30.149 34.7924 36 28.1327 36 20.0978Z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/nakedpressjuicery/"
            target="_blank"
            class="np-socialmedia-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="white"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 4C15.6547 4 15.1098 4.01842 13.4032 4.09628C11.7002 4.17396 10.5371 4.44446 9.51939 4.84001C8.46725 5.24884 7.57497 5.79593 6.68542 6.68542C5.79593 7.57497 5.24884 8.46725 4.84001 9.51939C4.44446 10.5371 4.17396 11.7002 4.09628 13.4032C4.01842 15.1098 4 15.6547 4 20C4 24.3453 4.01842 24.8902 4.09628 26.5968C4.17396 28.2998 4.44446 29.4629 4.84001 30.4806C5.24884 31.5327 5.79593 32.425 6.68542 33.3146C7.57497 34.2041 8.46725 34.7512 9.51939 35.16C10.5371 35.5555 11.7002 35.826 13.4032 35.9037C15.1098 35.9816 15.6547 36 20 36C24.3453 36 24.8902 35.9816 26.5968 35.9037C28.2998 35.826 29.4629 35.5555 30.4806 35.16C31.5327 34.7512 32.425 34.2041 33.3146 33.3146C34.2041 32.425 34.7512 31.5327 35.16 30.4806C35.5555 29.4629 35.826 28.2998 35.9037 26.5968C35.9816 24.8902 36 24.3453 36 20C36 15.6547 35.9816 15.1098 35.9037 13.4032C35.826 11.7002 35.5555 10.5371 35.16 9.51939C34.7512 8.46725 34.2041 7.57497 33.3146 6.68542C32.425 5.79593 31.5327 5.24884 30.4806 4.84001C29.4629 4.44446 28.2998 4.17396 26.5968 4.09628C24.8902 4.01842 24.3453 4 20 4ZM20.0003 6.88281C24.2725 6.88281 24.7785 6.89914 26.4657 6.97611C28.0257 7.04725 28.8728 7.3079 29.4366 7.52702C30.1835 7.81727 30.7165 8.16398 31.2763 8.7239C31.8363 9.28376 32.183 9.81675 32.4732 10.5636C32.6923 11.1274 32.953 11.9746 33.0241 13.5346C33.1011 15.2217 33.1174 15.7278 33.1174 20C33.1174 24.2721 33.1011 24.7782 33.0241 26.4653C32.953 28.0253 32.6923 28.8725 32.4732 29.4363C32.183 30.1831 31.8363 30.7161 31.2763 31.276C30.7165 31.8359 30.1835 32.1826 29.4366 32.4729C28.8728 32.692 28.0257 32.9526 26.4657 33.0238C24.7788 33.1007 24.2728 33.1171 20.0003 33.1171C15.7278 33.1171 15.2219 33.1007 13.5349 33.0238C11.9749 32.9526 11.1278 32.692 10.564 32.4729C9.81712 32.1826 9.28413 31.8359 8.72427 31.276C8.16441 30.7161 7.81763 30.1831 7.52738 29.4363C7.30826 28.8725 7.04761 28.0253 6.97648 26.4653C6.8995 24.7782 6.88318 24.2721 6.88318 20C6.88318 15.7278 6.8995 15.2217 6.97648 13.5346C7.04761 11.9746 7.30826 11.1274 7.52738 10.5636C7.81763 9.81675 8.16434 9.28376 8.72427 8.7239C9.28413 8.16398 9.81712 7.81727 10.564 7.52702C11.1278 7.3079 11.9749 7.04725 13.5349 6.97611C15.2221 6.89914 15.7281 6.88281 20.0003 6.88281ZM11.7855 19.9999C11.7855 15.4622 15.464 11.7837 20.0018 11.7837C24.5394 11.7837 28.2179 15.4622 28.2179 19.9999C28.2179 24.5376 24.5394 28.2161 20.0018 28.2161C15.464 28.2161 11.7855 24.5376 11.7855 19.9999ZM20.0013 25.3332C17.0558 25.3332 14.668 22.9454 14.668 19.9999C14.668 17.0543 17.0558 14.6665 20.0013 14.6665C22.9468 14.6665 25.3346 17.0543 25.3346 19.9999C25.3346 22.9454 22.9468 25.3332 20.0013 25.3332ZM28.5411 13.3791C29.6015 13.3791 30.4611 12.5195 30.4611 11.4591C30.4611 10.3987 29.6015 9.53906 28.5411 9.53906C27.4807 9.53906 26.6211 10.3987 26.6211 11.4591C26.6211 12.5195 27.4807 13.3791 28.5411 13.3791Z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UCGuQylvQxO_DfCMcPIA-q1g"
            target="_blank"
            class="np-socialmedia-icon"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 28"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M38.01 2.08877C39.2087 3.29675 39.6 6.0399 39.6 6.0399C39.6 6.0399 40 9.26201 40 12.4829V15.5034C40 18.7256 39.6 21.9464 39.6 21.9464C39.6 21.9464 39.2087 24.6896 38.01 25.8975C36.6395 27.3266 35.1198 27.4742 34.2609 27.5577C34.1664 27.5668 34.0799 27.5752 34.0025 27.5845C28.405 27.9876 20 28 20 28C20 28 9.6 27.9054 6.4 27.5994C6.24839 27.5712 6.06459 27.5493 5.85646 27.5244C4.84283 27.4034 3.25189 27.2135 1.98875 25.8975C0.79 24.6896 0.4 21.9464 0.4 21.9464C0.4 21.9464 0 18.7256 0 15.5034V12.4829C0 9.26201 0.4 6.0399 0.4 6.0399C0.4 6.0399 0.79 3.29675 1.98875 2.08877C3.36233 0.657751 4.88343 0.5117 5.74247 0.429218C5.83561 0.420275 5.92096 0.41208 5.9975 0.403075C11.595 0 19.9912 0 19.9912 0H20.0087C20.0087 0 28.405 0 34.0025 0.403075C34.079 0.412093 34.1644 0.4203 34.2576 0.429258C35.116 0.511747 36.6378 0.657984 38.01 2.08877ZM15.8725 7.97656L15.8738 19.1619L26.68 13.5885L15.8725 7.97656Z"
                fill="white"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@nakedpressjuicery"
            target="_blank"
            class="np-socialmedia-icon"
          >
            <svg
              width="32"
              height="42"
              viewBox="0 0 32 32"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.2 0H28.8C30.5674 0 32 1.43258 32 3.2V28.8C32 30.5674 30.5674 32 28.8 32H3.2C1.43258 32 0 30.5674 0 28.8V3.2C0 1.43258 1.43258 0 3.2 0Z"
                fill="white"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.0927 29.4395C21.0664 29.4395 21.8558 28.6565 21.8558 27.6907C21.8558 26.725 21.0664 25.9419 20.0927 25.9419H19.8271C20.8008 25.9419 21.5902 26.725 21.5902 27.6907C21.5902 28.6565 20.8008 29.4395 19.8271 29.4395H20.0927Z"
                fill="white"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.8023 25.9419H19.5367C18.563 25.9419 17.7734 26.725 17.7734 27.6907C17.7734 28.6565 18.563 29.4395 19.5367 29.4395H19.8023C18.8284 29.4395 18.039 28.6565 18.039 27.6907C18.039 26.725 18.8284 25.9419 19.8023 25.9419Z"
                fill="white"
              ></path>
              <path
                d="M19.8155 28.5425C20.289 28.5425 20.6729 28.1618 20.6729 27.6921C20.6729 27.2225 20.289 26.8418 19.8155 26.8418C19.3419 26.8418 18.958 27.2225 18.958 27.6921C18.958 28.1618 19.3419 28.5425 19.8155 28.5425Z"
                fill="white"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.40039 25.1519V26.0383H7.43873V29.4159H8.47745V26.0622H9.32263L9.61242 25.1519H6.40039ZM14.9015 25.1519V26.0383H15.9398V29.4159H16.9786V26.0622H17.8238L18.1135 25.1519H14.9015ZM9.80583 25.6549C9.80583 25.3771 10.0325 25.1519 10.3126 25.1519C10.5929 25.1519 10.8198 25.3771 10.8198 25.6549C10.8198 25.9327 10.593 26.1579 10.3126 26.1579C10.0325 26.1578 9.80583 25.9327 9.80583 25.6549ZM9.80583 26.5174H10.8198V29.4159H9.80583V26.5174ZM11.2547 25.1519V29.4159H12.2691V28.3141L12.583 28.0263L13.5731 29.4399H14.6598L13.2348 27.3797L14.5148 26.1339H13.2832L12.2691 27.1399V25.1519H11.2547ZM22.1948 25.1519V29.4159H23.2094V28.3141L23.5232 28.0263L24.5135 29.4399H25.6004L24.1754 27.3797L25.4554 26.1339H24.2238L23.2094 27.1399V25.1519H22.1948Z"
                fill="#12452C"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.6299 10.3912C22.0307 11.392 23.7469 11.981 25.6004 11.981V8.41605C25.2496 8.41618 24.8997 8.37959 24.5565 8.30686V11.113C22.7032 11.113 20.9872 10.5241 19.586 9.52325V16.7981C19.586 20.4374 16.6343 23.3874 12.9934 23.3874C11.6349 23.3874 10.3722 22.9769 9.32324 22.2729C10.5204 23.4964 12.1899 24.2554 14.037 24.2554C17.6782 24.2554 20.63 21.3054 20.63 17.666V10.3912H20.6299ZM21.9175 6.79467C21.2016 6.01297 20.7316 5.00267 20.6299 3.88574V3.42725H19.6407C19.8896 4.84677 20.7389 6.05957 21.9175 6.79467ZM11.6261 19.4804C11.2261 18.9562 11.01 18.3149 11.0109 17.6556C11.0109 15.9911 12.3611 14.6416 14.0267 14.6416C14.3371 14.6414 14.6457 14.689 14.9415 14.7828V11.1382C14.5958 11.0909 14.2469 11.0708 13.8981 11.0782V13.9149C13.6021 13.8211 13.2934 13.7735 12.9829 13.7737C11.3172 13.7737 9.96721 15.1232 9.96721 16.7879C9.96721 17.9648 10.642 18.984 11.6261 19.4804Z"
                fill="white"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.5862 9.52325C20.9874 10.5241 22.7033 11.113 24.5567 11.113V8.30686C23.5222 8.0867 22.6063 7.54629 21.9177 6.79467C20.7391 6.05957 19.8898 4.84677 19.6408 3.42725H17.0425V17.6658C17.0367 19.3257 15.6888 20.6697 14.0267 20.6697C13.0473 20.6697 12.1771 20.2032 11.6261 19.4804C10.642 18.984 9.96722 17.9648 9.96722 16.7879C9.96722 15.1232 11.3172 13.7737 12.9829 13.7737C13.302 13.7737 13.6096 13.8234 13.8981 13.9149V11.0782C10.3211 11.152 7.44434 14.0733 7.44434 17.666C7.44434 19.4594 8.16075 21.0852 9.32338 22.2731C10.3723 22.9771 11.6351 23.3876 12.9935 23.3876C16.6345 23.3876 19.5862 20.4374 19.5862 16.7983V9.52325Z"
                fill="#12452C"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.5563 8.30751V7.54873C23.6234 7.55014 22.7089 7.28901 21.9174 6.79519C22.618 7.56189 23.5406 8.09061 24.5563 8.30751ZM19.6405 3.4279C19.6167 3.29225 19.5985 3.15569 19.5859 3.01855V2.56006H15.9983V16.7988C15.9925 18.4586 14.6448 19.8026 12.9826 19.8026C12.4946 19.8026 12.0339 19.6868 11.6258 19.481C12.1769 20.2038 13.047 20.6704 14.0265 20.6704C15.6884 20.6704 17.0364 19.3264 17.0423 17.6665V3.4279H19.6405ZM13.8979 11.0788V10.271C13.5982 10.23 13.2959 10.2096 12.9934 10.2097C9.35206 10.2097 6.40039 13.1599 6.40039 16.7988C6.40039 19.0802 7.56045 21.0909 9.32325 22.2736C8.16064 21.0858 7.44422 19.4599 7.44422 17.6665C7.44422 14.0739 10.3209 11.1527 13.8979 11.0788Z"
                fill="#12452C"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.8262 29.4395C20.7999 29.4395 21.5894 28.6565 21.5894 27.6907C21.5894 26.725 20.7999 25.9419 19.8262 25.9419H19.8021C18.8284 25.9419 18.0391 26.725 18.0391 27.6907C18.0391 28.6565 18.8284 29.4395 19.8021 29.4395H19.8262ZM18.9568 27.6907C18.9568 27.221 19.3408 26.8404 19.8144 26.8404C20.2876 26.8404 20.6716 27.221 20.6716 27.6907C20.6716 28.1605 20.2876 28.5413 19.8144 28.5413C19.3408 28.5412 18.9568 28.1605 18.9568 27.6907Z"
                fill="#12452C"
              ></path>
            </svg>
          </a>
        </div>
        <div class="flex flex-col gap-y-4">
          <a
            href="https://api.whatsapp.com/send?phone=62817762533&amp;text=Hello"
            class="flex flex-row gap-x-1"
          >
            <svg
              width="20"
              height="24"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.987 0C16.5086 0.00184806 13.0919 0.91849 10.0797 2.65795C7.06752 4.3974 4.5658 6.89849 2.82557 9.91023C1.08535 12.922 0.167829 16.3384 0.165092 19.8168C0.162354 23.2952 1.07449 26.7131 2.80998 29.7275L0 40L10.5073 37.2442C13.4141 38.8248 16.6702 39.6528 19.9789 39.6528C25.1884 39.5797 30.1598 37.4593 33.8182 33.7499C37.4766 30.0405 39.5282 25.0403 39.5292 19.8303C39.5303 14.6204 37.4808 9.61934 33.8238 5.90849C30.1669 2.19764 25.1964 0.0751751 19.987 0ZM19.987 36.3089C17.0365 36.3082 14.1404 35.5152 11.6012 34.0127L10.999 33.6555L4.76291 35.2913L6.4228 29.2117L6.03141 28.5875C4.09084 25.4932 3.23354 21.8418 3.59428 18.2073C3.95503 14.5727 5.51335 11.161 8.02431 8.50862C10.5353 5.8562 13.8565 4.11339 17.4658 3.55417C21.0752 2.99495 24.7681 3.65102 27.9639 5.41926C31.1598 7.18749 33.6775 9.96762 35.1211 13.3226C36.5648 16.6776 36.8526 20.4172 35.9394 23.9537C35.0262 27.4901 32.9636 30.6227 30.076 32.8592C27.1884 35.0957 23.6394 36.3092 19.987 36.3089ZM29.019 23.9691C28.5253 23.7222 26.0886 22.524 25.635 22.3634C25.1814 22.2028 24.8522 22.1145 24.521 22.6103C24.1899 23.106 23.2425 24.216 22.9535 24.5532C22.6645 24.8904 22.3754 24.9245 21.8797 24.6776C21.3839 24.4307 19.7882 23.9049 17.8975 22.2189C16.8141 21.2176 15.8854 20.0609 15.1418 18.7867C14.8527 18.2909 15.1116 18.024 15.3605 17.7831C15.6094 17.5423 15.8543 17.2051 16.1032 16.9161C16.306 16.6651 16.4723 16.3867 16.5969 16.0891C16.6629 15.9527 16.6937 15.8019 16.6867 15.6505C16.6797 15.4991 16.635 15.3518 16.5568 15.222C16.4363 14.9631 15.4549 12.5265 15.0334 11.5349C14.6119 10.5434 14.2305 10.698 13.9194 10.6839C13.6083 10.6699 13.2992 10.6659 12.97 10.6659C12.7177 10.6713 12.4692 10.7293 12.2404 10.8361C12.0116 10.9429 11.8076 11.0961 11.6413 11.2861C11.1877 11.7818 9.90717 12.9801 9.90717 15.4167C9.90717 17.8534 11.6835 20.2097 11.9304 20.5409C12.1772 20.8721 15.4228 25.8739 20.3904 28.0195C21.3128 28.4165 22.2555 28.7649 23.2144 29.0632C24.2244 29.3716 25.2923 29.4403 26.3335 29.2639C27.2849 29.1214 29.2639 28.0596 29.6753 26.9095C30.0868 25.7594 30.0888 24.7619 29.9644 24.5552C29.8399 24.3484 29.5188 24.218 29.023 23.9691H29.019Z"
                fill="white"
              ></path></svg
            >&nbsp;&nbsp;+62 817 762 533
          </a>
          <a href="mailto:order@nakedpress.co" class="flex flex-row gap-x-1">
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33341 3.33325H16.6667C17.5834 3.33325 18.3334 4.08325 18.3334 4.99992V14.9999C18.3334 15.9166 17.5834 16.6666 16.6667 16.6666H3.33341C2.41675 16.6666 1.66675 15.9166 1.66675 14.9999V4.99992C1.66675 4.08325 2.41675 3.33325 3.33341 3.33325Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M18.3334 5L10.0001 10.8333L1.66675 5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg
            >&nbsp;&nbsp;order@nakedpress.co
          </a>
        </div>
      </div>
      <div class="flex flex-row pt-10 border-t border-white/20 gap-x-1">
        <div
          class="w-full h-[2rem] flex items-center justify-center px-1 max-w-[52px] py-2 bg-white rounded-md"
        >
          <img
            data-src="../assets/bank-bca.svg"
            class=""
            alt="nakedpress bank bca"
            title="nakedpress bank bca"
            src="../assets/bank-bca.svg"
          />
        </div>
        <div
          class="w-full h-[2rem] flex items-center justify-center px-1 max-w-[52px] py-2 bg-white rounded-md"
        >
          <img
            data-src="../assets/bank-mandiri.svg"
            class=""
            alt="nakedpress bank mandiri"
            title="nakedpress bank mandiri"
            src="../assets/bank-mandiri.svg"
          />
        </div>
        <div
          class="w-full h-[2rem] flex items-center justify-center px-1 max-w-[52px] py-2 bg-white rounded-md"
        >
          <img
            data-src="../assets/bank-bni.svg"
            class=""
            alt="nakedpress bank bni"
            title="nakedpress bank bni"
            src="../assets/bank-bni.svg"
          />
        </div>
        <div
          class="w-full h-[2rem] flex items-center justify-center px-1 max-w-[52px] py-2 bg-white rounded-md"
        >
          <img
            data-src="../assets/bank-bri.svg"
            class=""
            alt="nakedpress bank bri"
            title="nakedpress bank bri"
            src="../assets/bank-bri.svg"
          />
        </div>
        <div
          class="w-full h-[2rem] flex items-center justify-center px-1 max-w-[52px] py-2 bg-white rounded-md"
        >
          <img
            data-src="../assets/bank-visa.svg"
            class=""
            alt="nakedpress visa"
            title="nakedpress visa"
            src="../assets/bank-visa.svg"
          />
        </div>
        <div
          class="w-full h-[2rem] flex items-center justify-center px-1 max-w-[52px] py-2 bg-white rounded-md"
        >
          <img
            data-src="../assets/bank-mastercard.svg"
            class=""
            alt="nakedpress mastercard"
            title="nakedpress mastercard"
            src="../assets/bank-mastercard.svg"
          />
        </div>
      </div>
      <div>
        <p class="font-light">
          Disclaimer : Produk nakedpress bukanlah obat, tapi hanya jus perasan
          sayur buah segar tanpa bahan pengawet dan kimia tambahan. Selalu
          konsultasi dokter apakah boleh detox nakedpress jika ragu dan memiliki
          kondisi medis tertentu yang tidak mungkin kita ketahui. Informasi yang
          disampaikan merupakan hasil tim riset medis nakedpress berdasarkan
          jurnal medis dan studi kasus pelanggan nakedpress. Harap membaca
          artikel nakedpress dengan kritis, penuh pertimbangan, dan keputusan
          pribadi.
        </p>
      </div>
      <div>
        <span class="font-light">©nakedpress 2021. All Rights Reserved.</span>
      </div>
      <div class="flex flex-col gap-y-1">
        <router-link
          class="font-semibold"
          to="/pages/refund-cancellation-policy/"
          >Refund Policy</router-link
        >
        <router-link class="font-semibold" to="/pages/terms-of-use/"
          >Terms of Service</router-link
        >
      </div>
    </div>
  </footer>
</template>
