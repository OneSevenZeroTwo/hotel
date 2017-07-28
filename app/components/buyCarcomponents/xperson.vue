<template>
	<div>
		<div class="select-people page-plugin  page-on-right plugin-inited">
			<!--select-people page-plugin plugin-inited page-on-center plugin-show出现后显示的类名-->
			<header class="bar bar-nav">
				<a class="icon pull-left" @click="goBack()" style="font-size: 15px;color: #49f;">取消</a>
				<h1 class="title">选择入住人</h1>
				<a class="sure" @click="Sure()" style="position: relative; z-index: 30;">确定</a>
			</header>
			<div class="page-content" style="">
				<div class="person-box">
					<p class="tip">请选择真实入住人，以保证后续正常审核、返现。</p>
					<div class="add" @click="addinfo()"><b>+</b> 新增常用入住人<span><i class="cert"></i></span></div>
					<!--点击新增入住人时，新增入住人隐藏 to-input显示 -->
					<div class="to-input"><input id="inputaddcusname" name="addcusname" type="text" placeholder="请输入入住人姓名" maxlength="30" data-validate="{&quot;rq&quot;:true,&quot;regex&quot;:&quot;^([一-龥/ ]{2,50}|[a-zA-Z][a-zA-Z/ ]+[a-zA-Z])$&quot;,&quot;msg&quot;:&quot;请输入正确的入住人姓名&quot;}">
						<div class="confirm" @click="conFirm()">增加</div>
					</div>
					<div class="error">每个房间只需选择一位入住人</div>
				</div>
			</div>
			<ul class="per-list">
				<li v-for="(n,index) in names">
					<input type="checkbox" class="checkbox"/><span>{{n}}<span></span></span>
				</li>
			</ul>
		</div>
		<!--填写完个人信息后的样式-->
		<div>
			<!--dialog-active plugin-show-->
			<div class="dialog plugin-inited dialog-active sure">
				<div class="content">请输入正确的入住人姓名</div>
				<div class="item-btn" style="background: rgb(68, 153, 255);" @click="hide()">确 定</div>
			</div>
		</div>
	</div>
</template>
<script>
	//	import xback from "../xback.vue"
	export default {
		data() {
				//定义变量
				return {
					names: [],
					tab: 0,
					chec:false,
					txtArr:[],
				}
			},
			methods: {
				//封装函数方法
				goBack() {
					$('.select-people').removeClass('plugin-show');
					$('.select-people').addClass('page-on-right');
					$('.select-people').addClass('page-on-center');
				},
				addinfo() {
					$('.add').css('display', 'none');
					$('.to-input').css('display', 'block');
					$('#inputaddcusname').focus();
				},
				conFirm() {
					var name = $('#inputaddcusname');
					//					console.log(name)
					if(name.val() == '') {
						$('.sure').addClass('plugin-show');
						$('.advanced-mask-layer').css('display', 'block');
						$('.add').css('display', 'none');
						$('.to-input').css('display', 'block');
						$('.page-content').attr('overflow', 'hidden !important');
					} else {

						this.names.push(name.val());
						this.$store.state.nameNum = this.names
						//console.log(this.names)
						$('.add').css('display', 'block');
						$('.to-input').css('display', 'none');
//						name.focus;
						$("#inputaddcusname").val("")

					}

				},
				Sure(){					
					this.txtArr=[]
					$.map($(':checked'),function(items){
						var text = $(items).next().text()
						this.txtArr.push(text)
					}.bind(this))
					console.log(this.txtArr)
					
					
					
				},
				hide() {
					$('#inputaddcusname').focus;
					//console.log(this.$store.state.isShowMask)
					$('.sure').removeClass('plugin-show');
					$('.advanced-mask-layer').css('display', 'none');
					$('#inputaddcusname').focus();
				},

			},

			components: {
				//注册组件
				//				xback,
			}
	}
</script>
<style scoped>
	.sure {
		float: right;
		font-size: 15px;
		margin-top: 13px;
		color: #49f;
	}
	
	.advanced-mask-layer {
		display: none;
	}
</style>