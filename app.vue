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
  </div>
</template>

<style scoped lang="postcss">
#body {
  @apply max-w-6xl mx-auto pt-6;
}

#hero {
  @apply grid grid-cols-2 gap-x-4 mt-20;
}

#companies {
  @apply flex items-center justify-center my-14;
}
</style>
