<template>
	<view class="content">
		<h1>{{title}} Mine</h1>
		<p>{{username}}</p>
		<input v-model="username" />
		<button @click="handleClick">点我</button>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				title: 'Hello',
				username:'jingjing'
			}
		},
		onLoad() {

		},
		methods: {
			handleClick(){
				this.title = this.title === 'hi' ? 'hello' : 'hi'
			}
		}
	}
</script>

<style>
	h1{color:#f00}
</style>
