<template>
  <div class="relative flex items-center w-full h-[60vh]">
    <!-- Text Overlay -->
    <div class="absolute inset-0 flex flex-col items-center justify-center z-20">
      <p class="text-[100px] text-white drop-shadow-lg">BE </p>
      <p class="text-[100px] leading-3 text-brand-pink font-bold drop-shadow-lg">OUTSTANDING</p>
      <p class="mt-10 text-[100px] text-white leading-6 font-inspiration drop-shadow-lg">with me</p>
    </div>

    <!-- Spline Scene -->
    <iframe
        src='https://my.spline.design/order-d618d62aa685e6e26b937df94cf94709/'
        class="absolute inset-0 w-full h-full z-10"
        frameborder="0"
    ></iframe>
  </div>
</template>

<style scoped>
.drop-shadow-lg {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>git branch -M main