import session from './session'

const apiService = {
	enrollUser (payload) {
		return session.post('/api/enroll/', payload)
	},

	userEnrollments (email) {
		return session.get('/api/enroll/')
	},

	enrollGuest (email, payload) {
		return session.post(`/api/enroll/guest/${email}`, payload)
	},

	guestEnrollments (email) {
		return session.get(`/api/enroll/guest/${email}`)
	},

	getEvents () {
		return session.get('/api/events/')
	}
}

export default apiService
