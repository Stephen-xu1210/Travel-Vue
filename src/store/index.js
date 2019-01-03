import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)


// 这是vuex的调动逻辑。 详情可见vuex官网的思想图   由state执行dispatch方法 传值给actions   actions再通过commit方法来传值给mutations
// 												其中actions中的ctx值是为了可调用commit方法 。
export default new Vuex.Store({
	state:state,
	actions:actions,
	mutations:mutations
})