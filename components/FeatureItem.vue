<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="grid place-items-center gap-1 bg-graydark rounded-xl p-5">
    <h3 class="text-lg font-bold">{{ title }}</h3>
    <p class="text-sm text-gray-500 text-pretty mt-1">{{ description }}</p>
  </div>
</template>
