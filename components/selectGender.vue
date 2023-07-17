<template>
    <div>
        <v-select label="Please select" :items="gender" outlined></v-select>
    </div>
</template>
<script>
export default {
    data: () => ({
        gender: ["Male", "Female", "Rather not say"]
    })
}
</script>