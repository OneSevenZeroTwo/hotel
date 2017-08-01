<template>
	<div>
		<div v-show="cshow3" :class="{'silde-right':direction2=='right','silde-left':direction2=='left'}">
			<div ng-transclude class="nav-content" :class="{'sidebar-move-left':direction2=='left','sidebar-move-right':direction2=='right'}">
				<!--<p @click="changstop()">2222222222222222</p>-->
				<div class="filter-sp plugin-inited filter-sp-active plugin-show" style=""><span class="arrow"></span>
					<div class="sp-content">
						<div class="star">
							<div class="sp-tit">星级</div>
							<ul class="star-list">
								<li sn="-1" class=" on buxian">不限</li>
								<li sn="12" class="">经济/客栈</li>
								<li sn="3" class="">三星/舒适</li>
								<li sn="4" class="">四星/高档</li>
								<li sn="5" class="">五星/豪华</li>
							</ul>
						</div>
						<div class="price">
							<div class="sp-tit">价格</div>
							<ul class="price-list">
								<li class="on" price-value="0">不限</li>
								<li price-value="0-150" class="">0-150</li>
								<li price-value="150-300" class="">150-300</li>
								<li price-value="300-450" class="">300-450</li>
								<li price-value="450-700" class="">450-700</li>
								<li price-value="700" class="">700以上</li>
							</ul>
						</div>
					</div>
					<!--s-->
					<div class="bot-btn bar">
						<ul>
							<li id="filter-reset">重置</li>
							<li class="on" id="starprice-submit"  @click="changstop()">确定</li>
						</ul>
					</div>
					<!--e-->
				</div>
			</div>
		</div>
		<div v-show='xian' @click="changstop()" style="background: black; width: 100%;height: 100%; z-index: 9999;position: fixed;top: 0;opacity:0.5;">
			aaaaaaaaaaaaaaaaaaaaaaaaaa
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				//				xian:false

			}
		},
		methods: {

			changstop() {
				this.$store.state.direction2 = 'right'
				this.$store.state.xian = false

			},
		},
		computed: {
			direction2() {
				return this.$store.state.direction2;
			},
			xian() {
				return this.$store.state.xian;
			},
			cshow3() {
				return this.$store.state.cshow3;

			}
		},
		mounted: function() {
			scope.cshow3 = false

			//			$('.buxian').click(function(){
			//				if($(this).siblings().hasClass('on')){
			//					$(this).removeClass('on')
			//				}else{
			//				 $(this).addClass("on").siblings().removeClass("on");
			//					
			//				}				
			//			})
			//			$('.star-list').find('li').on('click', function() {
			//				if($(this).hasClass('on')) {
			//					if($('.buxian').hasClass('on')) {
			//						$('.buxian').siblings().removeClass("on");
			//
			//					}
			//
			//					$(this).removeClass('on')
			//
			//				} else {
			//					$(this).addClass('on')
			//										$(this).parent().children().first().removeClass('on')
			//
			//				}
			//			})

			$('.star-list').find('li').on('click', function() {
				$(this).addClass("on").siblings().removeClass("on");
			})

			$('.price-list').find('li').on('click', function() {
				$(this).addClass("on").siblings().removeClass("on");
			})

			$('#starprice-submit').on('click', function() {
				console.log($('.star-list').find('.on').html())
				var xing=$('.star-list').find('.on').html()
				scope.xing1=xing
				
				var xing1=$('.price-list').find('.on').html()
				scope.xing2=xing1
			})
		}

	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	.left-button {
		float: right;
	}
	/*组件的样式*/
	/*向左滑动的动画*/
	
	@keyframes moveLeft {
		from {
			transform: translateY(220px);
		}
		to {}
	}
	
	.sidebar-move-left {
		animation: moveLeft;
		/*持续时间*/
		animation-duration: 0.5s;
		/*动画播放次数*/
		animation-iteration-count: 1;
		/*执行方向，动画执行结束时保持在它结束时的状态*/
		animation-fill-mode: forwards;
	}
	/*向右边滑动的动画*/
	
	@keyframes moveRight {
		from {}
		to {
			transform: translateY(220px);
		}
	}
	
	.sidebar-move-right {
		animation: moveRight;
		/*持续时间*/
		animation-duration: 0.5s;
		/*动画播放次数*/
		animation-iteration-count: 1;
		/*执行方向，动画执行结束时保持在它结束时的状态*/
		animation-fill-mode: forwards;
	}
	
	.nav-content {
		min-width: 100%;
		position: fixed;
		height: 220px;
		bottom: 0;
		background-color: #e1e1e1;
		/*调试代码时经常使用border，帮我们定位到div的一个区域*/
		/*border: 1px solid black;*/
		z-index: 10000;
		/*使用透明度为0来隐藏元素*/
		opacity: 1;
	}
</style>