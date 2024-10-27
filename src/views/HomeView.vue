<script setup>

import SplineScene from "@/components/SplineScene.vue";
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
  <!-- Technical skills -->
  <div class="flex justify-center items-center mx-auto">
    <img src="@/assets/technical_skills.png" class="w-2/3">
  </div>
  <!-- Hobbies -->
  <div class="flex justify-center items-center mx-auto">
    <img src="@/assets/hobbies.png" class="w-2/3">
  </div>
  <!--  Project grid  -->
  <div class="flex justify-evenly items-center">

  </div>
  <!-- Behance -->
  <div class="behance w-full relative">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="flex flex-col gap-5 justify-center items-center py-10 relative z-10">
      <p class="text-5xl text-white font-bold">VISIT MY BEHANCE</p>
      <p class="text-3xl text-white font-bold">FOR MORE!</p>
      <button class="bg-white rounded-lg py-2 px-4">LETS SEE</button>
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