<template>
	<div class="page__bd">

		<div :class="['weui-search-bar',{'weui-search-bar_focusing':isSearching}]" id="searchBar">
			<form class="weui-search-bar__form">
				<div class="weui-search-bar__box">
					<i class="weui-icon-search"></i>
					<input v-model="val" @keyup="setSearch(val)" type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
					<a v-autoFocus @click="clearSearch()" href="javascript:" class="weui-icon-clear" id="searchClear"></a>
				</div>
				<label @click="isSearch()" class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
			</form>
			<a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel" @click="delSearching()">取消</a>
		</div>
		<div class="weui-cells searchbar-result" id="searchResult" style="display: none;">
			<div class="weui-cell weui-cell_access">
				<div class="weui-cell__bd weui-cell_primary">
					<p>实时搜索文本</p>
				</div>
			</div>
			<div class="weui-cell weui-cell_access">
				<div class="weui-cell__bd weui-cell_primary">
					<p>实时搜索文本</p>
				</div>
			</div>
			<div class="weui-cell weui-cell_access">
				<div class="weui-cell__bd weui-cell_primary">
					<p>实时搜索文本</p>
				</div>
			</div>
			<div class="weui-cell weui-cell_access">
				<div class="weui-cell__bd weui-cell_primary">
					<p>实时搜索文本</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				isSearching: false,
				val:''
			}
		},
		methods: {
			isSearch: function() {
				this.isSearching = true
			},
			delSearching: function() {
				this.isSearching = false
			},
			clearSearch: function() {
				this.val = ''
			},
			setSearch:function(val){
				this.$store.dispatch('searchVal',val)
			}
		},
		directives: {
			autoFocus: function(el, binding) {
				$(el).click(function() {
					$("#searchInput").focus()
				})
			}
		}
	}
</script>

<style>
	.page__bd {
		margin-top: 49px;
	}
	
	#searchInput {
		margin-bottom: 0;
		box-shadow: none;
	}
	
	#searchText {
		margin-bottom: 0;
	}
	
	.weui-search-bar__cancel-btn {
		color: #b8aeae;
	}
</style>