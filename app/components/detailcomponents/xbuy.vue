<template>
	<div :class="['type-pop-box','roomDetailInfo','newdetailhsize','plugin-inited',{'box-active':showBuying},{'plugin-show':showBuying}]">
		<div class="head"><span><i class="icon-cross"></i></span></div>
		<div class="toptitle">
			<p><span class="htitle">{{roomInfoName}}</span><em><span class="rpName">{{buyContent.productName}}</span><span class="rpSubName" style="display: inline-block;">含交通优惠</span></em></p>
			<div class="htclose"><i @click="close()"></i></div>
		</div>
		<div class="wrap page-content more" style="">
			<div class="pic"><img src="//m.elongstatic.com/static/webapp/hotel/2015/06/v2/img/room_type_default.png" defuat-pic="true">
				<div class="swiper-lazy-preloader" style="display: none;"></div>
			</div>
			<div class="info">
				<p class="name">商务大床房(有窗)</p>
				<p class="brackfast">不含早</p>
				<p class="canceltype">付费取消</p>
			</div>
			<div class="type-list">
				<p class="faclist faclistOrigin"> 
					<span v-for="(n,idx) in buyContent.additionInfoList">
						<i :class="'detail_fac_v'+idx"></i>
						{{n.content}}
					</span>
				</p>
				<!--<p class="tip">
					<p class="clearfix "><span class="dct_tit">内宾：</span><span class="dct_txt">须持大陆身份证入住。</span></p>
				</p>-->
			</div>
			<div class="discount bookNotes">
				<div class="titletips">预订须知</div>
				<div class="tips">
					<p class="clearfix "><span class="dct_tit">预付：</span><span class="dct_txt">预订酒店后立即向艺龙在线支付房费。</span></p>
					<p class="clearfix canceltype"><span class="dct_tit">付费取消：</span><span class="dct_txt">{{buyContent.cancelMsg}}</span></p>
					<p class="clearfix "><span class="dct_tit">加床：</span><span class="dct_txt">{{buyContent.extraBedInfo}}</span></p>
				</div>
			</div>
			<div class="discount u-bt reservationBooking">
				<div class="titletips">预订专享</div>
				<div class="tags">
					<p class="clearfix " v-for="a in buyContent.tags"><span class="dct_tit" :style="{color:'#ff5555',borderColor:'#ff5555'}">{{a.name}}</span><span class="dct_txt" v-html="a.description"></span></p>
					
				</div>
			</div>
			<div class="new_box"></div>
		</div>
		<div class="bd bottom_price">
			<div class="left">
				<div class="table-cell">
					<div class="price"><span class="ce65">￥<span>{{buyContent.averagePriceSubTotal}}</span><span class="hour" style="display: none;">178</span></span>
					</div>
					<div class="back"><span class="ce65 coupon" style="display: none;"></span> <span class="ce65 hongbao" style="display: none;"></span><span class="c999 officehours" style="display: none;"></span></div>
				</div>
			</div>
			<div  class="right book tjclick" @click="book()">立即预订</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				//模拟调试id
				hotelId:90893577
			}
		},
		computed: {
			showBuying() {
				return scope.showBuy
			},
			buyContent(){
				console.log(scope.buyContent)
				//获取这个组件的数据
				return scope.buyContent
			},
			roomInfoName(){
				return scope.roomInfoName
			}
		},
		mounted(){
			console.log(this.$route)
			this.hotelId = this.$route.params.id
		},
		methods: {
			close() {
				scope.Mask = false
				scope.showBuy = false
			},
			book(){
				//传递房间名称，产品名称，开始住房时间，离开时间到购物车
				scope.orderList.roomInfoName = this.roomInfoName
				scope.orderList.productName = this.buyContent.productName
				scope.orderList.starTime = scope.hotelInformation.starTime
				scope.orderList.endTime = scope.hotelInformation.leaveTime
				//单价
				scope.orderList.price = this.buyContent.averagePriceSubTotal
				//酒店名称
				scope.orderList.hotelName = scope.hotelInformation.hotelName
				//酒店id
				scope.orderList.hotelId = this.hotelId
				location.href="#/buyCar/"+this.hotelId
			}
		},
		
	
	}
</script>

<style>
	scrollbar{
		/*隐藏滚轮*/
		display: none;
	}
</style>