<script setup lang="ts"></script>

<template>
  <h1 class="showcase-title">
    Our Showcase
  </h1>
  <div class="showcase-desc-wrapper">
    <p class="showcase-desc">
      They built amazing website to help more people around the world
      by using our recommendation services and products
    </p>
  </div>

  <div>
    <Swiper :modules="[SwiperAutoplay, SwiperFreeMode]" class="w-full mt-8" :height="220" :space-between="40"
      :slides-per-view="1" effect="creative" :free-mode="true">
      <SwiperSlide>
        <div class="grid grid-cols-4 gap-x-5 lg:gap-x-10">
          <NuxtImg src="/images/showcase-1.png" class="rounded-xl" />
          <NuxtImg src="/images/showcase-2.png" class="rounded-xl" />
          <NuxtImg src="/images/showcase-3.png" class="rounded-xl" />
          <NuxtImg src="/images/showcase-4.png" class="rounded-xl" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="grid grid-cols-4 gap-x-5 lg:gap-x-10">
          <NuxtImg src="/images/showcase-1.png" class="rounded-xl" />
          <NuxtImg src="/images/showcase-2.png" class="rounded-xl" />
          <NuxtImg src="/images/showcase-3.png" class="rounded-xl" />
          <NuxtImg src="/images/showcase-4.png" class="rounded-xl" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="postcss">
.showcase-title {
  @apply font-serif font-semibold text-3xl lg:text-4xl text-center;
}

.showcase-desc-wrapper {
  @apply flex flex-row items-center justify-center;
}

.showcase-desc {
  @apply text-coolGray mt-3 text-center w-10/12 lg:w-8/12 xl:w-1/2 text-sm lg:text-base;
}
</style>
