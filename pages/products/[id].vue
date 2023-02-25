// /products/:id route
<template>
    <div>
        <h4>Products details for {{ id }}</h4>
    </div>
</template>

<script setup>
const {id}=useRoute().params
</script>

<style scoped>

</style>