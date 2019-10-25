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
		},

		enrollUser ({ commit }, payload) {
			return apiService.enrollUser(payload)
				.then(({ data }) => data)
				.catch((err) => err)
		},

		enrollGuest ({ commit }, { email, payload }) {
			return apiService.enrollGuest(email, payload)
				.then(({ data }) => data)
				.catch((err) => err)
		},

		getUserEnrollments ({ commit }, email) {
			return apiService.userEnrollments(email)
				.then(({ data }) => data)
				.catch((err) => err)
		},

		getGuestEnrollments ({ commit }, email) {
			return apiService.guestEnrollments(email)
				.then(({ data }) => data)
				.catch((err) => err)
		},

		deleteEnrollment ({ commit }, id) {
			return apiService.deleteEnrollment(id)
				.then(({ data }) => data)
				.catch((err) => err)
		}
	},

	mutations: {

	}
}

export default api
