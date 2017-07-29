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
        image: 'img/008.jpg',
        title: 'Breakfast',
        author: 'Myron',
        featured: true
      }, {
        image: 'img/1.jpg',
        title: 'Morning',
        author: 'mokayi',
        featured: true
      }, {
        image: 'img/1.jpg',
        title: 'Vegetables',
        author: 'NUyyyyyyy'
      }, {
        image: 'img/1.jpg',
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