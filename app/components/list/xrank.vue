//排序
<template>
	<div class="slide-selector plugin-inited">
		<header class="bar-nav" style="display: none;">
			<div class="radio-title">
				<span class="title">排序</span>
				<span class="cancel">取消</span>
			</div>
		</header>
		<ul class="page-content" style="margin-top: 1px; padding-top: 0px !important;">		<li class="radio-item selected" value="1,1">
				<label class="label-radio clearfix">
					<div class="radio-icon">
						<span class="radio selected"></span>
					</div>
					<div class="radio-text">默认</div>
					<div class="check"></div>
				</label>
			</li>
			<li class="radio-item" value="2,2">
				<label class="label-radio clearfix">
					<div class="radio-icon">
						<span class="radio"></span>
					</div>
					<div class="radio-text">口碑 高-低</div>
					<div class="check"></div>
				</label>
			</li>
			<li class="radio-item" value="4,1">
				<label class="label-radio clearfix">
					<div class="radio-icon">
						<span class="radio"></span>
					</div>
					<div class="radio-text">价格 低-高</div>
					<div class="check"></div>
				</label>
			</li>
			<li class="radio-item" value="4,2">
				<label class="label-radio clearfix">
					<div class="radio-icon">
						<span class="radio"></span>
					</div>
					<div class="radio-text">价格 高-低</div>
					<div class="check"></div>
				</label>
			</li>
			<li class="radio-item" value="5,2">
				<label class="label-radio clearfix">
					<div class="radio-icon">
						<span class="radio"></span>
					</div>
					<div class="radio-text">星级 高-低</div>
					<div class="check"></div>
				</label>
			</li>
			<li class="radio-item" value="5,1">
				<label class="label-radio clearfix">
					<div class="radio-icon">
						<span class="radio"></span>
					</div>
					<div class="radio-text">星级 低-高</div>
					<div class="check"></div>
				</label>
			</li>
		</ul>
		<div class="arrow up left"></div>
		<div class="describe" style="display: none;"></div>
	</div>
</template>