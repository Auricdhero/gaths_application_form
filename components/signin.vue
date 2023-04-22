<template>
  <div>
    
      <v-form @submit.prevent="login">
        <v-text-field
          label="Username or Email"
          placeholder="Username or Email"
          v-model="form.email"
          outlined
          required
        ></v-text-field>
        <br />
        <v-text-field
          label="password"
          v-model="form.password"
          placeholder="password"
          type="password"
          outlined
          required
        ></v-text-field>

        <v-btn class="ma-2" color="error"> Login </v-btn>
        <nuxt-link to="">Forget Password</nuxt-link>
      </v-form>
    
    <br /><br />
    <h5 class="text-bold">or Sign In With:</h5>
    <br />
    <v-row>
      <v-col>
        <v-btn color="white" depressed>
          <v-icon>mdi-google</v-icon>
          Sign in with Google
        </v-btn>
      </v-col>
      <v-col>
        <v-btn color="blue" depressed>
          <v-icon>mdi-facebook</v-icon>
          Sign in with Facebook
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    form: {
      email: "",
      password: "",
    },
  }),

  methods: {
   
  },
};
</script>