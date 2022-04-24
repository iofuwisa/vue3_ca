export const callbacks = [];
export function registerCallback(cb) {
  callbacks.push(cb);
}
export function getAllArticles() {
  console.log("domain getAllArticles");
  for (const cb of callbacks) {
    console.log("for now...");
    const ret = cb.getAllArticles();
    if (ret !== undefined) {
      return ret;
    }
  }
}
export function createArticle(article) {
  console.log("domain createArticle");
  for (const cb of callbacks) {
    cb.createArticle(article);
  }
}
