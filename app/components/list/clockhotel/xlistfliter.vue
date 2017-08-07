<template>
	<div :class="['list-pop-fliter','shaixuan','plugin-inited','page-plugin',{'page-on-center':tit},{'page-on-right':!tit},{'plugin-show':tit}]">
		<header class="bar bar-nav flight-order-head">
			<a @click="iconback()" class="icon pull-left" data-href="/clockhotel/search#inDate=2017-07-30"></a>
			<div class="title">筛选</div>
		</header>
		<div class="page-cont">
			<section class="list-fliter-box" style="padding-top: 0px;">
				<div class="condition bar">
					<ul></ul>
				</div>
				<div class="filter-wrap">
					<!-- 左边filter -->
					<div class="filter-tit page-content" style="padding-top: 44px;">
						<ul>
							<li v-lefting @click="filterList(leftIdx)" v-for="(n,leftIdx) in listfliterresult" :data-id="n.sn" :class="['leftNav',{'on':leftIdx==0}]">{{n.nameCn}}</li>

						</ul>
					</div>
					<!-- 有边filter -->
					<div style="background: white;overflow: auto !important;" class="filter-con page-content">
						<!-- 品牌 -->
						<ul v-show="leftIdx==0" class="filter-list-check" style="padding-top: 0px;">
							<li v-oning v-for="(items,rightIdx) in listfliterresult[0].subFilterInfoEntities" :class="['rightNav',{'on':rightIdx==0},{'one':rightIdx==0}]" :data-id="items.sn" :data-type="items.typeId" data-ulIdx="0">{{items.nameCn}}<i class="checkbox"></i>
							</li>
						</ul>

						<!-- 人数 -->
						<ul v-show="leftIdx==1" class="filter-list-radio" style="padding-top: 0px;">
							<li v-oning v-for="(items,rightIdx) in listfliterresult[1].subFilterInfoEntities" class="rightNav" :data-id="items.sn" :data-type="items.typeId" data-ulIdx="1">{{items.nameCn}}<i class="checkbox"></i>
							</li>
						</ul>

						<!-- 设施 -->
						<ul v-show="leftIdx==2" class="filter-list-check" style="padding-top: 0px;">
							<li v-oning v-for="(items,rightIdx) in listfliterresult[2].subFilterInfoEntities" :class="['rightNav',{'on':rightIdx==0},{'one':rightIdx==0}]" :data-id="items.sn" :data-type="items.typeId" data-ulIdx="2">{{items.nameCn}}<i class="checkbox"></i>
							</li>
						</ul>

						<!-- 主题-->
						<ul v-show="leftIdx==3" class="filter-list-check" style="padding-top: 0px;">
							<li v-oning v-for="(items,rightIdx) in listfliterresult[3].subFilterInfoEntities" :class="['rightNav',{'on':rightIdx==0},{'one':rightIdx==0}]" :data-id="items.sn" :data-type="items.typeId" data-ulIdx="3">{{items.nameCn}}<i class="checkbox"></i>
							</li>
						</ul>

						<!-- "支付方式" -->
						<ul v-show="leftIdx==4" class="filter-list-check" style="padding-top: 0px;">
							<li v-oning v-for="(items,rightIdx) in listfliterresult[4].subFilterInfoEntities" :class="['rightNav',{'on':rightIdx==0},{'one':rightIdx==0}]" :data-id="items.sn" :data-type="items.typeId" data-ulIdx="4">{{items.nameCn}}<i class="checkbox"></i>
							</li>
						</ul>

						<!-- "促销方式" -->
						<ul v-show="leftIdx==5" class="filter-list-check" style="padding-top: 0px;">
							<li v-oning v-for="(items,rightIdx) in listfliterresult[5].subFilterInfoEntities" :class="['rightNav',{'on':rightIdx==0},{'one':rightIdx==0}]" :data-id="items.sn" :data-type="items.typeId" data-ulIdx="5">{{items.nameCn}}<i class="checkbox"></i>
							</li>
						</ul>
					</div>
					<div v-botbtning class="bot-btn bar">
						<ul>
							<li id="filter-reset">重置</li>
							<li class="on" id="filter-submit">确定</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				listfliterresult: [{
					subFilterInfoEntities: ""
				}, {
					subFilterInfoEntities: ""
				}, {
					subFilterInfoEntities: ""
				}, {
					subFilterInfoEntities: ""
				}, {
					subFilterInfoEntities: ""
				}, {
					subFilterInfoEntities: ""
				}],
				leftIdx: 0,

			}
		},
		methods: {
			iconback: function() {
				this.$store.state.tit = false
				// console.log(666)
			},
			//获取筛选数据
			listfliter: function() {
				this.$ajax({
					url: "http://localhost:3000/listFilter",
					params: {
						cityId: scope.hotelInformation.cityId,
					}
				}).then(function(res) {
					this.$nextTick(function() {
						console.log($('li'))
						//				console.log("ajax之后,有$nextTick的情况", $("li"));
					})
					console.log(res)
					console.log(res.data.FilterList)
					this.listfliterresult = res.data.FilterList

				}.bind(this))
			},

			// 点击筛选切换
			filterList: function(index) {
				this.leftIdx = index
				// console.log(this.leftIdx)
			}

		},
		computed: {
			tit: function() {
				return this.$store.state.tit
			},
		},
		mounted: function() {
			this.listfliter()
			//			console.log($('.rightNav'))
			// 这是还没有生成li节点
			// var listfliter = {
			// 	init:function(){
			// 		$('.filter-tit').children().children()[0].className = 'on';
			// 		$('.filter-tit').find('li').on('click',function(){
			// 			$(this).addClass('on').siblings().removeClass('on')
			// 		})
			// 		console.log($('li.rightNav'))
			// 		$('li.rightNav').on('click',function(){
			// 			console.log(888)
			// 			if($(this).text() !== '不限'){
			// 				console.log(666)
			// 				if($(this).hasClass('on')){
			// 					$(this).removeClass('on')
			// 				}else{
			// 					$(this).addClass('on')
			// 				}
			// 			}else{
			// 				$(this).addClass('on').siblings().removeClass('on')
			// 			}
			// 		})
			// 	}
			// }
			// listfliter.init()
		},

		directives: {
			// 右边ul点击高亮
			oning: {
				bind(ele, binding) {
					$(ele).click(function() {
						$(ele).toggleClass("on")

						if($(ele).text() == '不限') {
							console.log($(ele))
							$(this).addClass('on').siblings().removeClass('on')
						} else {
							if(!$(ele).parent().hasClass('filter-list-radio')) {
								console.log(66)
								if(!$(ele).first().siblings().hasClass('on')) {
									console.log(77)
									$(ele).first().addClass('on')
								}
							} else {
								console.log(888)
								$(this).siblings().removeClass('on')
							}
						}
						// if($(ele).parent().hasClass('filter-list-radio')){
						// 	console.log(888)
						// 	$(this).siblings().removeClass('on')
						// }

						var idx = $(ele).attr('data-ulIdx')
						var ischecking = false
						$.each($(ele).parent().children('li'), function(i, items) {
							if(i == 0) {
								return true
							}
							if($(items).is('.on')) {
								$(".one").removeClass('on')
								ischecking = true
							}
						})
						if(ischecking) {
							$(".leftNav").eq(idx).addClass("have")
						} else {
							$(".leftNav").eq(idx).removeClass("on have")
						}
					})
				}
			},
			lefting: {
				bind(ele) {
					$(ele).click(function() {
						$(this).addClass("on").siblings().removeClass('on')
					})
				}
			},
			botbtning: {
				bind(ele) {
					$(ele).find('#filter-submit').on('click', function() {
						console.log(this)
						console.log(68)
						var hotelbrandids = []
						var personofroom = []
						var facilityIds = []
						var themeIds = []
						var paytype = []
						var saletype = []
						$.each($('.on'), function(idx, items) {
							switch($(items).attr("data-type")) {
								case '3':
									hotelbrandids.push($(items).attr("data-id"))
									break;
								case '11':
									personofroom.push($(items).attr("data-id"))
									break;
								case '1011':
									facilityIds.push($(items).attr("data-id"))
									break;
								case '1012':
									themeIds.push($(items).attr("data-id"))
									break;
								case '1007':
									paytype.push($(items).attr("data-id"))
									break;
								case '1013':
									saletype.push($(items).attr("data-id"))
									break;
							}
						})
						console.log(hotelbrandids.join(','))
						console.log(facilityIds.join(','))
						console.log(themeIds.join(','))
						console.log(paytype.join(','))
						console.log(personofroom.join(','))
						console.log(saletype.join(','))
						scope.listFilterParams.hotelbrandids = hotelbrandids.join(',')
						scope.listFilterParams.personofroom = personofroom.join(',')
						scope.listFilterParams.facilityIds = facilityIds.join(',')
						scope.listFilterParams.themeIds = themeIds.join(',')
						scope.listFilterParams.paytype = paytype.join(',')
						scope.listFilterParams.saletype = saletype.join(',')
						console.log($store)
						// 隐藏筛选框
						scope.tit = false
						// 筛选完重新请求数据。
						scope.listFilterParams.hotellist = []
						scope.listFilterParams.page = 0
						scope.listFilterParams.srcollResh = false
						$store.commit('automaticrequest')

					})
				}
			}
		}
	}
</script>