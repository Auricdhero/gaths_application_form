<template>
  <v-row align-content="center">
    <v-col class="pa-16" style="background-color: blue;">
      <v-img class="mx-auto" max-height="180" max-width="200" :src="logo"></v-img>
      <br />
      <h1 class="text-left" style="color: white;">Embark on an Exciting Journey <br /> With GATHS</h1><br><br>
      <v-img class="mx-auto" max-height="200" max-width="220" :src="designs"></v-img>
    </v-col>
    <v-col class="pa-7">
      <v-tabs>
        <v-tab>Sign In</v-tab>
        <!-- <h4 >or</h4> -->
        <v-tab>Register</v-tab>
        

        <v-tab-item>
          <v-divider></v-divider>
          <br><br>
          <signin />
        </v-tab-item>
        <v-tab-item>
          <v-divider></v-divider>
          <br><br>
          <signup />
        </v-tab-item>
      </v-tabs>
    </v-col>
  </v-row>
</template>

<script>
import logo from "~/static/logo.png";
import designs from "~/static/designs.png";

export default {
  name: "IndexPage",
  // components: [signin, signup],

  data: () => ({
    logo,
    designs
  }),
};
</script>
