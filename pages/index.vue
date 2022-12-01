<template>
  <v-paralax height="900" :src="bgloop">
    <v-img :src="logo" height="200" width="200" style=" position: relative; left: 43%;"></v-img>
    <br>
    <h1 class="form-heading text-uppercase text-center">register to be a member</h1>
    <v-card dense class="justify-center"
      style="background:linear-gradient(351deg, rgba(190,195,34,0.5144432773109244) 0%, rgba(253,45,156,1) 100%); border-radius: 5%; width: 100%; padding: 1%;">
      <br>
      <v-form method="POST" action="https://api.apispreadsheets.com/data/OqsuUiv6hJ1Nqbo8/" class="pa-2" @submit.prevent="submit">
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="First Name" name="fName" solo dense></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Last Name" name="lName" solo dense></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Email" name="email" solo dense></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-select solo dense
              :items="idType"
              :rules="rules.idType"
              color="pink"
              name="idCard"
              label="ID Card Type"
              required
            ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="ID Number" name="idNum" solo dense></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Telephone" name="tel" solo dense></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" md="8">
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
            label="Date of Birth"
            name="dob"
            readonly
            solo
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
            </v-col>
          </v-row>
            <v-container class="pl-16 ml-16">
              <v-btn class="mb-10"
              @click="SubForm()"
              type="submit"
              >Submit</v-btn>
            </v-container>
        </v-container>
      </v-form>
    </v-card>
  </v-paralax>
</template>

<script>
import bgloop from '~/static/bgLoop.gif';
import logo from '~/static/logo.png';

fetch("https://api.apispreadsheets.com/data/OqsuUiv6hJ1Nqbo8/", {
	method: "POST",
	body: JSON.stringify({"data": {"dob":"","tel":"","email":"","fName":"","idNum":"","lName":"","idCard":""}}),
}).then(res =>{
	if (res.status === 201){
		// SUCCESS
	}
	else{
		// ERROR
	}
})

export default {
  name: 'IndexPage',
  head:{
    script: [
      {
        src: '~/static/main.js'
      }
    ]
  }
  ,
  data() {
    return {
      bgloop,
      logo,
      form: Object.assign({},),
        rules: {
          age: [
            val => val < 10 || `I don't believe you!`,
          ],
          idType: [val => (val || '').length > 0 || 'This field is required'],
          name: [val => (val || '').length > 0 || 'This field is required'],
        },
        idType: ['Ghana Card', 'Voters ID', 'Passport', 'Voters ID'],
        conditions: false,
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
        
        //defaultForm,
    }
  }

}
</script>
<style>
#app{
  background: url('~/static/bgLoop.gif') no-repeat center fixed;
  background-size: cover;
}
</style>
