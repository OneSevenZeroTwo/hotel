<template>
	<div class="content">
		<h2>注册艺龙会员</h2>
		<mu-text-field v-model="username" label="帐号" labelFloat/><br/>
		<mu-text-field v-model="password" label="密码" hintText="请输入密码" type="password" labelFloat/><br/>
		<mu-raised-button @click="register()" label="注册并登录" class="demo-raised-button" :disabled="!isChecking" primary/>
		<p class="bottom">
			<label data-v-90a16fcc="" class="mu-checkbox demo-checkbox" value="true">
				<input type="checkbox" v-model="isChecking" :value="!isChecking"> 
				<div class="mu-checkbox-wrapper">
					<div class="mu-ripple-wrapper mu-checkbox-ripple-wrapper"></div> 
						
					<!----> <div class="mu-checkbox-icon">
						<svg viewBox="0 0 24 24" class="mu-checkbox-icon-uncheck mu-checkbox-svg-icon">
							<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
						</svg> 
						<svg viewBox="0 0 24 24" class="mu-checkbox-icon-checked mu-checkbox-svg-icon">
							<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
						</svg> <!----> <!----></div> 
						<div class="mu-checkbox-label">同意艺龙旅行网服务条款</div></div> <!---->
			</label> <br/>
			<label data-v-90a16fcc="" class="mu-checkbox demo-checkbox" value="true">
				<input type="checkbox" checked> 
				<div class="mu-checkbox-wrapper">
					<div class="mu-ripple-wrapper mu-checkbox-ripple-wrapper"></div> 
						
					<!----> <div class="mu-checkbox-icon">
						<svg viewBox="0 0 24 24" class="mu-checkbox-icon-uncheck mu-checkbox-svg-icon">
							<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
						</svg> 
						<svg viewBox="0 0 24 24" class="mu-checkbox-icon-checked mu-checkbox-svg-icon">
							<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
						</svg> <!----> <!----></div> 
						<div class="mu-checkbox-label">授权艺龙发送优惠促销短信</div></div> <!---->
			</label> <br/>

			<!--<mu-checkbox label="授权艺龙发送优惠促销短信" class="demo-checkbox" /> <br/>-->
		</p>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: '默认文字',
				isChecking: true,
				username: "",
				password: "",
			}
		},
		methods: {
			register() {
				console.log(this.username, this.password, this.$ajax)

				this.$ajax({
					url: "http://localhost:3000/register",
					params: {
						username: this.username,
						password: this.password
					}
				}).then(function(res) {
					console.log(res)
					if(res.data="注册成功"){
						console.log(111)
						//明天这里继续
						com.setCookie('login',"true")
					}
					
				})
			}
		}
	}
</script>

<style scoped>
	.content {
		position: relative;
		padding-top: 100px;
		text-align: center;
	}
	
	h2 {
		color: #7e57c2;
		letter-spacing: 5px;
	}
	
	.col {
		color: #7e57c2;
	}
	
	.bottom {
		position: fixed;
		bottom: 0;
		margin-left: 70px;
		font-size: 12px;
	}
</style>