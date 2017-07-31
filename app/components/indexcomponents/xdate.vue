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
				var reg = /\//g
				scope.hotelInformation.starTime = this.datee[0].toLocaleDateString().replace(reg, "-")
				scope.hotelInformation.leaveTime = this.datee[1].toLocaleDateString().replace(reg, "-")

			},

		},
		mounted() {
		//	默认时间为今天
			var reg = /\//g
			scope.hotelInformation.starTime = new Date().toLocaleDateString().replace(reg, "-")
		}
	}
</script>

<style scoped>

</style>