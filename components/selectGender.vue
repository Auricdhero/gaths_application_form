<template>
    <div>
        <v-select transition="slide-x-reverse-transition" label="Please select" :items="gender" outlined></v-select>
    </div>
</template>
<script>
export default {
    data: () => ({
        gender: ["Male", "Female"]
    })
}
</script>