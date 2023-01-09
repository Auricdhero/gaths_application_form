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
            <h3 class="text-white text-center">{{data.fName + data.lName}}</h3><br>
            <h4 class="text-white text-center">{{ data.institution }}</h4><br>
            <h4 class="text-white text-center">{{data.prog}}</h4><br>
            <h4 class="text-center text-white">{{data.year}}</h4><br>
            <h4 class="text-center text-white">{{data.stndId}}</h4><br>
            <h4 class="text-center text-white">{{data.residence}}</h4><br>
        </v-card>
    </v-container>
</template>
<script>
//import axios from '@nuxtjs/axios';
import logo from '../components/logo.vue';

const sheetdbApiEndpoint = 'https://sheetdb.io/api/v1/1awo7kmtjx9hi';

fetch(sheetdbApiEndpoint)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.value)
        
    })
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