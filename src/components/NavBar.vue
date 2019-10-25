<template>
	<v-app-bar app>
		<v-toolbar-title class="headline text-uppercase">
			<span>Open Day</span>
			<span class="font-weight-light">Tickets</span>
		</v-toolbar-title>

		<v-spacer />

		<v-btn text>
			<router-link :to="{ name: 'home' }">
				Home
			</router-link>
		</v-btn>

		<template v-if="!isAuthenticated">
			<v-btn text>
				<router-link :to="{ name: 'login' }">
					Login
				</router-link>
			</v-btn>
			<v-btn text>
				<router-link :to="{ name: 'register' }">
					Register
				</router-link>
			</v-btn>
		</template>

		<template v-else>
			<v-btn text>
				<router-link :to="{ name: 'profile' }">
					Profile
				</router-link>
			</v-btn>
		</template>

		<v-btn text>
			<v-icon>mdi-calendar-check</v-icon>
			<router-link :to="{ name: 'events' }">
				Upcoming Events
			</router-link>
		</v-btn>
	</v-app-bar>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
	name: 'NavBar',

	data () {
		return {

		}
	},

	methods: {
		...mapGetters('auth', ['isAuthenticated'])
	}
}
</script>
<style lang="scss">
.v-btn a {
	color: #000;
	text-decoration: none;
}
</style>
