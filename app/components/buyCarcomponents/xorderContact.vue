<template>
	<div class="order-contact">
		<h1>联系资料</h1>
		<div class="contact-person">
			<ul>
				<li v-for="(n,index) in roomsNum"> 
					<label for="cusname1"></label>
					<div class="label">入住人(房间{{index+1}})</div>
					<div class="content list-input">
						<input type="text" class="createorder" name="customernames" id="cusname1" placeholder="姓名，每间填1人" value="">
					</div>
				</li>
			</ul>
			<div class="add-person-button">
				<div class="person-choose">
					<div class="icon-person-choose"></div>选择入住人
				</div>
			</div>
		</div>
		<div class="contact-tel">
			<div class="tel-text">
				<span class="tel-person">联系人手机：</span>
				<div class="area-address">
					<label for="area-code"></label>
					<input type="text" readonly="readonly" id="area-code" class="area-code createorder" name="areacodeconnect" value="1" title="中国大陆+86" data-value="">
					<span><i class="icon-bottom"></i></span>
				</div>
				<input type="tel" maxlength="20" class="area-number createorder" name="connectormobile" placeholder="用于客服" id="contactormobile" value="13172386158">
			</div>
			<div class="tel-choose" style="color: rgb(220, 220, 220);">
				<div class="icon-choose">
					<div class="icon-tel-choose" style="color: rgb(220, 220, 220);"></div>选择手机号</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
		data() {
				return {
					roomsNum: [1],
				}

			},
		computed:{
			roomsNum(){
				var num = this.$store.state.roomsNum;
				for(var i=1;i++;i<num){
					roomsNum.push(i)
				}
				return roomsNum
			}
		},
		
	}
</script>
	
<style>

</style>