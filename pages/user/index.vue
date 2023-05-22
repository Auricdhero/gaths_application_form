<template>
  <div>
    <!-- <div v-if="!$Auth.isAuthenticated">
      <NuxtLink to="/">LogIn or Sign Up</NuxtLink>
    </div> -->
    <theHeader />

    <v-tabs vertical>
      <v-tab> <v-icon left>mdi-home</v-icon> Welcome </v-tab>
      <v-tab>
        <v-icon left>mdi-account</v-icon>
        Biodata
      </v-tab>
      <v-tab>
        <v-icon left>mdi-note</v-icon>
        Institution
      </v-tab>
      <v-tab>
        <v-icon left>mdi-account-group</v-icon>
        Local
      </v-tab>
      <v-tab>
        <v-icon left>mdi-image</v-icon>
        Upload Passport Photo
      </v-tab>
      <v-tab>
        <v-icon left>mdi-book-edit-outline</v-icon>
        Summary
      </v-tab>
      <v-tab>
        <v-icon left>mdi-application-import</v-icon>
        Application Status
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

    <theFooter />
  </div>
</template>
<style>
.v-tabs--vertical {
  align-items: start;
}
</style>