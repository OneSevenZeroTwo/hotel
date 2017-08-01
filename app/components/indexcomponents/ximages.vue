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
        image: 'http://img01.tobosu.net/zz/Case/zz2012081985878.jpg',
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