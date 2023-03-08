<template>
  <div>
    <v-form>
      <v-text-field
        label="Username or Email"
        placeholder="Username or Email"
        outlined
      ></v-text-field>
      <br />
      <v-text-field
        label="password"
        placeholder="password"
        outlined
      ></v-text-field>

      <v-btn
        class="ma-2"
        :loading="loading"
        :disabled="loading"
        color="error"
        @click="loader = ''"
      >
        Login
      </v-btn>
      <nuxt-link to="">Forget Password</nuxt-link>

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
    </v-form>
  </div>
</template>
<script>
export default {
  name: "signin",
};
</script>