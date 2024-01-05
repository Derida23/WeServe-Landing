<template>
  <div class="badge">
    <div class="badge-wrapper">
      <IconCloudAdd filled class="text-3xl lg:text-[46px] !mb-0" />
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
  @apply absolute top-[-10px] -left-10 xl:left-16 3xl:left-48;

  &-wrapper {
    @apply flex flex-row items-center gap-x-2 xl:gap-x-3 bg-white p-3 xl:p-4 w-fit rounded-3xl;
  }

  &-title {
    @apply font-semibold xl:font-bold text-sm lg:text-xl;
  }

  &-desc {
    @apply text-electricBlue text-xs lg:text-sm;
  }

}
</style>
