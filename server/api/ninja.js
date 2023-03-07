export default defineEventHandler(async (event)=>{

    //handle query params
    const {name}= useQuery(event)

    //handle post data
    const {age}=await useBody(event)    // async added for await


    //api call with private key
    const {data}= await $fetch('https://api.currencyapi.com/v3/latest?apikey=uPiMicmOKOdPlGdoTIcYQU9F8Gjxg1jfJc7V84Qu&currencies=EUR%2CUSD%2CCAD')
    return {
        message:`Hellow ${name}! You are ${age} years old`
    }
})