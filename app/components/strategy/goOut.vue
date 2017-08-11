<template>
	<div>
	    <section>
	        <div class="container">
	            <span><a href="#/strategy/goout/month8" @click="changeHighlight(1)" :class="{active:num== 1}">8月</a></span>
	            <span><a href="#/strategy/goout/month9" @click="changeHighlight(2)" :class="{active:num== 2}">9月</a></span>
	            <span><a href="#/strategy/goout/month10" @click="changeHighlight(3)" :class="{active:num== 3}">10月</a></span>
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
	.container span{
		display: inline-block;
		width: 32.6%;
		margin-top: 4px;
		text-align: center;
	}
	.container{
		width: 100%;
		margin:0 auto;
	}
	.container a{
		color: #000;
	}
	.container a.active{
		color:#2377e8;
		background-color: rgba(0,0,0,0);
	}
</style>