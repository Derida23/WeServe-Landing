
<template>
  <div class="footer">
    <div class=" footer-wrapper">
      <div class="footer-container">
        <div>
          <div class="footer-logo">
            <IconLogo filled class="text-white text-[1rem] lg:text-[2rem] xl:text-[4rem] !mb-0" />
            <h1 class="footer-logo-text">
              weserve.
            </h1>
          </div>
          <p class="footer-logo-desc">We host your empire business today using the latest technologies.</p>
          <div class="footer-social">
            <div class="footer-social-wrapper">
              <IconSms filled class="text-hanPurple text-sm xl:text-xl" />
            </div>
            <div class="footer-social-wrapper">
              <IconGlobal filled class="text-hanPurple text-sm xl:text-xl" />
            </div>
            <div class="footer-social-wrapper">
              <IconCall filled class="text-hanPurple text-sm xl:text-xl" />
            </div>
            <div class="footer-social-wrapper">
              <IconVideoPlay filled class="text-hanPurple text-sm xl:text-xl" />
            </div>
          </div>
        </div>
        <div>
          <h1 class="footer-product">Products</h1>
          <div class="footer-product-text">
            <p>Powerful Reports</p>
            <p>Blockchain</p>
            <p>Auto-Backup</p>
            <p>Data Science</p>
            <p>Auto-Scaling Up</p>
          </div>
        </div>
        <div>
          <h1 class="footer-product">Resources</h1>
          <div class="footer-product-text">
            <p>Support 24/7</p>
            <p>Help Center</p>
            <p>How-to Instructions</p>
            <p>Blog & Tips</p>
            <p>About Us</p>
          </div>
        </div>
        <div>
          <h1 class="footer-product">Company</h1>
          <div class="footer-product-text">
            <p>Privacy and Policy</p>
            <p>Terms and Conditions</p>
            <p>Investor Relations</p>
            <p>Join With Us</p>
            <p>Our Statistics</p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center text-coolGray text-xs md:text-sm lg:text-base">All Rights Reserved • Copyright Weserve by
      BuildWithAngga
      2024 in Bandung
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.footer {
  @apply bg-cetaceanBlue pb-10 md:pb-20 px-4 md:px-12 xl:px-0 pt-5 lg:pt-0;

  &-wrapper {
    @apply text-white pt-24 flex justify-center pb-10 md:pb-16 lg:pb-20;
  }

  &-container {
    @apply grid grid-cols-1 md:grid-cols-4 gap-x-2 gap-y-10 md:gap-y-0 xl:gap-x-28 w-full md:max-w-6xl;
    @apply 3xl:max-w-[90rem];
  }

  &-logo {
    @apply flex flex-row items-center gap-x-1 lg:gap-x-2 justify-center md:justify-normal;

    &-text {
      @apply text-white text-xl lg:text-2xl xl:text-4xl font-semibold;
    }

    &-desc {
      @apply text-xs lg:text-sm text-coolGray mt-3 lg:mt-5 text-center md:text-left;
    }
  }

  &-social {
    @apply flex flex-row items-center gap-x-2 xl:gap-x-3 mt-4 lg:mt-8 justify-center md:justify-normal;

    &-wrapper {
      @apply w-6 lg:w-7 xl:w-8 h-6 lg:h-7 xl:h-8 rounded-full bg-white flex items-center justify-center;
    }
  }

  &-product {
    @apply text-white font-semibold text-base lg:text-xl mb-3 lg:mb-5 text-center md:text-left;

    &-text {
      @apply flex flex-col gap-y-2 text-coolGray text-xs lg:text-base text-center md:text-left;
    }
  }
}
</style>