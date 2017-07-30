<template>
	<nav class="bar bar-tab">
		<div class="total">
			<div class="orderprice return">¥<span id="wborderprice">{{roomMoney}}<b style="font-size:14px;display:none;">RMB{{roomMoney}}</b></span>
				<span class="roomschip">/{{roomnum}}间</span></div>
			<div class="returnprice">
				<div class="coupontext">
					<!--返￥5-->
				</div>
			</div>
		</div>
		<div id="mobilesubmit" class="next commit" @click="Commit()">
			<span>
提交订单                    </span>
			<span class="preloader preloader-white button-loader"></span>
		</div>
	</nav>
</template>

<script>
	export default{
		computed:{
			//订房数量
			roomnum(){
				return scope.roomsNum
			},
			//房间单价
			roomMoney(){
				return scope.roomMoney
			},
			//订房总价
			totalMoney(){
				return scope.totalMoney
			}
		},
		methods:{
			Commit(){
				//计算总价
				scope.totalMoney = (scope.roomMoney*1)*(scope.roomsNum*1)
				console.log(scope.totalMoney)
			}
		},
		mounted(){
			console.log(scope.roomsNum)
		}
	}
</script>

<style>
	.bar-tab .total .orderprice.return {
		margin-top: 12px;
	}
</style>