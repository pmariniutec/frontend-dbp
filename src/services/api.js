import session from './session'

const apiService = {
	enrollUser (payload) {
		return session.post('/api/enroll/', payload)
	},

	getEvents () {
		return session.get('/api/events/')
	}
}

export default apiService
