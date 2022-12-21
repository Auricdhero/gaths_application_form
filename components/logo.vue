<template>
    <v-img class="logo" :src="logo" height="200" width="200"></v-img>
</template>
<script>
import logo from '~/static/logo.png';
export default{
    data(){
        return{
            logo,
        }
    }
}
</script>
<style>
.logo{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}
</style>