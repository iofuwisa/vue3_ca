import { registerCallback } from "../usecases/article_domain"
import ArticleDomainCallback from "../usecases/article_domain_callback";

class ArticleApi extends ArticleDomainCallback {
  getAllArticles() {
    console.log("ArticleApi getAllArticles");
    return [
      {
        id: 1,
        title: "art1",
        body: "this is body!!",
      },
      {
        id: 2,
        title: "art2",
        body: "this is body!! way yo!!",
      },
    ];
  }
  createArticle(article) {
    console.log("ArticleApi createArticle");
    article.createdAt = "2022/04/24 18:10";
    console.log(article);
    return article;
  }
}

registerCallback(new ArticleApi());
console.log("complete registerCallback articleAPI");
