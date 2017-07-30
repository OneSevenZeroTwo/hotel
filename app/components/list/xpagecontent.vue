<template>
	<div ref="viewbox" :class="{'weixin-overflowhidden':roomtitle}" class="page-content page-list mvt_191">
		<section class="page-list-con">
			<div class="list-main">
				<ul class="hotel-list">
					<li v-for="n in arr" class="hotel-item" data-url="http://m.elong.com/hotel/00101366/#indate=2017-07-26&amp;outdate=2017-07-27">
						<div class="pic"> <img :src="n.picUrl"> </div>
						<div class="info">
							<p class="name"> 
								<em>{{n.hotelName}}</em> 
								<i class="grade grade1"></i> 
							</p>
							<p class="comt">{{n.commentScore}} 
								<span class="comt_no"><b></b>分</span> 
								<span class="comt_nmb">{{n.totalCommentCount}}条点评</span> 
							</p>
							<p class="fac"> <span>经济型</span> </p>
							<p class="district"> <span class="d4">{{n.newRecallReason.content}}</span> </p>
						</div>
						<div class="right-wrap">
							<div class="r-tab">
								<p class="pri"> <b>  </b> <span><i>￥</i>{{n.lowestPrice}}</span> </p>
								<p class="tags"> 
								<span v-for="m in n.tags" style="color:m.color;border:1px solid m.color">{{m.name}}</span>
								
								</p>
							</div>
						</div>
					</li>
				</ul>
				<div class="nomore">
					<p class="">点击加载更多酒店</p>
				</div>
				<!----------------------------------------搜索无结果start------------------------------------------>
				<div class="list-noresult" style="display: none;">
					<i class="icon-noresult"></i>
					<p>抱歉，未找到符合您条件的酒店</p>
				</div>
				<!----------------------------------------搜索无结果 end ------------------------------------------>

			</div>
			<div class="tool">
				<div class="ver">
					<a href="//m.elong.com/my/account/index/">个人中心</a><span>｜</span>
					<a href="//d.elong.cn/h5_mnoreferseo" class="sp">下载客户端</a><span>｜</span>
					<a href="http://m.elong.com/?t=1501070002922">返回首页</a>
				</div>
				<div class="copy">©2009-2017 艺龙无线</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				scroll:0,
				p:0,
			}
		},
		methods:{
			// vue监听滚动事件
			menu() { 
        		this.scroll = this.$refs.viewbox.scrollTop;

        		// console.log('距离顶部:'+.scrollTop())
        		// console.log('滚动:'+this.scroll)
        		if(this.p<=this.scroll){
        			console.log('下滚')
        			this.$store.state.show = false;
        		}else{
        			console.log('上滚')
        			this.$store.state.show = true;
        		}
        		setTimeout(function(){
        			this.p = this.scroll
        		}.bind(this),0)
     		},
		},
		computed:{
			roomtitle:function(){
				return this.$store.state.roomtitle
			},
			arr:function(){
				return this.$store.state.arr
			},
		},
		mounted:function(){
			this.$refs.viewbox.addEventListener('scroll', this.menu)
		}
	}
</script>
