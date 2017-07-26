<template>
	<div class="pages">
		<div class="page individ page-on-center" data-blend="layer" data-blend-id="createorder" data-url="/clockhotel/createorder/?hotelid=90889993&amp;roomid=0044&amp;rateplanid=7843615&amp;checkindate=2017-07-26&amp;checkoutdate=2017-07-27&amp;productid=" id="uniq22" data-title="订单填写">

			<header class="bar bar-nav">
				<a class="icon icon-left-nav pull-left icon-back" data-ref="back"></a>
				<a class="icon icon-phone pull-right" href="tel:400-666-1166"></a>
				<a class="icon icon-house pull-right" method="goHome" href="#?"></a>
				<h1 class="title">订单填写</h1>
			</header>
			<nav class="bar bar-tab">
				<div class="total">
					<div class="orderprice return">¥<span id="wborderprice">90<b style="font-size:14px;display:none;">RMB90</b></span>
						<span class="roomschip">1间/4小时</span></div>
					<div class="returnprice">
						<div class="coupontext">
							返￥5
						</div>
					</div>
				</div>
				<div id="mobilesubmit" class="next commit">
					<span style="padding-left:30%">
提交订单                    </span>
					<span class="preloader preloader-white button-loader"></span>
				</div>
			</nav>
			<nav class="bar record" id="record-text" style="display: none;">48小时内有202人预订该酒店</nav>
			<!--登陆开始-->
			<!--  登录结束  -->

			<div class="page-content ">
				<section class="order-info">
					<h1>酒店详情
				    <span>
恭喜，这是该房型<b>最优惠</b>的价格。请别错过！				    </span>
				    </h1>
					<div class="d-info">
						<div class="pic">
							<!-------------------------------------图片地址（接口）---------------------------------------------->
							<img id="hotelcoverimg" data-src="//pavo.elongstatic.com/i/Hotel70_70/0005PpTb.jpg" width="100%" height="150" src="//pavo.elongstatic.com/i/mobp750_1500/0005PpTb.jpg">
							<i class="star"><b style="width:20%"></b></i>
						</div>
						<div class="bwrap na">
							<p class="name">空客酒店AIRBUSHOTEL(广州白云机场人和店)</p>
							<p class="addr">地址：机场大道东自编138号(距新白云机场5分钟车程,24小时免费机场接送)</p>
						</div>
						<div class="bwrap date">
							<p>入住日期：2017年7月26日(周三)</p>
						</div>
						<dl class="type">
							<dt>房间类型：特惠大床房</dt>
							<dd><i class="icon-wifi"></i>免费无线</dd>
							<dd><i class="icon-apus"></i>接送机</dd>
							<dd><i class="icon-net"></i>互联网</dd>
							<!-------------------------------------酒店服务（接口）---------------------------------------------->
						</dl>
						<div class="total">
							<div class="left">房间总价：</div>
							<div class="right">
								<p class="price">¥<span id="wborderpricepad">90<b style="font-size:14px;display:none;">RMB90</b></span>
								</p>
								<div class="returnprice">
									<div class="coupontext">
										返￥5
									</div>

								</div>
							</div>
						</div>
					</div>
					<div class="p-info">
						<p class="name">空客酒店AIRBUSHOTEL(广州白云机场人和店)</p>
						<p class="type">特惠大床房
						</p>
						<p class="date">7月26日(周三)</p>
						<p class="tip">
							恭喜，这是该房型<span>最优惠</span>的价格。请别错过！ </p>
					</div>
				</section>
				<article class="order-content">
					<section class="order-fill">
						<!-- 入住信息 -->
						<div class="order-occupancy">
							<h1>入住信息
								<span>
恭喜，这是该房型<b>最优惠</b>的价格。请别错过！				    			</span>
								</h1>
							<ul>
								<li>
									<label for="room-number"></label>
									<div class="label">房间数</div>
									<div class="content list-input">
										<input type="text" readonly="readonly" class="cert-type createorder" id="room-number" name="roomcount" value="1" style="width: 30px;">
										<span><i class="icon-left"></i></span>
									</div>
								</li>

								<li class="room-big" style="display:none">
									因房量大于5间，可能无法立即确认
								</li>
								<li>
									<label for="room-reservation"></label>
									<div class="label">保留至</div>
									<div class="content list-input">
										<input type="text" readonly="readonly" class="cert-type" id="room-reservation" value="" style="width: 60px;">
										<span><i class="icon-left"></i></span>
										<p class="text_ex">您可入住3小时，最晚22:00离店</p>
									</div>
								</li>
							</ul>
						</div>

						<!-- 联络资料 -->
						<div class="order-contact">
							<h1>联系资料</h1>
							<div class="contact-person">
								<ul>
									<li>
										<label for="cusname1"></label>
										<div class="label">入住人(房间1)</div>
										<div class="content list-input">
											<input type="text" class="createorder" name="customernames" id="cusname1" placeholder="姓名，每间填1人" value="">
										</div>
									</li>
								</ul>
								<div class="add-person-button">
									<div class="person-choose">
										<div class="icon-person-choose"></div>选择入住人
									</div>
								</div>
							</div>
							<div class="contact-tel">
								<div class="tel-text">
									<span class="tel-person">联系人手机：</span>
									<div class="area-address">
										<label for="area-code"></label>
										<input type="text" readonly="readonly" id="area-code" class="area-code createorder" name="areacodeconnect" value="1" title="中国大陆+86" data-value="">
										<span><i class="icon-bottom"></i></span>
									</div>
									<input type="tel" maxlength="20" class="area-number createorder" name="connectormobile" placeholder="用于客服" id="contactormobile" value="13172386158">
								</div>
								<div class="tel-choose" style="color: rgb(220, 220, 220);">
									<div class="icon-choose">
										<div class="icon-tel-choose" style="color: rgb(220, 220, 220);"></div>选择手机号</div>
								</div>
							</div>
						</div>

						<div class="login-help">
							<a href="javascript:void(0);">返现立减指南</a>
						</div>

						<div class="order-hongbao cancels">
							<ul>
								<li>
									<div class="label">
										可领取返现
									</div>
									<div class="content list-input">
										<span class="cert-type showcouponval">￥5</span>
										<span class="choosewx"><i></i></span>
									</div>
								</li>
								<li class="selected fxselected red redpackethit">
									<div class="label">红包返现</div><span><b class="showhongbaoval no-show">未使用<span class="recommendHongBao">（最多可返￥8）</span></b>
									</span><b></b>
								</li>
							</ul>
						</div>

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
					<li>
						<div class="checkbox"></div><span>甄宝谊<span></span></span>
					</li>
				</ul>
			</div>
			<div class="add-address page-plugin page-on-right plugin-inited">
				<header class="bar bar-nav">
					<a class="icon icon-back pull-left"></a>
					<h1 class="title">返现立减指南</h1></header>
				<div class="page-content">
					<div class="info-box addguide">
						<h1>1.返现是什么？</h1>
						<p>“返现”是艺龙回馈客户的一种优惠促销方式。您在艺龙预订酒店或机票，成功消费后艺龙会将当次消费款中一定比例的金额返还到您的艺龙账户。</p>
						<h1>2.返现有什么用？</h1>
						<p>提现到自己的银行卡。</p>
						<p>使用艺龙app用返现金额直接购买预付酒店。</p>
						<h1>3.红包返现是什么？</h1>
						<p>当您拥有艺龙酒店红包且此产品可以使用红包返现时，需要您手动勾选页面下方的“红包返现”，系统会在您离店结账后将对应的红包金额打入您的账户。</p>
						<h1>4.什么时候把返现给我？</h1>
						<p>预订带有“返现xx”的酒店订单，离店后30天内到“个人中心”的“酒店订单”去领取返现！您领取返现（从入住日开始之后30天内可领取返现）且离店结账3个工作日后您的艺龙账户中冻结的返现金额可使用。</p>
						<h1>5.如何查询返现是否到达我的艺龙账户？</h1>
						<p>返现到账后，您会收到短信提醒，或者用电脑或手机登录艺龙官网，进入”我的账户或个人中心“页面，在您的艺龙“现金账户”中查询您的返现详情。</p>
						<h1>6.预付立减</h1>
						<p>预付立减时艺龙回馈会员的一种促销方式。当您预订预付产品时，如有立减，系统会自动将相应的立减金额从您订单总价中减去。</p>
						<h1>7.红包立减</h1>
						<p>当您拥有艺龙酒店红包且此预付产品可以使用红包时，需要您手动勾选页面下方的“红包立减”，系统就会自动将相应的立减金额从您订单总价中减去。</p>
						<h1>8.特别提醒：</h1>
						<p>只有登录的用户才能获得返现或者享受立减。</p>
					</div>
				</div>
			</div>
			<div class="plugin-inited page-plugin">
				<div class="page-content usehb">
					<section>
						<div class="hb_expl">
							<p><span class="unhb" data-incomeid=""><i class="chkbox on"><em></em></i>暂不使用红包</span>
								<a href="javascript:void(0)" class="hbsrc"><i></i>使用说明</a>
							</p>
						</div>
						<div class="hb_container"></div>
					</section>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import xheader from "../buyCarcomponents/xheader.vue"
	export default {
		data() {
			return {

			}
		},
		mounted() {
			console.log(111)
		},
		components: {
			xheader
		}
	}
</script>