export default defineEventHandler(async ()=>{

    //api call with private key
    const {data}= await $fetch('https://api.currencyapi.com/v3/latest?apikey=uPiMicmOKOdPlGdoTIcYQU9F8Gjxg1jfJc7V84Qu')
    return data
})