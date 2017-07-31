<template>
	<div class="type">
		<ul>
			<!--房间类型-->
			<li class="rooms" v-for="(items,index) in roomType">
				<div class="wrap " @click="showDetail($event)">
					<div class="left   tjclick">
						<div class="pic tjclick rpDetail"> <img :src="items.coverImageUrl"> </div>
						<div class="picroom-info">
							<div class="room">{{items.roomInfoName}}</div>
							<div class="room-info"> <span>{{items.area}}</span> <span>{{items.bed}}</span> <span>  无窗  </span> </div>
							<div class="icon icon-hs">
								<!--tag标签-->
								<span v-for="tags in items.tags" class="clock_hb" :style="{color:tags.color,borderColor:tags.color}"> {{tags.name}} </span>
							</div>
						</div>
					</div>
					<div class="right">
						<div class="price"><span>￥</span><span class="num">{{items.minAveragePriceSubTotal}}</span>起</div>
					</div>
					<div class="de-btn"> <i></i> </div>
					<div class="rigit_activebg tjclick"></div>
				</div>
				<div class="info-list">
					<ul>
						<!--具体房间详情-->
						<li @click="showBuy(rpList,items.roomInfoName)" class="roomdetail  " v-for="rpList in items.rpList">
							<div class="left tjclick">
								<div class="bra clearfix">{{rpList.productName}}</div>
								<div v-if="rpList.productSubName" class="sale_txt">
									<span>{{rpList.productSubName}}</span>
								</div>
								<div class="xstm">
									<span class="suppliername">{{rpList.supplierName}}</span>
									<span class="suppliername"> {{rpList.cancelTag}} </span>
									<span v-if="rpList.minStocks!=-1" class="roomslv">仅剩{{rpList.minStocks}}间</span>
								</div>
								<div v-if="rpList.tags.length!=0" class="act">
									<!--具体房间tag-->
									<span v-for="taggg in rpList.tags" class="tag" :style="{color:taggg.color,borderColor:taggg.color}"> {{taggg.name}} </span>
								</div>
							</div>
							<div class="value">
								<div class="price">￥<span>{{rpList.averagePriceSubTotal}}</span></div>
								<div v-if="rpList.couponVal" class="return">{{rpList.averagePrice}}返{{rpList.couponVal}}<br></div>
							</div>
							<div class="book tjclick">
								<div class="btn2 btn2_center" app-url="//mhuodong.elong.com/C/A.htm?b=true&amp;f=h5_5zxz&amp;r=0101,2017-07-28,2017-07-29,90893577"><span>订</span>
									<p class="btn2_yf">{{rpList.appPromotionFlag?'APP':'预付'}}</p>
								</div>
							</div>
						</li>

						<li v-show="items.rpList.length>3" @click="showMore($event)" class="more">
							<a>查看更多报价<i class="icon-left icon-bottom"></i></a>
						</li>
						<li class="roomdetail hide">
							<div class="left tjclick" data-tj="{&quot;cspot&quot;:&quot;rateplandetail&quot;}">
								<div class="bra clearfix"> 不含早 </div>
								<div class="sale_txt"><span>含交通优惠</span></div>
								<div class="xstm"> <span class="suppliername">艺龙</span> <span class="suppliername"> 付费取消 </span> </div>
								<div class="act"> <span class="tag" style="color:#4499ff;border: 1px solid #4499ff;"> 促销 </span> <span class="tag" style="color:#4499ff;border: 1px solid #4499ff;"> 礼包 </span> </div>
							</div>
							<div class="value">
								<div class="price">￥<span>130</span></div>
							</div>
							<div class="book tjclick">
								<div class="btn3 btn2_center">满</div>
							</div>
						</li>
						<li class="roomdetail hide ">
							<div class="left tjclick">
								<div class="bra clearfix">含双早</div>
								<!---->
								<div class="xstm"><span class="suppliername">住哪</span> <span class="suppliername"> 不可取消 </span></div>
								<!---->
							</div>
							<div class="value">
								<div class="price">￥<span>273</span></div>
								<!---->
							</div>
							<div class="book tjclick">
								<div app-url="//mhuodong.elong.com/C/A.htm?b=true&amp;f=h5_5zxz&amp;r=0101,2017-07-28,2017-07-29,90893577" class="btn2 btn2_center"><span>订</span>
									<p class="btn2_yf">预付</p>
								</div>
							</div>
						</li>
						<li class="roomdetail hide">
							<div class="left tjclick">
								<div class="bra clearfix"> 不含早 </div>
								<div class="sale_txt"><span>含交通优惠</span></div>
								<div class="xstm"> <span class="suppliername">艺龙</span> <span class="f_c49f"> 免费取消 </span> </div>
								<div class="act"> <span class="tag" style="color:#4499ff;border: 1px solid #4499ff;"> 促销 </span> <span class="tag" style="color:#4499ff;border: 1px solid #4499ff;"> 礼包 </span> </div>
							</div>
							<div class="value">
								<div class="price">￥<span>148</span></div>
							</div>
							<div class="book tjclick">
								<div class="btn3 btn2_center">满</div>
							</div>
						</li>
					</ul>
				</div>

			</li>

		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				roomType: '',

			}
		},
		methods: {
			//点击显示房间类型
			showDetail($event) {
				$($event.target).closest('li').toggleClass("on")
				
			},
			//点击加载更多房间类型
			showMore($event) {
				$($event.target).closest('li').css('display', 'none')
				$($event.target).closest('li').nextAll('li').removeClass("hide")

			},
			showBuy(rpList,roomInfoName){
				scope.showBuy = true
				scope.Mask = true
				
				scope.buyContent = rpList
				scope.roomInfoName = roomInfoName
				
			}
		},

		mounted() {
			//进入页面，请求房间数据
			console.log("roomType")
			this.$ajax({
				url: "./json/roomType.json"
			}).then(function(res) {
//				console.log(res)
				var arrFive = [];
				for(var i = 1; i <= 7; i++) {
					var randomNum = com.randomNum(0, res.data.length - 1)
					arrFive.push(res.data[randomNum])
				}
//				console.log(arrFive)
				this.roomType = arrFive;
				
			}.bind(this))
		},
	}
</script>

<style>

</style>