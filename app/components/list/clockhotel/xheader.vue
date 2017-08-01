<template>
	<header class="bar bar-nav hotel-list-header">
        <!--<a class="icon pull-left icon-back" href="javascript:void(0)" method="goHome" data-href="/clockhotel/search#inDate=2017-07-30"></a>-->
        <i class="material-icons" @click='go()' style="position: relative; font-size: 39px; top: 3px; left: -7px;">&#xE314;</i>
        <h1 class="title" style="top: 0px;">
        	<span class="city-area">
				<span class="city">{{cityName}}</span>
        	</span>
        	<span class="num" style="display:none;"></span>
        </h1>
        <i class="material-icons" @click="goindex()" style="position: absolute;top: 10px;right: 13px;">&#xE84F;</i>
    </header>
</template>

<script>
	export default {
		data:function(){
			return {

			}
		},
		methods:{
			go(){
				window.history.go(-1);
			},
			goindex(){
				location.href="#/index/"
			}
			
		},
		computed:{
			cityName:function(){
				return this.$store.state.cityName
			}
		}
	}
</script>