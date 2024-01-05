
<script setup lang="ts"></script>

<template>
  <div class="w-full h-48" />
  <div class="explore">
    <div class="explore-wrapper">
      <div>
        <div class="flex justify-center md:justify-normal ">
          <div class="badge">
            <IconGlobal filled class="!mb-0 text-2xl" />
            <p class="font-semibold">
              We host more than 120,000 websites
            </p>
          </div>
        </div>
        <div class="my-5 lg:my-10">
          <h1 class="explore-text">Start Growing Today</h1>
          <p class="mt-3 lg:mt-5 lg:w-11/12 text-xs lg:text-base  text-center md:text-left">We provide a variety of
            servers to grow your users
            acquisition much user-friendly and boosting up sales.</p>
        </div>

        <div class="button-container">
          <button class="button-explore">Explore More</button>
          <div class="button-schedule">
            <IconDeviceMessage filled class="text-lg lg:text-2xl" />
            Schedule a Demo
          </div>
        </div>

      </div>
      <div class="explore-content">
        <div class="explore-card">
          <div>
            <div class="flex justify-center">
              <IconScroll filled class="text-4xl lg:text-[46px] text-hanPurple" />
            </div>
            <p class="explore-card-title">
              Web Crawl
            </p>
          </div>
        </div>
        <div class="explore-card">
          <div>
            <div class="flex justify-center">
              <IconCpuCharge filled class="text-4xl lg:text-[46px] text-hanPurple" />
            </div>
            <p class="explore-card-title">
              Fast Report
            </p>
          </div>
        </div>
        <div class="explore-card">
          <div>
            <div class="flex justify-center">
              <IconSecurityUser filled class="text-4xl lg:text-[46px] text-hanPurple" />
            </div>
            <p class="explore-card-title">
              Anti-DDoS
            </p>
          </div>
        </div>
        <div class="explore-card">
          <div>
            <div class="flex justify-center">
              <IconStatusUp filled class="text-4xl lg:text-[46px] text-hanPurple" />
            </div>
            <p class="explore-card-title">
              Auto-Scale
            </p>
          </div>
        </div>
        <div class="explore-card">
          <div>
            <div class="flex justify-center">
              <IconCandle filled class="text-4xl lg:text-[46px] text-hanPurple" />
            </div>
            <p class="explore-card-title">
              AI Perform
            </p>
          </div>
        </div>
        <div class="explore-card">
          <div>
            <div class="flex justify-center">
              <IconCrown filled class="text-4xl lg:text-[46px] text-hanPurple" />
            </div>
            <p class="explore-card-title">
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
  @apply flex flex-row items-center bg-white px-2 md:px-4 py-2 rounded-full gap-1 w-fit text-richBlack text-xs lg:text-base;
}

.explore {
  @apply relative bg-cetaceanBlue w-full h-60 md:h-20 lg:h-80 flex justify-center;

  &-wrapper {
    @apply bg-hanPurple p-4 md:p-6 py-4 md:py-10 lg:p-12 rounded-[40px] text-white grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8 absolute max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto top-[-10rem] items-center;
    @apply 3xl:max-w-[90rem]
  }

  &-text {
    @apply font-bold text-2xl lg:text-4xl font-serif text-center md:text-left;
  }

  .button-container {
    @apply flex flex-row items-center gap-x-2 lg:gap-x-6;
    @apply justify-center md:justify-normal;
  }

  .button {
    &-explore {
      @apply rounded-full text-richBlack px-5 lg:px-10 py-3 bg-mustard font-semibold text-xs md:text-sm lg:text-base;
    }

    &-schedule {
      @apply flex flex-row gap-x-1 items-center text-xs md:text-sm lg:text-base;
    }
  }

  &-content {
    @apply grid grid-cols-3 md:grid-cols-3 gap-5;
  }

  &-card {
    @apply bg-white rounded-3xl text-richBlack w-[90px] lg:w-[120px] xl:w-[150px] h-[100px] lg:h-[140px] xl:h-[170px] flex justify-center items-center;


    &-title {
      @apply font-semibold text-center text-xs lg:text-base;
    }
  }
}
</style>