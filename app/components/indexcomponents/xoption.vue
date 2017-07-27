<template>
	<div class="page-content page-search" style="">
		<div class="search-nav">
			<ul class="search-nav-list animated hinge" >
				<li class="isnearby tjclick" data-tj="{&quot;cspot&quot;:&quot;nearby&quot;}" >
					<a href="javascript:void 0"><i class="icon-nav1"></i><span>附近</span></a>
				</li>
				<li class="tjclick" data-tj="{&quot;cspot&quot;:&quot;offprice&quot;,&quot;if&quot;:&quot;12579&quot;,&quot;ch&quot;:&quot;h5offprice&quot;}">
					<a href="//m.elong.com/sales/index.html?if=12579&amp;ch=h5offprice"><i class="icon-nav2"></i><span>特惠</span></a>
				</li>
				<li class="tjclick" data-tj="{&quot;cspot&quot;:&quot;globalhotel&quot;,&quot;if&quot;:&quot;110004&quot;,&quot;ch&quot;:&quot;h5globalhotel&quot;}">
					<a href="//m.elong.com/ihotel/?if=110004&amp;ch=globalhotel"><i class="icon-nav3"></i><span>国际</span></a>
				</li>
				<li class="tjclick">
					<a href="//m.elong.com/clockhotel/0101/nlist/?if=110019&amp;ch=h5clockhotel&amp;neednear=1"><i class="icon-nav4"></i><span>钟点房</span></a>
				</li>
				<li class="tjclick" data-tj="{&quot;cspot&quot;:&quot;globalhotel&quot;,&quot;if&quot;:&quot;110020&quot;,&quot;ch&quot;:&quot;h5bnb&quot;}">
					<a href="//m.elong.com/minsu/?if=110020&amp;ch=h5bnb"><i class="icon-nav5"></i><span>民宿</span></a>
				</li>
				<li class="tjclick" data-tj="{&quot;cspot&quot;:&quot;local&quot;,&quot;if&quot;:&quot;11004&quot;,&quot;ch&quot;:&quot;h5local&quot;}">
					<a href="//m.elong.com/trip/?from=elongh5&amp;if=11004&amp;ch=h5local"><i class="icon-nav6"></i><span>攻略</span></a>
				</li>
				<li class="tjclick" data-tj="{&quot;cspot&quot;:&quot;spotticket&quot;,&quot;if&quot;:&quot;12774&quot;,&quot;ch&quot;:&quot;spotticketh5&quot;}">
					<a class="search-nav-hi" href="//m.elong.com/scenery/?ch=spotticketh5&amp;if=12774#/homepage?cityIdN=0101"><i class="icon-nav11"></i><span>门票</span></a>
				</li>
				<li class="tjclick" data-tj="{&quot;cspot&quot;:&quot;ticket&quot;}">
					<a href="//m.elong.com/train/"><i class="icon-nav8"></i><span>火车票</span></a>
				</li>
				<li class="tjclick" data-tj="{&quot;cspot&quot;:&quot;flight&quot;}">
					<a href="//m.elong.com/flight/"><i class="icon-nav9"></i><span>机票</span></a>
				</li>
				<li class="tjclick" data-tj="{&quot;cspot&quot;:&quot;bus&quot;}">
					<a href="//m.elong.com/bus/" ><i class="icon-nav10"></i><span>汽车票</span></a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			changetion() {
				this.$store.state.direction = 'right'
			}

		}
	}
</script>

<style>

</style>