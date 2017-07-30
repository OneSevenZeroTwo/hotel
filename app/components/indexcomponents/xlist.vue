<template>
	<div class="weui-panel weui-panel_access">
		<div class="weui-panel__hd">更多></div>
		<div class="weui-panel__bd">
			<a :href="'#/detail/'+n.id" class="weui-media-box weui-media-box_appmsg" v-for="(n,index) in vvv">
				<xcontentheader :imgurl="n.picUrl"></xcontentheader>
				<p class="aaaa"></p>
				<div class="weui-media-box__bd">
					<p>1111111111</p>
					<h4 class="weui-media-box__title">{{n.hotelName}}</h4>
					<p class="weui-media-box__desc"></p>
				</div>
			</a>
		</div>
		<div class="weui-panel__ft">
			<a href="javascript:void(0);" @click="submint()" class="weui-cell weui-cell_access weui-cell_link">
				<div class="weui-cell__bd">查看更多</div>
				<span class="weui-cell__ft"></span>
			</a>
		</div>
		<div id="loadingToast" v-show="isLoadMore">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast">
				<i class="weui-loading weui-icon_toast"></i>
				<p class="weui-toast__content">数据加载中</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {

		data: function() {
			return {
				news: [],
				vvv:[],
				isLoadMore: false
			}
		},
		methods: {
			submint: function() {
			this.isLoadMore=true

				this.$ajax({
					url: "http://localhost:3000/indexlist",
				}).then(function(res) {
					console.log(res)
					this.news = res.data.hotelList
//					console.log(this.news)
					this.vvv = this.vvv.concat(this.news)
					this.isLoadMore = false
				}.bind(this))
			}
		},
		computed: {
			
			
		},
		mounted: function() {
			this.submint();

		},
		components: {
			xcontentheader: {
				props: ["imgurl"],
				template: `
				<div class="weui-media-box__hd">
					<img @click="showGallery(imgurl)" class="weui-media-box__thumb" :src="imgurl" alt="">
				</div>
			`,
				methods: {
					showGallery(imgurl) {
						console.log(this.$store.state);
						this.$store.state.imgUrl = imgurl;
						this.$store.state.isShowGallery = true;
					}
				}
			}
		}
	}
</script>
<style>

</style>