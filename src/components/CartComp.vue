<template>
    <div id="cart">
        
    </div>
</template>

<script>
    export default{
        
    }
</script>

<style scoped>
    #cart{
        position: absolute;
        right: 0;
        width: 400px;
        height: 200px;
        background-color: black;
        transform: translateX(100%);
    }
    

    #cart::backdrop{
        background-color: rgba(0, 0, 0, 0.414);
        width: 100vw;
        height: 100vh;
    }
</style>