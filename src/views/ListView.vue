<template>
    <ListViewHeader :obj="obj"/>
    <ListViewCenter :obj="obj"/>
    <ListViewButton :obj="obj"/>
</template>

<script>
    import {getPlayListDetail} from "@/api";
    import ListViewButton from "@/components/list-view/ListViewButton";
    import ListViewHeader from "@/components/list-view/ListViewHeader";
    import ListViewCenter from "@/components/list-view/ListViewCenter";

    export default {
        name: "ListView",
        components: {ListViewButton, ListViewCenter, ListViewHeader},
        data() {

            return {
                aaa: [],
                obj: {
                    imgs: [],
                    names: '',
                    pingLun: '',
                    description: '',
                    shareCount: '',
                    avatarUrl: '',
                    nickname: '',
                    tracks: '',
                    tracksLength: '',
                },


            }
        },

        created() {
            // console.log(this.$router.query.id)
            //通过id向后端要数据
            //收到数据后，更新自己的data
            this.getPlayListMusic();
        },
        methods: {
            async getPlayListMusic() {
                //2.使用this.$router.query来接收传来的参数
                //3.根据参数id向后台查找对应的歌单里的歌曲等数据信息
                const res = await getPlayListDetail(this.$route.query.id, this.$route.query.picture)
                console.log(res.data)
                //更新数据后，更新自己的data
                this.obj.imgs = res.data.playlist.coverImgUrl
                this.obj.names = res.data.playlist.name
                this.obj.pingLun = res.data.playlist.commentCount
                this.obj.description = res.data.playlist.description
                this.obj.shareCount = res.data.playlist.shareCount
                this.obj.avatarUrl = res.data.playlist.creator.avatarUrl
                this.obj.nickname = res.data.playlist.creator.nickname
                this.obj.tracks = res.data.playlist.tracks
                this.obj.tracksLength = res.data.playlist.tracks.length
            }
        }
    }
</script>

<style scoped lang="less">
    header {
        width: 100%;
        height: 300px;
        /*border: 1px solid red;*/

        .header-one {
            width: 300px;
            height: 50px;
            /*border: 1px solid red;*/

            .HeaderLeft {
                /*display: inline-block;*/
                width: 80px;
                /*border: 1px solid red;*/
                display: flex;
                justify-content: space-around;
            }

            .HeaderRight {
                width: 80px;
                /*border: 1px solid red;*/
                display: flex;
                justify-content: space-around;
                float: right;
            }
        }

        .HeaderCenter {
            width: 300px;
            height: 150px;
            /*margin-left: 20px;*/
            /*border: #42b983 1px solid;*/
            margin: 0 auto;

            .HeaderCenter-one {
                font-size: 18px;
                font-weight: bold;
                margin-left: 18px;
                /*border: #42b983 1px solid;*/
            }

            #HeaderCenter-two {
                width: 160px;
                height: 62px;
                /*border: #42b983 1px solid;*/
                overflow: hidden;
                margin-top: -2px;
                padding-left: 20px;
                font-size: 12px;
            }

            img {
                float: left;
                width: 40%;
                height: 100%;
            }

            .HeaderCenter-three {
                width: 160px;
                height: 40px;
                /*border: #42b983 1px solid;*/
                overflow: hidden;
                padding-left: 10px;

                img {
                    width: 20px;
                    height: 20px;
                    border-radius: 10px;
                    padding-left: 20px;
                    padding-top: 10px;
                }

                p {
                    padding-left: 20px;
                    font-size: 12px
                }
            }


            span {
                margin-left: 20px;
            }
        }

        ul {
            width: 300px;
            height: 50px;
            display: flex;
            /*border: #42b983 1px solid;*/
            justify-content: space-between;
            margin: 0 auto;
            padding: 10px;

            li {
                list-style: none;
            }

            p {
                margin-top: -5px;
                font-size: 12px;
                text-align: center;
            }
        }
    }

    footer {
        width: 300px;
        margin: 0 auto;
        height: 500px;
        /*border: blue 1px solid;*/

        .footer-first {
            width: 260px;
            height: 40px;
            /*border: #59ff00 1px solid;*/
            margin: 0 auto;

            .footer-first-left {
                display: flex;
                justify-content: space-around;
                width: 150px;
                height: 90%;
                /*border: orange 1px solid;*/
                margin-left: -45px;

                .footer-first-left-one {
                    margin-top: 7px;
                    font-size: 18px;
                    font-weight: bold;
                    margin-left: -10px;
                }

                .footer-first-left-two {
                    width: 10px;
                    font-weight: lighter;
                    margin-top: 9px;
                }
            }

            .footer-first-right {
                width: 100px;
                height: 80%;
                background: #ef3a07;
                border-radius: 15px;
                display: inline-block;
                float: right;
                margin-top: -35px;
            }

            p {
                font-size: 14px;
                color: #d9d9d9;
                margin-top: 5px;
            }
        }

        .footer-second {
            list-style: none;
            border: 1px salmon solid;
            padding-top: 10px;


            .footer-second-one {
                /*border: 1px seagreen solid;*/
                display: inline-block;
                margin-top: 18px;
                height: 18px;
                width: 10px;
            }

            .footer-second-two {
                /*border: 1px #24096c solid;*/
                height: 18px;
                font-size: 14px;
                width: 70%;
                overflow: hidden;
                /*margin:0 auto;*/
                font-weight: bold;
                margin-top: -28px;
                margin-left: 22px;
            }

            .footer-second-three {
                /*border: 1px #790961 solid;*/
                font-size: 12px;
                font-weight: lighter;
                width: 70%;
                overflow: hidden;
                margin-top: -14px;
                margin-left: 22px;
            }
        }

    }
</style>