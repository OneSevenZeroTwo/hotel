<template>
	<div>
	    <xbanner></xbanner>
	    <!-- <p>功率</p> -->
	    <section class="index-search">
	        <div class="dest-top-search">
	            <i class="icon icon-search"></i> 
	            <p>国家 城市 景点</p>
	        </div>
	        <div class="index-search-history hide">
	            <ul>
	            </ul>
	        </div>
	    </section>
	    <xtab></xtab>
	    <xstrategylist></xstrategylist>
	</div>
</template>
<script>
import xbanner from './xbanner.vue'
import xtab from './xtab.vue'
import xstrategylist from './xstrategylist.vue'
export default {
    components: {
        xbanner,
        xtab,
        xstrategylist
    }
}
</script>
<style scoped >
	.index-search{
		width: 100%;
		height: 40px;
		background-color: #fff;
	}
	.dest-top-search{
		padding-top: 10px;
	}
	.dest-top-search p{
		background-color: #eee;
		display: block;
		width: 200px;
		border-radius: 20px;
		margin:0 auto;
		text-align: center;
		line-height: 30px;
	}
</style>
