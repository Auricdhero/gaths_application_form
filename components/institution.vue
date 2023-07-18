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
              <selectInstitution v-model="form.nameOfInstitution" />
            </v-col>
            <v-col>
              <v-label>Region</v-label>
              <selectRegion v-model="form.institutionRegion" />
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
              <selectLevel v-model="form.level" />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label>Start Date</v-label>
              <datePicker v-model="form.dateStart" />
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
                v-model="form.studentId"
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
          <buttonSuccess type="submit" />
        </v-card>
      </v-form>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    form: {
      nameOfInstitution: "",
      institutionRegion: "",
      prog: "",
      level: "",
      dateStart: "",
      endDate: "",
      studentId: "",
      department: "",
    },
  }),
};
</script>