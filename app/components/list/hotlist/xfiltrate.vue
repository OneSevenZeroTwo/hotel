//筛选侧边栏
<template>
	<div :class="['list-pop-fliter','shaixuan','plugin-inited','page-plugin',{'page-on-center':tit},{'page-on-right':!tit},{'plugin-show':tit}]">
		<header @click="iconbackclick()" class="bar bar-nav flight-order-head">
			<a class="icon pull-left icon-back"></a>
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
							<!--<li>酒店设施（可多选）
								<p>
									<span data-id="n10841369801206587_100000205" data-type="n10841369801206587">免费wifi</span>
									<span data-id="n10841369801206587_100000208" data-type="n10841369801206587">会议设施</span>
									<span data-id="n10841369801206587_100000197" data-type="n10841369801206587">免费停车</span>
									<span data-id="n10841369801206587_100000225" data-type="n10841369801206587">餐厅</span>
									<span data-id="n10841369801206587_100000268" data-type="n10841369801206587">室外游泳池</span>
									<span data-id="n10841369801206587_100000160" data-type="n10841369801206587">健身中心</span>
									<span data-id="n10841369801206587_100000163" data-type="n10841369801206587">室内游泳池</span>
								</p>
							</li>
							<li>床型（可多选）
								<p>
									<span data-id="n10841369801206587_100000037" data-type="n10841369801206587">双床</span>
									<span data-id="n10841369801206587_100000036" data-type="n10841369801206587">大床</span>
								</p>
							</li>-->
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
							<li class="tjclick" id="filter-reset" data-tj="{&quot;cspot&quot;:&quot;emptyFilter&quot;}">重置</li>
							<li @click="filtersubmitclick()" class="on tjclick" id="filter-submit" data-tj="{&quot;cspot&quot;:&quot;submitFilter&quot;}">确定</li>
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
				filterList: "",
				brand:"",
				facilityService:"",
				hotelTheme:"",
				
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
			},
			//发送请求获取数据
			request: function() {
				this.$ajax({
					url: scope.base + "/hotel/api/getlistfilter?_rt=1502116812763&cityid=2001",
					params: {
						//						cityId:2001
					}
				}).then(function(res) {
					//转码成中文，替换转换失败的符号
					var douhaoReg = /%2C/g
					var maohaoReg = /%3A/g
					var xieganReg = /%2/g
					var result = res.data.filterList
					result = decodeURI(result).replace(douhaoReg, ",")
					result = result.replace(maohaoReg, ":")
					result = result.replace(xieganReg, "/")
					this.filterList = JSON.parse(result)
					this.brand = this.filterList[0].subFilterInfoEntities
					this.facilityService = this.filterList[2].subFilterInfoEntities
					this.hotelTheme = this.filterList[3].subFilterInfoEntities
					console.log(this.filterList)
					console.log(this.facilityService,this.hotelTheme)
					
					
//					绑定事件:
				}.bind(this))
			},
		},
		computed: {
			tit: function() {
				return this.$store.state.tit
			}
		},
		mounted: function() {
			//点击切换
			this.request()
			var index;
			$('li.tjclick').on('click', function() {
				console.log($(this))
				var index = $(this).index();
				$(this).addClass('on').siblings().removeClass('on')
				$(this).parent().parent().next().children().eq(index).show().siblings().hide()
			})

			//点击高亮
			$('.filter-con').find('span').on('click', function() {
				var index = $(this).parent().parent().parent().index()
				if($(this).hasClass('geton')) {
					$(this).removeClass('geton')
					if($(this).parent().children().hasClass('geton') || $(this).parent().parent().siblings().children().find('span').hasClass('geton')) {
						$(this).parent().parent().parent().parent().prev().children().children().eq(index).addClass('have')
					} else {
						$(this).parent().parent().parent().parent().prev().children().children().eq(index).removeClass('have')
					}
				} else {
					$(this).addClass('geton')
					$(this).parent().parent().parent().parent().prev().children().children().eq(index).addClass('have')
				}
			})

		}
	}
</script>