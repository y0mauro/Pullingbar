<script setup>
const supabase = useSupabaseClient();

const countries = ref([]);

async function getCountries() {
  const { data } = await supabase.from("workspace").select();
  countries.value = data;
}

onMounted(() => {
  getCountries();
});
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <ul>
        {{
          countries
        }}
      </ul>
    </NuxtLayout>
  </div>
</template>
