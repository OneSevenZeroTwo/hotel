<template>
	<div class="weui-tabbar">
		<a v-for="(items,index) in nav" :href="items.href" :class="[{'activing':index==activingNav},'weui-tabbar__item','weui-bar__item_on']">
			<p class="weui-tabbar__label">
				<i :class="['iconfont',items.ionClass,'iii']"></i>
				<i class="channelname">{{items.tabName}}</i>
			</p>
		</a>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				nav: [{
					ionClass: 'icon-wxbpinpaibao',
					tabName: '首页',
					href: '#/index/topics'
				}, {
					ionClass: 'icon-jieban',
					tabName: '分享',
					href: '#/index/share'
				}, {
					ionClass: 'icon-xiaoxi',
					tabName: '问答',
					href: '#/index/ask'
				}, {
					ionClass: 'icon-biaoqian',
					tabName: '招聘',
					href: '#/index/job'
				}, {
					ionClass: 'icon-zan',
					tabName: '精华',
					href: '#/index/good'
				}]
			}
		},
		methods: {

		},
		mounted: function() {
			console.log("footer加载")

		},
		filters: {

		},
		computed: {
			activingNav() {
//				console.log(this.$store.state.activingNav)
				return this.$store.state.activingNav
			}
		}
	}
</script>

<style>

</style>