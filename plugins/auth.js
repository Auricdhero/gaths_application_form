import Vue from 'vue';

export default async({store})=>{
    await store.dispatch('auth/load')
}