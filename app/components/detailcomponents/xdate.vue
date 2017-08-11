<template>
	<div class="stickys indexnew sticky" style="top: 42px;">
		<div class="ht_day detail-date detail-hotel">
			<div class="getin_room_a">
				<span class="c8">入住</span>
				<span class="indate">{{indate}}</span>
				<span class="night" style="display:none;">深夜</span>
				<span class="c8">离店</span>
				<span class="outdate">{{outdate}}</span>
			</div>
			<div class="getin_room_b">
				<span class="count_day">共<span class="count_nmb">day</span>晚<i></i></span>
			</div>
		</div>

		<div class="fastchoose">
			<div class="choice " data-tj="{&quot;cspot&quot;:&quot;roomtypeFilter&quot;}">筛选<i class="getin"></i></div>
			<ul>
				<li class="tjclick" kw="kw0" data-id="30" data-tj="{&quot;cspot&quot;:&quot;paymentInHotel&quot;}">到店付</li>
				<li class="tjclick" kw="kw0" data-id="101" data-tj="{&quot;cspot&quot;:&quot;freeCancellation&quot;}">免费取消</li>
				<li class="tjclick" kw="kw0" data-id="102" data-tj="{&quot;cspot&quot;:&quot;instantConfirm&quot;}">立即确认</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		computed:{
			indate(){
				return scope.trueListParams.indate
				
			},
			outdate(){
				return scope.trueListParams.outdate
				
			},
			day(){
				var a = scope.trueListParams.indate.slice(-2)
				var b = scope.trueListParams.outdate.slice(-2)
				var c = Number(b)-Number(a)
				if(c<0){
					c=c+30
				}
				return c
			},
		}
	}
</script>

<style>

</style>