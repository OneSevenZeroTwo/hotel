<template>
	<div>
		<section>
			<div class="container">
				<span><a href="#/strategy/goout" @click="changeHighlight(1)" :class="{active:num== 1}">出行月历</a></span>
				<span><a href="#/strategy/daren" @click="changeHighlight(2)" :class="{active:num ==2}">达人出游</a></span>
				<span><a href="#/strategy/surround" @click="changeHighlight(3)" :class="{active:num ==3}">周边转转</a></span>
			</div>
		</section>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				num:1
			}
		},
		mounted(){

		},
		methods:{
			changeHighlight:function(num){
				this.num = num;
			}
		}
	}
</script>
<style scoped>
	section{
		width: 100%;
		margin-top: 5px;
	}
	.container{
		width: 220px;
		margin:0 auto;
	}
	.container a{
		padding:4px;
		color:#000;
		font-size: 16px;
	}
	.container a.active{
		color:#2377e8;
		background-color: rgba(0,0,0,0);
	}
</style>