<script setup lang="ts"></script>

<template>
  <div class="relative">
    <div class="hero-wrapper">
      <HeroRightBadgeTop />
      <HeroRightBadgeMid />
      <HeroRightBadgeBot />
      <img src="/images/illustration-1.jpeg" loading="lazy" class="hero-image" />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.hero-wrapper {
  @apply hidden md:flex flex-row items-center justify-end pr-12 h-[400px] lg:h-[550px];
}

.hero-image {
  @apply rounded-r-[50px] lg:rounded-r-[70px] rounded-bl-[50px] lg:rounded-bl-[70px];
  @apply md:w-[280px] md:h-[347px] lg:w-[392px] lg:h-[487px] w-[400px] h-[497px] object-cover;

}
</style>
