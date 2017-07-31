<template>
	<div class="pages individ" data-wx="0">
		<div class="page page-on-center" data-blend="layer" data-blend-id="list" data-url="/clockhotel/2001/nlist/" id="uniq22" data-title="钟点房列表">
		<xheader></xheader>
		<!-- 中间内容 -->
		<xpagecontent></xpagecontent>
		<!-- 底部选项 -->
		<xlistsider></xlistsider>
		<!-- 筛选 -->
		<xlistfliter></xlistfliter>
		<!-- 价格遮罩层 -->
		<xmasklayer></xmasklayer>
		<!-- 排序遮罩层 -->
		<xadvancedmasklayer></xadvancedmasklayer>
		<!-- 价格组件 -->
		<xfilterpricestar></xfilterpricestar>
		<!-- 排序组件-->
		<xslideselector></xslideselector>
		</div>
	</div>
</template>

<script>
	import xheader from "../clockhotel/xheader.vue";
	import xpagecontent from "../clockhotel/xpagecontent.vue";
	import xlistsider from "../clockhotel/xlistsider.vue";
	import xlistfliter from "../clockhotel/xlistfliter.vue";
	import xmasklayer from "../clockhotel/xmasklayer.vue";
	import xadvancedmasklayer from "../clockhotel/xadvancedmasklayer.vue";
	import xfilterpricestar from "../clockhotel/xfilterpricestar.vue";
	import xslideselector from "../clockhotel/xslideselector.vue";

	export default {
		data:function(){
			return {

			}
		},
		components:{
			xheader,
			xpagecontent,
			xlistsider,
			xlistfliter,
			xmasklayer,
			xadvancedmasklayer,
			xfilterpricestar,
			xslideselector
		},
		methods:{

		}
	}
</script>