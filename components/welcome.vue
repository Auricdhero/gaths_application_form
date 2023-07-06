<template>
  <div>
    <v-container>
      <!-- <h1 class="text-center">Welcome, <strong>{{ $Auth.fullName }}</strong></h1> -->
      <h6 class="text-center">
        You have not completed your membership profile
      </h6>
      <br />
      <v-card elevation="2" style="padding: 1rem" color="blue">
        <h4 class="text-center" style="color: white">
          Complete your profile
        </h4> </v-card
      ><br />
      <v-card elevation="2" style="padding: 1em">
        <h3>New Message</h3>
        <p>
          Welcome to the Ghana Association of Tourism and Hospitality Students
          (GATHS) website! We are thrilled that you have signed up to be a part
          of our community.

          <br />
          <br />
          As a member of GATHS, you will have access to a range of resources and
          opportunities that will help you to grow both personally and
          professionally. Whether you are interested in tourism, hospitality, or
          any related field, we are committed to providing you with the tools
          and support you need to succeed.
        </p>
      </v-card>
      <br />
      <v-card style="padding: 1em">
        <h3 style="color: orange">Privacy Policy</h3>
        <p>
          The Ghana Association of Tourism and Hospitality Students (GATHS)
          values the privacy of our website users and takes all necessary steps
          to protect any personal information provided to us. We do not collect
          any personal information from our users without their consent, and we
          never share this information with third parties without explicit
          permission.
        </p>
        <v-btn color="green" style="color: white"
          >Learn More <v-icon>mdi-arrow-right-circle-outline</v-icon></v-btn
        >
      </v-card>

      <br />
      <externalLinks />
    </v-container>
  </div>
</template>
<script>
export default {};
</script>
