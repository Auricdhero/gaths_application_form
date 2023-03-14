<template>
  <v-app>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import {getAuth} from 'firebase/auth'
export default {
  name: "DefaultLayout",
  mounted() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        this.avatarShow = true
        console.log("Showing Logout", user.email);
      }else{
        return this.avatarShow = false
      }
  },

  methods: {
    async signOut() {
      $nuxt.$fire.auth.signOut();
    }
  }
  
};
</script>
