<template>
	<div id="content">
		<div class="panel">
			<div class="header topic_header">
				<span v-html="detailData.title" class="topic_full_title">        
		      </span>
				<div class="changes">
					<span>
		          发布于{{detailData.create_at}}
		        </span>
					<span>
		          作者 <a href="/user/i5ting" v-html="detailData.author?detailData.author.loginname:''"></a>
		        </span>
					<span>
		       {{detailData.visit_count}}次浏览
		        </span>

					<span> 来自 {{detailData.tab}}</span>

				</div>

			</div>
			<div class="inner topic">

				<div class="topic_content">
					<div class="markdown-text" v-html="detailData.content">

					</div>
				</div>
			</div>
		</div>

		<div class="panel">
			<div class="header">
				<span class="col_fade">{{detailData.reply_count}} 回复</span>
			</div>
			<div v-for="(items,$index) in detailData.replies" class="cell reply_area reply_item
		  " :reply_id="items.id" reply_to_id="" :id="items.id">
				<div class="author_content">
					<a :href="'#!/user/'+items.author.loginname" class="user_avatar">
						<img :src="items.author.avatar_url" title="Rwing"></a>

					<div class="user_info">
						<a v-html="items.author.loginname" class="dark reply_author" :href="'#!/user/'+items.author.loginname"></a>
						<a class="reply_time" href="#59632b6610d696af07768b40">{{$index+1}}楼•{{items.create_at|xreply}}</a>
					</div>
					<div class="user_action">
						<span>
		        <i class="fa up_btn
		          fa-thumbs-o-up
		          invisible" title="喜欢"></i>
		        <span class="up-count">
		          
		        </span>
						</span>

						<span>
		        
		      </span>
					</div>
				</div>
				<div class="reply_content from-Rwing">
					<div v-html="items.content" class="markdown-text">

					</div>
				</div>
				<div class="clearfix">
					<div class="reply2_area">

					</div>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				detailData: {}
				//			detailData:{author:{loginname:111}}
			}
		},
		methods: {

		},
		mounted() {
			this.id = this.$route.params.id
			var self = this;
			this.$ajax({
				url: "https://cnodejs.org/api/v1/topic/" + this.id
			}).then(function(res) {
				console.log(res.data.data)
				self.detailData = res.data.data
			})

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
		}
	}
</script>

<style scoped>

</style>