import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Events from "./views/Events.vue";
import Speakers from "./views/Speakers.vue";
import Tickets from "./views/Tickets.vue";
import Partners from "./views/Partners.vue";
import Team from "./views/Team.vue";
Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/about",
			name: "about",
			component: About
		},
		{
			path: "/events",
			name: "events",
			component: Events
		},
		{
			path: "/speakers",
			name: "speakers",
			component: Speakers
		},
		{
			path: "/team",
			name: "team",
			component: Team
		},
		{
			path: "/partners",
			name: "partners",
			component: Partners
		},
		{
			path: "/tickets",
			name: "tickets",
			component: Tickets
		}
	],
	mode: "history"
});
