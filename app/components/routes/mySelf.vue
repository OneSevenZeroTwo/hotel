<template>
	<div class="pages">
		<div class="page page-on-center" data-blend="layer" data-blend-id="index" data-url="/my/account/index/" id="uniq22" data-title="个人中心">
			<header class="bar bar-nav train-order-head none_backg">
				<a class="icon icon-left-nav pull-left" data-rel="" href=""></a>
				<h1 class="title">个人中心</h1>
			</header>
			<div class="page-content myelong">
				<div id="focus_wx" class="turnid toptext tjclick" data-tj="{'cspot':'followingwechat'}" style="display: none;"><span>关注"艺龙旅行"服务号,获得最新订单动态。</span>
					<a href="https://d.elong.cn/a/0906redirect"><i>点此关注</i></a>
				</div>
				<!--会员等级-->
				<div class="level">
					<div class="info tjclick" data-tj="{&quot;cspot&quot;:&quot;modifyinformation&quot;}">
						<span class="img girls"></span>
						<p><i class="v1"></i>普通会员</p>
					</div>
					<div class="name">13172386158</div>
				</div>
				<div style="display:none;" class="turnid tjclick" data-tj="{&quot;cspot&quot;:&quot;combiningaccount&quot;}" id="mergeinfo" mergeresult=""></div>
				<!--全部订单-->
				<div class="all-order">
					<h2><i class="order"></i>全部订单<i class="cor icon-left" style="right:12px;position: absolute;color: #aaa;margin-top:2px;"></i></h2>
				</div>
				<!--我的钱包-->
				<div class="my-wallet">
					<h2><i class="wallet tjclick" data-tj="{&quot;cspot&quot;:&quot;wallet&quot;}"></i>我的钱包<i class="cor icon-left"></i></h2>
					<div class="price">
						<dl class="mycash tjclick" data-tj="{&quot;cspot&quot;:&quot;cash&quot;}">
							<dd><span>0</span>元</dd>
							<dt>现金</dt>
						</dl>
						<dl class="hongbao tjclick" data-tj="{&quot;cspot&quot;:&quot;redpacket&quot;}">
							<dd><span>0</span>个</dd>
							<dt>红包</dt>
						</dl>
						<dl class="giftcard tjclick" data-tj="{&quot;cspot&quot;:&quot;giftcard&quot;}">
							<dd><span>0</span>元</dd>
							<dt>礼品卡</dt>
						</dl>
						<dl class="jifen tjclick" data-tj="{&quot;cspot&quot;:&quot;point&quot;}">
							<dd><span>0</span>分</dd>
							<dt>积分</dt>
						</dl>
					</div>
				</div>
				<!--信息list-->
				<ul class="sub-list">
					<li id="member" class="tjclick" data-tj="{&quot;cspot&quot;:&quot;memberclub&quot;}"><i class="member"></i>会员俱乐部<span>想升级点这里</span><i class="cor icon-left"></i></li>
					<li id="wxactivity" class="tjclick" data-tj="{&quot;cspot&quot;:&quot;elongactivty_entry_wxqb&quot;}">
						<a><i class="licash"></i><em></em><span></span><i class="cor icon-left"></i></a>
					</li>
					<li id="comment" class="tjclick" data-tj="{&quot;cspot&quot;:&quot;comment&quot;}"><i class="comment1s"></i>我的点评<em></em><span></span><i class="cor icon-left"></i></li>
					<li id="collect" class="tjclick" data-tj="{&quot;cspot&quot;:&quot;collection&quot;}"><i class="collect"></i>我的收藏<i class="cor icon-left"></i></li>
					<li id="refund" class="tjclick" data-tj="{&quot;cspot&quot;:&quot;refund&quot;}"><i class="recash"></i>我的退款<i class="cor icon-left"></i></li>
					<li id="info" class="tjclick" data-tj="{&quot;cspot&quot;:&quot;commoninformation&quot;}"><i class="info"></i>常用信息<span>旅客/地址</span><i class="cor icon-left"></i></li>
				</ul>
				<!--意见反馈-->
				<ul class="sub-list">
					<li class="my-more tjclick" data-tj="{&quot;cspot&quot;:&quot;feedback&quot;}"><i class="i-more"></i>意见反馈<i class="cor icon-left"></i></li>
				</ul>
			</div>
			<input style="display:none;" class="bindMobile" value="">
			<input style="display:none;" class="isWeixin" value="1">
			<input style="display:none;" class="isQQ" value="1">
			<input style="display:none;" class="date" value="2017-07">
			<input style="display:none;" class="errorCode" value="">
			<input style="display:none;" class="errorMessage" value="">
			<input style="display:none;" class="loginUrl" value="https://msecure.elong.com/login/?RedirectUrl=https%3A%2F%2Fm.elong.com%2Fmy%2Faccount%2Findex">
			<input style="display:none;" class="showAllOrder" value="">
			<!-- layout after -->
		</div>
	</div>
</template>

<script>
	import xback from "../xback.vue"
	export default {
		components: {
			xback
		}
	}
</script>

<style>

</style>