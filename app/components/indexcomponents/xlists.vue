<template>
	<div class=".ej-css-y ">
		<div @click="test(n.hotelName,n.commentScore)" class="recommendHouseItem       " style="margin: 10px;" v-for="(n,index) in vvv">
			<div class="container ej-css-14">
				<div class="house-img-cover  "><span alt="" class="house-img ej-tag-img" @click="showGallery(n.picUrl)" v-bind:style="{'backgroundImage':'url('+n.picUrl+')'}" style="background-image: url(&quot;//pavo.elongstatic.com/i/mobile570_372/0006vR4Y.jpg&quot;); background-size: cover; background-position: 50% 50%; opacity: 1; transition: opacity 0.5s linear;"><div class="market-tags-container    "><div class="market-tag     ">快速确认</div></div><div class="discount-icon" style="background-color: orangered;"><span class="    ">立减</span><span class="    ">优惠</span></div>
				</span>
				<div class=""><i class="   "></i></div>
			</div>
			<div class="house-title"  @click="listId(n.hotelId)">{{n.hotelName}}</div>
			<div class="house-des home-des">
				<div class="house-des-left   ">
					<div class="point-container    ">
						<div class="    " style="font-size: 11px;"><i class="     " style="font-size: 15px;">{{n.commentScore}}</i>
							<!-- react-text: 211 -->分
							<!-- /react-text -->
						</div>
					</div><span class="house-desc fn-hide">单间出租  可住2人</span></div><span class="li-cut">已减33元</span></div>
			<div class="info-container  ">
				<div class="info-con-left   "><i class="add-icon    "></i><span class="distance-desc fn-hide"></span><span class="distance-desc fn-hide">{{n.districtName}}</span><span class="house-area">{{n.businessAreaName}}</span></div>
				<div class="price-container   ">
					<div class="   " style="font-size: 12px;">
						<!-- react-text: 222 -->￥
						<!-- /react-text --><i class="    " style="font-size: 18px;">{{n.lowestPrice}}</i>
						<!-- react-text: 224 -->起/晚
						<!-- /react-text -->
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--<div class="weui-panel__ft">
		<a href="javascript:void(0);" @click="submint()" class="weui-cell weui-cell_access weui-cell_link">
			<div class="weui-cell__bd">查看更多</div>
			<span class="weui-cell__ft"></span>
		</a>
	</div>-->
	<div id="loadingToast" v-show="isLoadMore">
		<div class="weui-mask_transparent"></div>
		<div class="weui-toast">
			<i class="weui-loading weui-icon_toast"></i>
			<p class="weui-toast__content">数据加载中</p>
		</div>
	</div>
	<div id="top">
		<b class="icon4" style="display: none;">top</b>
	</div>
	</div>
</template>

<script>
	export default {

		data: function() {
			return {
				news: [],
				vvv: [],
				isLoadMore: false
			}
		},
		methods: {
			test(hotelName,hotelScore){
				console.log('jiudianming')
				console.log(hotelName,hotelScore)

				scope.hotelInformation.hotelName=hotelName
				scope.hotelInformation.hotelScore=hotelScore
				

//				scope.cityId=cityId
				
				
//				this.changetion()
			},
			showGallery(indexImg) {
					console.log(this.$store.state);
					this.$store.state.indexImg = indexImg;
					this.$store.state.isShowGallery = true;
			},
			submint: function() {
				this.isLoadMore = true

				this.$ajax({
					url:this.$store.state.base+"/clockhotel/api/list/",
				}).then(function(res) {
//					console.log(res)
					this.news = res.data.hotelList
					//					console.log(this.news)
					this.vvv = this.vvv.concat(this.news)
					this.isLoadMore = false
				}.bind(this))
			},
			listId(listId){
				console.log(listId)
				location.href="#/detail/"+listId
					
				
			}
		},
		computed: {

		},
		mounted: function() {
			
			this.submint();
			var self = this
			$('#bigbox').on("scroll", function(e) {
//				console.log(11111)
				if(this.offsetHeight + this.scrollTop >= this.scrollHeight) {
//					console.log("到底部了")
					self.submint();
				}

			})
			//返回顶部
			$('#bigbox').scroll(function() {
//				console.log(222)
				if($('#bigbox').scrollTop() > 100) {
//				console.log(23322)
					
					$('.icon4').fadeIn();

				} else {
					$('.icon4').fadeOut()

				}

				

			})
			//按钮top
				$('.icon4').on('click', function() {
//					console.log('11111')
					$('#bigbox').stop(true).animate({
						scrollTop: 0
					}, 500)
				})

		}

	}
</script>

<style>
	#top b {
		width: 40px;
		height: 40px;
		background: #000;
		opacity: 0.7;
		/*position: absolute;*/
		border-radius: 50%;
		position: fixed;
		bottom: 50px;
		right: 5px;
		color: #fff;
		font-weight: bold;
		text-align: center;
		line-height: 40px;
	}
	
	.ej-css-y .recommendHouseItem {
		padding: 20px 10px 0px 10px;
		border-bottom: 1px solid #E0E0E0;
	}
	
	.container.ej-css-14 {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		flex-direction: column;
		background-color: white;
		width: 100%;
		margin-bottom: 8px;
	}
	
	.ej-css-14 .house-img-cover {
		background: transparent url(//m.elongstatic.com/static/webapp/eroom/minsu/online/2017/06/v1/asset/MinSu@0.0.1/eb6628280d7565aa9d1741839522baf26ec15202.png) center center no-repeat;
		background-size: cover;
		height: 180px;
		width: 100%;
	}
	
	.ej-css-14 .house-title {
		color: #353535;
		font-size: 18px;
		margin-top: 10px;
		margin-left: 4px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.ej-css-14 .house-des {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		margin-left: 4px;
		margin-top: 5px;
	}
	
	.ej-css-14 .info-container {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		margin-left: 4px;
		margin-top: 2px;
	}
	
	.ej-css-14 .house-img {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		flex-direction: column;
		height: 180px;
		width: 100%;
		opacity: 1 !important;
		position: relative;
	}
	
	.ej-css-14 .market-tags-container {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		position: absolute;
		bottom: 5px;
		left: 5px;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		flex-direction: row;
	}
	
	.ej-css-14 .discount-icon {
		position: absolute;
		top: 0;
		right: 5px;
		width: 37px;
		height: 45px;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		flex-direction: column;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		padding-top: 2px;
		background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABaCAYAAAAfBsDqAAAAAXNSR…gyfI+JRXt7++1JJ/zvrw16vRshpI5H7G/Y47CWbpb3/A20gLkuM+mCXAAAAABJRU5ErkJggg==) center center no-repeat;
		background-size: cover;
	}
	
	.ej-css-14 .market-tag {
		font-size: 0.625rem;
		color: #fff;
		padding: 0.5px 2px;
		margin-right: 4px;
		border-radius: 3px;
		background-image: -webkit-linear-gradient(left, #FFB422 0%, #F76B1C 100%);
		background-image: -webkit-linear-gradient(left, #FFB422 0%, #F76B1C 100%);
		background-image: linear-gradient(90deg, #FFB422 0%, #F76B1C 100%);
	}
	
	.ej-css-14 .discount-icon span {
		color: #fff;
		font-size: 12px;
	}
	
	.ej-css-14 .house-des {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		margin-left: 4px;
		margin-top: 5px;
	}
	
	.ej-css-14 .info-container {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
		margin-left: 4px;
		margin-top: 2px;
	}
	
	.ej-css-14 .house-des-left {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	
	.ej-css-14 .li-cut {
		padding: 0.5px 1px;
		border-radius: 2px;
		color: #E94E4A;
		border: 1px solid #E94E4A;
		font-size: 0.625rem;
	}
	
	.ej-css-14 .point-container {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		font-size: 13px;
		color: #49f;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		margin-right: 8px;
	}
	
	.ej-css-14 .house-desc {
		color: #666;
		font-size: 12px;
		border-left: 1px solid #e0e0e0;
		padding-left: 8px;
		line-height: 12px;
	}
	
	.ej-css-14 .info-con-left {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	
	.ej-css-14 .price-container {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		flex-direction: row;
		font-size: 12px;
		color: #E94E4A;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		font-weight: bold;
	}
	
	.ej-css-14 .add-icon {
		width: 11px;
		height: 12.57px;
		background: url(//m.elongstatic.com/static/webapp/eroom/minsu/online/2017/06/v1/asset/MinSu@0.0.1/9e2250d9405590e745f9664d2b66d98632d6bdad.png) no-repeat center center;
		background-size: cover;
		display: block;
		margin-right: 4px;
	}
	
	.ej-css-14 .distance-desc {
		font-size: 12px;
		color: #888;
		margin-right: 5px;
	}
	
	.ej-css-14 .distance-desc {
		font-size: 12px;
		color: #888;
		margin-right: 5px;
	}
	
	.ej-css-14 .house-area {
		height: 18px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #888;
		font-size: 12px;
		min-width: 70px;
		max-width: 140px;
	}
	
	i,
	em {
		font-style: normal;
	}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>