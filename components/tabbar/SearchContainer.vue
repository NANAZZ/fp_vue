<template>
    <div class="app-search">
        <mt-search cancel-text="取消" placeholder="搜索"></mt-search>
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
    export default{
        data(){
            return{}
        },
        methods:{
            jumpGoodsList(serious){
                console.log(serious);
                this.$router.push({path:"/home/goodslist",query:{serious:serious}});
            }
        }
    }
</script>
<style>
    /*搜索框*/
    .app-search .mint-search{
        height:100%;
    }
    .app-search .mint-search .mint-searchbar {
        padding: 7px 7px;
    }
    .app-search input[type='search']{
        height:28px;
        font-size:12px;
        border-radius:0;
        margin-bottom:0;
        background:#fff;
    }
    .app-search .mint-searchbar-cancel{
        color:#d52975;
        font-size:13px;
    }
    /*搜索页列表*/
    .app-search .mui-grid-view.mui-grid-9{
        background:#fff !important;
        border:0;
    }
    .app-search .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        padding:0;
    }
    .app-search .mui-grid-view.mui-grid-9 img{
        width: 100%;
    }
    .app-search .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size:13px;
    } 
    .app-search .mui-grid-view.mui-grid-9 .mui-table-view-cell > a:not(.mui-btn) {
        margin: 0;
        padding-top: 10px;
    }
</style>