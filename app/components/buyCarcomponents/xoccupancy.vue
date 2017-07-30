<template>
	<!--入住信息-->
	<div class="order-occupancy">
		<h1>入住信息
								<span>
恭喜，这是该房型<b>最优惠</b>的价格。请别错过！				    			</span>
								</h1>
		<ul>
			<li @click="roomNum(true)">
				<label for="room-number" ></label>
				<div class="label">房间数</div>
				<div class="content list-input">
					<input type="text" readonly="readonly" class="cert-type createorder" id="room-number" name="roomcount" :value="roomsNum +'间'" style="width: 30px;">
					<span><i class="icon-left"></i></span>
				</div>
			</li>

			<li class="room-big" style="display:none">
				因房量大于5间，可能无法立即确认
			</li>
			<li @click="timeNum(true)">
				<label for="room-reservation" ></label>
				<div class="label" >房间保留至</div>
				<div class="content list-input">
					<input type="text" readonly="readonly" class="cert-type saveuntil createorder" id="room-number" name="roomcount" :value="timesNum" style="width: 30px;">
					<span><i class="icon-left"></i></span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		computed:{
			roomsNum(){
				return this.$store.state.roomsNum
			},
			timesNum(){
				return this.$store.state.timesNum
			}
		},
		methods:{
			roomNum(bool){
				this.$store.state.isShowMask = bool;
				$('.advanced-mask-layer').css('display','block');
//				console.log('xoccupancy')
//				plugin-show selector-active添加这两个类显示并且高亮
				$('.room').addClass('plugin-show');
				$('.room').addClass('selector-active');
			
			},
			timeNum(bool){
				this.$store.state.isShowMask = bool;
				$('.advanced-mask-layer').css('display','block');
//				console.log('xoccupancy')
//				plugin-show selector-active添加这两个类显示并且高亮
				$('.time').addClass('plugin-show');
				$('.time').addClass('selector-active');
			
			},
			
		},
		mounted(){
			this.$store.state.roomsNum = 1;
			this.$store.state.timesNum = "00:00";
		}
	}
</script>
	
<style>

</style>