<template>
	<div id="app">
		<div id="nav">
			<router-link :to="{ name: 'home' }">
				Home
			</router-link> |

			<template v-if="!isAuthenticated">
				<router-link :to="{ name: 'login' }">
					Login
				</router-link> |
				<router-link :to="{ name: 'register' }">
					Register
				</router-link> |
			</template>

			<template v-if="isAuthenticated">
				<router-link :to="{ name: 'profile' }">
					Profile
				</router-link> |
			</template>

			<router-link :to="{ name: 'events' }">
				Upcoming Events
			</router-link>
		</div>
		<router-view />
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'App',

	data () {
		return {

		}
	},

	created () {

	},

	methods: {
		...mapGetters('auth', ['isAuthenticated'])
	}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
