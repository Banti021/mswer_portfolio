<script setup>
import {useHead} from '@vueuse/head'
import HomeView from "@/views/HomeView.vue"

useHead({
  htmlAttrs: {
    lang: 'pl',
  },
  title: 'MSWER - Projektantka Graficzna & Digital Designer | Portfolio Weronika Pęcak',
  meta: [
    {
      name: 'description',
      content: 'MSWER Art & Design - Portfolio projektantki graficznej Weroniki Pęcak. Tworzę kreatywne rozwiązania UI/UX, branding oraz identyfikację wizualną. Experienced woman digital designer specializing in UI/UX, branding, and creative solutions.'
    },
    {
      name: 'keywords',
      content: 'mswer, mswer art, projektantka graficzna, projektantka UI/UX, projekt graficzny, identyfikacja wizualna, portfolio graficzki, projektowanie graficzne, projekt logo, graficzka warszawa, digital design, UI/UX designer, creative artist, portfolio, branding, Weronika, Weronika Pęcak, Weronika Pecak, web design, graphic designer, projektowanie graficzne warszawa, design dla firm, projektowanie logo, projekty graficzne, projekty brandingowe'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:title',
      content: 'MSWER - Projektantka Graficzna & Digital Designer | Portfolio Weroniki Pęcak'
    },
    {
      property: 'og:description',
      content: 'MSWER Art & Design - Portfolio projektantki graficznej. Kreatywne rozwiązania UI/UX, branding oraz identyfikacja wizualna. Woman digital designer specializing in UI/UX and branding.'
    },
    {
      property: 'og:locale',
      content: 'pl_PL'
    },
    {
      property: 'og:locale:alternate',
      content: 'en_US'
    },
    {
      property: 'og:image',
      content: 'https://www.mswer.art/me.png'
    },
    {
      property: 'og:url',
      content: 'https://www.mswer.art'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'MSWER - Projektantka Graficzna & Digital Designer'
    },
    {
      name: 'geo.region',
      content: 'PL'
    },
    {
      name: 'geo.position',
      content: '52.2297;21.0122'
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large'
    },
    // Additional meta tags for better visibility
    {
      name: 'author',
      content: 'Weronika Pęcak'
    },
    {
      name: 'copyright',
      content: '© 2024 MSWER Art & Design'
    },
    {
      name: 'format-detection',
      content: 'telephone=no'
    },
    {
      name: 'theme-color',
      content: '#000000'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.mswer.art'
    },
    {
      rel: 'author',
      href: 'https://www.mswer.art'
    }
  ]
})
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <div class="bg-black">
    <HomeView/>
  </div>
</template>