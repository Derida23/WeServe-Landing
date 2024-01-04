<template>
  <div class="badge">
    <div class="badge-wrapper">
      <div class="badge-icon">
        <IconStatusUp filled class="text-3xl lg:text-[46px] text-hanPurple" />
      </div>
      <div class="badge-content">
        <p class="badge-content-title">
          +490%
        </p>
        <p class="badge-content-desc">
          Engagements
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.badge {
  @apply absolute right-0 bottom-10 lg:bottom-16;

  &-wrapper {
    @apply gap-x-2 lg:gap-x-3 bg-white p-3 lg:p-4 w-fit rounded-3xl;
  }

  &-icon {
    @apply flex flex-row justify-center;
  }

  &-content {
    @apply text-center mt-4;

    &-title {
      @apply font-bold text-sm lg:text-xl;
    }

    &-desc {
      @apply text-electricBlue text-xs lg:text-sm;
    }
  }

}
</style>
