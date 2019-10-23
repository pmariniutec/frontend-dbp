import session from './session'

const authService = {
	login (email, password) {
		return session.post('/rest-auth/login/', { email, password })
	},

	logout () {
		return session.post('/rest-auth/logout/', {})
	},

	createAccount (firstName, lastName, email, password) {
		return session.post('/rest-auth/registration/', { first_name: firstName, last_name: lastName, email, password })
	},

	changeAccountPassword (password1, password2) {
		return session.post('/rest-auth/password/change/', { password1, password2 })
	},

	sendAccountPasswordResetEmail (email) {
		return session.post('/rest-auth/password/reset/', { email })
	},

	resetAccountPassword (uid, token, newPass1, newPass2) {
		return session.post('/rest-auth/password/reset/confirm/', { uid, token, newPass1, newPass2 })
	},

	getAccountDetails () {
		return session.get('/rest-auth/user/')
	},

	updateAccountDetails (data) {
		return session.patch('/rest-auth/user/', data)
	}
}

export default authService
