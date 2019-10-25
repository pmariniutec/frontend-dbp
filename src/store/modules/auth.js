import authService from '@/services/auth'
import session from '@/services/session'

import {
	REGISTER_SUCCESS,
	REGISTER_ERROR,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	LOGOUT,
	SET_TOKEN,
	REMOVE_TOKEN,
	SET_USER
} from './mutation-types'

const TOKEN_DURATION = 2 * 24 * 60 * 60 * 1000 // 2 days
const TOKEN_STORAGE_KEY = 'openday_dbp_token'

const auth = {
	namespaced: true,

	state: {
		isAuthenticated: false,
		error: null,
		token: null,
		user: null
	},

	getters: {
		isAuthenticated: (state) => !!state.token,
		getUser: (state) => state.user
	},

	actions: {
		login ({ commit }, { email, password }) {
			return authService.login(email, password)
				.then(({ data }) => commit(SET_TOKEN, data.key))
				.then(() => commit(LOGIN_SUCCESS))
				.catch(() => commit(LOGIN_ERROR))
		},

		register ({ commit }, { firstName, lastName, email, password }) {
			return authService.register(firstName, lastName, email, password)
				.then(({ data }) => {
					if (data.key) {
						commit(REGISTER_SUCCESS)
						commit(SET_TOKEN, data.key)
					} else {
						commit(REGISTER_ERROR)
					}
				})
				.catch((err) => {
					console.error(err)
					commit(REGISTER_ERROR)
				})
		},

		checkAuthToken ({ commit, dispatch }) {
			const token = JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY))
			const now = Date.now()
			if (token !== null && token.expiration > now) {
				commit(LOGIN_SUCCESS)
				commit(SET_TOKEN, token.token)
				dispatch('getUserData')
			} else {
				commit(LOGIN_ERROR)
				commit(REMOVE_TOKEN)
			}
		},

		logout ({ commit }) {
			return authService.logout()
				.then(() => commit(LOGOUT))
				.finally(() => commit(REMOVE_TOKEN))
		},

		getUserData ({ commit }) {
			return authService.getAccountDetails()
				.then(({ data }) => {
					commit(SET_USER, data)
					return data
				})
				.catch((err) => err)
		}
	},

	mutations: {
		[REGISTER_SUCCESS] (state) {
			state.isAuthenticated = true
		},
		[REGISTER_ERROR] (state, error) {
			state.isAuthenticated = false
			state.error = error
		},
		[LOGIN_SUCCESS] (state) {
			state.isAuthenticated = true
		},
		[LOGIN_ERROR] (state, error) {
			state.isAuthenticated = false
			state.error = error
		},
		[LOGOUT] (state) {
			state.isAuthenticated = false
		},
		[SET_TOKEN] (state, token) {
			const obj = { token: token, expiration: Date.now() + TOKEN_DURATION }
			localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(obj))
			session.defaults.headers.Authorization = `Token ${token}`
			state.token = token
		},
		[REMOVE_TOKEN] (state) {
			localStorage.removeItem(TOKEN_STORAGE_KEY)
			delete session.defaults.headers.Authorization
			state.token = null
		},
		[SET_USER] (state, user) {
			state.user = user
		}
	}
}

export default auth
