<template>
	<!--入住信息-->
	<div class="order-occupancy">
		<h1>入住信息
								<span>
恭喜，这是该房型<b>最优惠</b>的价格。请别错过！				    			</span>
								</h1>
		<ul>
			<li>
				<label for="room-number"></label>
				<div class="label">房间数</div>
				<div class="content list-input">
					<input type="text" readonly="readonly" class="cert-type createorder" id="room-number" name="roomcount" value="1" style="width: 30px;">
					<span><i class="icon-left"></i></span>
				</div>
			</li>

			<li class="room-big" style="display:none">
				因房量大于5间，可能无法立即确认
			</li>
			<li>
				<label for="room-reservation"></label>
				<div class="label">保留至</div>
				<div class="content list-input">
					<input type="text" readonly="readonly" class="cert-type" id="room-reservation" value="" style="width: 60px;">
					<span><i class="icon-left"></i></span>
					<p class="text_ex">您可入住3小时，最晚22:00离店</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style>

</style>