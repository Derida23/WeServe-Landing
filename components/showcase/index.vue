<script setup lang="ts"></script>

<template>
  <h1 class="font-serif font-semibold text-4xl text-center">
    Our Showcase
  </h1>
  <div class="flex flex-row items-center justify-center">
    <p class="text-coolGray mt-3 text-center w-1/2">
      They built amazing website to help more people around the world
      by using our recommendation services and products
    </p>
  </div>

  <div>
    <Swiper
      :modules="[SwiperAutoplay, SwiperFreeMode]"
      class="w-full mt-8"
      :height="220"
      :space-between="40"
      :slides-per-view="1"
      effect="creative"
      :free-mode="true"
    >
      <SwiperSlide>
        <div class="grid grid-cols-4 gap-x-10">
          <NuxtImg src="/images/showcase-1.png" class="rounded-xl" />
          <NuxtImg src="/images/showcase-2.png" class="rounded-xl" />
          <NuxtImg src="/images/showcase-3.png" class="rounded-xl" />
          <NuxtImg src="/images/showcase-4.png" class="rounded-xl" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="grid grid-cols-4 gap-x-10">
          <NuxtImg src="/images/showcase-1.png" class="rounded-xl" />
          <NuxtImg src="/images/showcase-2.png" class="rounded-xl" />
          <NuxtImg src="/images/showcase-3.png" class="rounded-xl" />
          <NuxtImg src="/images/showcase-4.png" class="rounded-xl" />
        </div>
      </SwiperSlide>
    </Swiper>
    <!-- <Swiper
      class="w-full mt-8"
      :width="340"
      :height="220"
      :space-between="40"
      :slides-per-view="1"
      :module="[SwiperAutoplay]"
      :loop="true"
    >
      <SwiperSlide>
        <NuxtImg src="/images/showcase-1.png" class="rounded-xl" />
      </SwiperSlide>
      <SwiperSlide>
        <NuxtImg src="/images/showcase-2.png" class="rounded-xl" />
      </SwiperSlide>
      <SwiperSlide>
        <NuxtImg src="/images/showcase-3.png" class="rounded-xl" />
      </SwiperSlide>
      <SwiperSlide>
        <NuxtImg src="/images/showcase-4.png" class="rounded-xl" />
      </SwiperSlide>
    </Swiper> -->
  </div>
</template>

<style scoped lang="postcss">
</style>
