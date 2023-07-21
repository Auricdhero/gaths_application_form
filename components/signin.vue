<template>
  <div>
    <div v-if="!$auth.isAuthenticated">
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
        <br />

        <h6
          dense
          outlined
          type="error"
          v-if="form.error == true"
          class="text-muted"
        >
          {{ form.error }}
        </h6>

        <v-btn
          class="ma-2"
          type="submit"
          @click="loader = 'loading'"
          color="error"
        >
          Login
        </v-btn>
        <v-btn plain to="/forgot">Forget Password</v-btn>
      </v-form>
    </div>

    <!-- <br /><br />
    <h5 class="text-bold">or Sign In With:</h5>
    <br /> -->
    <!-- <v-row>
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
    </v-row> -->
  </div>
</template>
<script>
export default {
  // name: 'Login',
  data: () => ({
    form: {
      email: "",
      password: "",
      // error:""
    },
    return: {
      loader: null,
      loadingSubmit: false,
      // error: "",
    },
  }),
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("auth/login", this.form);
        this.$router.push("/user/${user.id}");
      } catch (error) {
        // alert({error})
        console.log({ error });
        if (
          error.code == "NotAuthorizedException" &&
          error.message == "Incorrect username or password."
        ) {
          alert(error);
          this.error = "Invalid username or password. Please try again.";
        } else {
          this.error = "An unexpected error occurred. Please try again later.";
        }
      }
    },
    // async loadingSubmit() {},
  },
};
</script>
<style>
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>