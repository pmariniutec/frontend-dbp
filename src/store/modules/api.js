import apiService from '@/services/api'

const api = {
	namespaced: true,

	state: {

	},

	getters: {

	},

	actions: {
		getEvents ({ commit }) {
			return apiService.getEvents()
				.then(({ data }) => data)
				.catch((err) => err)
		}
	},

	mutations: {

	}
}

export default api
