import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueQrcode from '@chenfengyuan/vue-qrcode'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.component(VueQrcode.name, VueQrcode)
Vue.use(VueAxios, axios)

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
