<template>
    <HeaderCom/>
    <SwiperCom/>
    <iconList/>
    <musicList/>

</template>

<script>
import SwiperCom from "@/components/swiper/SwiperCom";
import iconList from "@/icon-list/iconList";
import musicList from "@/music-list/musicList";
import HeaderCom from "@/components/header/HeaderCom";
export default {
  name: 'HomeView',
  components: {
SwiperCom,iconList,musicList,HeaderCom
  }
}
</script>
