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
        <v-form>
          <h3>Basic Information</h3>
          <v-divider></v-divider>

          <br />
          <v-row>
            <v-col>
              <v-label>Title</v-label>
              <v-select
                label="Please Select Your Title"
                v-model="form.title"
                :items="title"
                outlined
              ></v-select>
            </v-col>

            <v-col>
              <v-label>Surname</v-label>
              <v-text-field
                label="Enter"
                v-model="form.sName"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label>First Name</v-label>
              <v-text-field
                label="Enter"
                v-model="form.fName"
                outlined
              ></v-text-field>
            </v-col>
            <v-col>
              <v-label>Other Names</v-label>
              <v-text-field
                label="Enter"
                v-model="form.oName"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label>Gender</v-label>
              <v-select
                label="Please Select"
                v-model="form.gender"
                outlined
              ></v-select>
            </v-col>
            <v-col>
              <v-label>Date of Birth</v-label>
              <datePicker v-model="form.dob" />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label>Country of Birth</v-label>
              <v-select
                label="Please Select"
                v-model="form.countryofbirth"
                outlined
              ></v-select>
            </v-col>
            <v-col>
              <v-label>Nationality</v-label>
              <v-select
                label="Please Select"
                v-model="form.nationality"
                outlined
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label>Hometown</v-label>
              <v-text-field
                label="Enter"
                v-model="form.hometown"
                outlined
              ></v-text-field>
            </v-col>
            <v-col>
              <v-label>Region</v-label>
              <v-select
                label="Please Select"
                :items="region"
                v-model="form.region"
                outlined
              ></v-select>
            </v-col>
          </v-row>

          <br />

          <h3 class="text-left">ADDRESS OF APPLICANT</h3>
          <v-divider></v-divider><br />
          <v-row>
            <v-col>
              <v-label>Address Line 1</v-label>
              <v-text-field
                label="Enter"
                v-model="form.addr1"
                outlined
              ></v-text-field>
            </v-col>
            <v-col>
              <v-label>Address Line 2</v-label>
              <v-text-field
                label="Enter"
                v-model="form.addr2"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label>Ghana Card Number (If available)</v-label>
              <v-text-field
                label="Enter"
                v-model="form.ghcardNo"
                outlined
              ></v-text-field>
            </v-col>
            <v-col>
              <v-label>Phone Number</v-label>
              <v-text-field
                label="Enter"
                v-model="form.phoneNo"
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
    title: ["MR", "MS", "Mrs.", "Dr.", "Prof"],
    region: [
      "Greater Accra",
      "Central",
      "Western",
      "Ashanti",
      "Volta",
      "Oti",
      "Eastern",
      "Northern",
      "North East",
      "Bono East",
      "Brong Ahafo",
      "Western North",
      "Upper East",
      "Upper West",
    ],
    form: {
      title: [],
      sName: "",
      fName: "",
      oName: "",
      gender: "",
      dob: "",
      email: "",
      countryofbirth: "",
      nationality: "",
      hometown: "",
      region: [],
      addr1: "",
      addr2: "",
      ghcardNo: "",
      phoneNo: "",
      email: "",
    },
  }),
};
</script>