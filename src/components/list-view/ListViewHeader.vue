<template>
    <div class="containr">
        <div>
            <button @click="goback">
                <svg t="1651026578126" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="2061" width="20" height="20">
                    <path d="M143 462h800c27.6 0 50 22.4 50 50s-22.4 50-50 50H143c-27.6 0-50-22.4-50-50s22.4-50 50-50z"
                          p-id="2062"></path>
                    <path d="M116.4 483.3l212.1 212.1c19.5 19.5 19.5 51.2 0 70.7s-51.2 19.5-70.7 0L45.6 554c-19.5-19.5-19.5-51.2 0-70.7 19.6-19.6 51.2-19.6 70.8 0z"
                          p-id="2063"></path>
                    <path d="M328.5 328.6L116.4 540.7c-19.5 19.5-51.2 19.5-70.7 0s-19.5-51.2 0-70.7l212.1-212.1c19.5-19.5 51.2-19.5 70.7 0s19.5 51.2 0 70.7z"
                          p-id="2064"></path>
                </svg>
            </button>
        </div>
        <div>
            <router-link to="/search">
                <svg t="1650613068095" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="2823" width="20" height="20">
                    <path d="M448 768c176.725333 0 320-143.274667 320-320 0-176.725333-143.274667-320-320-320-176.725333 0-320 143.274667-320 320 0 176.725333 143.274667 320 320 320z m0 42.666667c-200.298667 0-362.666667-162.368-362.666667-362.666667S247.701333 85.333333 448 85.333333s362.666667 162.368 362.666667 362.666667-162.368 362.666667-362.666667 362.666667z m304.917333-27.584a21.333333 21.333333 0 0 1 30.165334-30.165334l150.848 150.848a21.333333 21.333333 0 0 1-30.165334 30.165334l-150.848-150.826667z"
                          fill="#3D3D3D" p-id="2824"></path>
                </svg>
            </router-link>
            <router-link to="/login">
                <svg t="1650612924833" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="2003" width="20" height="20">
                    <path d="M849.1 128 174.9 128c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 149 875 128 849.1 128z"
                          p-id="2004"></path>
                    <path d="M849.1 768 174.9 768c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 789 875 768 849.1 768z"
                          p-id="2005"></path>
                    <path d="M849.1 448 174.9 448c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 469 875 448 849.1 448z"
                          p-id="2006"></path>
                </svg>
            </router-link>
        </div>
    </div>
    <div class="gedanBox"  v-for="item in imgs" :key="item.id">
        <img :src="item.pic" alt="">

    </div>
    <div class="HeaderCenter">
        <img :src="obj.imgs" alt="">
        <p class="HeaderCenter-one">{{obj.names}}</p>
        <div class="HeaderCenter-three">
            <img :src="obj.avatarUrl" alt="">
            <p>{{obj.nickname}}</p>
        </div>
        <p class="HeaderCenter-two">{{obj.description}}</p>
    </div>
</template>

<script>
    export default {
        name: "ListViewHeader",

        props:['obj'],
        methods:{
            goback(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped lang="less">
    .containr {
        width: 100%;
        display: flex;
        justify-content: space-between;
        button {
            border: 0;
            outline: none;
            background: #fff;
            vertical-align: middle;
        }
    }
    .HeaderCenter {
        width: 300px;
        height: 150px;
        /*border: #42b983 1px solid;*/
        margin: 0 auto;

        .HeaderCenter-one {
            width: 150px;
            display: inline-block;
            font-size: 18px;
            font-weight: bold;
            margin-left: 20px;
            margin-top: -1px;
            /*border: #42b983 1px solid;*/
        }

        .HeaderCenter-two {
            width: 160px;
            height: 62px;
            /*border: #42b983 1px solid;*/
            overflow: hidden;float: right;
            font-size: 12px;
        }

        img {
            float: left;
            width: 40%;
            height: 100%;
        }

        .HeaderCenter-three {
            width: 130px;
            height: 30px;
            /*border: #42b983 1px solid;*/
            float: right;
            margin-top: -20px;

            img {
                width: 20px;
                height: 20px;
                margin-top: 10px;
                border-radius: 15px;
            }

            p {
                padding-bottom: 10px;
                padding-left: 30px;
                font-size: 12px;
                /*border: #42b983 1px solid;*/
            }

        }
        span {
            margin-left: 20px;
            border: #42b983 1px solid;
        }

    }
</style>