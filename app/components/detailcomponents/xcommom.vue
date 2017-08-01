<template>
	<div data-blend="layer" data-blend-id="comments" id="uniq24" :class="['page', {'page-on-center':showCommom},{'page-on-right':!showCommom}]" style="top: 0px; left: 0px; right: 0px; bottom: 0px;">
		<header class="bar bar-nav flight-order-head">

			<a @click="todetail()" class="icon icon-left-nav pull-left "></a>

			<a class="icon icon-phone pull-right" href="tel:4006661166"></a>
			<h1 class="title">酒店点评</h1>
		</header>
		<div class="page-content comments-content">
			<section class="comment_con">
				<div style="overflow: visible;">
					<div class="s_bdb">
						<div class="praise clearfix">
							<div class="praise_nbm">
								<span class="u_nbm"><b class="s_nbm">{{hotelInformation.hotelScore}}</b>分</span>
								<span class="u_btn">挺好哒</span>
							</div>
							<ul class="praise_nbm_txt s_bdl clearfix">
								<li><span class="s_nbm">4.1</span><span class="s_tit">设施</span></li>
								<li><span class="s_nbm">4.5</span><span class="s_tit">服务</span></li>
								<li><span class="s_nbm">4.4</span><span class="s_tit">卫生</span></li>
								<li><span class="s_nbm">4.2</span><span class="s_tit">位置</span></li>
								<li><span class="s_nbm">4.1</span><span class="s_tit">性价比</span></li>
							</ul>
						</div>
					</div>
					<div class="com_tag comments_sticky" style="height: 101px;">
						<div class="com_tag_h" style="max-height: 64px;">
							<a v-for="(n,idx) in lab" data-mainid="0" :class="{on:idx==index}" @click="on(idx,n.value)">
								<span class="s_c333">{{n.name}}</span>
								<span class="s_c888">{{idx==0?getHotelMess.totalCount:""}}</span>
							</a>

						</div>
						<div class="com_tag_more"></div>
						
					</div>
					<div class="com-wrap">
						<ul class="com-list">
							<li class="s_bdt" v-for="n in common">
								<div class="wrap">
									<div class="tit"><span class="name">{{n.userName}}</span><span :class='"level"+n.userRank'>{{n.userRank>=3?"点评专家":"点评新人"}}</span><span class="jh"><i></i></span><span class="date">{{n.commentDateTime}}</span></div>
									<div class="con">{{n.content}}</div>
									<div v-if="n.largeImagePath.length>0" class="pic">
										<img v-for="pic in n.largeImagePath" :src="pic">
										
									</div>
									<div class="dt"><span class="type">{{n.roomTypeName}}</span><span class="user_type">{{n.travelType|travelType}}</span>
										<div v-showDetail v-show="n.replys.length>0" class="comments_more comments_more_show"><span class="more_txt">查看酒店回复</span><span class="more_icons"></span></div>
									</div>
									<div class="comments_txt" style="display:none">
										<p><span class="user_name">酒店回复：</span>{{n.replys.length>0?n.replys[0].content:""}}</p>
									</div>
								</div>
							</li>

							<li>
								<a class="more" @click="loadMore()">点击加载更多评论</a>
							</li>
						</ul>
					</div>
				</div>
			</section>

		</div>
		<div class="backtop bar" style="display: none;">
			<div class="backtop_con">
				<span class="top_arr"></span>
				<span class="top_txt">顶部</span>
			</div>
		</div>

		<div class="detail_singlepic plugin-inited page-plugin">
			<section id="close_image" class="detail-hotelpic">
				<dl class="shpictop"><dt class="picTitle"></dt>
					<dd class="pic-process">1/1</dd>
					<dd class="shpic_closed"></dd>
				</dl>
				<div class="spic_img swiper-container">
					<ul class="swiper-wrapper"></ul>
				</div>
				<div style="display:none" class="spic_bottom">
					<p>查看酒店VR</p>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				lab: [{
					name: '全部',
					value: 'all'
				}, {
					name: '推荐',
					value: 'tuijian'
				}, {
					name: '待改善',
					value: 'daigaishan'
				}, {
					name: '有图',
					value: 'youtu'
				}, {
					name: '服务周到',
					value: 'fuwuzhoudao'
				}, {
					name: '卫生干净',
					value: 'weishengganjing'
				}, {
					name: '设施好',
					value: 'sheshihao'
				}, {
					name: '位置优越',
					value: 'weizhiyouyue'
				}, {
					name: '餐饮不错',
					value: 'canyinbucuo'
				}, {
					name: '安静',
					value: 'anjing'
				}, ],
				index: 0,
				commonAll: "",
				common: "",
				page: 1,
			}

		},

		mounted() {

			this.getCommom('all');
			$(".com_tag_more").click(function(){
				$(".com_tag_h").css('max-height','211px')
				$("com_tag_more").addClass('com_tag_show')
			})
		},
		computed: {
			showCommom() {
				return scope.showCommom
			},
			hotelInformation() {

				return scope.hotelInformation
			},
			getHotelMess() {
				return scope.getHotelMess
			}
		},
		methods: {
			todetail() {
				scope.showCommom = !scope.showCommom
			},
			getCommom(val) {
				var self = this
				//http://localhost:3000/getCommon"有接口，但无法获取rt值，写接口比较麻烦
				self.$ajax({
					url: `./json/${val}.json`
				}).then(function(res) {
					self.commonAll = res.data.comments
//					console.log(self.commonAll)
					self.common = self.commonAll.slice(0, 20 * self.page)
//					console.log(self.common)
				})

			},
			on(idx, val) {
				this.index = idx
				this.getCommom(val)
			},
			loadMore() {
				this.page++
					this.common = this.commonAll.slice(0, 20 * this.page)
			},
		},
		filters: {
			travelType(input) {

				if(input == 4) {
					return '商务出差'
				} else if(input == 1) {
					return '带小孩'
				} else
				if(input == 2) {
					return '情侣出行'
				} else
				if(input == 3) {
					return '团体出行'
				}
			}

		},
		directives: {
			showDetail: {
				//用简写会跑2次，等于没有变化
				update(ele, binding, vnode) {
					$(ele).click(function() {
						
						if($(ele).closest(".dt").nextAll(".comments_txt").css('display') == 'none') {
							$(ele).closest(".dt").nextAll(".comments_txt").css('display', 'block')

						} else {
							$(ele).closest(".dt").nextAll(".comments_txt").css('display', 'none')
						}

					})
				}
			}
		}

	}
</script>

<style>

</style>