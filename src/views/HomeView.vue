<script setup>
import SplineScene from "@/components/SplineScene.vue";

import lacoImage from "@/assets/projects/laco.jpg";
import questClockImage from "@/assets/projects/quest_clock.jpg";
import tattooImage from "@/assets/projects/tattoo.jpg";
import campaignCancerImage from "@/assets/projects/cancer_campaign.png";
import pigeonatorImage from "@/assets/projects/pigeonator.png";
import weartherImage from "@/assets/projects/wearther.png";

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
  "cancer_campaign": {
    title: "Social Cancer Campaign",
    image: campaignCancerImage,
    link: "https://www.behance.net/gallery/189401471/QuestClock-Pomodoro-App-UIUX-Design"
  },
  "pigeonator": {
    title: "Pigeonator",
    image: pigeonatorImage,
    link: "https://www.behance.net/gallery/179920835/The-Pigeonator-Pixel-Art-Game"
  },
  "wearther": {
    title: "WEARther",
    image: weartherImage,
    link: "https://www.behance.net/gallery/179921743/WEARther-Your-Personal-Advisor"
  },
}
</script>

<template>
  <nav class="sticky z-[9999] top-0 flex py-4 px-4 md:px-10 bg-black">
    <div class="w-full flex justify-between items-center gap-4">
      <img src="@/assets/logo.svg" class="min-h-[40px] max-h-[40px] md:max-h-[50px]" alt="Logo Ms.Wer">
      <div class="flex justify-evenly items-center gap-5">
        <a class="text-white" href="https://www.instagram.com/mswer.art/profilecard/?igsh=MWkzdW10bGVkYzU3dA=="
           target="_blank">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="w-6 h-6 fill-white hover:fill-gray-300"
          >
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
          </svg>
        </a>
        <a href="tel:793 020 217n">
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 448 512"
               class="w-5 h-5 fill-white hover:fill-gray-300">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
          </svg>
        </a>
      </div>
    </div>
  </nav>
  <section class="bg-gray-200">
    <!-- Spline animation -->
    <SplineScene/>
  </section>
  <section class="flex flex-col md:flex-row justify-between items-center w-full md:w-3/4 p-6 md:p-20 mx-auto md:gap-20">
    <div class="w-full md:w-1/2 px-4 md:px-12 text-center md:text-left mb-8 md:mb-0">
      <o class="text-gray-600 text-[36px] md:text-[50px] leading-7">
        HELLO! <br>
        MY NAME IS
      </o>
      <p class="relative md:top-[-50px] inspiration text-brand-pink text-[72px] md:text-[104px]">
        Weronika!
      </p>
      <p class="relative md:top-[-50px] text-xl md:text-2xl text-gray-500">
        I combine digital design with handcrafted creativity, bringing ideas to life in both pixels and physical
        spaces.
      </p>
      <p class="text-brand-pink text-2xl md:text-3xl">
        <b>Let's create</b>
        <span class="font-extralight"> something unforgettable</span>
        <b> together</b>
      </p>
    </div>
    <div class="w-full md:w-1/2">
      <img src="@/assets/me.png" class="rounded-2xl w-full">
    </div>
  </section>
  <!-- Education -->
  <section id="education" aria-label="Education" class="flex justify-center items-center mx-auto px-4 md:px-0">
    <img src="@/assets/education.png" class="w-full md:w-2/3">
  </section>
  <!-- Experience -->
  <section id="experience" aria-label="Experience" class="flex justify-center items-center mx-auto px-4 md:px-0">
    <img src="@/assets/experience.png" class="w-full md:w-2/3">
  </section>
  <section id="fresh-experience" aria-label="2024 Experience"
           class="flex justify-center items-center mx-auto px-4 md:px-0">
    <img src="@/assets/experience2024.png" class="w-full md:w-2/3">
  </section>
  <!-- Technical skills -->
  <section id="technical skills" aria-label="Technical Skills"
           class="flex justify-center items-center mx-auto px-4 md:px-0">
    <img src="@/assets/technical_skills.png" class="w-full md:w-2/3">
  </section>
  <!-- Hobbies -->
  <section id="hobbyy" aria-label="Hobby" class="flex justify-center items-center mx-auto px-4 md:px-0">
    <img src="@/assets/hobbies.png" class="w-full md:w-2/3">
  </section>
  <!--  Project grid  -->
  <section id="realized-projects" aria-label="Realized Projects" class="w-full md:w-4/5 mx-auto mb-20 px-4 md:px-0">
    <p class="text-4xl md:text-5xl text-white font-bold text-center mb-10 md:mb-20">Take a look at my projects</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-4 md:px-8">
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
            class="absolute inset-0 flex flex-col justify-end p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        >
          <h3 class="text-white text-xl md:text-2xl font-bold mb-4">{{ project.title }}</h3>
          <a
              :href="project.link"
              target="_blank"
              class="inline-block bg-brand-pink text-white px-4 md:px-6 py-2 rounded-lg transform hover:scale-105 transition-transform duration-200 text-center"
          >
            View on Behance
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- Behance -->
  <section id="behance" aria-label="Behance" class="behance w-full relative">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="flex flex-col gap-4 md:gap-5 justify-center items-center py-8 md:py-20 relative z-10 px-4 md:px-0">
      <p class="text-3xl md:text-5xl text-white font-bold text-center">VISIT MY BEHANCE</p>
      <p class="text-2xl md:text-3xl text-white font-bold">FOR MORE!</p>
      <a href="https://www.behance.net/weronikapcak" target="_blank">
        <button class="bg-white rounded-lg py-2 px-4">LET'S SEE</button>
      </a>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" aria-label="Contact"
           class="flex flex-col justify-center items-center py-12 md:py-20 px-4 md:px-0">
    <p class="text-4xl md:text-5xl text-white font-bold text-center mb-4">Contact me</p>
    <a class="text-white text-lg md:text-xl" href="mailto:mswer.art@gmail.com">mswer.art@gmail.com</a>
  </section>
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