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
    buttonText: {
      type: String,
      default: "Beli",
    },
    productId: {
      type: String,
      required: false,
    },
    subject: {
      type: String,
      required: false,
    },
    orderClass: String,
    alignItemsClass: {
      type: String,
      default: "items-center",
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
  <section class="px-5">
    <h2 class="text-[1.75rem] leading-9 font-bold scroll-mt-20" :id="productId">
      {{ subject }}
    </h2>
    <p class="font-thin">{{ description }}</p>
    <div
      v-for="product in products"
      :key="product.id"
      class="flex flex-row pt-5 pr-4"
      :class="alignItemsClass"
    >
      <router-link :to="'/products/' + product.id">
        <img
          :src="product.image"
          alt="Product Image"
          class="h-auto rounded-xl max-w-[100px] object-center"
        />
      </router-link>
      <div class="flex flex-col items-start justify-center pl-4 gap-y-1">
        <router-link
          :to="'/products/' + product.id"
          :class="['pr-8 text-xl font-semibold', textColor]"
        >
          {{ product.title }}
        </router-link>
        <p class="font-light">{{ product.description }}</p>
        <div
          class="flex flex-row items-center justify-between w-full pr-2.5 gap-x-2"
        >
          <div class="flex flex-col">
            <p class="text-red-900" :class="orderClass">
              {{
                product.discountedPrice
                  ? formatPrice(product.discountedPrice)
                  : ""
              }}
            </p>
            <p :class="{ 'line-through': product.discountedPrice }">
              {{
                product.originalPrice ? formatPrice(product.originalPrice) : ""
              }}
            </p>
          </div>
          <button class="py-1 text-white bg-[#2f8d03] px-7 rounded-2xl">
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
