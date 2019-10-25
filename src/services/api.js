import session from './session'

const apiService = {
	userEnrollments (email) {
		return session.get('/api/enrollments/')
	},

	guestEnrollments (email) {
		return session.get(`/api/enrollments/guest/${email}/`)
	},

	enrollUser (payload) {
		return session.post('/api/enrollments/', payload)
	},

	enrollGuest (email, payload) {
		return session.post(`/api/enrollments/guest/${email}/`, payload)
	},

	deleteEnrollment (id) {
		return session.delete(`/api/enrollments/${id}/`)
	},

	getEvents () {
		return session.get('/api/events/')
	}
}

export default apiService
