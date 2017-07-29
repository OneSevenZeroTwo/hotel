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
//				console.log(this.qqq[0], this.qqq[1])
console.log(this.qqq)
//				this.function()
			},
//			format:function(time, format){
//				var t = new Date(time);
//				var tf = function(i) { return(i < 10 ? ‘0’ : ”) + i };
//				return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a) {
//					switch(a) {
//						case‘ yyyy ':
//						return tf(t.getFullYear());
//						break;
//						case‘ MM ':
//						return tf(t.getMonth() + 1);
//						break;
//						case‘ mm ':
//						return tf(t.getMinutes());
//						break;
//						case‘ dd ':
//						return tf(t.getDate());
//						break;
//						case‘ HH ':
//						return tf(t.getHours());
//						break;
//						case‘ ss ':
//						return tf(t.getSeconds());
//						break;
//					}
//				})
//			}

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