<template>
	<div class="container">
		<ul class="list-group">
			<a class="list-group-item" v-for="item in items">
				<a :href="'https://cnodejs.org/user/'+item.author.loginname">
					<img :src="item.author['avatar_url']" width="32" class="img-circle" id="avatar-img">
				</a>
				<span class="item-count">{{item.reply_count}}/{{item.visit_count}}</span>
				<span class="item-tab">{{getTabs(item.tab)}}</span>
				<router-link :to="{name:'content',params:{id:item.id}}">
					{{item.title}}
				</router-link>
			</a>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				items:[],
				tabs:''
			}
		},
		created:function(){
			this.getTitle();
		},
		methods:{
			getTitle:function(){
				var that=this;
				that.$http.get('https://cnodejs.org/api/v1/topics')
				.then((response)=>{
					this.items=response.data.data;
				})
				.catch(function(response){
					console.log(response);
				})
			},
			getTabs:function(tabs){
				switch (tabs){
					case 'share':
					return '分享';
					break;
					case 'good':
					return '精华';
					break;
					case 'job':
					return '求职';
					break;
					case 'ask':
					return '问答';
					break;
				}
			}
		}
	}
</script>

<style>
	.item-count{
		padding: 0 8px;
		line-height:16px;
	}
	.item-tab{
		display: inline-block;
		background-color: #ccf;
		padding: 2px;
		color: #fff;
		border-radius: 2px;
	}
	@media screen and (max-width: 780px) {
		#avatar-img{
			width: 18px;
		}
	}
</style>