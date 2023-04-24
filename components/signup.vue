<template>
  <v-container>
    <v-form
      v-if="step === steps.register"
      @submit.prevent="register"
    >
      <!-- <v-text-field
        label="Full Name"
        v-model="registerForm.fullName"
        placeholder="Full Name"
        name="fullName"
        outlined
        required
      ></v-text-field> -->
      <v-text-field
        label="Email"
        placeholder="email"
        name="email"
        v-model="registerForm.email"
        type="email"
        outlined
        required
      ></v-text-field>
      <v-text-field
        label="Password"
        placeholder="password"
        name="password"
        v-model="registerForm.password"
        type="password"
        outlined
        required
      ></v-text-field>
      <!-- <v-select
        v-model="registerForm.institution"
        :items="institution"
        label="Institution"
        outlined
      ></v-select> -->
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
      <v-btn class="ma-2" type="submit" color="error">
        Create an Account For Free
      </v-btn>
      <!-- federal sign up -->
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
    <!-- confirm user sign up -->
    <v-form v-else @submit.prevent="confirm">
      <h2 class="text-justify">
        Check your Email and Enter the Verification code You've received here.
      </h2>
      <br />
      <!-- <v-label>Enter Your Email Here</v-label> -->
      <v-text-field
        label="Email"
        placeholder="email"
        name="email"
        v-model="confirmForm.email"
        type="email"
        outlined
        required
      ></v-text-field>
      <br />
      <!-- <v-label>Enter Code Here</v-label> -->
      <v-text-field
        label="Enter Code"
        placeholder="Enter Code"
        name="code"
        type="code"
        v-model="confirmForm.code"
        outlined
        required
      ></v-text-field>

      <v-btn class="ma-2" type="submit" color="error">Verify Account</v-btn>
    </v-form>
  </v-container>
</template>
<script>
const steps = {
  register: "REGISTER",
  confirm: "CONFIRM",
};

export default {
  // name: "signup",
  data: () => ({
    steps: { ...steps },
    step: steps.register,
    registerForm: {
      // fullName: "",
      email: "",
      // institution: [
      //   "ATU",
      //   "KNUST",
      //   "AIT",
      //   "UG",
      //   "UMAT",
      //   "UENR",
      //   "UCC",
      //   "UDS",
      //   "KTU",
      //   "ATU",
      //   "TTU",
      //   "Ashesi University College",
      // ],
      password: "",
    },
    // institution: [
    //     "ATU",
    //     "KNUST",
    //     "AIT",
    //     "UG",
    //     "UMAT",
    //     "UENR",
    //     "UCC",
    //     "UDS",
    //     "KTU",
    //     "ATU",  
    //     "TTU",
    //     "Ashesi University College",
    //   ],
    confirmForm: {
      email: "",
      code: "",
    },
  }),
  methods: {
    async register() {
      try {
        await this.$store.dispatch("auth/register", this.registerForm);
        this.confirmForm.email = this.registerForm.email;
        this.steps = this.steps.confirm;
      } catch (error) {
        console.log({ error });
        alert({ error });
      }
    },
    async confirm() {
      try {
        await this.$store.dispatch(
          "auth/confirmRegistration",
          this.confirmForm
        );
        await this.$store.dispatch("/", this.registerForm);
        this.$router.push("/user/");
      } catch (error) {
        console.log({ error });
      }
    },
  },
};
</script>