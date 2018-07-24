import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import titleMixin from "./mixins/titleMixin";

Vue.config.productionTip = true;

new Vue({
	router,
	render: (h) => h(App)
}).$mount("#main");
Vue.mixin(titleMixin);
