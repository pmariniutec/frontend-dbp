<template>
	<div id="events">
		<h1>Events</h1>
		<h3>{{ events }}</h3>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Login',
	data () {
		return {
			events: [],
			errors: null
		}
	},

	created () {
		this.getEvents()
			.then((data) => {
				this.events = data
			})
	},

	methods: {
		...mapActions('api', ['getEvents'])
	}
}
</script>

<style scoped>
#events {
	width: 100%;
	margin: auto;
	margin-top: 200px;
	padding: 20px;
}
</style>
