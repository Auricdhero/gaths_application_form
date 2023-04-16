<template>
  <div>
    <!-- <div v-if="!$Auth.isAuthenticated">
      <NuxtLink to="/">LogIn or Sign Up</NuxtLink>
    </div> -->
    <theHeader />
    <v-container>
      <v-tabs vertical>
        <v-tab> <v-icon left>mdi-home</v-icon> Welcome </v-tab>
        <v-tab> <v-icon left>mdi-account</v-icon> Biodata </v-tab>
        <v-tab> <v-icon left>mdi-note</v-icon> Institution </v-tab>
        <v-tab> <v-icon left>mdi-account-group</v-icon> Local </v-tab>
        <v-tab> <v-icon left>mdi-image</v-icon> Upload Passport Photo </v-tab>
        <v-tab> <v-icon left>mdi-book-edit-outline</v-icon> Summary </v-tab>
        <v-tab
          ><v-icon left>mdi-application-import</v-icon> Application
          Status</v-tab
        >

        <v-tab-item><welcome /></v-tab-item>
        <v-tab-item><biodata /></v-tab-item>
        <v-tab-item><institution /></v-tab-item>
        <v-tab-item><local /></v-tab-item>
        <v-tab-item><upload /></v-tab-item>
        <v-tab-item><bioSum /></v-tab-item>
      </v-tabs>
    </v-container>
    <theFooter />
  </div>
</template>