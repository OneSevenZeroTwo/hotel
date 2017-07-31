<template>
	<div :class="['list-pop-fliter','shaixuan','plugin-inited','page-plugin',{'page-on-center':tit},{'page-on-right':!tit},{'plugin-show':tit}]">
		<header class="bar bar-nav flight-order-head">
			<a @click="iconback()" class="icon pull-left icon-back" data-href="/clockhotel/search#inDate=2017-07-30"></a>
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
					<div style="background: white" class="filter-con page-content">
						<!-- 品牌 -->
						<ul v-show="leftIdx==0" class="filter-list-check" style="padding-top: 0px;">
							<li v-oning  v-for="(items,rightIdx) in listfliterresult[0].subFilterInfoEntities" :class="['rightNav',{'on':rightIdx==0},{'one':rightIdx==0}]" :data-id="items.sn" :data-type="items.typeId" data-ulIdx="0">{{items.nameCn}}<i class="checkbox"></i>
							</li>
						</ul>


						<!-- 人数 -->
						<ul v-show="leftIdx==1" class="filter-list-radio" style="padding-top: 0px;">
							<li v-oning v-for="(items,rightIdx) in listfliterresult[1].subFilterInfoEntities" class="rightNav" :data-id="items.sn" :data-type="items.typeId" data-ulIdx="1">{{items.nameCn}}<i class="checkbox"></i>
							</li>
						</ul>

						<!-- 设施 -->
						<ul v-show="leftIdx==2" class="filter-list-check" style="padding-top: 0px;">
							<li v-oning  v-for="(items,rightIdx) in listfliterresult[2].subFilterInfoEntities" :class="['rightNav',{'on':rightIdx==0},{'one':rightIdx==0}]" :data-id="items.sn" :data-type="items.typeId" data-ulIdx="2">{{items.nameCn}}<i class="checkbox"></i>
							</li>
						</ul>


						<!-- 主题-->
						<ul v-show="leftIdx==3" class="filter-list-check" style="padding-top: 0px;">
							<li v-oning  v-for="(items,rightIdx) in listfliterresult[3].subFilterInfoEntities" :class="['rightNav',{'on':rightIdx==0},{'one':rightIdx==0}]" :data-id="items.sn" :data-type="items.typeId" data-ulIdx="3">{{items.nameCn}}<i class="checkbox"></i>
							</li>
						</ul>

						<!-- "支付方式" -->
						<ul v-show="leftIdx==4" class="filter-list-check" style="padding-top: 0px;">
							<li v-oning  v-for="(items,rightIdx) in listfliterresult[4].subFilterInfoEntities" :class="['rightNav',{'on':rightIdx==0},{'one':rightIdx==0}]" :data-id="items.sn" :data-type="items.typeId" data-ulIdx="4">{{items.nameCn}}<i class="checkbox"></i>
							</li>
						</ul>
	
						<!-- "促销方式" -->
						<ul v-show="leftIdx==5" class="filter-list-check" style="padding-top: 0px;">
							<li v-oning  v-for="(items,rightIdx) in listfliterresult[5].subFilterInfoEntities" :class="['rightNav',{'on':rightIdx==0},{'one':rightIdx==0}]" :data-id="items.sn" :data-type="items.typeId" data-ulIdx="5">{{items.nameCn}}<i class="checkbox"></i>
							</li>
						</ul>
					</div>
					<div class="bot-btn bar">
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
		data:function(){
			return {
				listfliterresult:[{subFilterInfoEntities:""},{subFilterInfoEntities:""},{subFilterInfoEntities:""},{subFilterInfoEntities:""},{subFilterInfoEntities:""},{subFilterInfoEntities:""}],
				leftIdx:0,
				
			}
		},
		methods:{
			iconback:function(){
				this.$store.state.tit = false
				// console.log(666)
			},
			//获取筛选数据
			listfliter:function(){
				this.$ajax({
					url:"http://localhost:3000/listFilter",
					params:{
						cityId:2001
					}
				}).then(function(res){
					console.log(res)
					console.log(res.data.FilterList)
					this.listfliterresult = res.data.FilterList
				}.bind(this))
			},


			// 点击筛选切换
			filterList:function(index){
				this.leftIdx=index
				// console.log(this.leftIdx)
			}




		},
		computed:{
			tit:function(){
				return this.$store.state.tit
			},
		},
		mounted:function(){
			this.listfliter()
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
	
		directives:{
			// 右边ul点击高亮
			oning:{
				bind(ele){					
					$(ele).click(function(){
						$(ele).toggleClass("on")

						var idx = $(ele).attr('data-ulIdx')
						// console.log(idx,$(".leftNav"))
						// if(idx==0){
						// 	 $(ele).siblings().removeClass("on")
						// }
						var ischecking =false
						$.each($(ele).parent().children('li'),function(i,items){
							if(i==0){
								return true
							}
							if($(items).is('.on')){								
								$(".one").removeClass('on')
								ischecking = true
							}
						})
						if(ischecking){
							$(".leftNav").eq(idx).addClass("have")
						}else{
							$(".leftNav").eq(idx).removeClass("on have")
						}



					})											
				}
			},
			lefting:{
				bind(ele){			
					$(ele).click(function(){						
						$(this).addClass("on").siblings().removeClass('on')
					})											
				}
			}
		}
	}
</script>