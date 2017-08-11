<template>
	<nav class="bar bar-tab">
		<div class="total">
			<div class="orderprice return">¥<span id="wborderprice">{{roomMoney}}<b style="font-size:14px;display:none;">RMB{{roomMoney}}</b></span>
				<span class="roomschip">/{{roomnum}}间</span></div>
			<div class="returnprice">
				<div class="coupontext">
					<!--返￥5-->
				</div>
			</div>
		</div>
		<div id="mobilesubmit" class="next commit" @click="Commit()">
			<span>
提交订单                    </span>
			<span class="preloader preloader-white button-loader"></span>
		</div>
	</nav>
</template>

<script>
	export default {
		data(){
			return {
				username:""
			}
		},
		computed: {
			//订房数量
			roomnum() {
				return scope.roomsNum
			},
			//房间单价
			roomMoney() {
				return scope.orderList.price
			},
			//订房总价
			totalMoney() {
				return scope.totalMoney
			},
			orderList() {
				return scope.orderList
			},
			//房间入住人
			nameNum() {
				return scope.nameNum
			},

		},
		methods: {
			Commit() {
//				var self = this
				var nm = $(".qiu").children('input');
				nm.map(function(index, item) {
						scope.nameNum.push(item.value);
					})
					//				console.log($(".qiu").children('input'))
				var phone = scope.telNum.slice(5) + $(".phonenum").val();
				//				console.log($(".phonenum").val())
				console.log(phone)
					//计算总价
				scope.totalMoney = (scope.orderList.price * 1) * (scope.roomsNum * 1)
					//				console.log(scope.totalMoney)
				var orderCode = com.randomNum(1, 999999999);
				
					//保存时间
				var saveuntil = $(".saveuntil").val();
				console.log(saveuntil)
				var orderList = scope.orderList
				this.$ajax({
						url: "http://localhost:3000/buyCar",
						params: {
							orderList: this.orderList,
							roomnum: this.roomnum,
							roomInfo: this.roomInfo,
							person: {
								name: scope.nameNum,
								phone: phone,
								orderCode: orderCode,
								saveUntil: saveuntil,
								phonArea: scope.telNum.slice(5),
								username:this.username,

							},
							totalMoney: this.totalMoney,
						},
					}).then(function(res) {
						//成功插入的回调函数
						if(res.data=="插入成功"){
							
							location.href = "#/shoppingList";							
						}
					}.bind(this))
			}
		},
		mounted() {
////				判断是否已登录
//				var user = com.getCookie("user")				
//				if(user){
//					this.username = JSON.parse(user).username		
//				}else{
//					location.href = "#/login"
//				}

		}
	}
</script>

<style>
	.bar-tab .total .orderprice.return {
		margin-top: 12px;
	}
</style>