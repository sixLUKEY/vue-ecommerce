<template>
  <NavbarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
  import NavbarComp from './components/NavbarComp.vue';
  import FooterComp from './components/FooterComp.vue';

  export default{
    components: {
      NavbarComp,
      FooterComp
    }
  }

</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
     display: none;
}

body{
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(237, 237, 237);
  min-height: 100vh;
}


</style>
