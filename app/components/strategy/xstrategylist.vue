<template>
    <div>
        <section id="top">
            <p>出游攻略</p>
        </section>
        <section class="list" v-for="l in list" v-if="l.cover">
            <h4>{{l.title}}</h4>
            <img :src="l.cover" alt="">
            <div class="left">
                <p class="descri">{{l.description | shortTitle }}</p>
                <p class="address">{{l.dests[0]}}</p>
            </div>
        </section>
        <div class="page__bd">
            <div class="weui-loadmore" v-show="isShow">
                <i class="weui-loading"></i>
                <span class="weui-loadmore__tips">正在加载</span>
            </div>
            <div class="weui-loadmore weui-loadmore_line" v-show="!isShow">
                <span class="weui-loadmore__tips">暂无数据</span>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import $ from "jquery"

/*$('.top').on('scroll', function() {
    console.log('a');
})

window.addEventListener('scroll',()=>{console.log(window.scrollY)})
*/
export default {
    data() {
            return {
                list: [],
                pageCount: 2,
                isShow:true
            }
        },
        mounted() {
            this.loadMore();
            var self = this;
            $('#bigbox').on('scroll', function(e) {
                var toBottom = this.scrollHeight - this.scrollTop;
                if (toBottom == window.screen.availHeight) {
                    self.pageCount++;
                    self.loadMore();
                    // console.log(self.pageCount);
                }
            })
        },
        filters: {
            shortTitle(input) {
                if (input.length > 26) {
                    return input.slice(0, 26) + '...';
                } else {
                    return input
                }
            }
        },
        methods: {
            loadMore() {
                var self = this;
                axios.get('https://bird.ioliu.cn/v1?url=https://strip.elong.com/trip/getnews.html?req={"page":' + self.pageCount + ',"limit":5}')
                    .then((response) => {
                        if (self.list.length >= 40) {
                            self.isShow  = false;
                            return
                        }
                        self.list = self.list.concat(response.data.data);
                        console.log(self.list);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
}
</script>
<style scoped>
.top {
    margin-top: 10px;
}

.top p {
    border-bottom: 1px solid #eee;
}

p {
    font-size: 20px;
    line-height: 40px;
    padding-left: 8px;
}

.list {
    border-bottom: 1px solid #eee;
    padding: 10px;
    overflow: hidden;
}

.list h4 {
    padding: 8px 8px;
    font-weight: normal;
    font-size: 16px;
}

.list img {
    display: block;
    height: 73px;
    border-radius: 8px;
    width: 110px;
    float: left;
}

.list p {
    padding: 4px;
    display: block;
    width: 60%;
    float: left;
    font-size: 14px;
    line-height: 16px;
    text-align: justify;
}

.left .address {
    margin-top: 14px;
}
</style>
