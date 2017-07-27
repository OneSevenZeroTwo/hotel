<template>
	<div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div v-for="(img,index) in imgArr" class="swiper-slide"><img :src="'http:'+img" alt="" /></div>

				<!--<div  class="swiper-slide"><img :src="'http:'+imgArr[1]" alt="" /></div>-->
			</div>
			<!--<h1 data-v-717dd598="" class="name">
					<i data-v-717dd598="" class="grade grade1"></i> 
					<em data-v-717dd598="">
						北京阳光温特莱酒店(国展店)(原速8国展柳芳店)
					</em>
				</h1>
			<span data-v-717dd598="" class="hotel-type">
					经济型
				</span>
		<!--<div data-v-717dd598="" class="hotel-info">
			<div data-v-717dd598="" data-tj="{&quot;cspot&quot;:&quot;image&quot;}" class="pic-wrap tjclick swiper-container-horizontal">
				<div>
					<h1 data-v-717dd598="" class="name">
					<i data-v-717dd598="" class="grade grade1"></i> 
					<em data-v-717dd598="">
						北京阳光温特莱酒店(国展店)(原速8国展柳芳店)
					</em>
				</h1>
					<span data-v-717dd598="" class="hotel-type">
					经济型
				</span>
					<div data-v-717dd598="" class="num"><i data-v-717dd598=""></i>88</div>
				</div>
			</div>-->
		</div>
	</div>
</template>

<script>
	export default {
		mounted: function() {
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				autoplay: 2500,
				autoplayDisableOnInteraction: false
			});
			//			console.log(this.imgArr)
		},
		computed: {
			imgArr() {
				console.log(this.$store.state.imgArr)
				return this.$store.state.imgArr
			}
		}
	}
</script>

<style>
	.swiper-container {
		width: 100%;
		height: 100%;
		background: #FFF;
	}
	
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	
	.swiper-slide img {
		width: 100%;
		height: 180px;
	}
	
	.weui-panel__bd {
		margin-bottom: 58px;
		background: #FFF;
	}
</style>