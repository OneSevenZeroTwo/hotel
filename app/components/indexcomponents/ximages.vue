<template>
  <div class="gridlist-demo-container">
    <mu-grid-list class="gridlist-inline-demo" :cellHeight=100>
      <mu-grid-tile v-for="tile, index in list" :key="index">
        <img :src="tile.image"/>
      
      </mu-grid-tile>
    </mu-grid-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        image: '//pic4.40017.cn/zzy/rimage/2016/10/05/04/F90Ro6.jpg',
        title: 'Breakfast',
        author: 'Myron',
        featured: true
      }, {
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502442055072&di=9da8771f5c8e8fc37a1eb193cc0ccdac&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201601%2F2016011405.jpg',
        title: 'Morning',
        author: 'mokayi',
        featured: true
      }, {
        image: 'http://pic4.40017.cn/zzy/rimage/2016/10/10/17/Vh7KrL.jpg',
        title: 'Vegetables',
        author: 'NUyyyyyyy'
      }, {
        image: 'http://pic4.40017.cn/hotel/2016/08/20/13/12PVG7.jpg',
        title: 'water',
        author: 'TDDyyyyyyy'
      }]
    }
  }
}
</script>

<style>
.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gridlist-inline-demo{
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.mu-grid-tile {
	height: 80%;
}
.mu-grid-tile-titlebar{
	display: none;
}
</style>