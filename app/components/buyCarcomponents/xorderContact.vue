<template>
	<div class="order-contact">
		<h1>联系资料</h1>
		<div class="contact-person">
			<ul>
				<li v-for='(n,index) in aaaa'>
					<label for="cusname1"></label>
					<div class="label">入住人(房间{{n}})</div>
					<div class="content list-input qiu">
						<input type="text" class="createorder tang" name="customernames" :id="'cusname'+index+1" placeholder="姓名，每间填1人" :value="Name[index]">
					</div>
				</li>
			</ul>
			<div class="add-person-button" @click="person()">
				<div class="person-choose">
					<div class="icon-person-choose"></div>选择入住人
				</div>
			</div>
		</div>
		<div class="contact-tel">
			<div class="tel-text">
				<span class="tel-person">联系人手机：</span>
				<div class="area-address" @click="telphoneNum(true)">
					<label for="area-code"></label>
					<input type="text" readonly="readonly" id="area-code" class="area-code createorder" name="areacodeconnect" :value="telAddress" :title="telAddress" data-value="">
					<span><i class="icon-bottom"></i></span>
				</div>
				<input type="tel" maxlength="20" class="area-number createorder phonenum" name="connectormobile" placeholder="用于客服" id="contactormobile" value="" @blur="getPhone()">
			</div>
			<div class="tel-choose" style="color: rgb(220, 220, 220);">
				<div class="icon-choose">
					<div class="icon-tel-choose" style="color: rgb(220, 220, 220);"></div>选择手机号</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					RoomsNum: [1],
					phone:'',
				}

			},
			computed: {
				aaaa() {
					return scope.roomsNum
				},
				telAddress(){
					return scope.telNum.slice(5)
				},
				Name(){
					return scope.nameNum
				},
				Phone(){
					return scope.phone
				}
			},
			methods: {
				/*getName(){
					for(let i=0;i<scope.roomsNum;i++){
						if(scope.nameNum.length==0){
							scope.nameNum.push($(".createorder").val())
						}
					}
					console.log($(".createorder").val())
				},*/
				telphoneNum(bool) {
					scope.isShowMask = bool;
					$('.advanced-mask-layer').css('display', 'block');
					//				console.log('xoccupancy')
					//				plugin-show selector-active添加这两个类显示并且高亮
					$('.telphone').addClass('plugin-show');
					$('.telphone').addClass('selector-active');

				},
				person() {
					$('.select-people').addClass('plugin-show');
					$('.select-people').removeClass('page-on-right');
					$('.select-people').removeClass('page-on-center');
				},
				getPhone(){
					scope.phone = this.phone
				},
			},
			mounted() {
				console.log(this.aaaa)
			}
	}
</script>

<style scop>
#cusname1{
	padding-right: 0;
}
</style>