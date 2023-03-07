// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    app:{
      head:{
        title:'Nuxt Dojo',
        meta:[
          { name: 'description', content: "Everything abount Nuxt 3" }
        ],
        link:[
          { rel:'stylesheet', href: "https://fonts.googleapis.com/css?family=Tangerine" }
        ]
      }
    },
    runtimeConfig:{
      currencyKey: process.env.CURRENCY_API_KEY
    }
})
