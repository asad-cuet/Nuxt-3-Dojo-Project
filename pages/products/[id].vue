// /products/:id route
<template>
    <div>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
definePageMeta({
    layout:'products'
})
const {id}=useRoute().params

const url='https://fakestoreapi.com/products/'+id

const {data:product}=await useFetch(url,{key:id})   // key is tellig the fetch function that the id is different from last call
</script>

<style scoped>

</style>