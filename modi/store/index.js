import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo: {}
	},
	mutations: {
		setLoginState (state, data) { // 设置用户信息
			state.userInfo = data
		},
		getLoginState () {
			
		}
	}
})