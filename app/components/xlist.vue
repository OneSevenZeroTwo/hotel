<template>
	<div class="weui-panel__bd">
		<p>{{searchVal}}</p>
		<a v-for="items in arr" href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
			<div class="weui-media-box__hd">
				<img @click="showBigPic(items.author.avatar_url)" class="weui-media-box__thumb" :src="items.author.avatar_url" alt="">
			</div>
			<div class="channel" v-html="channel(items.tab,items.good,items.top)">
			</div>

			<div v-html="items.author.loginname" class='autorName'>

			</div>
			<div class="weui-media-box__bd">
				<h4 class="weui-media-box__title" @click="toDetail(items.id)">{{items.title|slice}}</h4>
				<p class="weui-media-box__desc repCount">
					<span>查看/回复： </span>
					<span title="回复数">{{items.reply_count}}</span>
					<span title="点击数">{{"/"+items.visit_count}}</span>
					<span class="lastTime" title="最后回复时间">最后回复:{{items.last_reply_at|xreply}}</span>

				</p>
			</div>
		</a>
		<div class="weui-panel__ft" @click='loadMore()' v-show="isLoading">
			<a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
				<div class="weui-cell__bd">查看更多</div>
				<span class="weui-cell__ft"></span>
			</a>
		</div>
		<div class="weui-loadmore" v-show="!isLoading">
			<i class="weui-loading"></i>
			<span class="weui-loadmore__tips">正在加载</span>
		</div>

	</div>
</template>

<script>
	export default {
		props: ["message", "id"],
		data: function() {
			return {
				page: 1,
				arr: [],
				isLoading: true

			}
		},
		computed:{
			searchVal(){
				return this.$store.state.val;
			}
		},
		methods: {
			loadMore: function() {
				console.log("list加载")

				this.isLoading = false
				this.$ajax({
					url: "https://cnodejs.org/api/v1/topics",
					params: {
						tab: this.message,
						limit: 10,
						page: this.page++
					}
				}).then(function(res) {
					console.log(res)
					this.arr = this.arr.concat(res.data.data)
					this.isLoading = true
				}.bind(this))

			},
			highLight() {
				switch(true) {
					case !this.message:
						this.$store.state.activingNav = 0
						break;
					case this.message == "share":
						this.$store.state.activingNav = 1
						break;
					case this.message == "ask":
						this.$store.state.activingNav = 2
						break;
					case this.message == "job":
						this.$store.state.activingNav = 3
						break;
					case this.message == "good":
						this.$store.state.activingNav = 4
						break;
				}
			},
			channel(input, good, top) {
				switch(input) {
					case "share":
						if(good && top) {
							return `<span class="bg">分享</span>
						<span class="bg" style="color:#fff;background:green;">精华</span>
						<span class="bg" style="color:#fff;background:#e25454;">置顶</span>`;
							break;
						} else if(good && !top) {
							return `<span class="bg">分享</span>
						<span class="bg" style="color:#fff;background:green;">精华</span>`;
							break;
						} else if(!good && top) {
							return `<span class="bg">分享</span>
						<span class="bg" style="color:#fff;background:#e25454;">置顶</span>`;
							break;
						} else {
							return `<span class="bg">分享</span>`;
							break;
						}
					case "job":
						return `<span class="bg">招聘</span>`;
						break;
					case "ask":
						return `<span class="bg" >问答</span>`;
						break;
					default:
						return ""
				}
			},
			showBigPic(imgUrl) {
				console.log(this.$store)

				this.$store.state.galleryIsShow = true;
				this.$store.state.imgUrl = imgUrl;
			},
			toDetail(id) {
				location.href = "#/detail/" + id
			}
		},
		mounted: function() {
			console.log("mounted")
			//后台请求数据动态生成列表
			this.loadMore()
			this.highLight()

		},
		filters: {
			xreply: function(input) {
				var now = Date.now()
				var reply = Date.parse(input)
				var intDiff = (now - reply) / 1000;

				var year = Math.floor(intDiff  /  (60  *  60  *  24 * 30 * 12));
				var month = Math.floor(intDiff  /  (60  *  60  *  24 * 30));
				var day  =  Math.floor(intDiff  /  (60  *  60  *  24));        
				var hour  =  Math.floor(intDiff  /  (60  *  60))  -  (day  *  24);        
				var minute  =  Math.floor(intDiff  /  60)  -  (day  *  24  *  60)  -  (hour  *  60);        
				var second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
				if(year > 0) {
					return year + '年前'
				} else if(month > 0) {
					return month + '月前'
				} else if(day > 0) {
					return day + '天前'
				} else if(hour > 0) {
					return hour + '小时前'
				} else if(minute > 0) {
					return minute + '分钟前'
				} else if(second > 0) {
					return second + '秒前'
				}
			},
			slice(input) {
				if(input.length > 20) {
					return input.slice(0, 18) + "..."
				} else {
					return input
				}
			}
		},
	}
</script>

<style>
	/*不想慢慢在base中提取*/
</style>