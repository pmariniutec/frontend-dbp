<template>
	<div id="register">
		<h1>Register</h1>
		<input
			v-model="input.firstName"
			type="text"
			name="firstName"
			placeholder="First Name"
		>
		<input
			v-model="input.lastName"
			type="text"
			name="lastName"
			placeholder="Last Name"
		>
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
			@click="registerUser()"
		>
			Login
		</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Register',
	data () {
		return {
			input: {
				firstName: '',
				lastName: '',
				email: '',
				password: ''
			}
		}
	},
	methods: {
		...mapActions('auth', ['register']),

		registerUser () {
			// TODO: should use vue custom validation
			if (this.input.email !== '' && this.input.password !== '') {
				const credentials = {
					firstName: this.input.firstName,
					lastName: this.input.lastName,
					email: this.input.email,
					password: this.input.password
				}
				this.register(credentials)
					.then(() => {
						this.$router.push({ name: 'profile' })
					})
			}
		}
	}
}
</script>

<style scoped>
#register {
	width: 500px;
	border: 1px solid #CCCCCC;
	background-color: #FFFFFF;
	margin: auto;
	margin-top: 200px;
	padding: 20px;
}
</style>
