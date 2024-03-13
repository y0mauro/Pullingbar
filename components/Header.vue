<template>
  <div
    class="py-4 border-b border-slate-900/10 flex items-center lg:px-8 dark:border-slate-300/10 mx-4 lg:mx-0"
  >
    <div class="flex justify-between w-full items-center">
      <NuxtLink class="flex-1" to="/"> <Logo /></NuxtLink>
      <!-- Header Links Container -->
      <div class="gap-4 justify-center flex-1 hidden md:flex">
        <NuxtLink
          to="/tutorial"
          class="block text-center underline-offset-4 hover:underline"
          >Tutorial</NuxtLink
        >

        <NuxtLink
          to="/join"
          class="block text-center underline-offset-4 hover:underline"
          >Join</NuxtLink
        >
      </div>
      <div class="flex-1 hidden md:flex"></div>
    </div>
  </div>
</template>
