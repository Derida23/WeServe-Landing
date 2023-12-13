<script setup lang="ts"></script>

<template>
  <div class="login">
    <button class="login-button login-button-icon">
      <div class="login-bag">
        <div class="relative">
          <IconBag filled class="text-2xl" />
          <div class="login-bag-chip" />
        </div>
      </div>
    </button>

    <button class="login-button login-button-signin">
      Sign In
    </button>
  </div>
</template>

<style scoped lang="postcss">
.login {
  @apply flex flex-row gap-x-3;

  &-bag {
    @apply flex justify-center;

    &-chip {
      @apply bg-red-500 w-2 h-2 rounded-full absolute top-1 left-4;
    }
  }

  &-button {
    @apply text-center rounded-full h-10;
    @apply hover:drop-shadow;

    &-icon {
      @apply bg-white w-10 h-10;
    }

    &-signin {
      @apply bg-cetaceanBlue text-white font-semibold w-36;
      @apply hover:bg-hanPurple
    }
  }
}
</style>
