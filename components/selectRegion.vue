<template>
    <div>
        <v-select label="Please select" :items="region" outlined></v-select>
    </div>
</template>
<script>
export default {
    data: () => ({
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
  }),
}
</script>