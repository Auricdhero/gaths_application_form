<template>
  <div>
    <bg />

    <logo />
    <h1 class="text-center">GATHS REGISTRATION FORM</h1>
    <v-form
      method="POST"
      action="https://sheetdb.io/api/v1/1awo7kmtjx9hi"
      @submit.prevent="submit"
      id="sheetdb-form"
      v-model="valid"
    >
      <v-container>
        <v-row>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field
              v-model="name"
              name="fName"
              label="First Name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field
              v-model="name"
              name="lName"
              label="Last Name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-select
              v-model="select"
              name="gender"
              :items="gender"
              :rules="[(v) => !!v || 'Item is required']"
              label="Gender"
              required
            ></v-select>
          </v-col>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field name="email" label="Email"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field name="number" label="Phone Number"></v-text-field>
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
              v-model="select"
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
            <v-file-input name="imageUrl" label="Passport Picture"></v-file-input>
          </v-col>
        </v-row>
        <div class="fill-height">
          <v-btn @click="SubForm()" type="submit" block>Submit</v-btn>
        </div>
      </v-container>
    </v-form>
  </div>
</template>
  
  <script>
import Logo from "../components/logo.vue";
//import firebase from "../firebase"



export default {
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      fetch(e.target.action, {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((response) => response.json())
        .then(() => {
          this.$nuxt.$router.push("/displayPg");
        });
    },
   /* async uploadImage() {
      // Get the file to be uploaded
      const file = this.$refs.fileInput.files[0]

      // Create a storage reference
      const storageRef = firebase.storage().ref()

      // Generate a unique file name for the image
      const fileName = `${fName+lName}-${file.name}`

      // Create a reference to the image in Cloud Storage
      const imageRef = storageRef.child(fileName)

      // Upload the image
      try {
        await imageRef.put(file)
        // Get the URL of the uploaded image
        const imageUrl = await imageRef.getDownloadURL()
        // Do something with the image URL (e.g. save it to a database)
      } catch (error) {
        // Handle errors
      }
    },
  },*/
  mounted() {
    const form = document.getElementById("sheetdb-form");
    form.addEventListener("submit", this.handleSubmit);
  },
  beforeDestroy() {
    const form = document.getElementById("sheetdb-form");
    form.removeEventListener("submit", this.handleSubmit);
  },
  data() {
    Logo;
    return {
      //select: null,
      gender: ["Male", "Female"],
      year: ["Year 1", "Year 2", "Year 3", "Year 4", "Postgraduate"],
    };
  },
  }};
</script>
  <style>
#app {
  background-color: var(--v-background-base);
}
</style>
  