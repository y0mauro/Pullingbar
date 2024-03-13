<script setup>
const submit = () => {
  console.log(email.value, password.value);
};

const email = ref("");
const password = ref("");
</script>

<template>
  <div>
    <form
      @submit.prevent="submit"
      class="bg-slate-100 border-slate-100 px-20 py-10 w-2/5 mx-auto my-5 dark:border-slate-500 border-b rounded-xl"
    >
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
          >Email</label
        >
        <input
          v-model="email"
          type="email"
          id="email"
          name="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2"
          >Password</label
        >
        <input
          v-model="password"
          type="password"
          id="password"
          name="password"
          class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="flex items-center justify-end">
        <button
          class="bg-primary px-5 py-2 rounded-xl hover:bg-green-500 font-bold"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>
