<script setup lang="ts">
import { reactive, ref } from 'vue'

const contents = reactive([
  { title: 'Extra Layers', description: 'Making your project more secure avoiding DDoS', icon: 'HierarchySquare' },
  { title: 'Customizable', description: 'Only install what your business needs to grow', icon: '3dcube' },
  { title: 'AI Automation', description: 'Decide the business flow based on latest reports', icon: 'StatusUp' },
  { title: 'Auto-Scaling', description: 'Have a long weekend without worrying any loss', icon: 'DriverRefresh' },
])

const isHovered = ref(-1)

function showComponent(index: number) {
  isHovered.value = index
}

function hideComponent() {
  isHovered.value = -1
}
</script>

<template>
  <h1>
    Your Best Choice
  </h1>
  <div class="service">
    <div v-for="(content, index) in contents" :key="content.title" class="service-item relative"
      @mouseover="showComponent(Number(index))" @mouseleave="hideComponent">
      <p v-show="isHovered === index" class="image-blur">
        <IconBlur filled class="text-[170px]" />
      </p>
      <component :is="`Icon${content.icon}`" filled class="text-3xl lg:text-4xl text-hanPurple icon" />
      <div class="service-text">
        <p class="service-text-title">
          {{ content.title }}
        </p>
        <p class="service-text-desc">
          {{ content.description }}
        </p>
      </div>

      <p class="service-learn">
        Learn more
      </p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
h1 {
  @apply text-center font-semibold text-3xl lg:text-4xl font-serif mb-8;
}

.service {
  @apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-x-14 cursor-pointer px-4 md:px-0;

  &-item {
    @apply bg-white rounded-2xl p-7;
    @apply hover:drop-shadow-sm hover:bg-cetaceanBlue hover:text-white;

  }

  &-text {
    @apply my-4 lg:my-7 z-10 relative;

    &-title {
      @apply font-bold text-lg;
    }

    &-desc {
      @apply text-coolGray text-sm;
    }
  }

  &-learn {
    @apply text-hanPurple cursor-pointer text-sm font-semibold;
  }

  .service-item:hover>.service-learn {
    @apply text-white;
  }

  .service-item:hover>.icon {
    @apply text-white;
  }

  .image-blur {
    @apply text-white absolute top-2 right-4 z-0;
  }
}
</style>
