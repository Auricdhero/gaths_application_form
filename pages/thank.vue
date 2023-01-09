<template>
    
    <v-container>
        <logo />
        <h1 class="text-white text-sentence text-center">Thank you for being a part of us. <br>We will get back to you shortly.</h1>
    </v-container>
</template>
<style>
#app {
  background-color: var(--v-background-base);
}
body {
    margin: 0;
    font-weight: 100;
    background: radial-gradient(#29C2E9,#166790);
    -webkit-overflow-Y: hidden;
    -moz-overflow-Y: hidden;
    -o-overflow-Y: hidden;
    overflow-y: hidden;
    -webkit-animation: fadeIn 1 1s ease-out;
    -moz-animation: fadeIn 1 1s ease-out;
    -o-animation: fadeIn 1 1s ease-out;
    animation: fadeIn 1 1s ease-out;
}
</style>
<script>
import logo from '../components/logo.vue';
export default {
    //name: logo,
    components: logo
}
</script>