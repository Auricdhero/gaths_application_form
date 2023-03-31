<template>
  <div>
    <v-card elevation="2" style="padding: 1rem">
      <h3 class="text-center text-uppercase">online application summary</h3>
      <br />

      <v-avartar size="100" color="white">
        <div class="text-center">
          <v-icon style="font-size: 10em">mdi-account-circle</v-icon>
        </div>
      </v-avartar>

      <div class="biodata" style="padding: 1rem">
        
          <v-row>
            <v-col>
              <h4 elevation="1" style="padding: 1rem">Biodata</h4>
            </v-col>
            <v-col>
              <v-card
                elevation="1"
                color="success"
                style="padding: 1rem; color: white"
                class="text-center"
                >Submitted</v-card
              >
            </v-col>
          </v-row>
          
        <br>
        <v-divider></v-divider><br>

        
      </div>
    </v-card>
  </div>
</template>