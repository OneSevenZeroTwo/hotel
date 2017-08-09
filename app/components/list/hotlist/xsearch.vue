<template>
	<div style="position: fixed;" :class="['search-field',{'showout':show},{'hidein':!show}]">
		<div class="header-search">
			<div class="sea-date">
				<p>入<span>店</span>：<b class="indate" data-value="2017-07-26">07-26</b></p>
				<p>离<span>店</span>：<b class="outdate" data-value="2017-07-27">07-27</b></p>
				<span class="total">1晚<i></i></span>
			</div>
			<div class="sea-box tjclick" data-tj="{&quot;cspot&quot;:&quot;searchbar&quot;}">
				<label class="sea-mask"></label>
				<i></i>
				<input type="input" value="" placeholder="酒店名称/位置不限" readonly="readonly">
			</div>
		</div>
		<div class="quick-search-box">
			<div class="quick-search">
				<div class="kslist">
					<div @click="roomtitleclick()" class="commons room-title tjclick" data-tj="{&quot;cspot&quot;:&quot;roomtypeFilter&quot;}">{{kslist[0]?kslist[0].keyWord_cn:''}}</div>
					<div @click="saletitleclick()" class="commons sale-title tjclick unon" data-tj="{&quot;cspot&quot;:&quot;specialOffers&quot;}">{{kslist[1]?kslist[1].keyWord_cn:''}}</div>
				</div>
				<ul class="quick-search-list">
					<li @click="newfilter($event)" class="quick-search-item tjclick " data-id="100000002_1100_30_到店付">到店付</li>
					<li @click="newfilter($event)" class="quick-search-item tjclick " data-id="139_1100_101_免费取消">免费取消</li>
					<li @click="newfilter($event)" class="quick-search-item tjclick " data-id="141_1100_102_立即确认">立即确认</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		data:function(){
			return {
				// roomtitle:this.$store.state.roomtitle
				page:0
			}
		},
		components:{
			
		},
		computed:{
			kslist:function(){
				return this.$store.state.kslist
			},
			show:function(){
				return this.$store.state.show
			}
		},
		methods:{
			//点击头部search
			newfilter(e){
				scope.trueListParams.newfastfilter = e.target.getAttribute("data-id")
				this.$store.dispatch("indexToList")
//				console.log(scope.trueListParams.newfastfilter)
//				console.log(e.target.dataset.id	)
			},
			// 点击房型筛选
			roomtitleclick:function(ele){
				if(this.$store.state.roomtitle){

					this.$store.state.roomtitle= false
				}else if(!this.$store.state.roomtitle){
					
					this.$store.state.roomtitle= true

				}
				
			},
			//点击优惠
			saletitleclick:function(){
				if(this.$store.state.saletitle){
					console.log(666)
					this.$store.state.saletitle= false
				}else if(!this.$store.state.saletitle){
					
					this.$store.state.saletitle= true
					console.log(888)
				}
			},
			//点击切换到店付，免费取消
			quicksearchlist:function(){
				
			}
		},
		mounted:function(){

		}
	}
</script>