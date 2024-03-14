<template>
  <div class="space-y-4">
    <div class="flex flex-col">
      <!-- Workspaces list in a grid -->
      <div class="grid grid-cols-3 gap-4">
        <!-- Adjust the number of columns as needed -->
        <div v-for="workspace in workspaces" :key="workspace.id" class="mb-2">
          <WorkspaceItem :workspace="workspace" />
        </div>
        <button
          v-if="!showForm"
          @click="showForm = !showForm"
          class="self-start p-2 text-white font-bold rounded mt-4"
        >
          +
          <span class="hover:underline underline-offset-4">Add Workspace</span>
        </button>
      </div>

      <form
        v-if="showForm"
        @submit.prevent="addWorkspace"
        class="flex flex-col space-y-2 p-4 w-[300px] rounded mt-4"
      >
        <input
          v-model="newWorkspace.name"
          placeholder="Workspace Name"
          class="p-2 bg-graydark"
        />
        <textarea
          v-model="newWorkspace.description"
          placeholder="Workspace Description"
          class="bg-graydark p-2"
        ></textarea>
        <button
          type="submit"
          class="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Workspace
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import WorkspaceItem from "~/components/WorkspaceItem.vue";

const workspaces = ref([]);
const showForm = ref(false);
const newWorkspace = ref({
  name: "",
  description: "",
});

const addWorkspace = () => {
  if (newWorkspace.value.name.trim() && newWorkspace.value.description.trim()) {
    const workspaceToAdd = {
      ...newWorkspace.value,
      id: Math.random().toString(),
    };
    workspaces.value.push(workspaceToAdd);
    newWorkspace.value = { name: "", description: "" }; // Reset the form
    showForm.value = false; // Hide form after adding
  }
};
</script>
