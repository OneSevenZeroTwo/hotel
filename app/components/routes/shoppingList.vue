<template>
	<div>
		<header class="bar bar-nav">
			<xback></xback>
			<h1 class="title">订单列表</h1>
			<toHome></toHome>
		</header>
		<div class="weui-panel weui-panel_access">
			<div class="weui-panel__hd">尊敬的&nbsp;&nbsp;<span class="spans">{{info?info[0].username:''}}</span>&nbsp;&nbsp;用户，您目前的所有订单</div>
			<div class="weui-panel__bd">
				<a v-for="msg in info" class="weui-media-box weui-media-box_appmsg" :value="msg.orderCode">
					<div class="weui-media-box__hd">
						<img class="weui-media-box__thumb" :src="msg.img" alt="">
					</div>
					<div class="weui-media-box__bd" :id="msg.orderCode" @click="orders($event)">
						<h4 class="weui-media-box__title">{{msg.hotelName}}</h4>
						<p class="weui-media-box__desc">
							<span>房型：{{msg.roomType}}</span>
							<span>房间数：{{msg.roomNum}}间</span>
						</p>
						<p class="weui-media-box__desc">
							<span>单价：￥{{msg.price}}</span>
							<span>总价：￥{{msg.total}}</span>
						</p>
					</div>
					<div class="del" @click="del($event)">
						&times;
					</div>
				</a>
			</div>
			
			<ul class="fix">
				<li @click="sure($event)">确定</li>
				<li @click="dis()">取消</li>
			</ul>
		</div>
		<xmask></xmask>
	</div>
</template>
<script>
	import xback from "../xback.vue"
	import toHome from "../toHome.vue"
	//遮罩层
	import xmask from "../buyCarcomponents/xmask.vue"
	export default {
		data() {
				return {
					info: null,
					order: '',
				}
			},
			components: {
				xback,
				toHome,
				xmask,
			},
			methods: {
				//点击查找订单号对应的订单
				orders(e) {
					var orderCode = $(e.target).closest($('.weui-media-box__bd')).attr('id');
					//				console.log(orderCode)
					console.log($(e.target).closest($('.weui-media-box__bd')).attr('id'))
					this.$ajax({
						url: "http://localhost:3000/order",
						params: {
							orderCode: orderCode,
						},
					}).then(function(res) {
						console.log(res.data);
						this.info = res.data;
						location.href = "#/buyCar"
					}.bind(this))
				},
				//点删除按钮的时候时显示遮罩
				del(e) {
					var orderId = $(e.target).prev().attr('id');
					console.log(orderId);
					this.order = orderId;
					this.$store.state.isShowMask = true;
					$('.advanced-mask-layer').css('display', 'block');
					$('.slide-selector').addClass('plugin-show');
					$('.slide-selector').addClass('selector-active');
					$('.fix').css('display', 'block');

				},
				dis() {
					this.$store.state.isShowMask = false;
					$('.advanced-mask-layer').css('display', 'none');
					$('.slide-selector').removeClass('plugin-show');
					$('.slide-selector').removeClass('selector-active');
					$('.fix').css('display', 'none');
				},
				//点击确定删除
				sure(e) {
					var orderId = this.order;
					console.log(this.order);
					//删除页面节点
					this.dis();
					var eleorderId =  $('.weui-media-box__bd').attr('id')
					console.log($('.weui-media-box__bd'))
					console.log(eleorderId)
					if(orderId==eleorderId){
//						$('.weui-media-box__bd').closest('a').remove();
					console.log($('.weui-media-box__bd').closest('a'))
					}
					
					
					//发送请求到后端删除数据
					/*this.$ajax({
						url: "http://localhost:3000/del",
						params: {
							orderId: orderId,
						},
					}).then(function(res) {
						console.log(res);
						//请求完成后隐藏遮罩
						this.dis();
					}.bind(this))*/
				},
			},
			mounted() {
				var user = com.getCookie("user")
				var username = JSON.parse(user).username
					//console.log(username)
				this.$ajax({
					url: "http://localhost:3000/shoppingList",
					params: {
						username: username,
					},
				}).then(function(res) {
					console.log(res);
					this.info = res.data;
				}.bind(this))
			},
	}
</script>
<style scoped>
	.bar-nav {
		margin-top: -10px;
	}
	
	.weui-panel_access {
		padding-top: 40px;
	}
	
	.spans {
		font-weight: bolder;
		color: #000;
	}
	
	.weui-media-box__desc span {
		padding: 0 15px 0 0;
		border: 1px solid dashed #B8AEAE;
	}
	
	.del {
		width: 30px;
		height: 30px;
		background-color: #ccc;
		color: #fff;
		text-align: center;
		font-size: 20px;
		border-radius: 50%;
	}
	
	.weui-media-box__hd {
		border-radius: 10px;
		overflow: hidden;
	}
	
	.fix {
		width: 70%;
		height: 58px;
		position: fixed;
		top: 45%;
		left: 15%;
		background-color: lightskyblue;
		z-index: 99999;
		display: none;
		border-radius: 10px;
	}
	
	.fix li {
		display: block;
		float: left;
		width: 50%;
		color: #fff;
		line-height: 58px;
		text-align: center;
		border-right: 1px solid #fff;
	}
	
	.fix li:nth-child(2) {
		border-right: none;
	}
</style>