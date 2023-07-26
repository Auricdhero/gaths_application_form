<template>
  <div>
    <v-container>
      <v-card elevation="2" style="padding: 1rem" color="blue">
        <h3 style="color: white">Biodata</h3> </v-card
      ><br />
      <v-card style="padding: 1rem">
        <h3 class="text-center">
          Please Note: All fields marked with * are mandatory.
        </h3>
        <v-form @submit.prevent="create" class="form">
          <h3>Basic Information</h3>
          <v-divider></v-divider>

          <br />

          <v-row>
            <v-col>
              <v-label>Title</v-label>
              <selectTitle v-model="form.title" />
            </v-col>

            <v-col>
              <v-label>Surname</v-label>
              <v-text-field
                label="Enter"
                v-model="form.surname"
                outlined
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-label>First Name</v-label>
              <v-text-field
                label="Enter"
                v-model="form.firstname"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col>
              <v-label>Other Names</v-label>
              <v-text-field
                label="Enter"
                v-model="form.othername"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- </v-col> -->
          <v-row>
            <v-col>
              <v-label>Gender</v-label>
              <selectGender v-model="form.gender" />
            </v-col>
            <v-col>
              <v-label>Date of Birth</v-label>
              <datePicker v-model="form.dob" required />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label>Country of Birth</v-label>
              <v-text-field
                label="Country of Birth"
                v-model="form.country_of_birth"
                outlined
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-label>Nationality</v-label>
              <v-text-field
                label="Nationality"
                v-model="form.nationality"
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label>Hometown</v-label>
              <v-text-field
                label="Enter"
                v-model="form.hometown"
                outlined
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-label>Region</v-label>
              <selectRegion v-model="form.region" />
            </v-col>
          </v-row>

          <br />
          >
          <h3 class="text-left">ADDRESS OF APPLICANT</h3>
          <v-divider></v-divider><br />
          <v-row>
            <v-col>
              <v-label>Address Line 1</v-label>
              <v-text-field
                label="Enter"
                v-model="form.addressLine1"
                outlined
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-label>Address Line 2</v-label>
              <v-text-field
                label="Enter"
                v-model="form.addressLine2"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label>Ghana Card Number (If available)</v-label>
              <v-text-field
                label="Enter"
                v-model="form.ghCardNo"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col>
              <v-label>Phone Number</v-label>
              <v-text-field
                label="Enter"
                v-model="form.phoneNo"
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label>Email</v-label>
              <v-text-field
                label="Enter"
                v-model="form.email"
                outlined
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <buttonSuccess />
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    form: {
      title: "",
      surname: "",
      firstname: "",
      othername: "",
      gender: "",
      dob: "",
      email: "",
      country_of_birth: "",
      nationality: "",
      hometown: "",
      region: "",
      addressLine1: "",
      addressLine2: "",
      ghCardNo: "",
      phoneNo: "",
      email: "",
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
    //
  },
};
</script>
<style>
/* @media screen, only screen and( min-width: 767px) {
  .form{}
} */
</style>