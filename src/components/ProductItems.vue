<script>
export default {
  props: {
    subject: String,
    products: Array,
    description: {
      type: String,
      required: false,
    },
    textColor: {
      type: String,
      default: "text-[#2f8d03]",
    },
  },
  methods: {
    formatPrice(price) {
      return `Rp ${price.toLocaleString("id-ID")}`;
    },
  },
};
</script>

<template>
  <div class="px-5">
    <h2 class="text-[1.75rem] font-bold">{{ subject }}</h2>
    <p class="font-thin">{{ description }}</p>
    <div
      v-for="product in products"
      :key="product.id"
      class="flex flex-row items-center pr-4 mt-4"
    >
      <div>
        <img
          :src="product.image"
          alt="Product Image"
          class="h-auto rounded-xl max-w-[100px] object-center"
        />
      </div>
      <div class="flex flex-col items-start justify-center pl-4 gap-y-1">
        <router-link
          to="/products"
          :class="['pr-8 text-xl font-semibold', textColor]"
        >
          {{ product.title }}
        </router-link>
        <p class="font-light">{{ product.description }}</p>
        <div class="flex flex-row items-center justify-center pr-2.5 gap-x-2">
          <div>
            <p :class="{ 'line-through': product.discountedPrice }">
              {{
                product.originalPrice ? formatPrice(product.originalPrice) : ""
              }}
            </p>
            <p class="text-red-900">
              {{
                product.discountedPrice
                  ? formatPrice(product.discountedPrice)
                  : ""
              }}
            </p>
          </div>
          <button class="py-1 text-white bg-[#2f8d03] px-7 rounded-2xl">
            Beli
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
