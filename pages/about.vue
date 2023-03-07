<template>
    <div>
        <h4>About</h4>
        <p>feew uiewiuehd euihwkdhuwehiuwehd wiueuwehwed</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>

const {data}=await useFetch('/api/ninja?name=asad',{
    method:'post',
    body: { age:30 }
})


</script>



<style scoped>

</style>