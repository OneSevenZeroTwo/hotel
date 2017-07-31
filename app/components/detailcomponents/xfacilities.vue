<template>
	<div :class="['hotel-info-fac','plugin-inited','page-plugin',{'plugin-show':showFac},{'page-on-center':showFac},{'page-on-right':!showFac}]">
		<header class="bar bar-nav flight-order-head" style="z-index: 99999">
			<a class="icon pull-left icon-back" @click="back()"></a>
			<a class="icon icon-phone pull-right" href="tel:4006661166"></a>
			<div class="title">酒店信息</div>
		</header>
		<!--adwqe-->
		<div class="page-content" style="">
			<section class="info-pop-box">
				<div class="na">
					<div class="name">广州木棉花语酒店(原金山酒店)</div>
					<div class="addr"><i></i>天河区禺东西路57号(东站地铁站H出口/近东站汽车客运站)省军区公交车站旁</div>
				</div>
				<dl class="facilities"><dt>酒店设施</dt>
					<dd><i class="icon-parking"></i>
						<p><span>免费</span>停车</p>
					</dd>
					<dd><i class="icon-wifi"></i>
						<p><span>免费</span>wifi</p>
					</dd>
					<dd class="no"><i class="icon-bra"></i>
						<p>餐厅</p>
					</dd>
					<dd class="no"><i class="icon-bui"></i>
						<p>健身房</p>
					</dd>
					<dd class="no"><i class="icon-swim"></i>
						<p>游泳池</p>
					</dd>
					<dd class="no"><i class="icon-apus"></i>
						<p>接机</p>
					</dd>
					<dd><i class="icon-meeting"></i>
						<p>会议室</p>
					</dd>
					<dd class="no-fac" style="display:none;"><i></i>
						<p>暂无设施信息</p>
					</dd>
				</dl>
				<div class="contact">联系酒店：
					<a class="tel" href="tel:020-87733018">020-87733018</a>
				</div>
				<div class="other">
					<dl><dt>开业时间</dt>
						<dd>酒店开业时间2006年05月01日</dd>
					</dl>
					<dl><dt>酒店服务</dt>
						<dd>送餐服务,会议设施,免费停车,有电梯,房间消毒,叫醒服务,行李寄存,商品部,安全消防系统,电子结账系统,大堂报纸,24小时热水,棋牌室,免费wifi,精品酒店（设计师酒店）,情侣酒店,酒店,宴会厅,入住时间,离店时间,预定须知_其他(中文),叫车服务,旅游交通图,大堂吧,公共区域闭路电视监控系统,自动擦鞋机</dd>
					</dl>
				</div>
				<div class="intro">
					<div class="tit">酒店简介</div>
					<div :class="['text','text-show',{'text-hide':showmore}]"><span>广州木棉.花语酒店按星级标准装修建造，新装修后拥有各类豪华客房110多间。房间面积38-40平方米，房间装修豪华典雅，设施设备完善，配套齐全，带有餐厅、桑拿、沐足、棋牌等是您商务休闲的理想下榻之选。交通便利，距火车东站步行10分钟，距新机场车程30分钟，距琶洲展馆车程15分钟。
酒店新近装修时间2014年10月，主楼高8层，客房总数110间（套）。
【温馨提示】4小时钟点房的使用时间为：9点-23点，详情咨询酒店。</span><i class="icon-show icon-bottom" @click="showmore=!showmore"></i></div>
				</div>
				<a @click="back()" class="btn" style="color:#49f,border-color:#49f">返回并继续预订</a>
			</section>
		</div>
	</div>

</template>

<script>
	export default {
		data(){
			return{
				showmore:false
			}
		},
		mounted() {

		},
		computed:{
			showFac(){
				return scope.showFac
			}
		},
		methods:{
			back(){
				scope.showFac=false				
			}
		}
	}
</script>

<style>

</style>