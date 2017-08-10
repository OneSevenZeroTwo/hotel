<template>
	<div id='dataBox2'>
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
				
				//补零操作和把时间中的/变为-
				var Inyear = this.datee[0].getFullYear()
				var INmonths = (''+this.datee[0].getMonth()).length<2?"0"+(this.datee[0].getMonth()+1):this.datee[0].getMonth()+1
				var INday = (''+this.datee[0].getDate()).length<2?"0"+this.datee[0].getDate():this.datee[0].getDate()
				//设置入住时间到状态管理中心
				scope.listFilterParams.indate = Inyear + "-"+INmonths+"-"+INday
				scope.hotelInformation.starTime = Inyear + "-"+INmonths+"-"+INday
				scope.trueListParams.indate = Inyear + "-"+INmonths+"-"+INday
				
				var Outyear = this.datee[1].getFullYear()
				var Outmonths = (''+this.datee[1].getMonth()).length<2?"0"+(this.datee[1].getMonth()+1):this.datee[1].getMonth()+1
				var Outday = (''+this.datee[1].getDate()).length<2?"0"+this.datee[1].getDate():this.datee[1].getDate()
				//设置入住离开时间到状态管理中心
				scope.listFilterParams.outdate = Outyear + "-"+Outmonths+"-"+Outday
				scope.hotelInformation.leaveTime = Inyear + "-"+INmonths+"-"+INday
				scope.trueListParams.outdate = Outyear + "-"+Outmonths+"-"+Outday
				
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