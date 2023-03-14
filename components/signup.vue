<template>
  <v-container>
    <v-form @submit.prevent="signup">
      <v-text-field
        label="Full Name"
        placeholder="Full Name"
        name="fullName"
        outlined
        required
      ></v-text-field>
      <v-text-field
        label="Email"
        placeholder="email"
        name="email"
        outlined
        required
      ></v-text-field>
      <v-text-field
        label="Password"
        placeholder="password"
        name="passowrd"
        type="password"
        outlined
        required
      ></v-text-field>
      <v-select name="institution" v-model="institution" :items="institution" label="Institution" outlined></v-select>
      <v-checkbox
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="I agree that GATHS may send me marketing messages?"
        required
      ></v-checkbox>
      <h6 class="text-muted">
        By creating an account, you agree to the terms of service and Homor code
        and <br />
        acknowledge that GATHS processes your personal data in accordance with
        the Privacy policy.
      </h6>
      <v-btn class="ma-2" color="error" @click="loader = ''">
        Create an Account For Free
      </v-btn>

      <br /><br />
      <h5 class="text-bold">or Register With:</h5>
      <br />
      <v-row>
        <v-col>
          <v-btn color="white" depressed>
            <v-icon>mdi-google</v-icon>
            Sign up with Google
          </v-btn>
        </v-col>
        <v-col>
          <v-btn color="blue" depressed>
            <v-icon>mdi-facebook</v-icon>
            Sign up with Facebook
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
export default {
  // name: "signup",
  methods:{
    async signup() {
      let that = this
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.fullName, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          that.snackbarText = error.message
          that.snackbar = true
          console.log("error", error);
          // ..
        });
    },
  },
  data: () => ({
    institution:['ATU', 'KNUST','AIT','UG', 'UMAT', 'UENR', 'UCC', 'UDS', 'KTU','ATU','TTU','Ashesi University College' ]
  })
};
</script>