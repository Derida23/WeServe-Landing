<script setup lang="ts">
import { useHead } from 'nuxt/app'

useHead({
  title: 'WeServe - Grow Online Business Faster',
})
</script>

<template>
  <div id="body">
    <Navbar />
    <section id="hero">
      <HeroLeft />
      <HeroRight />
    </section>

    <section id="companies">
      <Company />
    </section>

    <section id="service">
      <Service />
    </section>

    <section id="ecosystem">
      <Ecosystem />
    </section>
  </div>

  <section id="showcase">
    <Showcase />
  </section>
</template>

<style scoped lang="postcss">
#body {
  @apply max-w-6xl mx-auto pt-6;
}

#hero {
  @apply grid grid-cols-2 gap-x-4 mt-20;
}

#companies {
  @apply flex items-center justify-center mt-14 mb-20;
}

#service {
  @apply my-20
}

#ecosystem {
  @apply mb-10
}

#showcase {
  @apply mb-10 w-screen mx-auto;
}
</style>
