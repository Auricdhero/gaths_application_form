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
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    outlined
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col>
              <v-label>End Date</v-label>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    outlined
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
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
          <v-btn color="success">Save and Continue</v-btn>
        </v-card>
      </v-form>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
};
</script>