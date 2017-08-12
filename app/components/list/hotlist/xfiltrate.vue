//筛选侧边栏
<template>
	<div :class="['list-pop-fliter','shaixuan','plugin-inited','page-plugin',{'page-on-center':tit},{'page-on-right':!tit},{'plugin-show':tit}]">
		<header @click="iconbackclick()" class="bar bar-nav flight-order-head">
			<a class="bbbb icon icon-left-nav pull-left "></a>
			<div class="title">筛选</div>
		</header>
		<div class="page-cont">
			<section class="list-fliter-box">
				<div class="filter-wrap">
					<div class="filter-tit page-content" style="">
						<ul>
							<li data-id="n167033088745261" class="on tjclick">品牌</li>
							<li data-id="n10841369801206587" class="tjclick">设施服务</li>
							<li data-id="n1961215974699955" class="tjclick">主题</li>
						</ul>
					</div>
					<div style="background: white;" class="filter-con page-content">
						<ul style="background: white;" class="filter-list-subway-l page-content">
							<!--经济-->
							<li data-id="n167033088745261_7468709921099261" data-type="n167033088745261">经济（可多选）
								<p>
									<span v-for="n in brand[0]?brand[0].subFilterInfoEntities:[]" :data-id="n.sn" :data-type="n.typeId">{{n.nameCn}}</span>

								</p>
							</li>
							<!--舒适-->
							<li data-id="n167033088745261_1355182931135700" data-type="n167033088745261">舒适（可多选）
								<p>
									<span v-for="n in brand[1]?brand[1].subFilterInfoEntities:[]" :data-id="n.sn" :data-type="n.typeId">{{n.nameCn}}</span>
								</p>
							</li>
							<!--高档-->
							<li data-id="n167033088745261_12959604081339591" data-type="n167033088745261">高端（可多选）
								<p>
									<span v-for="n in brand[2]?brand[2].subFilterInfoEntities:[]" :data-id="n.sn" :data-type="n.typeId">{{n.nameCn}}</span>
								</p>
							</li>
							<!--豪华-->
							<li data-id="n167033088745261_6678567131207544" data-type="n167033088745261">豪华（可多选）
								<p>
									<span v-for="n in brand[3]?brand[3].subFilterInfoEntities:[]" :data-id="n.sn" :data-type="n.typeId">{{n.nameCn}}</span>
								</p>
							</li>
						</ul>
						<ul style="background: white;display: none;" class="filter-list-subway-l page-content">
							<li>酒店设施服务（可多选）
								<p>
									<span v-for="n in facilityService" :data-id="n.sn" :data-type="n.typeId">{{n.nameCn}}</span>

								</p>
							</li>
							
						</ul>
						<ul style="background: white;display: none;" class="filter-list-subway-l page-content">
							<li>（可多选）
								<p>
									<span v-for="n in hotelTheme" :data-id="n.sn" :data-type="n.typeId">{{n.nameCn}}</span>
								</p>
							</li>
						</ul>
						<ul class="filter-list-subway-r filter-list-check page-content"></ul>
					</div>
					<div class="bot-btn bar">
						<ul>
							<li class="tjclick" id="filter-reset">重置</li>
							<li @click="filtersubmitclick()" class="on tjclick" id="filter-submit">确定</li>
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
				//用于传递hotelbrandids参数去main.js
				hotelbrandids:[],
				//用于传递facilityids参数去main.js
				facilityids:[],
				//用于传递themeids参数去main.js
				themeids:[],
			}
		},
		methods: {
			//点击header返回
			iconbackclick: function() {
				this.$store.state.tit = false;
				$('.page-list').removeClass('page-list-content')
				$('.page-on-center').removeClass('fixed')
			},
			//点击确定返回
			filtersubmitclick: function() {
				this.$store.state.tit = false;
				$('.page-list').removeClass('page-list-content')
				$('.page-on-center').removeClass('fixed')
				
				//触发list筛选函数indexToList()
//				记得清0
				scope.trueListParams.pageindex = 0
				scope.scroll = false
				this.$store.dispatch("indexToList")
			},
			//发送请求获取数据
//			request: function() {
//				var self = this
//				this.$ajax({
//					url: scope.base + "/hotel/api/getlistfilter",
//					params: {
//						cityid:2001
//					}
//				}).then(function(res) {
//					console.log(res)
//					//转码成中文，替换转换失败的符号
//					var douhaoReg = /%2C/g
//					var maohaoReg = /%3A/g
//					var xieganReg = /%2/g
//					var result = res.data.filterList
//					result = decodeURI(result).replace(douhaoReg, ",")
//					result = result.replace(maohaoReg, ":")
//					result = result.replace(xieganReg, "/")						
//					this.filterList = JSON.parse(result)
//					this.brand = this.filterList[0].subFilterInfoEntities
//					this.facilityService = this.filterList[2].subFilterInfoEntities
//					this.hotelTheme = this.filterList[3].subFilterInfoEntities
////					console.log(this.filterList)
////					console.log(this.facilityService, this.hotelTheme)
//					
//					//把其他数据也处理了存在state中
//					var areaList = res.data.areaList
//					areaList = decodeURI(areaList).replace(douhaoReg, ",")
//					areaList = areaList.replace(maohaoReg, ":")
//					areaList = areaList.replace(xieganReg, "/")
//					areaList = JSON.parse(areaList)
//					//area主要筛选信息
//					scope.areaList = areaList
//					scope.areaList.forEach(function(items,i){
//						//地铁信息
//						if((items?items.sn:"")=='n137425165725594602'){
//							console.log(items.subFilterInfoEntities)
//							scope.areaThreeSubway = items.subFilterInfoEntities
//							//机场信息
//						}else if((items?items.sn:"")=='n8589076672078144546'){
//							console.log(items.subFilterInfoEntities)
//							scope.areaThreeFly = items.subFilterInfoEntities
//						}
//						
//					})
//					console.log(scope.areaList)
//					//jq绑定点击事件高亮效果，点击时改变状态管理中心中对应的值
//					this.$nextTick(function() {
//						var index;
//						$('li.tjclick').on('click', function() {
//							var index = $(this).index();
//							$(this).addClass('on').siblings().removeClass('on')
//							$(this).parent().parent().next().children().eq(index).show().siblings().hide()
//						})
//
//						//点击高亮
//						$('.filter-con').find('span').on('click', function() {
//							//点击传递参数
////							console.log($(this).attr("data-type"))
//							if($(this).attr("data-type")=="3"){
//								
//								//点击筛选栏的hotelbrandids并改变state中搜索的参数
//								//判断该id是否已存在,存在则删除，不存在则添加
//								var one = $.inArray($(this).attr("data-id"),self.hotelbrandids)
//								if(one<0){
//									self.hotelbrandids.push($(this).attr("data-id"))									
//								}else{
//									self.hotelbrandids.splice(one,1)
//								}
//								console.log(self.hotelbrandids)
//								scope.trueListParams.hotelbrandids = self.hotelbrandids.join(',')
//								
//							}else if($(this).attr("data-type")=="1011"){
//								
//								//点击筛选栏的facilityids改变state中搜索的参数
//								//判断该id是否已存在,存在则删除，不存在则添加
//								var two = $.inArray($(this).attr("data-id"),self.facilityids)
//								if(two<0){
//									self.facilityids.push($(this).attr("data-id"))									
//								}else{
//									self.facilityids.splice(two,1)
//								}
//								
//								console.log(self.facilityids)
//								scope.trueListParams.facilityids = self.facilityids.join(',')
//								
//							}else if($(this).attr("data-type")=="1012"){
//								
//								//点击筛选栏的themeids改变state中搜索的参数
//								//判断该id是否已存在,存在则删除，不存在则添加
//								var three = $.inArray($(this).attr("data-id"),self.themeids)
//								if(three<0){
//									self.themeids.push($(this).attr("data-id"))							
//								}else{
//									self.themeids.splice(three,1)
//								}
//								
//								console.log(self.themeids)
//								scope.trueListParams.themeids = self.themeids.join(',')
//							}
//							
//							
//							var index = $(this).parent().parent().parent().index()
//							if($(this).hasClass('geton')) {
//								$(this).removeClass('geton')
//								if($(this).parent().children().hasClass('geton') || $(this).parent().parent().siblings().children().find('span').hasClass('geton')) {
//									$(this).parent().parent().parent().parent().prev().children().children().eq(index).addClass('have')
//								} else {
//									$(this).parent().parent().parent().parent().prev().children().children().eq(index).removeClass('have')
//								}
//							} else {
//								$(this).addClass('geton')
//								$(this).parent().parent().parent().parent().prev().children().children().eq(index).addClass('have')
//							}
//						})
//					})
//
//				}.bind(this))
//			},
		},
		computed: {
			tit: function() {
				//侧边栏显示隐藏
				return this.$store.state.tit
			},
			brand(){
				return scope.filterList.brand
			},
			facilityService(){
				return scope.filterList.facilityService
			},
			hotelTheme(){
				return scope.filterList.hotelTheme
			},
		},
		mounted: function() {
			//点击切换
//			this.request()

			this.$store.dispatch("request")
			

		}
	}
</script>

<style scoped>
.bbbb{
   	color: #444;
 }

</style>