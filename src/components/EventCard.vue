<template>
	<v-card
		class="mx-auto"
	>
		<v-img
			src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
		/>

		<v-card-title>
			{{ event.name }}
		</v-card-title>

		<v-card-subtitle>
			{{ event.location }} <br>
			{{ event.when }} <br>
			Enrollments: {{ event.num_enrollments }}/{{ event.max_enrollments }}
		</v-card-subtitle>

		<v-card-actions>
			<v-btn
				v-if="isAuthenticated"
				medium
				color="primary"
				@click.stop="enroll(event.id)"
			>
				Enroll
			</v-btn>
			<v-btn
				v-else
				medium
				color="primary"
				v-on="on"
				@click.stop="enrollGuest(event.id)"
			>
				Enroll
			</v-btn>
			<v-dialog
				v-model="dialog"
				persistent
				max-width="600"
			>
				<v-card>
					<v-card-title
						class="headline"
					>
						QR Code
					</v-card-title>
					<v-card-text class="text-center">
						<div class="qrcode-wrapper">
							<qrcode
								v-if="qrUUID !== null"
								:value="qrUUID"
								:options="{ width: 350 }"
							/>
						</div>
						<h4 class="subtitle">
							Your enrollment was successful.
							This is the QR generated for your registration. You can use it to access the event.
						</h4>
					</v-card-text>
					<v-card-actions>
						<v-spacer />
						<v-btn
							color="green darken-1"
							text
							@click="dialog = false"
						>
							Done
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>

			<v-spacer />

			<v-btn
				icon
				@click="show = !show"
			>
				<v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
			</v-btn>
		</v-card-actions>

		<v-expand-transition>
			<div v-show="show">
				<v-divider />

				<v-card-text>
					{{ event.description }}
				</v-card-text>
			</div>
		</v-expand-transition>
	</v-card>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'EventCard',
	props: {
		event: {
			type: Object,
			default: () => {}
		}
	},

	data () {
		return {
			show: false,
			dialog: false,
			qrUUID: null
		}
	},

	methods: {
		...mapActions('api', ['enrollUser', 'enrollGuest']),
		...mapGetters('auth', ['isAuthenticated', 'getUser']),

		enroll (eventId) {
			const user = this.getUser()
			const data = { email: user.email, event_id: eventId }
			this.enrollUser(data)
				.then((data) => {
					this.dialog = true
					this.qrUUID = data.uuid
				})
				.catch((err) => console.error(err))
		},

		enrollGuest (eventId) {
			this.dialog = true
			const email = ''
			const data = { email, event_id: eventId }
			this.enrollGuest(data)
				.then((data) => {
					this.dialog = true
					this.qrUUID = data.uuid
				})
				.catch((err) => console.error(err))
		}

	}
}
</script>
<style lang="scss">
.qrcode-wrapper {
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
}
</style>
