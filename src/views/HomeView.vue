<script setup>

import SplineScene from "@/components/SplineScene.vue";

import lacoImage from "@/assets/projects/laco.jpg";
import questClockImage from "@/assets/projects/quest_clock.jpg";
import tattooImage from "@/assets/projects/tattoo.jpg";
import campaignCancerImage from "@/assets/projects/cancer_campaign.avif";
import threeDGraphicsImage from "@/assets/projects/3d_graphics.avif";

const projects = {
  "laco": {
    title: "LaCo Brand",
    image: lacoImage,
    link: "https://www.behance.net/gallery/205614027/Cocktail-Bar"
  },
  "quest_clock": {
    title: "Quest Clock",
    image: questClockImage,
    link: "https://www.behance.net/gallery/205266821/TATTOO-STUDIO-Instagram-Posts"
  },
  "tattoo": {
    title: "Tattoo Some",
    image: tattooImage,
    link: "https://www.behance.net/gallery/189401471/QuestClock-Pomodoro-App-UIUX-Design"
  },
  "cancerCampaign": {
    title: "Social Cancer Campaign",
    image: campaignCancerImage,
    link: "https://www.behance.net/gallery/189401471/QuestClock-Pomodoro-App-UIUX-Design"
  },
  "3dGraphics": {
    title: "3D Graphics",
    image: threeDGraphicsImage,
    link: "https://www.behance.net/gallery/189401471/QuestClock-Pomodoro-App-UIUX-Design"
  },
}
</script>

<template>
  <nav class="sticky top-0 flex py-4 px-10 bg-black">
    <img src="@/assets/logo.svg" class="max-h-[50px]" alt="Logo Ms.Wer">
  </nav>
  <div class="bg-gray-200">
    <!-- Spline animation -->
    <SplineScene/>
  </div>
  <div class="flex justify-between items-center w-3/4 p-20 mx-auto gap-20">
    <div class="w-1/2 px-12">
      <o class="text-gray-600 text-[50px] leading-7">
        HELLO! <br>
        MY NAME IS
      </o>
      <p class="relative top-[-50px] inspiration text-brand-pink text-[104px]">
        Weronika!
      </p>
      <p class="relative top-[-50px] text-2xl text-gray-500">
        I combine digital design with handcrafted creativity, bringing ideas to life in both pixels and physical
        spaces.
      </p>
      <p class="text-brand-pink text-3xl">
        <b>Let's create</b>
        <span class="font-extralight"> something unforgettable</span
        ><b> together</b>
      </p>
    </div>
    <div class="w-1/2">
      <img src="@/assets/me.png" class="rounded-2xl">
    </div>
  </div>
  <!-- Education -->
  <div class="flex justify-center items-center mx-auto">
    <img src="@/assets/education.png" class="w-2/3">
  </div>
  <!-- Experience -->
  <div class="flex justify-center items-center mx-auto">
    <img src="@/assets/experience.png" class="w-2/3">
  </div>
  <div class="flex justify-center items-center mx-auto">
    <img src="@/assets/experience2024.png" class="w-2/3">
  </div>
  <!-- Technical skills -->
  <div class="flex justify-center items-center mx-auto">
    <img src="@/assets/technical_skills.png" class="w-2/3">
  </div>
  <!-- Hobbies -->
  <div class="flex justify-center items-center mx-auto">
    <img src="@/assets/hobbies.png" class="w-2/3">
  </div>
  <!--  Project grid  -->
  <div class="w-4/5 mx-auto mb-20">
    <p class="text-5xl text-white font-bold text-center mb-20">Take a look at my projects</p>
    <div class="grid grid-cols-3 gap-8 px-8">
      <div
          v-for="(project, key) in projects"
          :key="key"
          class="project-card group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
      >
        <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        >
        <div
            class="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
        <div
            class="absolute inset-0 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        >
          <h3 class="text-white text-2xl font-bold mb-4">{{ project.title }}</h3>
          <a
              :href="project.link"
              target="_blank"
              class="inline-block bg-brand-pink text-white px-6 py-2 rounded-lg transform hover:scale-105 transition-transform duration-200 text-center"
          >
            View on Behance
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Behance -->
  <div class="behance w-full relative">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="flex flex-col gap-5 justify-center items-center py-10 relative z-10">
      <p class="text-5xl text-white font-bold">VISIT MY BEHANCE</p>
      <p class="text-3xl text-white font-bold">FOR MORE!</p>
      <a href="https://www.behance.net/weronikapcak" target="_blank">
        <button class="bg-white rounded-lg py-2 px-4">LETS SEE</button>
      </a>

    </div>
  </div>

  <!-- Contact -->
  <div class="flex flex-col justify-center items-center py-20">
    <p class="text-5xl text-white font-bold">Contact me</p>
    <a class="text-white text-xl" href="mailto:werapecak@gmail.com">werapecak@gmail.com</a>
  </div>
</template>

<style>
.inspiration {
  font-family: "Inspiration", cursive;
  font-weight: 400;
  font-style: normal;
}

.behance {
  background-image: url('../assets/behance_bg.png');
  background-size: cover;
  background-position: center;
}
</style>