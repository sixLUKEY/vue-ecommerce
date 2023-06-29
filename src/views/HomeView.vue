<template>
  <div class="home text-white">
      
    <section class="hero mx-auto container bg-[#ECA400] w-[98%] mt-10 p-5 rounded-xl">
      <HeroComp/>
    </section>

    <section class="featuredProducts mx-auto container bg-[#006992] w-[98%] my-10 p-5 rounded-xl">
      <h1>
        Featured Products
      </h1>
      <div v-if="products" class="featuredBox mx-auto my-5 flex gap-2">
        <FeaturedCardComp v-for="product of products" :key="product.id" :product="product"/>
      </div>
      <div v-else>
        Could not load
      </div>
    </section>

    <section class="featuredBrands mx-auto container bg-black w-[98%] my-10 p-5 rounded-xl">
      <h1 class="mb-5">
        Our Brands
      </h1>
      <div v-if="brands" class="brandsBox mx-auto my=5 flex gap-2">
        <BrandComp v-for="brand of brands" :key="brand.id" :brand="brand"/>
      </div>
      <div v-else class=" text-white">
        Could not Load
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroComp from '@/components/HeroComp.vue';
import FeaturedCardComp from '@/components/FeaturedCardComp.vue';
import BrandComp from '@/components/BrandComp.vue';

export default {
  
  components: {
    FeaturedCardComp,
    BrandComp,
    HeroComp
  },
  computed: {
    products(){
      return this.$store.state.products
    },
    brands(){
      return this.$store.state.brands
    }
  },
  mounted(){
    this.$store.dispatch("getProducts"),
    this.$store.dispatch("getBrands")
  }
}
</script>
