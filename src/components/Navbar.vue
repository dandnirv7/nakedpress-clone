<script>
import Announcement from "./Announcement.vue";
export default {
  components: {
    Announcement,
  },
  data() {
    return {
      lastScrollY: 140,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const stickyHeader = document.getElementById("sticky-header");
      const currentScrollY = window.scrollY;

      if (currentScrollY > this.lastScrollY) {
        stickyHeader.style.position = "fixed";
        stickyHeader.style.top = "0";
        stickyHeader.style.right = "0";
        stickyHeader.style.left = "0";
      } else {
        stickyHeader.style.position = "relative";
      }
    },
  },
};
</script>

<template>
  <div class="border-b border-gray-100">
    <Announcement />
    <div id="sticky-header" class="sticky top-0 z-50 bg-white">
      <div
        class="sticky top-0 flex flex-row items-center justify-around py-3 bg-white z-50"
      >
        <router-link to="/">
          <img src="../assets/Logo-2021.svg" alt="logo" />
        </router-link>
        <div class="flex flex-row space-x-5">
          <vue-feather
            type="search"
            size="30px"
            stroke-width="1.5"
          ></vue-feather>
          <router-link to="/account/login">
            <vue-feather
              type="user"
              size="30px"
              stroke-width="1.5"
            ></vue-feather>
          </router-link>
          <vue-feather
            type="shopping-cart"
            size="30px"
            stroke-width="1.5"
          ></vue-feather>
        </div>
      </div>
    </div>
  </div>
</template>
