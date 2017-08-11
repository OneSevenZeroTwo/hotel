<template>
	<div class="weui-gallery" v-show="isShowGallery" style="display: block;">
		<span class="weui-gallery__img" :style="{backgroundImage: 'url('+indexImg+')'}"></span>
		<div class="weui-gallery__opr">
			<a @click="hideGallery" href="javascript:" class="weui-gallery__del">
				<!--<i class="weui-icon-delete weui-icon_gallery-delete"></i>-->
				<i class="material-icons" style=" top: 11px;color: #fff;font-size: 39px;position: relative;">&#xE5C9;</i>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			isShowGallery() {

				return this.$store.state.isShowGallery;
			},
			indexImg() {

				return this.$store.state.indexImg;
			}
		},
		methods: {
			hideGallery() {
				this.$store.state.isShowGallery = false
			}
		}
	}
</script>

<style>

</style>