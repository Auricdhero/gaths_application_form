<template>
  <v-container>
    <v-form v-if="step === steps.register" @submit.prevent="register">
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
        type="email"
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
      <v-select
        name="institution"
        v-model="institution"
        :items="institution"
        label="Institution"
        outlined
      ></v-select>
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
      <v-btn class="ma-2" type="submit" color="error"> Create an Account For Free </v-btn>

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
    <!-- <v-form v-else>
      <v-label>Enter Code Here</v-label>
      <v-text-field
        label="Enter Code"
        placeholder="Enter Code"
        name="code"
        type="password"
        v-model="code"
        outlined
        required
      ></v-text-field>
      <v-btn class="ma-2" type="submit" color="error">Verify Account</v-btn>

    </v-form> -->
  </v-container>
</template>
<script>
const steps = {
  register: 'REGISTER',
  confirmation: 'CONFIRMATION'
}
export default {
  // name: "signup",

  data: () => ({
    steps: {...steps},
    step:steps.register,
    registerForm:{
      email: '',
      password: ''
    },
    // confirmForm:{
    //   email: '',
    //   code: ''
    // },
    institution: [
      "ATU",
      "KNUST",
      "AIT",
      "UG",
      "UMAT",
      "UENR",
      "UCC",
      "UDS",
      "KTU",
      "ATU",
      "TTU",
      "Ashesi University College",
    ],
    email: "",
    password: "",
  }),
  methods: {
    
  },
};
</script>