<template>
    <div class="app-goodslist">
        <!--1.顶部搜索框-->
        <mt-search cancel-text="取消" placeholder="搜索"></mt-search>
        <div class="goodslist">
            <div class="goods-item" v-for="item in list" :key="item.lid">
                <img :src="item.pic" @click="getDetail(item.lid)">
                <h3 class="title">{{item.title}}</h3>
                <div class="info">
                    <p class="price">
                        <span class="now">￥{{item.price}}</span>
                    </p>
                </div>     
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[],
                serious:this.$route.query.serious,
            }
        },
        methods:{
            getGoodsList(serious){
                this.$http.get("goodslist?serious="+this.serious).then(result=>{
                    this.list = result.body.data;
                })                
            },
            getDetail(lid){
                this.$router.push("/home/goodsinfo/"+lid);
            }
        },
        created(){
            this.getGoodsList();
        }
    }
</script>
<style>
    /*搜索框*/
    .app-goodslist .mint-search{
        height:100%;
        width:100%;
    }
    .app-goodslist input[type='search']{
        height:28px;
        font-size:12px;
        border-radius:0;
        margin-bottom:0;
        background:#fff;
    }
    .app-goodslist .mint-searchbar-cancel{
        color:#d52975;
        font-size:13px;
    }
    /*商品列表*/ 
    .goodslist{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        padding:7px;
    }
    .goodslist .goods-item{
        width:49%;
        border:1px solid #ccc;
        box-shadow:0 0 8px #ccc;
        margin:4px 0;
        padding:2px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        min-height:293px;
    }
    .goodslist .goods-item img{
        width:100%;
    }
    .goodslist .goods-item h3{
        font-size: 13px;
        color: #262626;
        font-weight: 400;
        text-align: center;
        margin: 15px 0 10px;
    }
    .goodslist .goods-item .now{
        color: #262626;
        font-weight: 400;
        font-size: 13px;
        text-align: center;
        display: block;
    }
</style>