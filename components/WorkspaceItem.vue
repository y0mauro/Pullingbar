<template>
  <div
    class="p-4 rounded bg-graydark shadow-md mb-2 cursor-pointer transition duration-300 ease-in-out hover:shadow-lg"
    @click="navigateToWorkspace(workspace.id)"
  >
    <h3 class="text-2xl font-semibold">{{ workspace.name }}</h3>
    <p class="text-slate-300">{{ workspace.description }}</p>
  </div>
</template>

<script setup>
defineProps(["workspace"]);

const navigateToWorkspace = (id) => {
  // Navigate using Nuxt's programmatic navigation
  useRouter().push(`/workspace/${id}`);
};
</script>
