<template>
	<div>
		<div :class="{'silde-right':direction2=='right','silde-left':direction2=='left'}">
			<div ng-transclude class="nav-content" :class="{'sidebar-move-left':direction2=='left','sidebar-move-right':direction2=='right'}">
				<p @click="changstop()">2222222222222222</p>			
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {

			changstop() {
				this.$store.state.direction2 = 'left'
			},
		},
		computed: {
			direction2() {
				return this.$store.state.direction2;
			},

		}

	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	.left-button {
		float: right;
	}
	/*组件的样式*/
	/*向左滑动的动画*/
	
	@keyframes moveLeft {
		from {
			transform: translateY(320px);
		}
		to {}
	}
	
	.sidebar-move-left {
		animation: moveLeft;
		/*持续时间*/
		animation-duration: 0.5s;
		/*动画播放次数*/
		animation-iteration-count: 1;
		/*执行方向，动画执行结束时保持在它结束时的状态*/
		animation-fill-mode: forwards;
	}
	/*向右边滑动的动画*/
	
	@keyframes moveRight {
		from {}
		to {
			transform: translateY(320px);
		}
	}
	
	.sidebar-move-right {
		animation: moveRight;
		/*持续时间*/
		animation-duration: 0.5s;
		/*动画播放次数*/
		animation-iteration-count: 1;
		/*执行方向，动画执行结束时保持在它结束时的状态*/
		animation-fill-mode: forwards;
	}
	
	.nav-content {
		min-width: 100%;
		position: fixed;
		height: 300px;
		bottom: 0;
		background-color: #e1e1e1;
		/*调试代码时经常使用border，帮我们定位到div的一个区域*/
		/*border: 1px solid black;*/
		z-index: 10000;
		/*使用透明度为0来隐藏元素*/
		opacity: 1;
	}
</style>