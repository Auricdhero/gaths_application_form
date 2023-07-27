<template>
  <div>
    <v-card color="blue" elevation="2" style="padding: 1em; color: white">
      <h3>Biodata</h3> </v-card
    ><br />

    <v-card style="padding: 1rem" elevation="2">
      <v-form>
        <h3 class="text-center">
          PLEASE NOTE: All fields marked with * are mandatory
        </h3>
        <br />

        <h3 class="text-uppercase">drag or click to select an image</h3>
        <v-divider></v-divider><br />

        <v-row>
          <v-col>
            <p>
              Please note.. Your passport photo should have a maximum
              dimmensions of 192 by 192 px and minimum dimenssion of 192 by 192
              px and background of passport picture should be white.
            </p>

            <picUpload />
          </v-col>
          <v-divider vertical></v-divider>
          <v-col>
            <v-card style="padding: 1rem" class="text-center" outlined>
              <h4>Notice</h4> </v-card
            ><br />
            <ul>
              <li>Image size should be less than 500KB</li>
              <li>Image dimmensions should be 192px by 192px minimum</li>
            </ul>
          </v-col> </v-row
        ><br />
        <buttonSuccess />
      </v-form>
    </v-card>
  </div>
</template>