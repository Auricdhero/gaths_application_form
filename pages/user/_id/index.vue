<template>
  <div>
    <!-- <div v-if="!$Auth.isAuthenticated">
      <NuxtLink to="/">LogIn or Sign Up</NuxtLink>
    </div> -->
    <theHeader />

    <div>
      <v-tabs vertical>
        <div style="height: 100vh">
          <v-tab
            ><v-icon left>mdi-home</v-icon>
            <h5 class="d-none d-xl-flex d-lg-flex">Welcome</h5>
          </v-tab>
          <v-tab>
            <v-icon left>mdi-account</v-icon>
            <h5 class="d-none d-xl-flex d-lg-flex">Biodata</h5>
          </v-tab>
          <v-tab>
            <v-icon left>mdi-note</v-icon>
            <h5 class="d-none d-xl-flex d-lg-flex">Institution</h5>
          </v-tab>
          <v-tab>
            <v-icon left>mdi-account-group</v-icon>
            <h5 class="d-none d-xl-flex d-lg-flex">Local</h5>
          </v-tab>
          <v-tab>
            <v-icon left>mdi-image</v-icon>
            <h5 class="d-none d-xl-flex d-lg-flex">Upload Passport Photo</h5>
          </v-tab>
          <v-tab>
            <v-icon left>mdi-book-edit-outline</v-icon>
            <h5 class="d-none d-xl-flex d-lg-flex">Summary</h5>
          </v-tab>
          <v-tab>
            <v-icon left>mdi-cash-multiple</v-icon>
            <h5 class="d-none d-xl-flex d-lg-flex">Pay Dues</h5>
          </v-tab>
        </div>

        <v-tab-item
          ><v-container><welcome /></v-container
        ></v-tab-item>
        <v-tab-item
          ><v-container><biodata /></v-container
        ></v-tab-item>
        <v-tab-item
          ><v-container><institution /></v-container
        ></v-tab-item>
        <v-tab-item
          ><v-container><local /></v-container
        ></v-tab-item>
        <v-tab-item
          ><v-container><upload /></v-container
        ></v-tab-item>
        <v-tab-item
          ><v-container><bioSum /></v-container
        ></v-tab-item>
        <v-tab-item
          ><v-container><paydues /></v-container
        ></v-tab-item>
      </v-tabs>
    </div>

    <!-- <div v-else>
      <v-tabs vertical>
        <v-tab><v-icon left>mdi-home</v-icon> </v-tab>
        <v-tab>
          <v-icon left>mdi-account</v-icon>
        </v-tab>
        <v-tab>
          <v-icon left>mdi-note</v-icon>
        </v-tab>
        <v-tab>
          <v-icon left>mdi-account-group</v-icon>
        </v-tab>
        <v-tab>
          <v-icon left>mdi-image</v-icon>
        </v-tab>
        <v-tab>
          <v-icon left>mdi-book-edit-outline</v-icon>
        </v-tab>
        <v-tab>
          <v-icon left>mdi-application-import</v-icon>
        </v-tab>

        <v-tab-item
          ><v-container><welcome /></v-container
        ></v-tab-item>
        <v-tab-item
          ><v-container><biodata /></v-container
        ></v-tab-item>
        <v-tab-item
          ><v-container><institution /></v-container
        ></v-tab-item>
        <v-tab-item
          ><v-container><local /></v-container
        ></v-tab-item>
        <v-tab-item
          ><v-container><upload /></v-container
        ></v-tab-item>
        <v-tab-item
          ><v-container><bioSum /></v-container
        ></v-tab-item>
      </v-tabs>
    </div> -->

    <theFooter />
  </div>
</template>
<style>
/* @media only screen and(max-width: 600px) {
  v-tab-item {
    min-width: 50%;
  }
} */
</style>
<script>
export default {
  async asyncData({ store, params }) {
    try {
      return {
        user: await store.dispatch("user/getUser", params.id),
      };
    } catch (error) {
      console.log(`Error getting User ${params.id}:`, error);
    }
  },
};
</script>
