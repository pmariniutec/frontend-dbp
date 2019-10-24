import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
	store.dispatch('auth/checkAuthToken')
		.then(() => {
			if (!store.getters['auth/isAuthenticated']) {
				next('/login')
			} else {
				next()
			}
		})
}

const requireNoAuth = (to, from, next) => {
	store.dispatch('auth/checkAuthToken')
		.then(() => {
			if (store.getters['auth/isAuthenticated']) {
				next('/')
			} else {
				next()
			}
		})
}

const redirectLogout = (to, from, next) => {
	store.dispatch('auth/logout')
		.then(() => next('/login'))
}

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/register',
		name: 'register',
		component: Register,
		beforeEnter: requireNoAuth
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
		beforeEnter: requireNoAuth
	},
	{
		path: '/logout',
		name: 'logout',
		beforeEnter: redirectLogout
	},
	{
		path: '/events',
		name: 'events',
		// Lazy loading for this route
		component: () => import(/* webpackChunkName: "events" */ '@/views/Events.vue')
	},
	{
		path: '/profile',
		name: 'profile',
		beforeEnter: requireAuth
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
