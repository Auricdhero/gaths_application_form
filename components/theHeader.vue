<template>
  <div>
    <v-app-bar color="deep-purple accent-4" style="height: 3em;" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-row justify="center">
        <v-menu bottom rounded offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon x-large v-on="on">
              <v-avatar color="brown" size="48">
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-avatar color="brown">
                  <span class="white--text text-h5">{{ user.initials }}</span>
                </v-avatar>
                <h3>{{ $auth.fullName }}</h3>
                <p class="text-caption mt-1">
                  {{ $auth.email }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn depressed rounded text> Edit Account </v-btn>
                <v-divider class="my-3"></v-divider>
                <v-btn depressed @click="$store.dispatch('auth/logout')" rounded text> Logout </v-btn>
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>
      </v-row>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      initials: "JD",
      fullName: "John Doe",
      email: "john.doe@doe.com",
    },
  }),
};
</script>