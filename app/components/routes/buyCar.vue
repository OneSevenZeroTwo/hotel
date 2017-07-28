<template>
	<div class="pages">
		<div class="page individ page-on-center" data-blend="layer" data-blend-id="createorder" data-url="/clockhotel/createorder/?hotelid=90889993&amp;roomid=0044&amp;rateplanid=7843615&amp;checkindate=2017-07-26&amp;checkoutdate=2017-07-27&amp;productid=" id="uniq22" data-title="订单填写">

			<xheader></xheader>
			<xfooterBar></xfooterBar>
			<nav class="bar record" id="record-text" style="display: none;">48小时内有202人预订该酒店</nav>
			<!--登陆开始-->
			<!--  登录结束  -->

			<div class="page-content ">

				<xorderInfo></xorderInfo>
				<article class="order-content">
					<section class="order-fill">
						<!-- 入住信息 -->
						<xoccupancy></xoccupancy>

						<!-- 联络资料 -->
						<orderContact></orderContact>

						<xreBackMoneyHelp></xreBackMoneyHelp>

						<xorderRebackMoney></xorderRebackMoney>

						<div class="invoice-elong">
							如需发票请到酒店前台咨询
						</div>
						<div class="search">
							<button id="padsubmit" class="btn btn-primary btn-block">
								提交订单		                        
							</button>
						</div>
					</section>
				</article>
			</div>
			<input type="hidden" class="createorder" name="arrivetimeearly" id="hidarriveTimeEarly" value="2017-07-26 16:00:00">
			<input type="hidden" class="createorder" name="arrivetimelate" id="hidarriveTimeLate" value="2017-07-26 19:00:00">
			<input type="hidden" class="createorder" name="stayhours" id="hidstayhours" vlaue="" value="4">

			<!--选择房间数量-->
			<xroomNum></xroomNum>
			<!--选择保留时间-->
			<xtimeNum></xtimeNum>
			<!--选择手机归属地-->
			<xtelNum></xtelNum>
			<!--遮罩-->
			<xmask></xmask>

			<!--选择到店时间-->
			<xinTime></xinTime>

			<!--填写个人联系信息-->
			<xconnection></xconnection>

			<!--填写入住者个人信息-->
			<xperson></xperson>

		</div>
		
		<xreBackMoneyDirective></xreBackMoneyDirective>
		
		<xuseHongBao></xuseHongBao>
	</div>
	</div>

</template>

<script>
	//头部
	import xheader from "../buyCarcomponents/xheader.vue"
	//房间基本信息
	import xorderInfo from "../buyCarcomponents/xorderInfo.vue"
	//房间数，保留至
	import xoccupancy from "../buyCarcomponents/xoccupancy.vue"
	//订房人，手机号
	import orderContact from "../buyCarcomponents/xorderContact.vue"
	//红包返现
	import xorderRebackMoney from "../buyCarcomponents/xorderRebackMoney.vue"
	//脚步Nav
	import xfooterBar from "../buyCarcomponents/xfooterBar.vue"
	//返现立减指南
	import xreBackMoneyHelp from "../buyCarcomponents/xreBackMoneyHelp.vue"
	//返现立减指南具体内容
	import xreBackMoneyDirective from "../buyCarcomponents/xreBackMoneyDirective.vue"
	//遮罩层
	import xmask from "../buyCarcomponents/xmask.vue"
	//选择使用那个红包
	import xuseHongBao from "../buyCarcomponents/xuseHongBao.vue"
	//选择房间数量
	import xroomNum from "../buyCarcomponents/xroomNum.vue"
	//选择保留时间
	import xtimeNum from "../buyCarcomponents/xtimeNum.vue"
	//选择手机号属地
	import xtelNum from "../buyCarcomponents/xtelNum.vue"
	//选择最晚到店时间
	import xinTime from "../buyCarcomponents/xinTime.vue"
	//填写个人联系方式
	import xconnection from "../buyCarcomponents/xconnection.vue"
	//填写入住者个人信息
	import xperson from "../buyCarcomponents/xperson.vue"
	export default {
		data() {
				return {

				}
			},
			methods: {

			},
			mounted() {
				console.log(111)
			},
			components: {
				xheader,
				xorderInfo,
				xoccupancy,
				orderContact,
				xorderRebackMoney,
				xfooterBar,
				xreBackMoneyHelp,
				xreBackMoneyDirective,
				xmask,
				xuseHongBao,
				xroomNum,
				xtimeNum,
				xtelNum,
				xinTime,
				xconnection,
				xperson,

			}
	}
</script>