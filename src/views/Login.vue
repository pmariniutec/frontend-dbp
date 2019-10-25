<template>
	<v-app id="inspire">
		<v-content>
			<v-container
				fluid
			>
				<v-row
					align="center"
					justify="center"
				>
					<v-col
						cols="12"
						sm="8"
						md="4"
					>
						<v-card class="elevation-12">
							<v-toolbar
								color="primary"
								dark
								flat
							>
								<v-toolbar-title>Login</v-toolbar-title>
							</v-toolbar>
							<v-card-text>
								<v-form>
									<v-text-field
										model="input.email"
										label="Email"
										name="email"
										prepend-icon="mdi-email"
										type="email"
									/>

									<v-text-field
										id="password"
										model="input.password"
										label="Password"
										name="password"
										prepend-icon="mdi-lock"
										type="password"
									/>
								</v-form>
							</v-card-text>
							<v-card-actions>
								<v-spacer />
								<v-btn color="primary">
									Login
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-content>
	</v-app>
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
