<template>
	<div id="app">
		<hello></hello>
		<div class="container">
			<ul class="nav nav-justified" role="tablist">
				<router-link tag="li" to="/" activeClass="active"><a href="#"><h2>Home</h2></a></router-link>
				<router-link tag="li" to="/about" activeClass="active"><a href="#"><h2>About</h2></a></router-link>
			</ul>
			<hr>
			<router-view></router-view>
		</div>

	</div>
</template>

<script>
	import Hello from './components/Hello'

	export default {
		name: 'app',
		components: {
			Hello
		}
	}
</script>

<style>
	body{
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
		font-size: 16px;
	}
</style>
