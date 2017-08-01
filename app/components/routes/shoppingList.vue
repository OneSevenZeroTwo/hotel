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
				<a v-for="msg in info" class="weui-media-box weui-media-box_appmsg" :value="msg.orderCode">
					<div class="weui-media-box__hd">
						<img class="weui-media-box__thumb" :src="msg.img" alt="">
					</div>
					<div class="weui-media-box__bd"  :id="msg.orderCode"  @click="order($event)">
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
					<div id="del" @click="del($event)">
						&times;
					</div>
				</a>
			</div>
		</div>
		<xmask></xmask>
		<div>
			<ul class="fix">
				<li>确定</li>
				<li>取消</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import xback from "../xback.vue"
	import toHome from "../toHome.vue"
	//遮罩层
	import xmask from "../buyCarcomponents/xmask.vue"
	export default {
		data(){
			return{
				info:null,
			}
		},
		components: {
			xback,
			toHome,
			xmask,
		},
		methods:{
			order(e){
				var orderCode = $(e.target).closest($('.weui-media-box__bd')).attr('id');
//				console.log(orderCode)
				console.log($(e.target).closest($('.weui-media-box__bd')).attr('id'))
				this.$ajax({
						url: "http://localhost:3000/order",
						params:{
							orderCode:orderCode,
						},
					}).then(function(res) {
						console.log(res.data);
						this.info = res.data;
						location.href="#/buyCar"
					}.bind(this))
			},
			del(e){
				this.$store.state.isShowMask = true;
				$('.advanced-mask-layer').css('display','block');
				$('.slide-selector').addClass('plugin-show');
				$('.slide-selector').addClass('selector-active');
//				$('.sure').removeClass('plugin-show');
				console.log(orderId)
				//删除页面节点
//				$(e.target).closest($('a')).remove();
				//发送请求到后端删除数据
				/*this.$ajax({
						url: "http://localhost:3000/del",
						params:{
							orderId:orderId,
						},
					}).then(function(res) {
						console.log(res)
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
	    width: 30px;
	    height: 30px;
	    background-color: #ccc;
	    color: #fff;
	    text-align: center;
	    font-size: 20px;
	    border-radius: 50%;
	}
	.weui-media-box__hd{
		border-radius: 10px;
		overflow: hidden;
	}
	.fix{
		width: 100%;
		height: 70px;
		position: fixed;
		bottom: 0;
		background-color: lightskyblue;
		z-index: 99999;
	}
	.fix li{
		display: block;
		float: left;
		width: 50%;
		color: #fff;
		line-height: 70px;
		text-align: center;
		border-right: 1px solid #fff;
	}
	.fix li:nth-child(2){
		border-right: none;
	}

</style>