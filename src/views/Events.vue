<template>
	<div id="events">
		<h1 class="title">
			Events
		</h1>
		<div v-if="events !== null">
			<div
				v-for="event in events"
				:key="event.id"
				class="events-wrapper"
			>
				<h2>{{ event.name }}</h2>
				<h3>{{ event.when }}</h3>
				<h3>{{ event.location }}</h3>
				<h3>{{ event.description }}</h3>
				<h3>{{ event.num_enrollments }}/{{ event.max_enrollments }}</h3>
				<h3>{{ event.created }}</h3>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Login',
	data () {
		return {
			events: null,
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

<style scoped lang="scss">
.title {
	font-size: 40px;
	font-weight: bold;
}
.events-wrapper {
	display: flex;
	flex-flow: column wrap;
	justify-content: flex-start;
	align-items: center;
	h3 {
		margin: 0;
		padding: 0;
	}
	h2 {
		margin: 0;
		padding: 0;
	}
}
#events {
	width: 100%;
	margin: auto;
	padding: 20px;
}
</style>
