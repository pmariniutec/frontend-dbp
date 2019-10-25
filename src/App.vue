<template>
	<v-app>
		<NavBar />
		<v-content>
			<router-view />
		</v-content>
	</v-app>
</template>

<script>
import { mapActions } from 'vuex'
import NavBar from '@/components/NavBar'

export default {
	name: 'App',

	components: {
		NavBar
	},

	data () {
		return {

		}
	},

	created () {
		this.checkAuthToken()
			.then(() => {
				this.getUserData()
			})
	},

	methods: {
		...mapActions('auth', ['getUserData', 'checkAuthToken'])
	}
}
</script>
