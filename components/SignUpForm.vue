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
      class="bg-dark2 border-graydark border px-20 py-10 w-4/12 mx-auto my-5 rounded-xl"
    >
      <div class="mb-4">
        <label for="email" class="block text-white text-sm font-bold mb-2"
          >Email</label
        >
        <input
          v-model="email"
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          class="shadow appearance-none bg-graydark text-slate-200 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-white text-sm font-bold mb-2"
          >Password</label
        >
        <input
          v-model="password"
          type="password"
          placeholder="******************"
          id="password"
          name="password"
          class="shadow appearance-none bg-graydark rounded w-full py-2 px-3 text-slate-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="flex items-center justify-end">
        <button
          class="bg-primary px-5 py-2 rounded-xl hover:bg-primary2 font-bold"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>
