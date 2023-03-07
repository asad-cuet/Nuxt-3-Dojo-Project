<template>
    <div>
        <h4>Currency</h4>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>

const {data}=await useFetch('/api/currency/GBP')


</script>



<style scoped>

</style>