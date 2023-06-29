<template>
    <div class="w-[400px] bg-[#ECA400] mx-auto text-black rounded-2xl p-3 card">
        <div class="logo">
            <img :src="product.logo" :alt="product.brand" class="w-1/4 mt-3 logo">
        </div>
        <div>
            <img :src="product.image" :alt="product.name" class="w-[80%] featuredImage transition-all">
            <h2 class="mt-8">
                {{ product.name }}
            </h2>
            <p class=" text-lg">
                {{ product.description }}
            </p>
            <div class="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center mx-auto my-7">
                <div class="bg-blue-200 w-[35px] h-[35px] rounded-full">

                </div>
            </div>
            <div class="price font-bold text-4xl transition-all">
                R {{ product.price }}
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: ["product"]
    }
</script>

<style scoped>

    .card:hover .featuredImage{
        filter: drop-shadow(-5px 7.5px 5px #000);
        scale: 1.2;
        transform: rotateZ(-5deg);
    }


    .logo{  
        transition: 0.2s;
    }
    

    .card:hover .logo{
        scale: 1.2;
        filter: invert() !important;
    }

    .card:hover .price{
        scale: 1.2;
    }

</style>