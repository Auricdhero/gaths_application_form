<template>
    <div>
        <navbar />
        <slot />
        <TheFooter />
    </div>
</template>
<script>
export default{
    name: "DefaultLayout",
};
</script>