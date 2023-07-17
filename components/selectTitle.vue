<template>
    <div>
        <v-select label="Please select" :items="title" outlined></v-select>
    </div>
</template>
<script>
export default {
    data: () => ({
        title: ["Mr", "Ms", "Mrs.", "Dr.", "Prof"]
    })
}
</script>