import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/login/:redirect",
			name: "login",
			component: Login
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/About.vue")
		},
		{
			path: "/resetSuccess",
			name: "resetSuccess",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/ResetSuccess.vue")
		},
		{
			path: "/reset",
			name: "reset",
			// route level code-splitting
			// this generates a separate chunk (Reset.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "Reset" */ "./views/Reset.vue")
		},
		{
			path: "/accountCreation",
			name: "accountCreation",
			// route level code-splitting
			// this generates a separate chunk (Reset.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "Reset" */ "./views/AccountCreation.vue")
		},
		{
			path: "/product",
			name: "product",
			// route level code-splitting
			// this generates a separate chunk (demoLogin.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "demoLogin" */ "./views/demoProduct.vue")
		}
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	}
});
