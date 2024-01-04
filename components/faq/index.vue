<script setup lang="ts">
import { reactive } from 'vue'

const contents = reactive([
  {
    title: 'Why do we need to use Kapp?',
    desc: 'Kapp, a versatile and indispensable tool in the contemporary landscape of technology and innovation plays a pivotal role in addressing a myriad of challenges and optimizing various processes.',
    url: 'https://www.google.com',
  },
  {
    title: 'Do we need to pay 6 months per item?',
    desc: 'Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments.',
    url: 'https://www.google.com',
  },
  {
    title: 'How to migrate from other service?',
    desc: 'Migrating from one service to another can be a strategic decision aimed at improving performance, efficiency, or taking advantage of additional features.',
    url: 'https://www.google.com',
  },
])

const contentsTwo = reactive([
  {
    title: 'Can we guarantee no any loss at all?',
    desc: 'While it`s challenging to guarantee absolutely no loss during a migration process, careful planning, thorough testing, and diligent execution can significantly minimize the risks.',
    url: 'https://www.google.com',
  },
  {
    title: 'What if data doesn’t get stored?',
    desc: 'If data is not getting stored as expected during a migration, it can be a critical issue that requires immediate attention, Addressing data storage issues during migration requires a systematic approach.',
    url: 'https://www.google.com',
  },
])

const isView = reactive<number[]>([1])
const isViewTwo = reactive<number[]>([0])

const onView = (index: number, mode?: number) => {
  if (mode !== undefined) {
    isViewTwo.push(index)

    return
  }

  isView.push(index)
}

const onOffView = (index: number, mode?: number) => {
  if (mode !== undefined) {
    isViewTwo.splice(isViewTwo.indexOf(index), 1)

    return
  }

  isView.splice(isView.indexOf(index), 1)
}
</script>

<template>
  <h1 class="faq-title">
    Frequently Asked Questions
  </h1>
  <div class="faq">
    <div>
      <div class="faq-wrapper">
        <div v-for="(content, index) in contents" :key="index" class="faq-card">
          <div class="faq-card-title">
            {{ content.title }}
            <button v-if="!isView.includes(index)" @click="onView(index)" class="faq-card-arrow">
              <IconArrowDown filled class="!mb-0" />
            </button>
            <button v-else @click="onOffView(index)" class="faq-card-arrow-down">
              <IconArrowDown filled class="!mb-0 rotate-180 text-white" />
            </button>

          </div>
          <div v-if="isView.includes(index)">
            <p class="faq-card-desc">
              {{ content.desc }}
            </p>
            <a :href="content.url" target="_blank" class="faq-card-link">
              Learn more.
            </a>

          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="faq-wrapper">
        <div v-for="(content, index) in contentsTwo" :key="index" class="faq-card">
          <div class="faq-card-title">
            {{ content.title }}
            <button v-if="!isViewTwo.includes(index)" @click="onView(index, index)" class="faq-card-arrow">
              <IconArrowDown filled class="!mb-0" />
            </button>
            <button v-else @click="onOffView(index, index)" class="faq-card-arrow-down">
              <IconArrowDown filled class="!mb-0 rotate-180 text-white" />
            </button>

          </div>
          <div v-if="isViewTwo.includes(index)">
            <p class="faq-card-desc">
              {{ content.desc }}
            </p>
            <a :href="content.url" target="_blank" class="faq-card-link">
              Learn more.
            </a>

          </div>
        </div>
      </div>
      <div class="faq-email">
        <div class="faq-email-icon">
          <IconDeviceMessage filled class="text-white !mb-0" />
          Send e-mail to us for other questions
        </div>
        <button class="faq-email-button">
          <IconArrowDown filled class="!mb-0 -rotate-90 text-cetaceanBlue" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang='postcss'>
.faq-title {
  @apply font-serif font-semibold text-3xl lg:text-4xl text-center;
}

.faq {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-4 gap-x-4 my-10 px-16 xl:px-0;

  &-wrapper {
    @apply flex flex-col gap-y-5;
  }

  &-card {
    @apply px-5 py-4 bg-white rounded-xl;

    &-title {
      @apply font-bold text-lg flex items-center justify-between;
    }

    &-arrow {
      @apply bg-transparent w-7 h-7 rounded-full flex items-center justify-center;

      &-down {
        @apply bg-cetaceanBlue w-7 h-7 rounded-full flex items-center justify-center;
      }
    }

    &-desc {
      @apply text-coolGray mt-4 mb-3 text-sm;
    }

    &-link {
      @apply text-hanPurple text-sm font-semibold cursor-pointer;
    }
  }

  &-email {
    @apply px-5 py-4 bg-cetaceanBlue text-white rounded-xl cursor-pointer flex items-center justify-between mt-5;

    &-icon {
      @apply flex items-center flex-row gap-x-2;
    }

    &-button {
      @apply bg-white w-7 h-7 rounded-full flex items-center justify-center;
    }
  }
}
</style>
