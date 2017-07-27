<template>
	<div>
		<header class="bar bar-nav">
			<a class="icon icon-back pull-left"></a>
			<h1 class="title">选择入住人</h1></header>
		<div class="page-content">
			<div class="person-box">
				<p class="tip">请选择真实入住人，以保证后续正常审核、返现。</p>
				<div class="add"><b>+</b> 新增常用入住人<span><i class="cert"></i></span></div>
				<div class="to-input"><input id="inputaddcusname" name="addcusname" type="text" placeholder="请输入入住人姓名" maxlength="30" data-validate="{&quot;rq&quot;:true,&quot;regex&quot;:&quot;^[一-龥]{2,50}|[a-zA-Z][a-zA-Z/]+[a-zA-Z]$&quot;,&quot;msg&quot;:&quot;姓名格式有误&quot;}">
					<div class="confirm">增加</div>
				</div>
				<div class="error">每个房间只需选择一位入住人</div>
				<div class="still"><span class="t2">每个房间只需选择一位入住人</span></div>
				<div class="btnwrap"><button class="cancel">取消</button><button class="submit">确定</button></div>
			</div>
		</div>
		<ul class="per-list">
			<li>
				<div class="checkbox"></div><span>张君华<span></span></span>
			</li>

		</ul>
	</div>
</template>