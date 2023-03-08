<template>
  <v-container>
    <v-form>
      <v-text-field
        label="Full Name"
        placeholder="password"
        outlined
      ></v-text-field>
      <v-text-field
        label="Email"
        placeholder="password"
        outlined
      ></v-text-field>
      <v-text-field
        label="Password"
        placeholder="password"
        outlined
      ></v-text-field>
      <v-select :items="items" label="Institution" outlined></v-select>
      <v-checkbox
        v-model="checkbox"
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
      <v-btn
        class="ma-2"
        :loading="loading"
        :disabled="loading"
        color="error"
        @click="loader = ''"
      >
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
  name: "signup",
};
</script>