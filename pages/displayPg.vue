<template>
    <v-container>
        <logo />
        <br>
        <h3 class="text-uppercase text-center">member info</h3><br>
        <v-card class="card-des" max-width="700">
            <v-avartar>
                <img src="" alt="">
            </v-avartar>
            <v-divider></v-divider><br>
            <h3 class="text-white text-center">Fullname</h3><br>
            <h4 class="text-white text-center">Institution</h4><br>
            <h4 class="text-white text-center">Program</h4><br>
            <h4 class="text-center text-white">Year</h4><br>
            <h4 class="text-center text-white">Student Id</h4><br>
            <h4 class="text-center text-white">Residence</h4><br>
        </v-card>
    </v-container>
</template>
<script>
//import axios from 'axios';
import logo from '../components/logo.vue';
//import bg from '../components/background.vue';
//import sheetdb from 'https://sheetdb.io/api/v1/1awo7kmtjx9hi'

export default{
    data() {
        return{
            data: [logo]
        }
    },
   
}
</script>
<style>
.card-des{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}
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