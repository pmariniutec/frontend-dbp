<template>
	<v-container>
		<v-row>
			<h1
				v-if="user !== null"
			>
				Welcome, {{ user.first_name }} {{ user.last_name }}
			</h1>
			<v-row
				v-if="enrollments !== null"
			>
				<v-col
					v-for="(enrollment, index) in enrollments"
					:key="index"
					cols="12"
					sm="6"
					md="3"
					lg="3"
					class="events-wrapper"
				>
					<EnrollmentCard
						:enrollment="enrollment"
						@delete-enrollment="deleteThisEnrollment(index)"
					/>
				</v-col>
			</v-row>
		</v-row>
	</v-container>
</template>

<script>
import { mapActions } from 'vuex'
import EnrollmentCard from '@/components/EnrollmentCard'

export default {
	name: 'Profile',

	components: {
		EnrollmentCard
	},

	data () {
		return {
			user: null,
			error: null,
			enrollments: null
		}
	},

	mounted () {
		this.getUserData()
			.then((data) => {
				this.user = data
				this.getUserEnrollments(this.user.email)
					.then((data) => {
						this.enrollments = data
					})
			})
	},

	methods: {
		...mapActions('auth', ['getUserData']),
		...mapActions('api', ['getUserEnrollments']),

		deleteThisEnrollment (index) {
			this.enrollments.splice(index, 1)
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
