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
							<li data-id="n167033088745261" class="on tjclick" data-tj="{&quot;cspot&quot;:&quot;hotelBrand&quot;}">品牌</li>
							<li data-id="n10841369801206587" class="tjclick" data-tj="{&quot;cspot&quot;:&quot;facilityService&quot;}">设施服务</li>
							<li data-id="n1961215974699955" class="tjclick" data-tj="{&quot;cspot&quot;:&quot;hotelTheme&quot;}">主题</li>
						</ul>
					</div>
					<div class="filter-con page-content">
						<ul class="filter-list-subway-l page-content">
							<li data-id="n167033088745261_7468709921099261" data-type="n167033088745261">经济（可多选）
								<p>
									<span data-id="n167033088745261_7468709921099261_39502" data-type="n167033088745261">飘HOME</span> 
									<span data-id="n167033088745261_7468709921099261_32" data-type="n167033088745261">如家</span> 
									<span data-id="n167033088745261_7468709921099261_56" data-type="n167033088745261">汉庭</span> 
									<span data-id="n167033088745261_7468709921099261_53" data-type="n167033088745261">7天</span> 
									<span data-id="n167033088745261_7468709921099261_34" data-type="n167033088745261">锦江之星</span> 
									<span data-id="n167033088745261_7468709921099261_35" data-type="n167033088745261">莫泰</span> 
									<span data-id="n167033088745261_7468709921099261_41" data-type="n167033088745261">速8</span> 
									<span data-id="n167033088745261_7468709921099261_44" data-type="n167033088745261">格林豪泰</span> 
									<span data-id="n167033088745261_7468709921099261_111" data-type="n167033088745261">布丁</span> 
									<span data-id="n167033088745261_7468709921099261_84" data-type="n167033088745261">尚客优</span> 
									<span data-id="n167033088745261_7468709921099261_29305" data-type="n167033088745261">易佰连锁</span> 
									<span data-id="n167033088745261_7468709921099261_342" data-type="n167033088745261">锐思特</span> 
									<span data-id="n167033088745261_7468709921099261_39547" data-type="n167033088745261">驿捷</span> 
									<span data-id="n167033088745261_7468709921099261_33" data-type="n167033088745261">欣燕都</span> 
									<span data-id="n167033088745261_7468709921099261_39408" data-type="n167033088745261">格林联盟</span> 
									<span data-id="n167033088745261_7468709921099261_412" data-type="n167033088745261">怡莱(华住)</span>
								</p>
							</li>
							<li data-id="n167033088745261_1355182931135700" data-type="n167033088745261">舒适（可多选）
								<p>
									<span data-id="n167033088745261_1355182931135700_97" data-type="n167033088745261">维也纳</span> 
									<span data-id="n167033088745261_1355182931135700_312" data-type="n167033088745261">宜必思</span> 
									<span data-id="n167033088745261_1355182931135700_330" data-type="n167033088745261">智选假日</span> 
									<span data-id="n167033088745261_1355182931135700_39421" data-type="n167033088745261">锦江之星品尚</span> 
									<span data-id="n167033088745261_1355182931135700_29323" data-type="n167033088745261">全季</span> 
									<span data-id="n167033088745261_1355182931135700_39494" data-type="n167033088745261">时光漫步</span>
								</p>
							</li>
							<li data-id="n167033088745261_12959604081339591" data-type="n167033088745261">高端（可多选）
								<p>
									<span data-id="n167033088745261_12959604081339591_7" data-type="n167033088745261">锦江</span> 
									<span data-id="n167033088745261_12959604081339591_47" data-type="n167033088745261">戴斯</span> 
									<span data-id="n167033088745261_12959604081339591_40" data-type="n167033088745261">华美达</span> 
									<span data-id="n167033088745261_12959604081339591_29154" data-type="n167033088745261">假日</span> 
									<span data-id="n167033088745261_12959604081339591_6" data-type="n167033088745261">首旅建国</span> 
									<span data-id="n167033088745261_12959604081339591_39" data-type="n167033088745261">金陵连锁</span> 
									<span data-id="n167033088745261_12959604081339591_31" data-type="n167033088745261">最佳西方</span> 
									<span data-id="n167033088745261_12959604081339591_29156" data-type="n167033088745261">福朋喜来登</span> 
									<span data-id="n167033088745261_12959604081339591_65" data-type="n167033088745261">桔子</span> 
									<span data-id="n167033088745261_12959604081339591_547" data-type="n167033088745261">诺富特</span> 
									<span data-id="n167033088745261_12959604081339591_621" data-type="n167033088745261">美爵</span> 
									<span data-id="n167033088745261_12959604081339591_104" data-type="n167033088745261">四季</span> 
									<span data-id="n167033088745261_12959604081339591_7494" data-type="n167033088745261">雅乐轩</span> 
									<span data-id="n167033088745261_12959604081339591_17762" data-type="n167033088745261">万怡</span>
								</p>
							</li>
							<li data-id="n167033088745261_6678567131207544" data-type="n167033088745261">豪华（可多选）
								<p>
									<span data-id="n167033088745261_6678567131207544_313" data-type="n167033088745261">喜来登</span> 
									<span data-id="n167033088745261_6678567131207544_316" data-type="n167033088745261">皇冠假日</span> 
									<span data-id="n167033088745261_6678567131207544_37" data-type="n167033088745261">开元</span> 
									<span data-id="n167033088745261_6678567131207544_15" data-type="n167033088745261">洲际</span> 
									<span data-id="n167033088745261_6678567131207544_14" data-type="n167033088745261">希尔顿</span> 
									<span data-id="n167033088745261_6678567131207544_11" data-type="n167033088745261">香格里拉</span> 
									<span data-id="n167033088745261_6678567131207544_423" data-type="n167033088745261">威斯汀</span> 
									<span data-id="n167033088745261_6678567131207544_45" data-type="n167033088745261">凯宾斯基</span> 
									<span data-id="n167033088745261_6678567131207544_436" data-type="n167033088745261">铂尔曼</span> 
									<span data-id="n167033088745261_6678567131207544_29155" data-type="n167033088745261">希尔顿逸林</span> 
									<span data-id="n167033088745261_6678567131207544_13" data-type="n167033088745261">万豪</span> 
									<span data-id="n167033088745261_6678567131207544_393" data-type="n167033088745261">万丽</span> 
									<span data-id="n167033088745261_6678567131207544_422" data-type="n167033088745261">君悦</span> 
									<span data-id="n167033088745261_6678567131207544_488" data-type="n167033088745261">丽思卡尔顿</span> 
									<span data-id="n167033088745261_6678567131207544_12" data-type="n167033088745261">日航</span> 
									<span data-id="n167033088745261_6678567131207544_6676" data-type="n167033088745261">丽笙</span> 
									<span data-id="n167033088745261_6678567131207544_739" data-type="n167033088745261">柏悦</span>
								</p>
							</li>
						</ul>
						<ul class="filter-list-subway-r filter-list-check page-content"></ul>
					</div>
					<div class="bot-btn bar">
						<ul>
							<li class="tjclick" id="filter-reset" data-tj="{&quot;cspot&quot;:&quot;emptyFilter&quot;}">重置</li>
							<li class="on tjclick" id="filter-submit" data-tj="{&quot;cspot&quot;:&quot;submitFilter&quot;}">确定</li>
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
			//点击header返回
			iconbackclick:function(){
				this.$store.state.tit = false;
			}
		},
		computed:{
			tit:function(){
				return this.$store.state.tit
			}
		},
		mounted:function(){

		}
	}
</script>