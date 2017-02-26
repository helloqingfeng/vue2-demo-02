module.exports={
	routes:[
	{
		path:'/',
		component:require('./components/Title.vue'),
		name:'主页'
	},{
		path:'/topic/:id',
		component:require('./components/Content.vue'),
		name:'content'
	},
	{
		path: '/About',
		component: require('./components/About.vue'),
		name:'关于我'
	}
	]
}