<template>
    <div class="app-shop">
        <h4>购物车</h4>
        <!--商品列表-->
        <div class="mui-card">
            <div class="mui-card-header">商品列表</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media" v-for="(item,i) in shopCartList">
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-left" :src="item.pic">
                                <div class="mui-media-body">
                                    <p class="title">{{item.title}}</p>
                                    <p class="size">尺码：{{item.size}}</p>
                                    <p class='mui-ellipsis'>
                                        <span class="price">￥{{item.price}}</span>
                                        <span class="count">
                                            <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                                                <button class="mui-btn mui-btn-numbox-minus" type="button" @click="minus(i)">-</button>
                                                <input id="test" class="mui-input-numbox" type="number" v-model="item.count"/>
                                                <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add(i)">+</button>
                                            </div>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mui-card-footer"><span>合计：</span><span>￥{{getSubTotal}}</span></div>
        </div>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    export default{
        data(){
            return{
                email:"",
                uid:"",
                shopCartList:[],
                count:""
                // count:localStorage.getItem("count").split(","),
                // size:localStorage.getItem("size").split(","),
                // title:localStorage.getItem("title").split(","),
                // price:localStorage.getItem("price").split(","),
                // pic:localStorage.getItem("pic").split(","),
                // lid:localStorage.getItem("lid").split(",")
            }
        },
        methods:{
            add(i){
                var a=document.getElementsByClassName("mui-input-numbox")[i]
                a.value++;
            },
            minus(i){
                var a=document.getElementsByClassName("mui-input-numbox")[i]
                a.value--;
            },
            getShopCart(){
                this.$http.get("getshopcart?uid="+this.uid).then(result=>{
                    this.shopCartList=result.body;
                    var oo="" 
                    for(var item of this.shopCartList){
                        var tt=Number(item.count)
                        console.log(tt)
                        var yy=oo+tt
                        eval({yy})
                        //console.log(countTotal);
                        //var countTotal=this.count;
                        //console.log(countTotal);
                        //Number(countTotal) += 
                        //console.log(this.count);
                    }
                     console.log(oo)
                    this.$store.commit("increment",this.count);
                })
            },
        },
        created(){
            this.email = sessionStorage.getItem("email");
            this.uid = sessionStorage.getItem("uid");
            if(!this.email) {
                Toast("请先登录，再使用购物车");
                setTimeout(()=>{
                    this.$router.push("/login");
                },2000)
            }else{
                this.getShopCart();
            }
        },
        computed:{
            getSubTotal:function(){
                var sum=0;
                for(var item of this.shopCartList){
                    sum +=item.price * item.count;
                }
                return sum;
            }
        }
    }
</script>
<style>
    .app-shop h4{
        font-weight:500;
        margin:15px;
    }
    .app-shop .mui-card .mui-card-header{
        font-size: 13px;
    }
    .app-shop .mui-card .mui-card-content{
        font-size:12px;
    }
    .app-shop .mui-card .mui-card-content .mui-card-content-inner{
        padding: 10px;
    }
    .app-shop .mui-card .mui-card-content .mui-card-content-inner ul li{
        padding: 5px;
    }
    .app-shop .mui-card .mui-card-content .mui-card-content-inner ul li a{
        padding: 0;
        width: 100%;
        display: block;
        margin: 0 auto;
    }
    .app-shop .mui-card .mui-card-content .mui-card-content-inner ul li a img{
        height: 100px;
        max-width: none;
        width: auto !important;
    }
    .app-shop .mui-card .mui-card-content .mui-card-content-inner ul li a div.mui-media-body{
        margin:0;
    }
    .app-shop .mui-card .mui-card-content .mui-card-content-inner ul li a div.mui-media-body p.title,.size{
        margin-top:10px;
        font-size:12px;
        color:#262626;
    }
    .app-shop .mui-card .mui-card-content .mui-card-content-inner ul li a div.mui-media-body p.mui-ellipsis{
        display:flex;
        justify-content:space-between;
        margin-top:10px;
        font-size:12px;
        color:#262626;
    }
    .app-shop .mui-card .mui-card-content .mui-card-content-inner ul li a div.mui-media-body p.mui-ellipsis span.count div.mui-numbox{
        width: 77px;
        height: 25px;
        padding: 0 25px 0 25px;
    }
    .app-shop .mui-card .mui-card-content .mui-card-content-inner ul li a div.mui-media-body p.mui-ellipsis span.count div.mui-numbox button.mui-btn{
        width: 25px;
    }
    .app-shop .mui-card .mui-card-content .mui-card-content-inner ul li a div.mui-media-body p.mui-ellipsis span.count div.mui-numbox .mui-input-numbox {
        width: 25px;
        font-size:12px;
    }
    .app-shop .mui-card .mui-card-footer{
        color:#262626;
    }
    /*未登录样式
    .unlogin{
        padding:20px;
    }
    .unlogin-login{
        display:block;
    }*/
</style>