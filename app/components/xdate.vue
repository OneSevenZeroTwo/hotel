<template>
	<div id='dataBox'>
		<Row>
			<Col span="12">
			<Date-picker format="yyyy-MM-dd" :confirm="true" v-model="datee" @on-ok="getTime()" placement="bottom-start" type="daterange" placeholder="选择日期" style="width: 200px"></Date-picker>
			</Col>
		</Row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				datee: ""
			}
		},
		methods: {
			getTime() {
				//点击获取输入框的时间
				console.log(this.datee)
				//把时间中的/变为-
				var year = this.datee[0].getFullYear()
				var months = this.datee[0].getMonth().length<2?"0"+this.datee[0].getMonth():this.datee[0].getMonth()
				var day = this.datee[0].getDate().length<2?"0"+this.datee[0].getDate():this.datee[0].getDate()
				scope.hotelInformation.starTime = year + "-"+months+"-"+day
				var year = this.datee[1].getFullYear()
				var months = this.datee[1].getMonth().length<2?"1"+this.datee[1].getMonth():this.datee[1].getMonth()
				var day = this.datee[1].getDate().length<2?"1"+this.datee[1].getDate():this.datee[1].getDate()
				scope.hotelInformation.starTime = year + "-"+months+"-"+day
				 

			},

		},
		mounted() {
		//	默认时间为今天
			var reg =/\//g ;
			scope.hotelInformation.starTime = new Date().toLocaleDateString().replace(reg, "-")
		}
	}
</script>

<style scoped>

</style>