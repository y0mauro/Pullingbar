<script setup lang="ts">
const { sayHello } = useUtils();
const { $sayHelloPlugin } = useNuxtApp();

sayHello();

$sayHelloPlugin();
console.log(useNuxtApp());
</script>

<template>
  <div>Index page</div>
</template>
