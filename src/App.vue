<script setup>
import {useHead} from '@vueuse/head'
import HomeView from "@/views/HomeView.vue"

useHead({
  title: 'Weronika Portfolio - Digital Designer & Creative Artist',
  meta: [
    {
      name: 'description',
      content: 'Digital designer combining pixel-perfect design with handcrafted creativity. Specializing in UI/UX, branding, and creative solutions.'
    },
    {
      name: 'keywords',
      content: 'digital design, UI/UX designer, creative artist, portfolio, branding, Weronika, web design, graphic designer'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:title',
      content: 'Weronika Portfolio - Digital Designer & Creative Artist'
    },
    {
      property: 'og:description',
      content: 'Digital designer combining pixel-perfect design with handcrafted creativity. Specializing in UI/UX, branding, and creative solutions.'
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
      content: 'Weronika Portfolio - Digital Designer & Creative Artist'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  link: [
    {
      rel: 'canonical',
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