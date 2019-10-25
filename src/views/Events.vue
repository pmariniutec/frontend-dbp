<template>
	<v-container fluid>
		<div id="events">
			<h1
				align="center"
				class="header"
			>
				Events
			</h1>
			<v-row
				v-if="events !== null"
			>
				<v-col
					v-for="event in events"
					:key="event.id"
					cols="12"
					sm="6"
					md="3"
					lg="3"
					class="events-wrapper"
				>
					<EventCard :event="event" />
				</v-col>
			</v-row>
		</div>
	</v-container>
</template>

<script>
import { mapActions } from 'vuex'
import EventCard from '@/components/EventCard'

export default {
	name: 'Login',

	components: {
		EventCard
	},
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
