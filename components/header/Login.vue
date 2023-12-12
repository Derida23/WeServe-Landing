
<template>
  <div class="login">
    <button class="login-button bg-white w-10 h-10">
      <IconBag filled />
    </button>

    <button class="login-button bg-cetaceanBlue text-white font-semibold w-36">Sign In</button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.login {
  @apply flex flex-row gap-2;

  &-button {
    @apply px-3 rounded-full h-10;
    @apply hover:drop-shadow;
  }
}
</style>

