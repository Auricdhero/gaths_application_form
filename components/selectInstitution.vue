<template>
  <div>
    <v-select label="Please select" :items="institution" outlined></v-select>
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
      "University of Energy and Natural Resources",
      "University of Development Studies",
      "Ho Technical University",
      "University of Health and Allied Sciences",
      "Ashesi University College"
    ],
  }),
};
</script>