import store from "./store.js";
import routes from "./routes.js";

new Vue({
  el: "#root",
  store: new Vuex.Store(store),
  router: new VueRouter({ routes }),
});
