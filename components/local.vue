<template>
  <div>
    <v-container style="height: 85vh">
      <v-card elevation="2" style="padding: 1rem" color="blue">
        <h3 style="color: white">Local Chapter</h3> </v-card
      ><br />

      <v-card style="padding: 1rem">
        <v-form @submit.prevent="create">
          <h3 class="text-center">
            Please Note: All fields marked with * are mandatory.
          </h3>
          <h4 class="text-uppercase">Details of local chapter</h4>
          <v-divider></v-divider><br />

          <v-row>
            <v-col>
              <v-label>Name of Local Chapter</v-label>
              <v-text-field
                v-model="form.localChapterName"
                label="Please Select"
                outlined
              ></v-text-field>
            </v-col>
            <v-col>
              <v-label>Position in Chapter</v-label>
              <v-text-field
                v-model="form.PositionsChapter"
                label="Please Enter"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label>Year Joined</v-label>
              <datePicker v-model="form.dateJoined" />
            </v-col>
            <v-col>
              <v-label>Membership Number</v-label>
              <v-text-field
                v-model="form.membershipNo"
                label="Please Enter"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <buttonSuccess type="submit" />
        </v-form> </v-card
      ><br />

      <externalLinks />
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    form: {
      localChapterName: "",
      PositionsChapter: "",
      dateJoined: "",
      membershipNo: "",
    },
  }),
  methods: {
    async create() {
      try {
        const user = await this.$store.dispatch("api/createUser");
        console.log("Submitted");
      } catch (error) {
        console.log({ error });
      }
    },
  }
};
</script>