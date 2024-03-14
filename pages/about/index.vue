<script setup>
const features = ref([
  {
    title: "Collaborative Note Sharing",
    description:
      "Share notes and knowledge with others, allowing for collaborative note-taking and knowledge sharing.",
  },
  {
    title: "Exclusive Access",
    description:
      "Access to the notes and AI summaries is granted only to those who contribute, promoting a fair and reciprocal exchange of information.",
  },
  {
    title: "AI Summarization",
    description:
      "Summarize notes and articles with AI, allowing for quick and efficient review of large amounts of information.",
  },
  {
    title: "Personalized Workspaces",
    description:
      "Customize workspaces for different subjects or projects, complete with adjustable settings to fit your study or collaboration needs.",
  },
]);
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <section class="mb-10">
      <Logo />
      <p class="text-lg text-pretty text-center py-10">
        Pullingbar is a collaborative platform for note-taking and knowledge
        sharing through AI.
      </p>
    </section>

    <section class="grid grid-cols-2 gap-6 place-content-center w-3/4 mx-auto">
      <template v-for="(feature, index) in features" :key="index" class="">
        <FeatureItem
          :title="feature.title"
          :description="feature.description"
        />
      </template>
    </section>
  </div>
</template>
