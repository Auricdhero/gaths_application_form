<template>
  <div>
    <v-app-bar color="deep-purple accent-4" style="height: 3.5em" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title
        ><v-img :src="logo" height="60" width="60"></v-img
      ></v-toolbar-title>

      <v-spacer></v-spacer>

      
      <v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer>
      <v-spacer></v-spacer><v-spacer></v-spacer>
      <v-row justify="center">
        <v-icon>mdi-bell</v-icon>

        <v-menu bottom rounded offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon x-large v-on="on">
              <v-avatar color="blue" size="48">
                <v-icon dark> mdi-account-circle </v-icon>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center" style="padding: 10px">
                <v-avatar color="blue">
                  <v-icon dark> mdi-account-circle </v-icon>
                </v-avatar>
                <h3>{{ $auth.fullName }}</h3>
                <p class="text-caption mt-1">
                  {{ $auth.email }}
                </p>
                <!-- <v-divider class="my-3"></v-divider> -->
                <!-- <v-btn depressed rounded text> Edit Account </v-btn> -->
                <v-divider class="my-3"></v-divider>
                <v-btn type="submit" @click="logout" rounded> Logout </v-btn>
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>
        <v-spacer></v-spacer>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
import logo from "../static/logo.png";
export default {
  data: () => ({
    logo,
  }),

  methods: {
    async logout() {
      try {
        await this.$store.dispatch("auth/logout", this.form);
        this.$router.push("/");
      } catch (error) {
        console.log({ error });
      }
    },
  },
};
</script>