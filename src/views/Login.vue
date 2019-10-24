<template>
	<div id="login">
		<h1>Login</h1>
		<input
			v-model="input.email"
			type="email"
			name="email"
			placeholder="Email"
		>
		<input
			v-model="input.password"
			type="password"
			name="password"
			placeholder="Password"
		>
		<button
			type="button"
			@click="loginUser()"
		>
			Login
		</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Login',
	data () {
		return {
			input: {
				email: '',
				password: ''
			}
		}
	},
	methods: {
		...mapActions('auth', ['login']),

		loginUser () {
			// TODO: should use vue custom validation
			if (this.input.email !== '' && this.input.password !== '') {
				const credentials = { email: this.input.email, password: this.input.password }
				this.login(credentials)
			} else {
				console.log('A email and password must be present')
			}
		}
	}
}
</script>

<style scoped>
#login {
	width: 500px;
	border: 1px solid #CCCCCC;
	background-color: #FFFFFF;
	margin: auto;
	margin-top: 200px;
	padding: 20px;
}
</style>
