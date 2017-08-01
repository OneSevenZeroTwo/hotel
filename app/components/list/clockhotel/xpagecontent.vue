<template>
	<div ref="viewbox" class="page-content page-list" style="padding-top: 0px!important;">
		<section class="page-list-con">			
			<div style="position: fixed;" :class="['header-search',{'showout':show},{'hidein':!show}]">
				<div class="time">
					<div class="sea-date">
						<p><span>住</span><b class="indate" :data-value="starTime">{{starTime}}</b></p>
		            </div>
		            <div class="city-area cityname"><span>{{cityName}}</span></div>
		            <div class="sea-box">
		                <i></i>
		                <input type="input" value="" placeholder="钟点房名称/位置不限" readonly="readonly">
		            </div>
		            <div class="dress ">
	            		<i class="ads"></i>
						<span>{{hotelList?hotelList.lowestPrice:''}}附近</span>
	            	</div>
				</div>
				
				<div class="chose">
					<ul>
						<li class="fanxian tjclick" data-id="21820043_1013" data-type="645790419_1013">有返现</li>
						<li class="allhotel tjclick" >连锁酒店</li>
						<li class="lovers tjclick">情侣酒店</li>
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
					<li v-for="n in hotelList" class="hotel-item"> 
						<a @click="toTetail(n.hotelName,n.commentScore,n.hotelId)" class="hotel-link" data-url="//m.elong.com/clockhotel/42001501/#indate=2017-07-30"></a> 
						<div class="pic"> 
							<img alt="广州木棉花语酒店" :src="n.picUrl"> 
						</div> 
						<div class="info"> 
							<p    style="height: 22px;"  class="name">{{n.hotelName}}</p> 
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
				<div @click="clickmore()" class="nomore">点击加载更多钟点房</div>
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
				// // 判断是否是下拉刷新
				// srcollResh:true,
				// hotellist:[],
				// // 是否经过筛选得出数据
				// datafrom:"filter",
				// // 酒店品牌对应的sn，用逗号隔开。
				// hotelbrandids:"",


				show:true,
				scroll:0,
				p:0,
				// page:0,
				// lowprice:null,
				// highprice:null,
				// sortmethod:"",
				// sortdirection:"",
				// 入住时间
				// indate:scope.hotelInformation.starTime,
				// 离开时间
				// outdate:scope.hotelInformation.leaveTime,
				endTime:"",
				// cityId:scope.hotelInformation.cityId,
				// sortmethod:null,
				// sortdirection:null,
			}
		},
		methods:{
		
			// // vue监听滚动事件
			clickmore(){
				this.$store.commit('automaticrequest')
			},
			menu() { 
        		this.scroll = this.$refs.viewbox.scrollTop;

        		if(this.p<=this.scroll){
        			this.show = false;
        		}else{
        			this.show = true;
        		}
        		setTimeout(function(){
        			this.p = this.scroll
        		}.bind(this),0)
     		},
     		toTetail(hotelName,commentScore,hotelId){
     			location.href ="#/detail/"+ hotelId
     			scope.hotelInformation.hotelName = hotelName
     			scope.hotelInformation.hotelScore = commentScore
     		}
		},
		computed:{
			cityName:function(){
				return this.$store.state.cityName
			},
			starTime:function(){
				return scope.hotelInformation.starTime.slice(5)
			},
			hotelList:function(){
				console.log(scope.listFilterParams.hotellist)
				return scope.listFilterParams.hotellist
			}
		},
		mounted:function(){
			//滚动监听
			var self = this
			this.$refs.viewbox.addEventListener('scroll', this.menu)
			self.$store.commit('automaticrequest')
			var pagecontent = {
				init:function(){
					
				},
			}
			// console.log($('.page-list'))
			$('.page-list').on("scroll", function(e) {
				console.log("下拉")

				if(this.offsetHeight + this.scrollTop >= this.scrollHeight) {
					console.log("到底部了")
					scope.listFilterParams.srcollResh=true
					self.$store.commit('automaticrequest')
				}

			})
			$('li.radio-item').on('click',function(){
				if($(this).index() == 0){
					$('.filter-list').find('.default-btn').removeClass('rise')
					$('.filter-list').find('.default-btn').removeClass('drop')
				}
				if($(this).index() == 1){
					$('.filter-list').find('.default-btn').addClass('rise')
				}
				if($(this).index() == 2){
					$('.filter-list').find('.default-btn').addClass('drop')
				}
				if($(this).index() == 3){
					$('.filter-list').find('.default-btn').addClass('drop')
				}
				
				$(this).addClass('selected').siblings().removeClass('selected')
				console.log($(this).attr('value'))
				var str = $(this).attr('value').split(',')
				// str = str.join(',')
				console.log(str[0],str[1])
				// 价格高低参数。
				scope.listFilterParams.sortmethod = str[0]
				scope.listFilterParams.sortdirection = str[1]


				// 点击时清空列表数组hotellist
				scope.listFilterParams.hotellist = []
				scope.listFilterParams.srcollResh=false
				self.$store.commit('automaticrequest')
			})
			pagecontent.init()
		}
	}
</script>