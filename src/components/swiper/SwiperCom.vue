<template>
    <div class="swiper-container swiper-home">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imgs" :key="item.id">
                <img :src="item.pic"
                     alt="">
            </div>

        </div>
    </div>
</template>

<script>
    import 'swiper/css/swiper.min.css'
    import Swiper from 'swiper'
    import {getBanner} from "@/api";

    export default {
        name: "SwiperCom",
        data(){
            return{
                imgs:[]
            }
        },
        created() {
            this.getBannerImgs()
        },
        updated() {
            const mySwiper=new Swiper('.swiper-home',{
                loop:true,
                autoplay:true
            })
        },
        methods:{
            async getBannerImgs(){
                const res = await getBanner(1)
                this.imgs = res.data.banners
            }
        }
    }
</script>

<style scoped>
.swiper-slide>img{
    width: 100%;

}
</style>