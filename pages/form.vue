<template>
  <div>
    <logo />
    <h1 class="text-center">GATHS REGISTRATION FORM</h1>
    <v-form id="sheetdb-form">
      <v-container>
        <v-row>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field
              name="fName"
              label="First Name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field
              name="lName"
              label="Last Name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-select
              name="gender"
              :items="gender"
              :rules="[(v) => !!v || 'Item is required']"
              label="Gender"
              required
            ></v-select>
          </v-col>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field
              type="email"
              name="email"
              label="Email"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field
              type="tel"
              name="phone"
              label="Phone Number"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field
              name="institution"
              label="Name of Institution"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field name="prog" label="Programme of Study"></v-text-field>
          </v-col>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-select
              name="year"
              :items="year"
              :rules="[(v) => !!v || 'Item is required']"
              label="Year"
              required
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field
              name="stndId"
              label="Student ID/Index Number"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field
              name="localAssoc"
              label="Name of Local Association"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field
              name="ntnID"
              label="National ID Number"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field
              name="residence"
              label="City/Town of Residence"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-file-input
              type="file"
              v-model="file"
              ref="fileInput"
              name="imageUrl"
              label="Passport Picture"
            ></v-file-input>
          </v-col>
        </v-row>
        <div class="fill-height">
          <v-btn @click="handleSubmit($event)" block>Submit</v-btn>
        </div>
      </v-container>
    </v-form>
  </div>
</template>
  
  <script>
import Logo from "../components/logo.vue";
import storage from '@supabase/supabase-js';
//import axios from "axios";

export default {
  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      const file = this;
      const result = await storage.create('gaths_form_pics', file);

      await fetch("https://sheetdb.io/api/v1/1awo7kmtjx9hi", {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
      }),
        this.$nuxt.$router.push("/thank");
    },
  },
  data() {
    Logo;
    return {
      select: null,
      gender: ["Male", "Female"],
      year: ["Year 1", "Year 2", "Year 3", "Year 4", "Postgraduate"],
      name: "",
      valid: "",
      file: null
    };
  },
};
</script>
  <style>
#app {
  background-color: var(--v-background-base);
}
body {
  margin: 0;
  font-weight: 100;
  background: radial-gradient(#29c2e9, #166790);
  -webkit-overflow-y: hidden;
  -moz-overflow-y: hidden;
  -o-overflow-y: hidden;
  overflow-y: hidden;
  -webkit-animation: fadeIn 1 1s ease-out;
  -moz-animation: fadeIn 1 1s ease-out;
  -o-animation: fadeIn 1 1s ease-out;
  animation: fadeIn 1 1s ease-out;
}
</style>
  