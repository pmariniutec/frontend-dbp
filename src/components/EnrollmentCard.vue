<template>
	<v-card
		class="mx-auto"
	>
		<v-img
			src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
		/>

		<v-card-title>
			{{ enrollment.event.name }}
		</v-card-title>

		<v-card-subtitle>
			{{ enrollment.event.location }} <br>
			{{ enrollment.event.when }} <br>
			Enrollments: {{ enrollment.event.num_enrollments }}/{{ enrollment.event.max_enrollments }}
		</v-card-subtitle>

		<v-card-actions>
			<v-btn
				medium
				color="success"
				@click.stop="showQR()"
			>
				Show QR Code
			</v-btn>
			<v-btn
				medium
				color="error"
				@click="cancelEnrollment()"
			>
				Cancel
			</v-btn>
			<v-dialog
				v-model="dialog"
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
								:value="enrollment.uuid"
								:options="{ width: 350 }"
							/>
						</div>
						<h4 class="subtitle">
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
					{{ enrollment.event.description }}
				</v-card-text>
			</div>
		</v-expand-transition>
	</v-card>
</template>
<script>
import { mapActions } from 'vuex'

export default {
	name: 'EventCard',
	props: {
		enrollment: {
			type: Object,
			default: () => {}
		}
	},

	data () {
		return {
			show: false,
			dialog: false
		}
	},

	methods: {
		...mapActions('api', ['deleteEnrollment']),

		cancelEnrollment () {
			this.deleteEnrollment(this.enrollment.id)
				.then((data) => {
					this.$emit('delete-enrollment')
					console.log(data)
				})
		},

		showQR () {
			this.dialog = true
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
