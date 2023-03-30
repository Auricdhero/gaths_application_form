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
              <v-select label="Please select" outlined></v-select>
            </v-col>
            <v-col>
              <v-label>Region</v-label>
              <v-select label="Please select" outlined></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label>Name of Program</v-label>
              <v-text-field label="Enter" outlined></v-text-field>
            </v-col>
            <v-col>
              <v-label>Current level</v-label>
              <v-select label="Please Select" outlined></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-label>Start Date</v-label>
              <datePicker />
            </v-col>
            <v-col>
              <v-label>End Date</v-label>
              <datePicker />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
                <v-label>Student Identification</v-label>
                <v-text-field label="Please Enter" outlined></v-text-field>
            </v-col>
            <v-col>
                <v-label>Department</v-label>
                <v-text-field label="Please Enter" outlined></v-text-field>
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
  
};
</script>