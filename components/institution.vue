<template>
  <div>
    <v-container>
      <v-card elevation="2" style="padding: 1rem" color="blue">
        <h3 style="color: white">Institution</h3> </v-card
      ><br />

      <v-form>
        <v-card elevation="2" style="padding: 1rem">
          <h3 class="text-center">
            PLEASE NOTE: All fields marked with * are mandatory
          </h3>
          <br />
          <h3>DETAILS OF INSTITUTION</h3>
          <v-divider></v-divider><br />

          <v-row>
            <v-col>
              <v-label>Name of Institution</v-label>
              <v-select
                label="Please select"
                v-model="form.institution"
                :items="institution"
                outlined
              ></v-select>
            </v-col>
            <v-col>
              <v-label>Region</v-label>
              <v-select
                label="Please select"
                :items="institutionRegion"
                v-model="form.institutionRegion"
                outlined
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label>Name of Program</v-label>
              <v-text-field
                label="Enter"
                v-model="form.prog"
                outlined
              ></v-text-field>
            </v-col>
            <v-col>
              <v-label>Current level</v-label>
              <v-select
                v-model="form.level"
                :items="level"
                label="Please Select"
                outlined
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label>Start Date</v-label>
              <datePicker v-model="form.startDate" />
            </v-col>
            <v-col>
              <v-label>End Date</v-label>
              <datePicker v-model="form.endDate" />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label>Student Identification</v-label>
              <v-text-field
                v-model="form.studentID"
                label="Please Enter"
                outlined
              ></v-text-field>
            </v-col>
            <v-col>
              <v-label>Department</v-label>
              <v-text-field
                v-model="form.department"
                label="Please Enter"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <buttonSuccess />
        </v-card>
      </v-form>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    institution: [
      "University of Ghana",
      "Kwame Nkrumah University of Science and Technology",
      "Accra Techncal University",
      "Kumasi technical University",
      "Takoradi Technical University",
      "Accra Institute of Technology",
    ],
    institutionRegion: [
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
    level: ["Year 1", "Year 2", "Year 3", "Year 4", "Postgraduate"],
    form: {
      institution: [],
      institutionRegion: [],
      prog: "",
      level: [],
      startDate: "",
      endDate: "",
      studentID: "",
      department: "",
    },
  }),
};
</script>