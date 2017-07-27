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
							如需发票请到酒店前台咨询 </div>
						<div class="search">
							<button id="padsubmit" class="btn btn-primary btn-block">
提交订单		                        </button>
						</div>
					</section>
				</article>
			</div>
			<input type="hidden" class="createorder" name="arrivetimeearly" id="hidarriveTimeEarly" value="2017-07-26 16:00:00">
			<input type="hidden" class="createorder" name="arrivetimelate" id="hidarriveTimeLate" value="2017-07-26 19:00:00">
			<input type="hidden" class="createorder" name="stayhours" id="hidstayhours" vlaue="" value="4">

			<div class="slide-selector plugin-inited">
				<header class="bar-nav">
					<div class="radio-title"><span class="title">选择房间数量</span><span class="cancel">取消</span></div>
				</header>
				<ul class="page-content">
					<li class="radio-item  selected" value="1"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio selected"></span></div><div class="radio-text">1间</div><div class="check"></div></label></li>
					<li class="radio-item " value="2"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">2间</div><div class="check"></div></label></li>
					<li class="radio-item " value="3"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">3间</div><div class="check"></div></label></li>
					<li class="radio-item " value="4"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">4间</div><div class="check"></div></label></li>
					<li class="radio-item " value="5"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">5间</div><div class="check"></div></label></li>
					<li class="radio-item " value="6"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">6间</div><div class="check"></div></label></li>
					<li class="radio-item " value="7"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">7间</div><div class="check"></div></label></li>
					<li class="radio-item " value="8"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">8间</div><div class="check"></div></label></li>
					<li class="radio-item " value="9"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">9间</div><div class="check"></div></label></li>
					<li class="radio-item " value="10"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">10间</div><div class="check"></div></label></li>
				</ul>
				<div class="arrow up left"></div>
				<div class="describe" style="display: none;"></div>
			</div>
			<div class="slide-selector plugin-inited">
				<header class="bar-nav">
					<div class="radio-title"><span class="title">最晚到店时间</span><span class="cancel">取消</span></div>
				</header>
				<ul class="page-content">
					<li class="radio-item  selected" value="2017-07-26 16:00:00,2017-07-26 19:00:00"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio selected"></span></div><div class="radio-text">19:00</div><div class="check"></div></label></li>
					<li class="radio-item " value="2017-07-26 17:00:00,2017-07-26 20:00:00"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">20:00</div><div class="check"></div></label></li>
					<li class="radio-item " value="2017-07-26 18:00:00,2017-07-26 21:00:00"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">21:00</div><div class="check"></div></label></li>
				</ul>
				<div class="arrow up left"></div>
				<div class="describe" style="display: none;"></div>
			</div>
			<div class="slide-selector plugin-inited">
				<header class="bar-nav">
					<div class="radio-title"><span class="title">选择手机号地区</span><span class="cancel">取消</span></div>
				</header>
				<ul class="page-content">
					<li class="radio-item  selected" value=""><label class="label-radio clearfix"><div class="radio-icon"><span class="radio selected"></span></div><div class="radio-text">中国大陆(+86)</div><div class="check"></div></label></li>
					<li class="radio-item " value="852"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">中国香港(+852)</div><div class="check"></div></label></li>
					<li class="radio-item " value="853"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">中国澳门(+853)</div><div class="check"></div></label></li>
					<li class="radio-item " value="886"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">中国台湾(+886)</div><div class="check"></div></label></li>
				</ul>
				<div class="arrow up left"></div>
				<div class="describe" style="display: none;"></div>
			</div>
			<div class="slide-selector plugin-inited">
				<header class="bar-nav">
					<div class="radio-title"><span class="title">选择手机号地区</span><span class="cancel">取消</span></div>
				</header>
				<ul class="page-content">
					<li class="radio-item  selected" value=""><label class="label-radio clearfix"><div class="radio-icon"><span class="radio selected"></span></div><div class="radio-text">中国大陆(+86)</div><div class="check"></div></label></li>
					<li class="radio-item " value="852"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">中国香港(+852)</div><div class="check"></div></label></li>
					<li class="radio-item " value="853"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">中国澳门(+853)</div><div class="check"></div></label></li>
					<li class="radio-item " value="886"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">中国台湾(+886)</div><div class="check"></div></label></li>
				</ul>
				<div class="arrow up left"></div>
				<div class="describe" style="display: none;"></div>
			</div>
			<div class="select-people page-plugin page-on-right plugin-inited">
				<header class="bar bar-nav">
					<a class="icon icon-back pull-left"></a>
					<h1 class="title">选择入住人</h1></header>
				<div class="page-content">
					<div class="person-box">
						<p class="tip">请选择真实入住人，以保证后续正常审核、返现。</p>
						<div class="add"><b>+</b> 新增常用入住人<span><i class="cert"></i></span></div>
						<div class="to-input"><input id="inputaddcusname" name="addcusname" type="text" placeholder="请输入入住人姓名" maxlength="30" data-validate="{&quot;rq&quot;:true,&quot;regex&quot;:&quot;^[一-龥]{2,50}|[a-zA-Z][a-zA-Z/]+[a-zA-Z]$&quot;,&quot;msg&quot;:&quot;姓名格式有误&quot;}">
							<div class="confirm">增加</div>
						</div>
						<div class="error">每个房间只需选择一位入住人</div>
						<div class="still"><span class="t2">每个房间只需选择一位入住人</span></div>
						<div class="btnwrap"><button class="cancel">取消</button><button class="submit">确定</button></div>
					</div>
				</div>
				<ul class="per-list">
					<li>
						<div class="checkbox"></div><span>张君华<span></span></span>
					</li>

				</ul>
			</div>
			<xreBackMoneyDirective></xreBackMoneyDirective>
			
			<xmask></xmask>
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
	export default {
		data() {
			return {

			}
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
			
			
			
		}
	}
</script>