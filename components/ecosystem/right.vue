<script setup lang="ts">
import { reactive } from 'vue'

const contents = reactive([
  { title: '$880 Mio', desc: 'Company budget saved', icon: 'Health' },
  { title: '450,392', desc: 'All servers available', icon: 'CpuCharge' },
  { title: '189 Mio', desc: 'Websites are running good', icon: 'CloudAdd' },
])
</script>

<template>
  <div class="ecoright">
    <h1 class="ecoright-title">
      We Have Very Strong Ecosystem
    </h1>
    <p class="ecoright-desc">
      We provide a variety of servers to grow your users acquisition much user-friendly and boosting up sales.
    </p>

    <div class="px-4 md:px-0">
      <div v-for="content in contents" :key="content.icon" class="ecoright-wrapper">
        <component :is="`Icon${content.icon}`" class="text-3xl lg:text-5xl !mb-0" filled />
        <div>
          <p class="font-bold text-base lg:text-xl">
            {{ content.title }}
          </p>
          <p class="text-coolGray text-xs lg:text-sm">
            {{ content.desc }}
          </p>
        </div>
      </div>
    </div>

    <div class="button-wrapper">
      <button class="button-explore">
        Explore More
      </button>
      <button>
        <div class="button-schedule">
          <IconDeviceMessage filled class="text-xl md:text-2xl" />
          Schedule a Demo
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.ecoright {
  &-wrapper {
    @apply bg-white p-3 lg:p-4 flex items-center gap-x-2 lg:gap-x-4 rounded-2xl mb-5;
  }

  &-title {
    @apply font-serif font-semibold text-2xl lg:text-3xl xl:text-4xl w-full md:w-10/12 lg:w-[80%] xl:w-2/3;
    @apply text-center md:text-left
  }

  &-desc {
    @apply mt-2 lg:mt-3 text-coolGray mb-5 lg:mb-10 text-xs lg:text-base text-center md:text-left;
  }

  .button-wrapper {
    @apply flex items-center gap-x-5 my-5 lg:my-10 justify-center md:justify-normal;
  }

  .button {
    &-explore {
      @apply px-5 lg:px-10 py-3 lg:py-4 bg-hanPurple rounded-full text-white font-semibold text-xs md:text-sm lg:text-base;
      @apply hover:bg-cetaceanBlue;
    }

    &-schedule {
      @apply flex flex-row gap-x-1 items-center text-hanPurple font-semibold text-xs md:text-sm lg:text-base;
    }
  }
}
</style>
