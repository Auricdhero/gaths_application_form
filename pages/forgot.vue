<template>
  <v-row align-content="center">
    <v-col class="pa-16" style="background-color: blue; height: 100vh">
      <v-img
        class="mx-auto"
        max-height="180"
        max-width="200"
        :src="logo"
      ></v-img>
      <br />
      <h1 class="text-left" style="color: white">
        Embark on an Exciting Journey <br />
        With GATHS
      </h1>
      <br /><br />
      <v-img
        class="mx-auto"
        max-height="200"
        max-width="220"
        :src="designs"
      ></v-img>
    </v-col>
    <v-col class="pa-7">
      <v-container>
        <!-- <div v-if="!$isAuthenticated" class="sendCode">
          <v-btn color="error" type="submit">Send Code</v-btn>
        </div> -->

        <v-form
          @submit.prevent="handleForgotPassword"
          v-if="!$auth.isAuthenticated"
        >
          <h3>We will send you a verification code to Change your password.</h3>
          <br />
          <v-label>Enter Your Email Here</v-label>
          <v-text-field
            label="Email"
            placeholder="email"
            name="email"
            v-model="form.email"
            type="email"
            outlined
            required
          ></v-text-field>
          <v-btn class="ma-2" type="submit" color="error">Send Code</v-btn>
        </v-form>
        <v-form v-else>
          <h3 class="text-justify">Check your Email for verification code.</h3>
          <br />
          <v-label>Enter Your Email Here</v-label>
          <v-text-field
            label="Email"
            placeholder="email"
            name="email"
            v-model="email"
            type="email"
            outlined
            required
          ></v-text-field>
          <br />
          <v-label>Enter Code Here</v-label>
          <v-text-field
            label="Enter Code"
            placeholder="Enter Code"
            name="code"
            v-model="form.confirmationCode"
            type="code"
            outlined
            required
          ></v-text-field>
          <br />
          <v-label>Enter New Password Here</v-label>
          <v-text-field
            label="Enter Password"
            placeholder="Enter Password"
            name="password"
            type="password"
            v-model="form.newPassword"
            outlined
            required
          ></v-text-field>

          <v-btn class="ma-2" type="submit" color="error"
            >Change Password</v-btn
          >
        </v-form>
      </v-container>
    </v-col>
  </v-row>
</template>
<script>
import logo from "~/static/logo.png";
import designs from "~/static/designs.png";

export default {
  name: "ResetPassword",

  data: () => ({
    logo,
    designs,
    form: {
      email: "",
      confirmationCode: "",
      newPassword: "",
    },
  }),

  methods: {
    async handleForgotPassword() {
      try {
        await this.$store.dispatch("auth/handleForgotPassword");
        // this.$router.push("/forgot");
      } catch (error) {
        console.log({ error });
      }
    },
    async handleResetPassword() {
      try {
        await this.$store.dispatch("auth/handleResetPassword");
      } catch (error) {
        console.log({ error });
      }
    },
  },
};
</script>
<style>
.sendCode {
  width: 50%;
  margin: auto;
  position: relative;
  /* bottom: 5rem; */
}
</style>