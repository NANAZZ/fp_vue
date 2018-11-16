<template>
    <div class="app-homeContainer">
        <!--1.顶部搜索框-->
        <mt-search cancel-text="取消" placeholder="搜索"></mt-search>
        <!--2.轮播图-->
        <mt-swipe :auto="4000">    <!--:show-indicators="false"不显示轮播的高亮点-->
            <mt-swipe-item v-for="item in list" :key="item.id">
               <img :src="item.img_url" />
            </mt-swipe-item> 
        </mt-swipe>
        <!--3.十二宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
             <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a @click.stop.prevent="jumpGoodsList('new')">
                    <img src="../../assets/cell1.jpg">
                    <div class="mui-media-body">首发新款</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a @click.stop.prevent="jumpGoodsList('clothes')">
                    <img src="../../assets/cell12.jpg">
                    <div class="mui-media-body">服装</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a @click.stop.prevent="jumpGoodsList('jean')">
                    <img src="../../assets/cell2.jpg">
                    <div class="mui-media-body">牛仔裤</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a @click.stop.prevent="jumpGoodsList('coat')">
                    <img src="../../assets/cell3.jpg">
                    <div class="mui-media-body">外套</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a  @click.stop.prevent="jumpGoodsList('dress')">
                    <img src="../../assets/cell11.jpg">
                    <div class="mui-media-body">连衣裙</div>
                </a>
            </li> 
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a @click.stop.prevent="jumpGoodsList('bra')">
                    <img src="../../assets/cell6.jpg">
                    <div class="mui-media-body">内衣</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a @click.stop.prevent="jumpGoodsList('shoes')">
                    <img src="../../assets/cell4.jpg">
                    <div class="mui-media-body">鞋履</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a @click.stop.prevent="jumpGoodsList('ornament')">
                    <img src="../../assets/cell5.jpg">
                    <div class="mui-media-body">配饰</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a @click.stop.prevent="jumpGoodsList('gift')">
                    <img src="../../assets/cell10.jpg">
                    <div class="mui-media-body">礼品小铺</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a @click.stop.prevent="jumpGoodsList('cosmetology')">
                    <img src="../../assets/cell7.jpg">
                    <div class="mui-media-body">美容养颜</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a @click.stop.prevent="jumpGoodsList('sport')">
                    <img src="../../assets/cell8.jpg">
                    <div class="mui-media-body">运动系列</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a @click.stop.prevent="jumpGoodsList('sale')">
                    <img src="../../assets/cell9.jpg">
                    <div class="mui-media-body">促销优惠</div>
                </a>
            </li>
        </ul> 
    </div>
</template>
<script>
    import swiper from "../sub/swiper.vue";
    export default{
        data(){ return{
            list:[]    //创建data属性保存数据
        } },
        methods:{
            getImage(){
                //发送ajax请求并且获取图片列表并且显示
                this.$http.get("imagelist").then(result=>{
                    //获取返回数据，保存在list属性中
                    this.list = result.body;
                })                
            },
            jumpGoodsList(serious){
                console.log(serious);
                this.$router.push({path:"/home/goodslist",query:{serious:serious}});
            }
        },
        created(){
            this.getImage();
        }
    }
</script>
<style>
    /*自定义样式*/
    /*.app-homeContainer header.mint-header{
        background-color:#333;
    }*/
    /*搜索框*/
    .app-homeContainer .mint-search{
        height:100%;
    }
    .app-homeContainer .mint-search .mint-searchbar {
        padding: 7px 7px;
    }
    .app-homeContainer input[type='search']{
        height:28px;
        font-size:12px;
        border-radius:0;
        margin-bottom:0;
        background:#fff;
    }
    .app-homeContainer .mint-searchbar-cancel{
        color:#d52975;
        font-size:13px;
    }
    /*轮播图*/ 
    .app-homeContainer .mint-swipe{
        height:310px;
    }
    .app-homeContainer .mint-swipe-item img{
        width:100%;
    }
    /*六宫格*/
    .app-homeContainer .mui-grid-view.mui-grid-9{
        background:#fff !important;
        border:0;
    }
    .app-homeContainer .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        padding:0;
    }
    .app-homeContainer .mui-grid-view.mui-grid-9 img{
        width:100%;
    }
    .app-homeContainer .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size:13px;
    } 
    .app-homeContainer .mui-grid-view.mui-grid-9 .mui-table-view-cell > a:not(.mui-btn) {
        margin: 0;
        padding-top: 10px;
    }
</style>