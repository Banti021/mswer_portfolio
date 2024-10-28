<template>
  <div class="relative flex items-center w-full h-[100vh] md:h-[60vh]">
    <!-- Text Overlay -->
    <div class="absolute inset-0 flex flex-col items-center justify-center z-20">
      <p class="text-[100px] relative top-[+40px] md:top-0 md:text-6xl lg:text-[100px] text-white drop-shadow-lg">BE</p>
      <p class="text-[60px] md:text-6xl lg:text-[100px] leading-3 text-brand-pink font-bold drop-shadow-lg">
        OUTSTANDING</p>
      <p class="mt-10 relative top-[-50px] text-[80px] md:text-6xl lg:text-[100px] text-white leading-6 font-inspiration drop-shadow-lg">
        with me
      </p>
    </div>

    <!-- Spline Scene - Hidden on mobile -->
    <iframe
        v-if="!isMobile"
        src='https://my.spline.design/order-d618d62aa685e6e26b937df94cf94709/'
        class="absolute inset-0 w-full h-full z-10"
        frameborder="0"
    ></iframe>

    <!-- Mobile Video Background -->
    <video
        v-else
        class="absolute inset-0 w-full h-full object-cover z-10"
        autoplay
        loop
        muted
        playsinline
    >
      <source :src="mobileBg" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import mobileBg from '@/assets/cover_mobile.mp4'

// State
const isMobile = ref(false)

// Methods
const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768
}

// Lifecycle hooks
onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<style scoped>
.drop-shadow-lg {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .leading-3 {
    line-height: 1;
  }

  .leading-6 {
    line-height: 1.2;
  }

  .mt-10 {
    margin-top: 1.5rem;
  }
}

/* Optional: Add a dark overlay to make text more readable */
video::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* Adjust opacity as needed */
}
</style>