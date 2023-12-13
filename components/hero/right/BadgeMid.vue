<template>
  <div class="badge">
    <div class="badge-wrapper">
      <IconGlobal filled class="badge-icon" />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.badge {
  @apply absolute right-2 top-20;

  &-wrapper {
    @apply flex flex-row items-center gap-x-3 bg-hanPurple p-4 w-fit rounded-full;
  }

  &-icon {
    @apply text-[46px] text-white !mb-0
  }
}
</style>
