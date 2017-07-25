<template>
	<div class="content">
		<a href="#/register" class="register">  <mu-flat-button label="注册" class="demo-flat-button" primary/></a>
		<h2>欢迎来到艺龙旅行</h2>
		<mu-text-field label="帐号" labelFloat/><br/>
		<mu-text-field label="密码" hintText="请输入密码" type="password" labelFloat/><br/>
		<mu-raised-button label="登录" class="demo-raised-button" primary/>
		<p class = "bottom">注册登录代表你已同意 <span class="col">《艺龙旅行网服务条款》</span></p>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: '默认文字'
			}
		}
	}
</script>

<style scoped>
	.content{
		position: relative;
		padding-top:100px;
		text-align: center;
	}
	h2{
		color:#7e57c2;
		letter-spacing: 5px;
	}
	.register{
		position: absolute;
		right: 5px;
		top: 5px;
	}
	.col{
		color:#7e57c2;
	}
	.bottom{
		position: fixed;
		bottom: 0;
		margin-left: 40px;
	}
</style>