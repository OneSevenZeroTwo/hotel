<template>
	<div>
		<header class="bar bar-nav">
			<xback></xback>
			<h1 class="title">订单列表</h1>
			<toHome></toHome>
		</header>
		<div class="weui-panel weui-panel_access">
			<div class="weui-panel__hd">尊敬的&nbsp;&nbsp;<span class="spans">{{info?info[0].username:''}}</span>&nbsp;&nbsp;用户，您目前的所有订单</div>
			<div class="weui-panel__bd" >
				<a href="#/buyCar/90702017" v-for="msg in info" class="weui-media-box weui-media-box_appmsg">
					<div class="weui-media-box__hd">
						<img class="weui-media-box__thumb" :src="msg.img" alt="">
					</div>
					<div class="weui-media-box__bd"  :id="msg.orderCode"  @click="order()">
						<h4 class="weui-media-box__title" >{{msg.hotelName}}</h4>
						<p class="weui-media-box__desc" >
							<span>房型：{{msg.roomType}}</span>
							<span>房间数：{{msg.roomNum}}间</span>
						</p>
						<p class="weui-media-box__desc" >
							<span>单价：￥{{msg.price}}</span>
							<span>总价：￥{{msg.total}}</span>
						</p>
					</div>
					<div id="del">
						删除
					</div>
				</a>
				
			</div>
		</div>
	</div>
</template>
<script>
	import xback from "../xback.vue"
	import toHome from "../toHome.vue"
	export default {
		data(){
			return{
				info:null,
			}
		},
		components: {
			xback,
			toHome,
		},
		methods:{
			order(){
//				var orderCode = $(e.target).closest($('.weui-media-box__bd')).attr('id')
				var orderCode = $('.weui-media-box__bd').attr('id');
				console.log($('.weui-media-box__bd'))
				console.log(orderCode)
				/*this.$ajax({
						url: "http://localhost:3000/order",
						params:{
							orderCode:orderCode,
						},
					}).then(function(res) {
						console.log(res.data);
						this.info = res.data;
					}.bind(this))*/
			},
		},
		mounted(){
			var user = com.getCookie("user")	
			var username = JSON.parse(user).username
//			console.log(username)
			this.$ajax({
						url: "http://localhost:3000/shoppingList",
						params:{
							username:username,
						},
					}).then(function(res) {
						console.log(res);
						this.info = res.data;
					}.bind(this))
		},
	}
</script>
<style scoped>
	.bar-nav{
		margin-top: -10px;
	}
	.weui-panel_access{
		padding-top: 40px;
	}
	.spans{
		font-weight: bolder;
		color: #000;
	}
	.weui-media-box__desc span{
		padding: 0 15px 0 0;
		border: 1px solid dashed #B8AEAE;
	}
	#del{
	    width: 40px;
	    background-color: red;
	    color: #fff;
	    text-align: center;
	    /*position: absolute;*/
	    /*top: 100px;*/
	    /*right: 20px;*/
	}
</style>