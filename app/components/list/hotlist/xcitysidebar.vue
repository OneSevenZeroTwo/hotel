//城市侧边栏
<template>
	<div class="advance-city plugin-inited page-plugin page-on-right">
		<header class="bar bar-nav flight-order-head">
			<a class="icon pull-left icon-back"></a>
			<div class="search-input">
				<i class="icon-search"></i>
				<input type="input" value="" placeholder="请输入城市名、行政区或景区">
			</div>
		</header>
		<div class="page-content page-select" style="">
			<div class="current-city">
				<div class="page-title"></div>
				<div class="get-city">
					<i class="icon-position"></i>点击获取当前城市
				</div>
			</div>
			<div class="search-history">
				<div class="page-title">搜索历史</div>
				<div class="city-list">
					<ul>
						<li city-id="2001" area-type="" area-id="" sug-origin="" class="on"><span>广州</span></li>
						<li city-id="1201" area-type="" area-id="" sug-origin="" class=""><span>杭州</span></li>
						<li city-id="0201" area-type="" area-id="" sug-origin="" class="">
							<span>上海</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="hot-city">
				<div class="page-title">热门城市</div>
				<div class="city-list">
					<ul>
						<li city-id="0101" area-type="" area-id="" sug-origin="" class=""><span>北京</span></li>
						<li city-id="0201" area-type="" area-id="" sug-origin="" class=""><span>上海</span></li>
						<li city-id="2001" area-type="" area-id="" sug-origin="" class="on"><span>广州</span></li>
						<li city-id="1201" area-type="" area-id="" sug-origin="" class=""><span>杭州</span></li>
						<li city-id="2003" area-type="" area-id="" sug-origin="" class=""><span>深圳</span></li>
						<li city-id="1801" area-type="" area-id="" sug-origin="" class=""><span>武汉</span></li>
						<li city-id="2301" area-type="" area-id="" sug-origin="" class=""><span>成都</span></li>
						<li city-id="2701" area-type="" area-id="" sug-origin="" class=""><span>西安</span></li>
						<li city-id="1101" area-type="" area-id="" sug-origin="" class=""><span>南京</span></li>
						<li city-id="0401" area-type="" area-id="" sug-origin="" class=""><span>重庆</span></li>
						<li city-id="1901" area-type="" area-id="" sug-origin="" class=""><span>长沙</span></li>
						<li city-id="1401" area-type="" area-id="" sug-origin="" class=""><span>厦门</span></li>
						<li city-id="0301" area-type="" area-id="" sug-origin="" class=""><span>天津</span></li>
						<li city-id="3201" area-type="" area-id="" sug-origin="" class=""><span>香港</span></li>
						<li city-id="1001" area-type="" area-id="" sug-origin="" class=""><span>哈尔滨</span></li>
						<li city-id="1701" area-type="" area-id="" sug-origin="" class=""><span>郑州</span></li>
						<li city-id="1102" area-type="" area-id="" sug-origin="" class=""><span>苏州</span></li>
						<li city-id="1301" area-type="" area-id="" sug-origin="" class=""><span>合肥</span></li>
						<li city-id="1602" area-type="" area-id="" sug-origin="" class=""><span>济南</span></li>
						<li city-id="2201" area-type="" area-id="" sug-origin="" class=""><span>三亚</span></li>
					</ul>
				</div>
			</div>
			<div class="all-city">
				<div class="page-title">全部城市</div>
				<div class="letter-list">
					<ul>
						<li>A</li>
						<li>B</li>
						<li>C</li>
						<li>D</li>
						<li>E</li>
						<li class="mr0">F</li>
						<li>G</li>
						<li>H</li>
						<li>J</li>
						<li>K</li>
						<li>L</li>
						<li class="mr0">M</li>
						<li>N</li>
						<li>P</li>
						<li>Q</li>
						<li>R</li>
						<li>S</li>
						<li class="mr0">T</li>
						<li>W</li>
						<li>X</li>
						<li>Y</li>
						<li>Z</li>
					</ul>
				</div>
				<div class="city-list">
					<ul class="city-list-ul"></ul>
				</div>
			</div>
		</div>
		<div class="page-content page-search" style="display: none;">
			<ul></ul>
		</div>
		<div class="inner-mask"></div>
	</div>
</template>