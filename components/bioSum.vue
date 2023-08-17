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

      <div style="padding: 1rem">
        <v-row>
          <v-col cols="auto">
            <h4 elevation="1" style="padding: 1rem">Biodata</h4>
          </v-col>
          <v-col cols="auto">
            <v-card v-if="bioDataSubmit == true" elevation="1" color="success" style="padding: 1rem; color: white"
              class="text-center">Submitted</v-card>
            <v-card v-else elevation="1" color="error" style="padding: 1rem; color: white" class="text-center">Not
              Submited</v-card>
          </v-col>
        </v-row>

        <br />
        <v-divider></v-divider><br />

        <v-sheet>
          <div style="border: 1px solid #dbdbdb; background: #fafbfc" class="bioSummary">
            <div style="padding: 3%">
              <p>Title: </p>
              <p>Surname: </p>
              <p>First Name:</p>
              <p>Other Names:</p>
              <p>Date of Birth:</p>
              <p>Gender:</p>
              <p>Email:</p>
              <p>Mobile Number:</p>
              <p>Nationality:</p>
              <p>Identification Number:</p>
            </div>
          </div>
        </v-sheet>
      </div>
      <div style="padding: 1rem">
        <v-row>
          <v-col cols="auto">
            <h4 elevation="1" style="padding: 1rem">Institution</h4>
          </v-col>
          <v-col cols="auto">
            <v-card v-if="institutionSubmit == true" elevation="1" color="success" style="padding: 1rem; color: white"
              class="text-center">Submitted</v-card>
            <v-card v-else elevation="1" color="error" style="padding: 1rem; color: white" class="text-center">Not
              Submited</v-card>
          </v-col>
        </v-row>

        <br />
        <v-divider></v-divider><br />

        <v-sheet>
          <div style="border: 1px solid #dbdbdb; background: #fafbfc" class="bioSummary">
            <div style="padding: 3%">
              <p>Institution:</p>
              <p>Program:</p>
              <p>Start Date:</p>
              <p>End Date:</p>
              <p>Student ID:</p>
            </div>
          </div>
        </v-sheet>
      </div>
      <div style="padding: 1rem">
        <v-row>
          <v-col cols="auto">
            <h4 elevation="1" style="padding: 1rem">Local Chapter</h4>
          </v-col>
          <v-col cols="auto">
            <v-card v-if="localChapter == true" elevation="1" color="success" style="padding: 1rem; color: white"
              class="text-center">Submitted</v-card>
            <v-card v-else elevation="1" color="error" style="padding: 1rem; color: white" class="text-center">Not
              Submited</v-card>
          </v-col>
        </v-row>

        <br />
        <v-divider></v-divider><br />

        <v-sheet>
          <div style="border: 1px solid #dbdbdb; background: #fafbfc" class="bioSummary">
            <div style="padding: 3%">
              <p>Local Chapter:</p>
              <p>Position:</p>
              <p>Year Joined:</p>
              <p>Membership ID:</p>
              <!-- <p>Student ID:</p> -->
            </div>
          </div>
        </v-sheet>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  async asyncData({ store, params }) {
    return {
      user: await store.dispatch('user/getUser', params.id)
    }
  },
  data:()=> {
    return {
      // user
    }
  }
  // methods: {
   
  // }
};
</script>