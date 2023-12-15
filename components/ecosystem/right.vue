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

    <div v-for="content in contents" :key="content.icon" class="ecoright-wrapper">
      <component :is="`Icon${content.icon}`" class="text-5xl !mb-0" filled />
      <div>
        <p class="font-bold text-xl">
          {{ content.title }}
        </p>
        <p class="text-coolGray text-sm">
          {{ content.desc }}
        </p>
      </div>
    </div>

    <div class="button-wrapper">
      <button class="button-explore">
        Explore More
      </button>
      <button>
        <div class="button-schedule">
          <IconDeviceMessage filled class="text-2xl" />
          Schedule a Demo
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.ecoright {
  &-wrapper {
    @apply bg-white p-4 flex items-center gap-x-4 rounded-2xl mb-5;
  }

  &-title {
    @apply font-serif font-semibold text-4xl w-2/3;
  }

  &-desc {
    @apply mt-3 text-coolGray mb-10;
  }

  .button-wrapper {
    @apply flex items-center gap-x-5 my-10;
  }

  .button {
    &-explore {
      @apply px-10 py-4 bg-hanPurple rounded-full text-white font-semibold;
    }

    &-schedule {
      @apply flex flex-row gap-x-1 items-center text-hanPurple font-semibold;
    }
  }
}
</style>
