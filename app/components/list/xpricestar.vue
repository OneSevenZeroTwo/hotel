//星级价格
<template>
	<div class="filter-sp plugin-inited" style="">
		<span class="arrow"></span>
		<div class="sp-content">
			<div class="star">
				<div class="sp-tit">星级（可多选）</div>
				<ul class="star-list">
					<li sn="-1" class="on">不限</li>
					<li sn="12" class="">经济/客栈</li>
					<li sn="3" class="">三星/舒适</li>
					<li sn="4" class="">四星/高档</li>
					<li sn="5" class="">五星/豪华</li>
				</ul>
			</div>
			<div class="price">
				<div class="sp-tit">价格</div>
				<ul class="price-list">
					<li class="on" price-value="0">不限</li>
					<li price-value="0-150" class="">0-150</li>
					<li price-value="150-300" class="">150-300</li>
					<li price-value="300-450" class="">300-450</li>
					<li price-value="450-700" class="">450-700</li>
					<li price-value="700" class="">700以上</li>
				</ul>
			</div>
		</div>
		<div class="sp-title">
			<span class="left">取消</span> 
			<span class="right">确定</span>
		</div>
	</div>
</template>