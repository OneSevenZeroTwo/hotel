<template>
	<div class="list-sider bar">
		<ul class="filter-list">
			<li class="filter-btn " data-tj="{&quot;cspot&quot;:&quot;filter&quot;}">
				<p class="tit"><i class="list-filter-i1"></i>筛选</p>
				<p class="opt">条件不限</p>
			</li>
			<li class="area-btn " data-tj="{&quot;cspot&quot;:&quot;hotelposition&quot;}">
				<p class="tit">
					<i class="list-filter-i2"></i>
					<span class="title-pad">区域位置</span>
					<span class="title-phone">区域位置</span>
				</p>
				<p class="opt">位置不限</p>
			</li>
			<li class="price-star-btn " data-tj="{&quot;cspot&quot;:&quot;priceandstar&quot;}">
				<p class="tit">
					<i class="list-filter-i3"></i>
					<span class="title-pad">价格星级</span>
					<span class="title-phone">价格星级</span>
				</p>
				<p class="opt">价格不限、星级不限</p>
			</li>
			<li class="default-btn tjclick" data-tj="{&quot;cspot&quot;:&quot;sort&quot;}">
				<p class="tit">
					<i class="list-filter-i4"></i>
					<span class="title-pad">排序</span>
					<span class="title-phone">排序</span>
					</p>
				<p class="opt">默认排序</p>
			</li>
		</ul>
		<a href="" class="filter-reset">重置所有选项</a>
	</div>
</template>