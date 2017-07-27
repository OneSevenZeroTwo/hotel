<template>
	<div>
		<div class="slide-selector plugin-inited room">
			<header class="bar-nav">
				<div class="radio-title"><span class="title">选择房间数量</span><span class="cancel" @click="del(false)">取消</span></div>
			</header>
			<ul class="page-content">
				<li v-for="(n,index) in roomArr" class="radio-item  " :class="{'selected':tab===n}" value="n" @click="choseNum(n)"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio selected"></span></div><div class="radio-text">{{n}}间</div><div class="check"></div></label></li>
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
					roomArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
					tab: 1
				}

			},
			methods: {
				del(bool) {
					this.$store.state.isShowMask = bool;
					$('.advanced-mask-layer').css('display', 'none');
					$('.plugin-inited').removeClass('plugin-show');
					$('.plugin-inited').removeClass('selector-active');
				},
				choseNum(n) {
					this.tab = n || 1;
					this.$store.state.roomsNum = this.tab
					this.del(false)
					console.log(this.$store.state.roomsNum)
				},
			},
			mounted() {

			}
	}
</script>