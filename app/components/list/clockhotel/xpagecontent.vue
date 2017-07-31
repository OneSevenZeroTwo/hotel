<template>
	<div ref="viewbox" class="page-content page-list">
		<section class="page-list-con">			
			<div style="position: fixed;" :class="['header-search',{'showout':show},{'hidein':!show}]">
				<div class="time">
					<div class="sea-date">
						<p><span>住</span><b class="indate" data-value="2017-07-30">07-30</b></p>
		            </div>
		            <div class="city-area cityname"><span>广州市</span></div>
		            <div class="sea-box">
		                <i></i>
		                <input type="input" value="" placeholder="钟点房名称/位置不限" readonly="readonly">
		            </div>
		            <div class="dress ">
	            		<i class="ads"></i>
						<span>附近</span>
	            	</div>
				</div>
				
				<div class="chose">
					<ul>
						<li class="fanxian tjclick" data-id="21820043_1013" data-type="645790419_1013" data-tj="{&quot;cspot&quot;:&quot;cashback&quot;}">有返现</li>
						<li class="allhotel tjclick" data-tj="{&quot;cspot&quot;:&quot;chain&quot;}">连锁酒店</li>
						<li class="lovers tjclick" data-tj="{&quot;cspot&quot;:&quot;couples&quot;}">情侣酒店</li>
					</ul>
				</div>
			</div>
			
			<!-- 列表页(地图)容器 -->
			<div class="mapshow mapdown">
				<div class="mapcontent" id="qqMap">
					<div class="hotelcon"></div>
					<div class="maplocation"><span class="left_con">我的定位</span><span class="right_con">查询屏幕范围内酒店</span></div>
				</div>
			</div>

			<div class="list-main">
				<ul class="hotel-list" method="listmain"> 
					<li v-for="n in hotellist" class="hotel-item"> 
						<a :href="'#/detail/'+n.hotelId" class="hotel-link" data-url="//m.elong.com/clockhotel/42001501/#indate=2017-07-30"></a> 
						<div class="pic"> 
							<img alt="广州木棉花语酒店" :src="n.picUrl"> 
						</div> 
						<div class="info"> 
							<p class="name">{{n.hotelName}}</p> 
							<p class="comt">  
								<b>{{n.commentScore}}分</b>   
								<span>{{n.totalCommentCount}}条点评</span>   
								<span> </span>
							</p> 
							<p class="fac"> 
								<span>舒适型</span> 
							</p> 
							<p class="fac"> {{n.hourRoomInfo?n.hourRoomInfo.earlyArriveDate:''}}-{{n.hourRoomInfo?n.hourRoomInfo.closingTime:''}}可住 </p> 
							<p class="district">  
								<span class="d1">{{n.districtName}}</span>   
								<span class="d3">{{n.businessAreaName}}</span>    
							</p> 
						</div> 
						<div class="right-wrap"> 
							<div class="r-tab">   
								<p class="pri">   
									<b>{{n.hourRoomInfo?n.hourRoomInfo.stayTime:''}}小时</b>  
									<span> <i>¥</i>{{n.lowestPrice}} </span> 
									<span class="time">起</span> 
								</p>  
								<p class="tags">      
									<span style="color:#FF5555;border:1px solid #FF5555">返</span>    
								</p> 
							</div> 
						</div> 
					</li>  
				</ul>
				<div @click="automaticrequest()" class="nomore">点击加载更多钟点房</div>
                <!--只有一家酒店时推荐-->
                <div class="list-onlyone" style="display: none;">
                    <p>客官，下面的钟点房也不错呢</p>
                </div>
                <ul class="hotel-list hotel-list-only" method="hotListonly"></ul>
                <!--只有一家酒店时推荐-->
				<!----------------------------------------搜索无结果start------------------------------------------>
				<div class="list-noresult" style="display: none;">
					<i class="icon-noresult"></i>
					<p>抱歉，未找到符合您条件的钟点房</p>
				</div>

				<!--没有酒店时推荐-->
                <h2 class="hot-title" style="display: none;">热门钟点房推荐</h2>
                <ul class="hotel-list hotel-list-recom" method="hotTitle"></ul>
                    <!--没有酒店时推荐-->
				<!----------------------------------------搜索无结果 end ------------------------------------------>
			</div>
			<div class="tool">
					<div class="ver"><a href="//m.elong.com/my/account/index/">个人中心</a><span>｜</span><a href="//d.elong.cn/h5_mnoreferseo">下载客户端</a><span>｜</span><a href="//m.elong.com/">返回首页</a></div>
				<div class="copy">©2009-2017 艺龙无线</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				hotellist:[],
				show:true,
				scroll:0,
				p:0,
				page:0,
				lowprice:null,
				highprice:null,
				sortmethod:null,
				sortdirection:null,
			}
		},
		methods:{
			// 一进页面获取数据
			automaticrequest:function(){
				this.$ajax({
					url:"http://localhost:3000/clockhotelcontent",
					params: {
						// tab: this.message,
						// limit: 10,
						cityId: 2001,
						page:this.page++,
						lowprice:this.lowprice,
						highprice:this.highprice,
					}
				}).then(function(res) {
					console.log(res.data.hotelList)
					this.hotellist=this.hotellist.concat(res.data.hotelList) 
					console.log(this.hotellist)
					// this.$store.state.kslist = res.data.newFastFilter
					// this.$store.state.arr = JSON.parse(res.request.responseText).hotelList
					// console.log(this.$store.state.arr)
					// this.isLoading = true
				}.bind(this))

			},
			// // vue监听滚动事件
			menu() { 
        		this.scroll = this.$refs.viewbox.scrollTop;

        		// console.log('距离顶部:'+.scrollTop())
        		// console.log('滚动:'+this.scroll)
        		if(this.p<=this.scroll){
        			this.show = false;
        		}else{
        			this.show = true;
        		}
        		setTimeout(function(){
        			this.p = this.scroll
        		}.bind(this),0)
     		},
		},
		computed:{
			
		},
		mounted:function(){
			//滚动监听
			this.$refs.viewbox.addEventListener('scroll', this.menu)
			this.automaticrequest()
			var pagecontent = {
				init:function(){
					
				},
			}
			var self = this
			console.log($('.page-list'))
			$('.page-list').on("scroll", function(e) {
				console.log(11111)
				if(this.offsetHeight + this.scrollTop >= this.scrollHeight) {
					console.log("到底部了")
					self.automaticrequest();
				}

			})
			$('li.radio-item').on('click',function(){
				$(this).addClass('selected').siblings().removeClass('selected')
				console.log($(this).attr('value'))
				var str = $(this).attr('value')
				// str = str.join(',')
				console.log(str)
			})
			pagecontent.init()
		}
	}
</script>