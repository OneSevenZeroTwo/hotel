<template>

	<Row>
		<Col span="12">
		<Date-picker type="daterange" @on-ok="aaa()" :value="qqq" v-model="qqq" :confirm="true" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
		</Col>

	</Row>

</template>
<script>
	export default {
		data: function() {
			return {
				qqq: ''
			}
		},
		methods: {
			aaa: function() {
				console.log(this.qqq[0].toLocaleDateString(), this.qqq[1].toLocaleDateString())
				console.log(this.qqq)
				scope.hotelInformation.starTime=this.qqq[0].toLocaleDateString()
				scope.hotelInformation.leaveTime=this.qqq[1].toLocaleDateString()
				
			}

		},
		mounted() {
			this.qqq = new Date()
		}
	}
</script>
<style type="text/css">
	/*.ivu-row {
		position: absolute;
		top: 189px;
		left: 62px;
		z-index: 1000;
	}
	
	.ivu-picker-panel-body {
		position: relative;
		top: 0;
		left: 223px;
	}
	
	.ivu-select-dropdown {
		position: relative;
		top: 0;
		left: 0;
	}
	
	.ivu-date-picker-with-range .ivu-picker-panel-body {
		min-width: 427px;
	}*/
</style>