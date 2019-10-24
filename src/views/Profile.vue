<template>
	<div class="profile">
		<h3
			v-if="user !== null"
		>
			{{ user }}
		</h3>
		<h3
			v-if="error !== null"
		>
			{{ error }}
		</h3>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Profile',

	components: {

	},

	data () {
		return {
			user: null,
			error: null
		}
	},

	created () {
		this.getUserData()
			.then((data) => {
				this.user = data
			})
			.catch((err) => {
				this.error = err
			})
	},

	methods: {
		...mapActions('auth', ['getUserData'])
	}
}
</script>
