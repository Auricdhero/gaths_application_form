<template>
  <div>
    <v-select transition="slide-x-reverse-transition" :items="level" label="Please Select" outlined></v-select>
  </div>
</template>
<script>
export default {
  data: () => ({
    level: ["Year 1", "Year 2", "Year 3", "Year 4", "Postgraduate"],
  }),
};
</script>