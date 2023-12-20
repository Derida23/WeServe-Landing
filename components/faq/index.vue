<script setup lang="ts"></script>

<template>
  <h1 class="font-serif font-semibold text-4xl text-center">
    Frequently Asked Questions
  </h1>
  <div class="grid grid-cols-2 gap-x-4 my-10">
    <div class="flex flex-col gap-y-5">
      <div class="px-5 py-4 bg-white rounded-xl ">
        <div class="font-bold flex items-center justify-between">
          Why do we need to use Kapp?
          <button class="bg-transparent w-7 h-7 rounded-full flex items-center justify-center">
            <IconArrowDown filled class="!mb-0" />
          </button>
        </div>
      </div>
      <div class="px-5 py-4 bg-white rounded-xl ">
        <div class="font-bold flex items-center justify-between">
          Do we need to pay 6 months per item?
          <button class="bg-cetaceanBlue w-7 h-7 rounded-full flex items-center justify-center">
            <IconArrowDown filled class="!mb-0 rotate-180 text-white" />
          </button>
        </div>
        <p class="text-coolGray mt-4 mb-3 text-sm">
          Kapp is able to develop by themselve without removing
          the parents permission and lorem dolor si amet fully run
          network at 100% avoiding data-loss at any moments
        </p>
        <p class="text-hanPurple text-sm font-semibold cursor-pointer">
          Learn more.
        </p>
      </div>
      <div class="px-5 py-4 bg-white rounded-xl ">
        <div class="font-bold flex items-center justify-between">
          How to migrate from other service?
          <button class="bg-transparent w-7 h-7 rounded-full flex items-center justify-center">
            <IconArrowDown filled class="!mb-0" />
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-y-5">
      <div
        class="px-5 py-4 bg-cetaceanBlue text-white rounded-xl
                cursor-pointer flex items-center justify-between"
      >
        <div class="flex items-center flex-row gap-x-2">
          <IconDeviceMessage filled class="text-white !mb-0" />
          Send e-mail to us for other questions
        </div>
        <button class="bg-white w-7 h-7 rounded-full flex items-center justify-center">
          <IconArrowDown filled class="!mb-0 -rotate-90 text-cetaceanBlue" />
        </button>
      </div>
      <div class="px-5 py-4 bg-white rounded-xl ">
        <div class="font-bold flex items-center justify-between">
          Can we guarantee no any loss at all?
          <button class="bg-transparent w-7 h-7 rounded-full flex items-center justify-center">
            <IconArrowDown filled class="!mb-0" />
          </button>
        </div>
      </div>
      <div class="px-5 py-4 bg-white rounded-xl ">
        <div class="font-bold flex items-center justify-between">
          What if data doesn’t get stored?
          <button class="bg-cetaceanBlue w-7 h-7 rounded-full flex items-center justify-center">
            <IconArrowDown filled class="!mb-0 rotate-180 text-white" />
          </button>
        </div>
        <p class="text-coolGray mt-4 mb-3 text-sm">
          Kapp is able to develop by themselve without removing the
          parents permission and lorem dolor si amet fully run
          network at 100% avoiding data-loss at any moments
        </p>
        <p class="text-hanPurple text-sm font-semibold cursor-pointer">
          Learn more.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang='postcss'></style>
