<template>
	<div class="content">
		<xback></xback>
		<a href="#/register" class="register">
			<mu-flat-button label="注册" class="demo-flat-button" primary/>
		</a>
		<h2>欢迎来到艺龙旅行</h2>
		<mu-text-field v-model="username" label="帐号" labelFloat/><br/>
		<mu-text-field v-model="password" label="密码" hintText="请输入密码" type="password" labelFloat/><br/>
		<mu-raised-button @click="login()" label="登录" class="demo-raised-button" primary/>
		<mu-snackbar v-if="snackbar" :message="data=='登录成功'?'登录成功':'登录失败'" action="关闭" @actionClick="hideSnackbar" @close="hideSnackbar" />
		<p class="bottom">注册登录代表你已同意 <span class="col">《艺龙旅行网服务条款》</span></p>

	</div>
</template>

<script>
	import xback from "../xback.vue"
	export default {
		data() {
			return {
				username: "",
				password: "",
				value: '默认文字',
				snackbar: false,
				toast: false,
				data:''
			}
		},
		methods: {
			login() {
				this.$ajax({
					url: "http://localhost:3000/login",
					params: {
						username: this.username,
						password: this.password
					}
				}).then(function(res) {
					console.log(res)
					this.data= res.data
					this.showSnackbar()
					
					if(res.data == "登录成功") {
						//用户信息，存进cookies,其他路由以isLogin作为判断是否已登录的
						var userMess = {
							username: this.username,
							password: this.password
						}

						com.setCookie('user', JSON.stringify(userMess))
						this.$store.state.isLogin = true;
						location.href="#/index"

					} else {
						this.$store.state.isLogin = false;
					}

				}.bind(this))
			},

			showSnackbar() {
				this.snackbar = true
				if(this.snackTimer) clearTimeout(this.snackTimer)
				this.snackTimer = setTimeout(() => {
					this.snackbar = false
				}, 2000)
			},
			hideSnackbar() {
				this.snackbar = false
				if(this.snackTimer) clearTimeout(this.snackTimer)
			},
		},
		components: {
			xback
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
	
	.register {
		position: absolute;
		right: 5px;
		top: 5px;
	}
	
	.col {
		color: #7e57c2;
	}
	
	.bottom {
		position: fixed;
		bottom: 0;
		margin-left: 40px;
	}
</style>