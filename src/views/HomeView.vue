<script>
import TheWelcome from "@/components/TheWelcome.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    TheWelcome,
  },
  setup() {
    console.log("setup func");

    const store = useStore();

    const articles = computed(() => store.state.article.articles);

    store.dispatch("article/getAllArticles").then(() => {
      console.log("updated");
    });

    return { articles };
  },
};
</script>

<template>
  <main>
    <p v-for="article in articles" :key="article.id">{{ article.title }}</p>
    <TheWelcome />
  </main>
</template>
