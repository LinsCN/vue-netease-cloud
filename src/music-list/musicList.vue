<template>
    <h2>
        发现好歌单
        <button>查看更多</button>
    </h2>
    <div class="swiper-container swiper-music-list">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in musicList">
                <router-link :to="{path:'/list',query:{id:item.id}}">
                    <!--1.通过路由，向下一个组件传参数-->

                <img :src="item.picUrl"
                     alt="">
                <span>{{item.playCount>100000000?(item.playCount/10000000).toFixed(2)+'亿':
                    (item.playCount/10000).toFixed(2)+'万'}}</span>
                <p>{{item.name}}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/css/swiper.min.css'
    import  {getMusicList} from "@/api";
    import Swiper from "swiper";

    export default {
        name: "musicList",
        data(){
            return{
                musicList:[]
            }

        },
        created() {
            this.getMusicListData()
        },
        updated() {
            const mySwiper=new Swiper('.swiper-music-list',{
                slidesPerView:3,
                spaceBetween:20,
            })

        },
        methods:{
            async getMusicListData(){
                const res = await getMusicList()
                this.musicList= res.data.result
                console.log(this.musicList)

            }
        }

    }
</script>

<style scoped lang="less">
    button{
        float: right;
        width: 80px;
        height: 30px;
        background: #ffffff;
        border-radius: 15px;
        border: 1px solid #ebebeb;
    }
    .swiper-slide{
        width: 30vw;/*
        height: 30vw;*/
        text-align: center;
        font-size: 12px;
        img{
            width: 90%;
        }
    }
    span{
        position: absolute;
        top: 0;
        right: 10px;
        color: #fff;
    }
    p{
        margin: 0;
        color: black;
    }
    a{
        text-decoration: none;

    }
</style>