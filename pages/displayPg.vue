<template>
    <v-container>
        <logo />
        <bg />
        <br>
        <h3 class="text-uppercase text-center">member info</h3><br>
        <v-card class="card-des" max-width="700">
            <v-avartar>
                <img src="" alt="">
            </v-avartar>
            <v-divider></v-divider><br>
            <h3 class="text-white text-uppercase text-center">Name</h3><br>
            <h4 class="text-white text-center">Institution</h4><br>
            <h4 class="text-white text-center">Program</h4><br>
            <h4 class="text-center text-white">Year</h4><br>
            <h4 class="text-center text-white">Student Id</h4><br>
            <h4 class="text-center text-white">Residence</h4><br>
        </v-card>
    </v-container>
</template>
<script>
import logo from '../components/logo.vue'
import bg from '../components/background.vue'

export default{
    data() {
        return{
            data: []
        }
    },
    components: [logo, bg]
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
</style>