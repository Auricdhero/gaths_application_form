<template>
  <div>
    <div class="light x1"></div>
    <div class="light x2"></div>
    <div class="light x3"></div>
    <div class="light x4"></div>
    <div class="light x5"></div>
    <div class="light x6"></div>
    <div class="light x7"></div>
    <div class="light x8"></div>
    <div class="light x9"></div>
    
    
    <v-img class="logo" :src="logo" height="200" width="200"></v-img>
   
    <h1 class="text-center">GATHS REGISTRATION FORM</h1>
    <v-form method="POST" action="https://api.apispreadsheets.com/data/1SooiCkqbqxQMR4z/" @submit.prevent="submit" v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field v-model="name" name="fName" label="First Name" required></v-text-field>
          </v-col>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field v-model="name" name="lName" label="Last Name" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-select v-model="select" name="gender" :items="gender" :rules="[v => !!v || 'Item is required']" label="Gender" required></v-select>
          </v-col>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field name="email" label="Email"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field name="number" label="Phone Number"></v-text-field>
          </v-col>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field name="institution" label="Name of Institution"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field name="prog" label="Programme of Study"></v-text-field>
          </v-col>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-select v-model="select" name="year" :items="year" :rules="[v => !!v || 'Item is required']" label="Year" required></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field name="stndId" label="Student ID/Index Number"></v-text-field>
          </v-col>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field name="localAssoc" label="Name of Local Association"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field name="ntnID" label="National ID Number"></v-text-field>
          </v-col>
          <v-col cols="6" md="12" sm="6" lg="6">
            <v-text-field name="residence" label="City/Town of Residence"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col >
            <v-file-input label="Passport Picture"></v-file-input>
          </v-col>
        </v-row>
        <div class="fill-height">
          <v-btn @click="SubForm()" type="submit" block>Submit</v-btn>
        </div>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import logo from '~/static/logo.png';

fetch("https://api.apispreadsheets.com/data/1SooiCkqbqxQMR4z/", {
	    method: "POST",
	    body: JSON.stringify({"data": {"prog":"","year":"","email":"","fName":"","lName":"","ntnID":"","gender":"","number":"","stndId":"","residence":"","localAssoc":"","institution":""}}),
    }).then(res =>{
      if (res.status === 201){
        // SUCCESS
        //alert("Your Form has been submitted Successfully!");
        //  window.history.back();
      }
      else{
        //alert("Failed!");
        // ERROR
      }
})

export default{
  
  data() {
    
    return {
      logo,
      //select: null,
      gender: ['Male', 'Female'],
      year: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Postgraduate']
    }
  }
}
</script>
<style>
body {
    margin: 0;
    font-weight: 100;
    background: radial-gradient(#a23982,#1f1013);
    -webkit-overflow-Y: hidden;
    -moz-overflow-Y: hidden;
    -o-overflow-Y: hidden;
    overflow-y: hidden;
    -webkit-animation: fadeIn 1 1s ease-out;
    -moz-animation: fadeIn 1 1s ease-out;
    -o-animation: fadeIn 1 1s ease-out;
    animation: fadeIn 1 1s ease-out;
}

.light {
    position: absolute;
    width: 0px;
    opacity: .75;
    background-color: white;
    box-shadow: #e9f1f1 0px 0px 20px 2px;
    opacity: 0;
    top: 100vh;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
}
.x1{
  -webkit-animation: floatUp 4s infinite linear;
  -moz-animation: floatUp 4s infinite linear;
  -o-animation: floatUp 4s infinite linear;
  animation: floatUp 4s infinite linear;
   -webkit-transform: scale(1.0);
   -moz-transform: scale(1.0);
   -o-transform: scale(1.0);
  transform: scale(1.0);
}

.x2{
  -webkit-animation: floatUp 7s infinite linear;
  -moz-animation: floatUp 7s infinite linear;
  -o-animation: floatUp 7s infinite linear;
  animation: floatUp 7s infinite linear;
  -webkit-transform: scale(1.6);
  -moz-transform: scale(1.6);
  -o-transform: scale(1.6);
  transform: scale(1.6);
  left: 15%;
}

.x3{
  -webkit-animation: floatUp 2.5s infinite linear;
  -moz-animation: floatUp 2.5s infinite linear;
  -o-animation: floatUp 2.5s infinite linear;
  animation: floatUp 2.5s infinite linear;
  -webkit-transform: scale(.5);
  -moz-transform: scale(.5);
  -o-transform: scale(.5);
  transform: scale(.5);
  left: -15%;
}

.x4{
  -webkit-animation: floatUp 4.5s infinite linear;
  -moz-animation: floatUp 4.5s infinite linear;
  -o-animation: floatUp 4.5s infinite linear;
  animation: floatUp 4.5s infinite linear;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
  left: -34%;
}

.x5{
  -webkit-animation: floatUp 8s infinite linear;
  -moz-animation: floatUp 8s infinite linear;
  -o-animation: floatUp 8s infinite linear;
  animation: floatUp 8s infinite linear;
  -webkit-transform: scale(2.2);
  -moz-transform: scale(2.2);
  -o-transform: scale(2.2);
  transform: scale(2.2);
  left: -57%;
}

.x6{
  -webkit-animation: floatUp 3s infinite linear;
  -moz-animation: floatUp 3s infinite linear;
  -o-animation: floatUp 3s infinite linear;
  animation: floatUp 3s infinite linear;
  -webkit-transform: scale(.8);
  -moz-transform: scale(.8);
  -o-transform: scale(.8);
  transform: scale(.8);
  left: -81%;
}

.x7{
  -webkit-animation: floatUp 5.3s infinite linear;
  -moz-animation: floatUp 5.3s infinite linear;
  -o-animation: floatUp 5.3s infinite linear;
  animation: floatUp 5.3s infinite linear;
  -webkit-transform: scale(3.2);
  -moz-transform: scale(3.2);
  -o-transform: scale(3.2);
  transform: scale(3.2);
  left: 37%;
}

.x8{
  -webkit-animation: floatUp 4.7s infinite linear;
  -moz-animation: floatUp 4.7s infinite linear;
  -o-animation: floatUp 4.7s infinite linear;
  animation: floatUp 4.7s infinite linear;
  -webkit-transform: scale(1.7);
  -moz-transform: scale(1.7);
  -o-transform: scale(1.7);
  transform: scale(1.7);
  left: 62%;
}

.x9{
  -webkit-animation: floatUp 4.1s infinite linear;
  -moz-animation: floatUp 4.1s infinite linear;
  -o-animation: floatUp 4.1s infinite linear;
  animation: floatUp 4.1s infinite linear;
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  -o-transform: scale(0.9);
  transform: scale(0.9);
  left: 85%;
}
@-webkit-keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}
@-moz-keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}
@-o-keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}
@keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}

@-webkit-keyframes fadeIn{
  from{opacity: 0;}
  to{opacity: 1;}
}

@-moz-keyframes fadeIn{
  from{opacity: 0;}
  to{opacity: 1;}
}

@-o-keyframes fadeIn{
  from{opacity: 0;}
  to{opacity: 1;}
}

@keyframes fadeIn{
  from{opacity: 0;}
  to{opacity: 1;}
}

@-webkit-keyframes fadeOut{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 0;}
}

@-moz-keyframes fadeOut{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 0;}
}

@-o-keyframes fadeOut{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 0;}
}

@keyframes fadeOut{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 0;}
}

@-webkit-keyframes finalFade{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 1;}
}

@-moz-keyframes finalFade{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 1;}
}

@-o-keyframes finalFade{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 1;}
}

@keyframes finalFade{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 1;}
}

.logo{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

#app{
  background-color: var(--v-background-base);
}
</style>
