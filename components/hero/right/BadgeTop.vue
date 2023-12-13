<template>
  <div class="badge">
    <div class="badge-wrapper">
      <IconCloudAdd filled class="text-[46px] !mb-0" />
      <div>
        <p class="badge-title">
          Super Reliable
        </p>
        <p class="badge-desc">
          24/7 Always Active
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.badge {
  @apply absolute top-[-10px] left-16;

  &-wrapper {
    @apply flex flex-row items-center gap-x-3 bg-white p-4 w-fit rounded-3xl;
  }

  &-title {
    @apply font-bold text-xl;
  }

  &-desc {
    @apply text-electricBlue text-sm;
  }

}
</style>
