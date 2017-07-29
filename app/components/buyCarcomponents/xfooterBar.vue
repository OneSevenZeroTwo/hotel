<template>
	<nav class="bar bar-tab">
		<div class="total">
			<div class="orderprice return">¥<span id="wborderprice">90<b style="font-size:14px;display:none;">RMB90</b></span>
				<span class="roomschip">1间/4小时</span></div>
			<div class="returnprice">
				<div class="coupontext">
					返￥5
				</div>
			</div>
		</div>
		<div id="mobilesubmit" class="next commit">
			<span>
提交订单                    </span>
			<span class="preloader preloader-white button-loader"></span>
		</div>
	</nav>
</template>

<script>
	export default{
		computed:{
			roomnum(){
				return scope.roomsNum
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