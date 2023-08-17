<template>
  <div>
    <v-container>
      <v-card elevation="2" style="padding: 1rem" color="blue">
        <h3 style="color: white">Biodata</h3>
      </v-card><br />
      <v-card style="padding: 1rem">
        <h3 class="text-center">
          Please Note: All fields marked with * are mandatory.
        </h3>
        <v-form v-if="isCreate === true" @submit.prevent="create">
          <br />
          <h3>Basic Information</h3>
          <v-divider></v-divider>

          <br />

          <v-row>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Title <p color="red">*</p></v-label>
              <selectTitle v-model="form.title" />
            </v-col>

            <v-col cols="auto" lg="6" sm="12">
              <v-label>Surname</v-label>
              <v-text-field label="Enter" v-model="form.surname" outlined required></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>First Name</v-label>
              <v-text-field label="Enter" v-model="form.firstname" required outlined></v-text-field>
            </v-col>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Other Names</v-label>
              <v-text-field label="Enter" v-model="form.othername" outlined></v-text-field>
            </v-col>
          </v-row>

          <!-- </v-col> -->
          <v-row>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Gender</v-label>
              <selectGender v-model="form.gender" />
            </v-col>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Date of Birth</v-label>
              <datePicker v-model="form.dob" required />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Country of Birth</v-label>
              <v-text-field label="Country of Birth" v-model="form.country_of_birth" outlined required></v-text-field>
            </v-col>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Nationality</v-label>
              <v-text-field label="Nationality" v-model="form.nationality" required outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Hometown</v-label>
              <v-text-field label="Enter" v-model="form.hometown" outlined required></v-text-field>
            </v-col>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Region</v-label>
              <selectRegion v-model="form.region" />
            </v-col>
          </v-row>

          <br />

          <h3 class="text-left">ADDRESS OF APPLICANT</h3>
          <v-divider></v-divider><br />
          <v-row>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Address Line 1</v-label>
              <v-text-field label="Enter" v-model="form.addressLine1" outlined required></v-text-field>
            </v-col>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Address Line 2</v-label>``
              <v-text-field label="Enter" v-model="form.addressLine2" outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Ghana Card Number (If available)</v-label>
              <v-text-field label="Enter" v-model="form.ghCardNo" required outlined></v-text-field>
            </v-col>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Phone Number</v-label>
              <v-text-field label="Enter" v-model="form.phoneNo" required outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Email</v-label>
              <v-text-field label="Enter" v-model="form.email" outlined required></v-text-field>
            </v-col>
          </v-row>

          <buttonSuccess />
        </v-form>
        <v-form v-else @submit.prevent="update">
          <br />
          <h3>Basic Information</h3>
          <v-divider></v-divider>

          <br />

          <v-row>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Title<sup style="color: red;">*</sup></v-label>
              <selectTitle v-model="form.title" />
            </v-col>

            <v-col cols="auto" lg="6" sm="12">
              <v-label>Surname<sup style="color: red;">*</sup></v-label>
              <v-text-field label="Enter" v-model="form.surname" outlined required></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>First Name<sup style="color: red;">*</sup></v-label>
              <v-text-field label="Enter" v-model="form.firstname" required outlined></v-text-field>
            </v-col>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Other Names</v-label>
              <v-text-field label="Enter" v-model="form.othername" outlined></v-text-field>
            </v-col>
          </v-row>

          <!-- </v-col> -->
          <v-row>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Gender<sup style="color: red;">*</sup></v-label>
              <selectGender v-model="updateForm.gender" />
            </v-col>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Date of Birth<sup style="color: red;">*</sup></v-label>
              <datePicker v-model="updateForm.dob" required />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Country of Birth<sup style="color: red;">*</sup></v-label>
              <v-text-field label="Country of Birth" v-model="updateForm.country_of_birth" outlined
                required></v-text-field>
            </v-col>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Nationality<sup style="color: red;">*</sup></v-label>
              <v-text-field label="Nationality" v-model="updateForm.nationality" required outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Hometown<sup style="color: red;">*</sup></v-label>
              <v-text-field label="Enter" v-model="updateForm.hometown" outlined required></v-text-field>
            </v-col>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Region<sup style="color: red;">*</sup></v-label>
              <selectRegion v-model="updateForm.region" />
            </v-col>
          </v-row>

          <br />

          <h3 class="text-left">ADDRESS OF APPLICANT</h3>
          <v-divider></v-divider><br />
          <v-row>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Address Line 1<sup style="color: red;">*</sup></v-label>
              <v-text-field label="Enter" v-model="updateForm.addressLine1" outlined required></v-text-field>
            </v-col>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Address Line 2</v-label>
              <v-text-field label="Enter" v-model="updateForm.addressLine2" outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Ghana Card Number (If available)</v-label>
              <v-text-field label="Enter" v-model="updateForm.ghCardNo" required outlined></v-text-field>
            </v-col>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Phone Number<sup style="color: red;">*</sup></v-label>
              <v-text-field label="Enter" v-model="updateForm.phoneNo" required outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" lg="6" sm="12">
              <v-label>Email<sup style="color: red;">*</sup></v-label>
              <v-text-field label="Enter" v-model="updateForm.email" outlined required></v-text-field>
            </v-col>
          </v-row>

          <btnUpdate />
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  async asyncData({ store, params }) {
    return { user: await store.dispatch('user/getUser', params.id) }
  },

  data: () => ({
    // title:["Mr", "Ms", "Mrs.", "Dr.", "Prof"],
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
    updateForm: {
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
    }

  }),
  computed: {
    isCreate() {
      return this.$route.name === 'create';
    }
  },
  methods: {
    async create() {
      try {

        const user = await this.$store.dispatch(
          "api/createUser",
          this.getCreatePayload()
        )

      } catch (error) {
        console.log({ error });
      }
    },
    getCreatePayload() {
      return {
        ...this.form,
        userId: this.$auth.id,
        // createdAt: Date.now() + "",
      };
    },

    async update() {
      try {

        return {
          user: await this.$store.dispatch('api/updateUser',
            this.getUpdatePayload()
          )
        }
      } catch (error) {
        console.log({ error });
      }
    },
    getUpdatePayload() {
      return {
        ...this.updateForm,
        id: this.user.id
      };
    },
  },
};
</script>
<style>
/* @media screen, only screen and( min-width: 767px) {
  .form{}
} */
</style>