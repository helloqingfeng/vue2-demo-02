import Vue from 'vue'
import App from './App'
import VueRouter from  'vue-router'
import VueResource from 'vue-resource'

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter);
Vue.use(VueResource);

const router=new VueRouter(require('./router'));

// 设置afterEach钩子函数
router.afterEach((to,from,next)=>{
	document.title=to.name;
})

/* eslint-disable no-new */
const app=new Vue({
	router:router,
	render:h =>h(App)
}).$mount('#app')
