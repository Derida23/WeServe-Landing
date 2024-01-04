<script setup lang="ts"></script>

<template>
  <div class="relative">
    <div class="badge-top">
      <IconCrown filled class="text-3xl lg:text-5xl text-white" />
    </div>
    <div class="badge-mid">
      <div class="badge-mid-icon">
        <IconStatusUp filled class="text-3xl lg:text-5xl mb-4 text-hanPurple" />
      </div>
      <p class="badge-mid-title">
        5/5 Growth
      </p>
      <div class="badge-mid-desc">
        <div v-for="item in 5" :key="item">
          <IconStar filled />
        </div>
      </div>
    </div>
    <div class="badge-bottom">
      <IconMessageProgram filled class="text-3xl lg:text-5xl !mb-0" />
      <div>
        <p class="badge-bottom-title">
          AI Automation
        </p>
        <p class="text-coolGray text-xs lg:text-base">
          Working Faster
        </p>
      </div>
    </div>
    <NuxtImg src="/images/illustration-2.png" loading="lazy" width="400" height="497"
      class="rounded-[50px] lg:rounded-[70px] ml-10 xl:ml-12" />
  </div>
</template>

<style scoped lang="postcss">
.badge-top {
  @apply bg-hanPurple rounded-full w-14 lg:w-[86px] h-14 lg:h-[86px] flex items-center justify-center;
  @apply absolute -top-3 xl:top-[-10px] -right-14 xl:right-14;
}

.badge-mid {
  @apply p-3 lg:p-5 bg-white w-fit rounded-2xl lg:rounded-3xl absolute top-20;

  &-icon {
    @apply flex items-center justify-center mb-1 lg:mb-3;
  }

  &-title {
    @apply text-center font-semibold text-sm lg:text-lg;
  }

  &-desc {
    @apply flex items-center justify-center text-xs lg:text-base;
  }
}

.badge-bottom {
  @apply bg-white w-fit p-3 lg:p-5 flex items-center gap-x-1 lg:gap-x-3 rounded-2xl lg:rounded-3xl absolute -bottom-7 xl:bottom-20 right-10;

  &-title {
    @apply font-semibold text-sm lg:text-lg;
  }
}
</style>
