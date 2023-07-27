<template>
    <div>
        <v-select transition="slide-x-reverse-transition" label="Please select" :items="title" outlined></v-select>
    </div>
</template>
<script>
export default {
    data: () => ({
        title: ["Mr", "Ms", "Mrs.", "Dr.", "Prof"]
    })
}
</script>