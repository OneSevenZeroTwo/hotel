<template>
	<div>
		<div class="slide-selector plugin-inited telphone">
			<header class="bar-nav">
				<div class="radio-title">
					<span class="title">选择手机号地区</span>
					<span class="cancel" @click="del(false)">取消</span>
				</div>
			</header>
			<ul class="page-content" style="margin-top: 1px;">
				<li v-for="(n,index) in telArr" class="radio-item  " :class="{'selected':tab===index}" value="index" @click="choseTel(index)"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio selected"></span></div><div class="radio-text">{{n}}</div><div class="check"></div></label></li>

			</ul>
			<div class="arrow up left"></div>
			<div class="describe" style="display: none;"></div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					telArr: ["中国大陆：+86", "中国香港：+852", "中国澳门：+853", "中国台湾：+886"],
					tab: 0,
					
				}

			},
			methods: {
				del(bool) {
					this.$store.state.isShowMask = bool;
					$('.advanced-mask-layer').css('display', 'none');
					$('.plugin-inited').removeClass('plugin-show');
					$('.plugin-inited').removeClass('selector-active');
				},
				choseTel(index) {
					this.tab = index || 0;
					var str = this.telArr[index]										
					this.$store.state.telNum = this.telArr[index];
					this.del(false)
					console.log(this.$store.state.telNum);
					
				},
				
			},
			mounted() {

			}
	}
</script>