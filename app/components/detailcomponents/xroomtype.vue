<template>
	<div class="type">
		<ul>

			<li class="rooms" v-for="(items,index) in roomType">
				<div class="wrap ">
					<div class="left   tjclick" >
						<div class="pic tjclick rpDetail"> <img :src="items.coverImageUrl"> </div>
						<div class="picroom-info">
							<div class="room">{{items.roomInfoName}}</div>
							<div class="room-info"> <span>{{items.area}}</span> <span>{{items.bed}}</span> <span>  无窗  </span> </div>
							<div class="icon icon-hs" > 
								<span v-for="tags in items.tags" class="clock_hb" :style="{color:tags.color,borderColor:tags.color}" > {{tags.name}} </span> 
							</div>
						</div>
					</div>
					<div class="right">
						<div class="price"><span>￥</span><span class="num">70</span>起</div>
					</div>
					<div class="de-btn"> <i></i> </div>
					<div class="rigit_activebg tjclick" data-tj="{&quot;cspot&quot;:&quot;rateplanlist1&quot;}"></div>
				</div>
				<div class="info-list">
					<ul>
						<li class="roomdetail  ">
							<div class="left tjclick" data-tj="{&quot;cspot&quot;:&quot;rateplandetail&quot;}">
								<div class="bra clearfix"> 不含早 </div>
								<div class="xstm"> <span class="suppliername">代理</span> <span class="suppliername"> 不可取消 </span> <span class="roomslv">仅剩4间</span> </div>
								<div class="act"> <span class="tag" style="color:#ff5555;border: 1px solid #ff5555;"> APP新客折扣 </span> </div>
							</div>
							<div class="value">
								<div class="price">￥<span>70</span></div>
								<div class="return">139返69<br></div>
							</div>
							<div class="book tjclick" data-tj="{&quot;cspot&quot;:&quot;booking&quot;}">
								<div class="btn2 btn2_center" app-url="//mhuodong.elong.com/C/A.htm?b=true&amp;f=h5_5zxz&amp;r=0101,2017-07-27,2017-07-28,90889993"><span>订</span>
									<p>APP</p>
								</div>
							</div>
						</li>
						<li class="roomdetail  ">
							<div class="left tjclick" data-tj="{&quot;cspot&quot;:&quot;rateplandetail&quot;}">
								<div class="bra clearfix"> 不含早 </div>
								<div class="xstm"> <span class="suppliername">代理</span> <span class="suppliername"> 不可取消 </span> <span class="roomslv">仅剩4间</span> </div>
								<div class="act"> </div>
							</div>
							<div class="value">
								<div class="price">￥<span>139</span></div>
							</div>
							<div class="book tjclick" data-tj="{&quot;cspot&quot;:&quot;booking&quot;}">
								<div class="btn2 btn2_center" url="https://m.elong.com/hotel/createorder/?hotelid=90889993&amp;uniqueid=90889993%3A0065%3A11179095%3Anull%3A1&amp;roomid=0065&amp;rateplanid=11179095&amp;promotionid=_&amp;ismj=0&amp;policyid=&amp;checkindate=2017-07-27&amp;checkoutdate=2017-07-28&amp;roomtype=0&amp;mroomid=0005&amp;drvtype=0"><span>订</span>
									<p class="btn2_yf">预付</p>
								</div>
							</div>
						</li>
						<li class="roomdetail  ">
							<div class="left tjclick" data-tj="{&quot;cspot&quot;:&quot;rateplandetail&quot;}">
								<div class="bra clearfix"> 不含早 </div>
								<div class="sale_txt"><span>含交通优惠</span></div>
								<div class="xstm"> <span class="suppliername">艺龙</span> <span class="suppliername"> 付费取消 </span> </div>
								<div class="act"> <span class="tag" style="color:#4499ff;border: 1px solid #4499ff;"> 礼包 </span> <span class="tag" style="color:#4499ff;border: 1px solid #4499ff;"> 立即确认 </span> </div>
							</div>
							<div class="value">
								<div class="price">￥<span>138</span></div>
							</div>
							<div class="book tjclick" data-tj="{&quot;cspot&quot;:&quot;booking&quot;}">
								<div class="btn2 btn2_center" url="https://m.elong.com/hotel/createorder/?hotelid=90889993&amp;uniqueid=90889993%3A0036%3A6404055%3Anull%3A1&amp;roomid=0036&amp;rateplanid=6404055&amp;promotionid=_&amp;ismj=0&amp;policyid=&amp;checkindate=2017-07-27&amp;checkoutdate=2017-07-28&amp;roomtype=0&amp;mroomid=0005&amp;drvtype=0"><span>订</span>
									<p class="btn2_yf">预付</p>
								</div>
							</div>
						</li>
						<li class="roomdetail  ">
							<div class="left tjclick" data-tj="{&quot;cspot&quot;:&quot;rateplandetail&quot;}">
								<div class="bra clearfix"> 不含早 </div>
								<div class="xstm"> <span class="suppliername">代理</span> <span class="suppliername"> 不可取消 </span> </div>
								<div class="act"> <span class="tag" style="color:#ff5555;border: 1px solid #ff5555;"> APP新客折扣 </span> </div>
							</div>
							<div class="value">
								<div class="price">￥<span>97</span></div>
								<div class="return">167返70<br></div>
							</div>
							<div class="book tjclick" data-tj="{&quot;cspot&quot;:&quot;booking&quot;}">
								<div class="btn2 btn2_center" app-url="//mhuodong.elong.com/C/A.htm?b=true&amp;f=h5_5zxz&amp;r=0101,2017-07-27,2017-07-28,90889993"><span>订</span>
									<p>APP</p>
								</div>
							</div>
						</li>
						<li class="roomdetail  ">
							<div class="left tjclick" data-tj="{&quot;cspot&quot;:&quot;rateplandetail&quot;}">
								<div class="bra clearfix"> 不含早 </div>
								<div class="sale_txt"><span>含交通优惠</span></div>
								<div class="xstm"> <span class="suppliername">艺龙</span> <span class="f_c49f"> 免费取消 </span> </div>
								<div class="act"> <span class="tag" style="color:#4499ff;border: 1px solid #4499ff;"> 礼包 </span> <span class="tag" style="color:#4499ff;border: 1px solid #4499ff;"> 立即确认 </span> </div>
							</div>
							<div class="value">
								<div class="price">￥<span>178</span></div>
							</div>
							<div class="book tjclick" data-tj="{&quot;cspot&quot;:&quot;booking&quot;}">
								<div class="btn2 btn2_center" url="https://m.elong.com/hotel/createorder/?hotelid=90889993&amp;uniqueid=90889993%3A0014%3A1436724%3Anull%3A1&amp;roomid=0014&amp;rateplanid=1436724&amp;promotionid=_&amp;ismj=0&amp;policyid=&amp;checkindate=2017-07-27&amp;checkoutdate=2017-07-28&amp;roomtype=0&amp;mroomid=0005&amp;drvtype=0"><span>订</span>
									<p>到店付</p>
								</div>
							</div>
						</li>
						<li class="roomdetail  ">
							<div class="left tjclick" data-tj="{&quot;cspot&quot;:&quot;rateplandetail&quot;}">
								<div class="bra clearfix"> 不含早 </div>
								<div class="sale_txt"><span>含交通优惠</span></div>
								<div class="xstm"> <span class="suppliername">返现嘉年华</span> <span class="suppliername"> 付费取消 </span> </div>
								<div class="act"> <span class="tag" style="color:#4499ff;border: 1px solid #4499ff;"> 礼包 </span> <span class="tag" style="color:#4499ff;border: 1px solid #4499ff;"> 立即确认 </span> </div>
							</div>
							<div class="value">
								<div class="price">￥<span>137</span></div>
								<div class="return">157返20<br></div>
							</div>
							<div class="book tjclick" data-tj="{&quot;cspot&quot;:&quot;booking&quot;}">
								<div class="btn2 btn2_center" url="https://m.elong.com/hotel/createorder/?hotelid=90889993&amp;uniqueid=90889993%3A0036%3A6404055%3A811_0_116_00%2300%3A1&amp;roomid=0036&amp;rateplanid=6404055&amp;promotionid=_1&amp;ismj=1&amp;policyid=811_0_116_00%2300_5802e928dd64e18ba7ad00eb2597d901%2616%3A12%3A08&amp;checkindate=2017-07-27&amp;checkoutdate=2017-07-28&amp;roomtype=0&amp;mroomid=0005&amp;drvtype=811"><span>订</span>
									<p class="btn2_yf">预付</p>
								</div>
							</div>
						</li>
						<li class="more">
							<a>查看更多报价<i class="icon-left icon-bottom"></i></a>
						</li>
						<li class="roomdetail no full_no hide">
							<div class="left tjclick" data-tj="{&quot;cspot&quot;:&quot;rateplandetail&quot;}">
								<div class="bra clearfix"> 不含早 </div>
								<div class="sale_txt"><span>含交通优惠</span></div>
								<div class="xstm"> <span class="suppliername">艺龙</span> <span class="suppliername"> 付费取消 </span> </div>
								<div class="act"> <span class="tag" style="color:#4499ff;border: 1px solid #4499ff;"> 促销 </span> <span class="tag" style="color:#4499ff;border: 1px solid #4499ff;"> 礼包 </span> </div>
							</div>
							<div class="value">
								<div class="price">￥<span>130</span></div>
							</div>
							<div class="book tjclick" data-tj="{&quot;cspot&quot;:&quot;booking&quot;}">
								<div class="btn3 btn2_center">满</div>
							</div>
						</li>
						<li class="roomdetail no full_no hide">
							<div class="left tjclick" data-tj="{&quot;cspot&quot;:&quot;rateplandetail&quot;}">
								<div class="bra clearfix"> 不含早 </div>
								<div class="sale_txt"><span>含交通优惠</span></div>
								<div class="xstm"> <span class="suppliername">艺龙</span> <span class="f_c49f"> 免费取消 </span> </div>
								<div class="act"> <span class="tag" style="color:#4499ff;border: 1px solid #4499ff;"> 促销 </span> <span class="tag" style="color:#4499ff;border: 1px solid #4499ff;"> 礼包 </span> </div>
							</div>
							<div class="value">
								<div class="price">￥<span>148</span></div>
							</div>
							<div class="book tjclick" data-tj="{&quot;cspot&quot;:&quot;booking&quot;}">
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
				roomType: ''
			}
		},

		mounted() {
			console.log("请求房间信息")
			this.$ajax({
				url: "./json/roomType.json"
			}).then(function(res) {
				console.log(res)
				var arrFive = [];
				for(var i = 1; i <= 7; i++) {
					var randomNum = com.randomNum(0, res.data.length - 1)
					arrFive.push(res.data[randomNum])
				}
				console.log(arrFive)
				this.roomType = arrFive;

			}.bind(this))
		},
	}
</script>

<style>

</style>