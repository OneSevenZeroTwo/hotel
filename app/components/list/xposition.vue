区域位置//
<template>
	<div :class="['list-pop-fliter','list-pop-area','plugin-inited','page-plugin',{'plugin-show':areabtn},{'page-on-right':!areabtn},{'page-on-center':areabtn}]">
		<header @click="iconback()" class="bar bar-nav flight-order-head">
			<a class="icon pull-left icon-back"></a>
			<div class="title">区域位置</div>
		</header>
		<div class="page-cont">
			<section class="list-fliter-box">
				<div class="filter-wrap">
					<div class="filter-tit page-content" style="">
						<ul>
							<li data-id="n668512291742670" class="on">商圈</li>
							<li data-id="n174998673838874021" class="">行政区</li>
							<li data-id="n137425165725594602" class="">地铁站</li>
							<li data-id="n8589076672078144546" class="">机场/车站</li>
							<li data-id="n19614632471045534478" class="">演出场馆</li>
							<li data-id="n2107756300888480399" class="">市内景点</li>
							<li data-id="n436688864776557" class="">大学</li>
							<li data-id="n1587052200741629" class="">医院</li>
							<li data-id="n168792913890589792" class="">市外景点</li>
						</ul>
					</div>
					<div class="filter-con page-content">
						<ul class="filter-list-radio page-content">
							<li class="on" data-id="n668512291742670_976586008697853" data-typeid="5">不限<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755228" data-typeid="5" class="">天安门/王府井商业区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755236" data-typeid="5" class="">鸟巢/国家会议中心<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100756968" data-typeid="5" class="">前门/大栅栏<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755263" data-typeid="5" class="">北京展览馆/首都体育馆<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755264" data-typeid="5" class="">中关村/人民大学<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755232" data-typeid="5" class="">国贸CBD<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755225" data-typeid="5" class="">西单商业区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755252" data-typeid="5" class="">大望路<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755269" data-typeid="5" class="">北大/清华/学院路<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100757511" data-typeid="5" class="">首都机场/新国展<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755230" data-typeid="5" class="">北京站地区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755266" data-typeid="5" class="">五棵松体育馆<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755234" data-typeid="5" class="">东直门/簋街/雍和宫<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755229" data-typeid="5" class="">建国门<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100757506" data-typeid="5" class="">北京南站/永定门<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755253" data-typeid="5" class="">西客站<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755244" data-typeid="5" class="">工体/三里屯<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755227" data-typeid="5" class="">金融街/复兴门<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755267" data-typeid="5" class="">航天桥/首都师范大学<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755226" data-typeid="5" class="">鼓楼/后海/新街口<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755248" data-typeid="5" class="">双井/劲松<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755265" data-typeid="5" class="">大钟寺/交通大学<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755237" data-typeid="5" class="">老国展<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100757507" data-typeid="5" class="">崇文门<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100757502" data-typeid="5" class="">东四/东四十条<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755245" data-typeid="5" class="">朝阳门/秀水市场<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755255" data-typeid="5" class="">方庄<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755257" data-typeid="5" class="">六里桥长途汽车站<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755268" data-typeid="5" class="">上地工业园区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755261" data-typeid="5" class="">公主坟商圈<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100757501" data-typeid="5" class="">军博<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755251" data-typeid="5" class="">朝阳公园/团结湖<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755243" data-typeid="5" class="">朝阳北路/大悦城<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755250" data-typeid="5" class="">欢乐谷/工业大学<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755249" data-typeid="5" class="">潘家园/十里河<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100757504" data-typeid="5" class="">广安门/大观园<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755233" data-typeid="5" class="">燕莎/农展馆<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755258" data-typeid="5" class="">丽泽商务区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755247" data-typeid="5" class="">望京<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100757503" data-typeid="5" class="">酒仙桥/798艺术园区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100757508" data-typeid="5" class="">天桥<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755231" data-typeid="5" class="">地坛<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755256" data-typeid="5" class="">大红门<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755240" data-typeid="5" class="">传媒大学<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755239" data-typeid="5" class="">北苑/北京会议中心<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100757505" data-typeid="5" class="">天坛<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755281" data-typeid="5" class="">亦庄经济技术开发区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755260" data-typeid="5" class="">石景山万达广场/鲁谷<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755242" data-typeid="5" class="">四惠<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755274" data-typeid="5" class="">通州<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755259" data-typeid="5" class="">总部基地<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755241" data-typeid="5" class="">安贞<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755279" data-typeid="5" class="">房山城区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761297" data-typeid="5" class="">十渡风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755280" data-typeid="5" class="">大兴农业观光区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761541" data-typeid="5" class="">雁栖湖风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761544" data-typeid="5" class="">金海湖风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755273" data-typeid="5" class="">延庆城区/八达岭长城<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755278" data-typeid="5" class="">门头沟城区/妙峰山风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100757510" data-typeid="5" class="">八大处风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755271" data-typeid="5" class="">顺义温泉度假区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755275" data-typeid="5" class="">昌平城区/小汤山温泉度假区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100757509" data-typeid="5" class="">南宫温泉度假区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755254" data-typeid="5" class="">南苑机场<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755262" data-typeid="5" class="">香山风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100759841" data-typeid="5" class="">古北水镇景区/司马台<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100760653" data-typeid="5" class="">天通苑<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761488" data-typeid="5" class="">白桦林原始森林度假区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761489" data-typeid="5" class="">白河湾/云蒙山<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755276" data-typeid="5" class="">怀柔城区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761542" data-typeid="5" class="">红螺寺/圣泉寺风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761543" data-typeid="5" class="">青龙峡风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761550" data-typeid="5" class="">慕田峪长城风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761556" data-typeid="5" class="">喇叭沟门风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761557" data-typeid="5" class="">黄花城水长城风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761558" data-typeid="5" class="">神堂峪自然风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761551" data-typeid="5" class="">幽谷神潭风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755270" data-typeid="5" class="">密云城区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761552" data-typeid="5" class="">密云水库<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761553" data-typeid="5" class="">黑龙潭/桃源仙谷风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761554" data-typeid="5" class="">京都第一瀑风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761555" data-typeid="5" class="">清凉谷风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100755277" data-typeid="5" class="">平谷城区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761545" data-typeid="5" class="">京东大峡谷风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761546" data-typeid="5" class="">石林峡/黄松峪水库风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761547" data-typeid="5" class="">丫髻山风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761548" data-typeid="5" class="">玻璃台风景区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761549" data-typeid="5" class="">汉石桥湿地/奥运水上公园<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761559" data-typeid="5" class="">宋庄艺术区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761560" data-typeid="5" class="">马驹桥商业区<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761561" data-typeid="5" class="">通州北苑/万达广场<i class="checkbox"></i></li>
							<li data-id="n668512291742670_100761563" data-typeid="5" class="">大兴黄村<i class="checkbox"></i></li>
						</ul>
					</div>
					<div class="bot-btn bar">
						<ul>
							<li id="filter-reset">重置</li>
							<li @click="filtersubmitclick()" class="on" id="filter-submit">确定</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {

			}
		},
		methods:{
			//点击返回
			iconback:function(){
				this.$store.state.areabtn = false;
				$('.page-list').removeClass('page-list-content')
				$('.page-on-center').removeClass('fixed')
			},
			//点击确定
			filtersubmitclick:function(){
				this.$store.state.areabtn = false;
				$('.page-list').removeClass('page-list-content')
				$('.page-on-center').removeClass('fixed')
			}
		},
		computed:{
			areabtn:function(){
				return this.$store.state.areabtn
			}
		},
		mounted:function(){
			var pagecont = {
				init:function(){
					//点击切换
					$('').find('li').on('click',function(){
						$(this).addClass('on').siblings().removeClass('on')
						var index = $(this).index()
					})
				},
			}
			pagecont.init()
		}
	}
</script>