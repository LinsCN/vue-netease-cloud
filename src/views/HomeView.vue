<template>
    <SwiperCom/>
    <iconList/>
    <musicList/>
</template>

<script>
import SwiperCom from "@/components/swiper/SwiperCom";
import iconList from "@/icon-list/iconList";
import musicList from "@/music-list/musicList";
export default {
  name: 'HomeView',
  components: {
SwiperCom,iconList,musicList
  }
}
</script>
