<template>
	<div>
		<div class="slide-selector plugin-inited time">
			<header class="bar-nav">
				<div class="radio-title">
					<span class="title">房间保留至</span>
					<span class="cancel" @click="del(false)">取消</span>
				</div>
			</header>
			<ul class="page-content" style="margin-top: 1px;">
				<li v-for="(n,index) in timeArr" class="radio-item  " :class="{'selected':tab===index}" value="index" @click="choseNum(index)"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio selected"></span></div><div class="radio-text">{{n}}</div><div class="check"></div></label></li>

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
					timeArr: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
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
				choseNum(index) {
					this.tab = index || 0;
					if(index<10){
						var str = "0"+index+":00"
					}else{
						var str = index+":00"
					}
										
					this.$store.state.timesNum = str;
					this.del(false)
//					console.log(this.$store.state.timesNum);

				},
			},
			mounted() {

			}
	}
</script>