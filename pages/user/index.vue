<template>
  <div>
    <theHeader />
    <v-container>
      <v-tabs vertical>
        <v-tab><v-icon>mdi-home</v-icon> Welcome</v-tab>
        <v-tab><v-icon>mdi-account</v-icon> Biodata</v-tab>
        <v-tab><v-icon>mdi-note</v-icon> Institution</v-tab>
        <v-tab><v-icon>mdi-account-group</v-icon> Local</v-tab>
        <v-tab><v-icon>mdi-image</v-icon> Upload Passport Photo</v-tab>
        <v-tab><v-icon>mdi-book-edit-outline</v-icon> Summary</v-tab>
        <v-tab
          ><v-icon>mdi-application-import</v-icon> Application Status</v-tab
        >
        <v-tab><v-icon>mdi-logout</v-icon> Logout</v-tab>

        <v-tab-item><welcome /></v-tab-item>
        <v-tab-item><biodata /></v-tab-item>
        <v-tab-item><institution /></v-tab-item>


      </v-tabs>
    </v-container>
    <theFooter />
  </div>
</template>