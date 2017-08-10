<template>
	<header class="bar bar-nav hotel-list-header">
        <a class="icon icon-left-nav pull-left " data-rel="back" @click="back()"></a>
        <a class="icon icon-nearby pull-right tjclick" ></a>
        <a class="icon icon-collectlist  collect pull-right tjclick" href="//m.elong.com/my/hotel/favorites/" data-tj="{&quot;cspot&quot;:&quot;mycollection&quot;}"></a>
        <h1 class="title">
                <span class="city-area" @click="changetion()">
                    <span class="city" v-html="cityName">
                     
                    </span>
                    <span class="num" style="display:none;"></span>
                    <i class="icon-bottom"></i>
                </span>
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
            back(){
            	history.back()
            },
            changetion() {
				this.$store.state.direction = 'right'
				scope.cshow2=true
				console.log(111111111)

			},

        },
        computed:{
        	cityName(){
        		return scope.aaa
        	}
        }
    }
</script>

<style scoped>
   

</style>