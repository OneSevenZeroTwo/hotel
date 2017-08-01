<template>
	<header class="bar bar-nav hotel-list-header">
        <a class="icon pull-left icon-back" href="javascript:void(0)" method="goHome" data-href="/clockhotel/search#inDate=2017-07-30"></a>
        <h1 class="title">
        	<span class="city-area">
				<span class="city">{{cityName}}</span>
        	</span>
        	<span class="num" style="display:none;"></span>
        </h1>
    </header>
</template>

<script>
	export default {
		data:function(){
			return {

			}
		},
		methods:{

		},
		computed:{
			cityName:function(){
				return this.$store.state.cityName
			}
		}
	}
</script>