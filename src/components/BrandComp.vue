<template>
    <div class="bg-white rounded-md py-10 brandCard flex justify-center items-center">
        <img :src="brand.logo" :alt="brand.brand" class="brand w-[150px]">
    </div>
</template>

<script>
    export default {
        props: ["brand"]
    }
</script>

<style scoped>
    .brandCard{
        flex: 1;
    }
</style>