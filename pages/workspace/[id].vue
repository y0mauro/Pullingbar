<script setup>
const route = useRoute();
</script>
<template>
  <div>id : {{ route.params.id }}</div>
</template>
