<template>
  <p class="text-3xl text-slate-100 font-semibold mb-12">Your Workspaces</p>
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
          class="grid place-items-center gap-1 border border-graydark rounded-xl mb-4 p-5"
        >
          +Add Workspace
        </button>
      </div>
      <transition name="fade">

      <div
        v-if="showForm"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <!-- Popup Form -->
        <form
          @submit.prevent="addWorkspace"
          class="flex flex-col space-y-2 w-[600px] p-10 bg-dark rounded-xl"
        >
        
        <p class="mb-4 text-2xl font-semibold"> Create a new Workspace</p>
          <input
            v-model="newWorkspace.name"
            placeholder="Name"
          class="shadow appearance-none bg-graydark text-slate-200 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            v-model="newWorkspace.description"
            optional 
            placeholder=" Description"
          class="shadow appearance-none bg-graydark text-slate-200 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"

          ></input>
          <div>
            
          </div>
          <button
            type="submit"
            class="bg-primary hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
          >
            Save
          </button>
          <button
            type="button"
            @click="showForm = false"
            class="mt-2 text-center text-red-500"
          >
            Cancel
          </button>
        </form>
      </div>
            </transition >

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import WorkspaceItem from "~/components/WorkspaceItem.vue";
import { v4 as uuidv4 } from 'uuid'; 
const workspaces = ref([]);
const showForm = ref(false);
const newWorkspace = ref({
  name: "",
  description: "",
});


const addWorkspace = () => {
  if (newWorkspace.value.name.trim() && (newWorkspace.value.description.trim() || true)) { 
    const workspaceToAdd = {
      ...newWorkspace.value,
      id: uuidv4(), 
    };
    workspaces.value.push(workspaceToAdd);
    newWorkspace.value = { name: '', description: '' }; 
    showForm.value = false; 
  }
};
</script>
