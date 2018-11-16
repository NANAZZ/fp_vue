<template>
    <div class="app-shop">
        <h4>购物车</h4>
        <!--商品列表-->
        <div class="mui-card">
			<div class="mui-card-header">商品列表</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media"  >
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-left" src="../../assets/cell1.jpg">
                                <div class="mui-media-body">
                                    <p class="title">{{title}}</p>
                                    <p class='mui-ellipsis'>
                                        <span class="price">￥{{price}}</span>
                                        <span class="count">
                                            <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                                                <button class="mui-btn mui-btn-numbox-minus" type="button" @click="minus(item.lid)">-</button>
                                                <input id="test" class="mui-input-numbox" type="number" v-model="count"/>
                                                <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add(item.lid)">+</button>
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
    export default{
        data(){
            return{
                shopCartList:[],
                val:1,
                count:"",
                title:"",
                price:"",
                pic:""
            }
        },
        methods:{
            add(id){
                for(var item of this.shopCartList){
                    if(item.lid==lid){
                        item.count++;
                        break;
                    }
                }
            },
            minus(lid){
                for(var item of this.shopCartList){
                    if(item.lid==lid){
                        if(item.count<2)return;
                        item.count--;
                        break;
                    }
                }
            }
        },
        created(){
            this.lid = localStorage.getItem("lid");
            this.count = localStorage.getItem("count");
            this.size = localStorage.getItem("size");
            this.title = localStorage.getItem("title");
            this.price = localStorage.getItem("price");
            this.pic = localStorage.setItem("pic");
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
    .app-shop .mui-card .mui-card-content .mui-card-content-inner ul li a div.mui-media-body p.title{
        margin-top:5px;
        font-size:12px;
        color:#262626;
    }
    .app-shop .mui-card .mui-card-content .mui-card-content-inner ul li a div.mui-media-body p.mui-ellipsis{
        display:flex;
        justify-content:space-between;
        margin-top:15px;
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
</style>