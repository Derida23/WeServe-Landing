
<script setup lang="ts"></script>

<template>
  <div class="w-full h-48" />
  <div class="relative bg-cetaceanBlue w-full h-80 flex justify-center">
    <div
      class="bg-hanPurple p-12 rounded-[40px] text-white grid grid-cols-2 gap-x-8 absolute max-w-6xl mx-auto top-[-10rem] items-center">
      <div>
        <div class="badge">
          <IconGlobal filled class="!mb-0 text-2xl" />
          <p class="font-semibold">
            We host more than 120,000 websites
          </p>
        </div>
        <div class="my-10">
          <h1 class="font-bold text-4xl font-serif">Start Growing Today</h1>
          <p class="mt-5 w-11/12">We provide a variety of servers to grow your users
            acquisition much user-friendly and boosting up sales.</p>
        </div>

        <div class="flex flex-row items-center gap-x-6">
          <button class="rounded-full text-richBlack px-10 py-3 bg-mustard font-semibold">Explore More</button>
          <div class="flex flex-row gap-x-1 items-center ">
            <IconDeviceMessage filled class="text-2xl" />
            Schedule a Demo
          </div>
        </div>

      </div>
      <div class="grid grid-cols-3 gap-5">
        <div class="bg-white rounded-3xl text-richBlack w-[150px] h-[170px] flex justify-center items-center">
          <div>
            <div class="flex justify-center">
              <IconScroll filled class="text-[46px] text-hanPurple" />
            </div>
            <p class="font-semibold text-center">
              Web Crawl
            </p>
          </div>
        </div>
        <div class="bg-white rounded-3xl text-richBlack w-[150px] h-[170px] flex justify-center items-center">
          <div>
            <div class="flex justify-center">
              <IconCpuCharge filled class="text-[46px] text-hanPurple" />
            </div>
            <p class="font-semibold text-center">
              Fast Report
            </p>
          </div>
        </div>
        <div class="bg-white rounded-3xl text-richBlack w-[150px] h-[170px] flex justify-center items-center">
          <div>
            <div class="flex justify-center">
              <IconSecurityUser filled class="text-[46px] text-hanPurple" />
            </div>
            <p class="font-semibold text-center">
              Anti-DDoS
            </p>
          </div>
        </div>
        <div class="bg-white rounded-3xl text-richBlack w-[150px] h-[170px] flex justify-center items-center">
          <div>
            <div class="flex justify-center">
              <IconStatusUp filled class="text-[46px] text-hanPurple" />
            </div>
            <p class="font-semibold text-center">
              Auto-Scale
            </p>
          </div>
        </div>
        <div class="bg-white rounded-3xl text-richBlack w-[150px] h-[170px] flex justify-center items-center">
          <div>
            <div class="flex justify-center">
              <IconCandle filled class="text-[46px] text-hanPurple" />
            </div>
            <p class="font-semibold text-center">
              AI Perform
            </p>
          </div>
        </div>
        <div class="bg-white rounded-3xl text-richBlack w-[150px] h-[170px] flex justify-center items-center">
          <div>
            <div class="flex justify-center">
              <IconCrown filled class="text-[46px] text-hanPurple" />
            </div>
            <p class="font-semibold text-center">
              Top Plugins+
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.badge {
  @apply flex flex-row items-center bg-white px-4 py-2 rounded-full gap-1 w-fit text-richBlack;
}
</style>