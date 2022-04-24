import { getAllArticles, createArticle } from "../usecases/article_domain";

export default {
  namespaced: true,
  state() {
    console.log("called state");
    return { articles: [] };
  },
  mutations: {
    setAllArticles(state, articles) {
      console.log("called setAllArticles mutation");
      console.log(state.articles);
      state.articles = articles;
      console.log(state.articles);
    },
    addArticle(state, article) {
      console.log("called addArticle mutation");
      console.log(state.articles);
      state.articles.push(article);
      console.log(state.articles);
    },
  },
  actions: {
    getAllArticles({ commit }) {
      return new Promise((resolve) => {
        console.log("called getAllArticles action");
        setTimeout(() => {
          const articles = getAllArticles();
          commit("setAllArticles", articles);
          resolve();
        }, 2000);
      });
    },
    createArticle({ commit }, article) {
      return new Promise((resolve) => {
        console.log("called createArticle action");
        setTimeout(() => {
          const createdArticle = createArticle(article);
          commit("addArticle", createdArticle);
          resolve();
        }, 2000);
      });
    },
  },
};
