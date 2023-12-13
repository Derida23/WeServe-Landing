<template>
  <div class="body">
    <Navbar />
    <section id="hero">
      <HeroLeft />
      <HeroRight />
    </section>
  </div>
</template>

<style scoped lang="postcss">
#hero {
  @apply grid grid-cols-2 gap-x-4 mt-28;
}

.body {
  @apply max-w-6xl mx-auto pt-10;
}
</style>
