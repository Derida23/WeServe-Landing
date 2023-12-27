<script setup lang="ts"></script>

<template>
  <div class="relative">
    <div class="badge-top">
      <IconCrown filled class="text-5xl text-white" />
    </div>
    <div class="badge-mid">
      <div class="badge-mid-icon">
        <IconStatusUp filled class="text-5xl mb-4 text-hanPurple" />
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
      <IconMessageProgram filled class="text-5xl !mb-0" />
      <div>
        <p class="badge-bottom-title">
          AI Automation
        </p>
        <p class="text-coolGray">
          Working Faster
        </p>
      </div>
    </div>
    <NuxtImg src="/images/illustration-2.png" loading="lazy" width="400" height="497" class="rounded-[70px] ml-12" />
  </div>
</template>

<style scoped lang="postcss">
.badge-top {
  @apply bg-hanPurple rounded-full w-[86px] h-[86px] p-5 absolute top-[-10px] right-14;
}

.badge-mid {
  @apply p-5 bg-white w-fit rounded-3xl absolute top-20;

  &-icon {
    @apply flex items-center justify-center mb-3;
  }

  &-title {
    @apply text-center font-semibold text-lg;
  }

  &-desc {
    @apply flex items-center justify-center;
  }
}

.badge-bottom {
  @apply bg-white w-fit p-5 flex items-center gap-x-3 rounded-3xl absolute bottom-20 right-10;

  &-title {
    @apply font-semibold text-lg;
  }
}
</style>
