<template>
    <div class="app-goodsinfo">
        <!--1商品轮播区域-->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
				    <mt-swipe :auto="6000">
                        <mt-swipe-item v-for="item in goodsimage" :key="item.lid">
                            <img :src="item.md"/>
                        </mt-swipe-item> 
                    </mt-swipe>
				</div>
			</div>
		</div>
        <!--2商品购买区域-->
        <div class="container">
            <div class="title">{{info[0].title}}</div>
            <div class="price">￥{{info[0].price}}</div>
            <div class="fix">选购此搭配</div>
            <div class="fix-pic">
                <div class="fix-pic-show">
                    <div class="fact-width">
                        <img :src="item.fix" v-for="item in goodsfix" :key="item.fid">
                    </div>
                </div>
            </div>
            <div class="count">
                购买数量：
                <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="minus()">-</button>
                    <input id="test" class="mui-input-numbox" type="number" value="5" v-model="val"/>
                    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add()">+</button>
                </div>
            </div>
            <div class="size">
                选择尺码：
                <select v-model="size">
                    <option>XS</option>
                    <option selected>S</option>
                    <option>M</option>
                    <option>L</option>
                </select>
                <span></span>
            </div>
            <div>
                <mt-button class="btn1" size="large">立即购买</mt-button>
                <mt-button class="btn2" size="large" @click="addCartTo">添加至购物车</mt-button>
            </div>
        </div>	
        <!--3商品参数区域-->
        <div class="mui-card">
			<div class="mui-card-header">产品详情</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner bottom-inner">
					<p>产品货号：48891212</p>
                    <p>产品材质：100%棉</p>
                    <p>洗涤建议：冷水机洗</p>
				</div>
			</div>
		</div>
        <div class="mui-card">
			<div class="mui-card-header">产品评价</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner bottom-inner">
					<p>暂无</p>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui';
export default {
    data(){
        return {
            goodsimage:[],
            info:{},
            goodsfix:[],
            val:1,
            size:"S"            
        } 
    },
    methods:{
        getGoodsImage(){
            var lid = this.$route.params.lid;
            this.$http.get("goodsimage?lid="+lid).then(result=>{
                this.goodsimage=result.body.data;
            })
        },
        getGoodsInfo(){
            var lid = this.$route.params.lid;
            this.$http.get("goodsinfo?lid="+lid).then(result=>{
                this.info=result.body.data;
            })
        },
        getGoodsFix(){
            var lid = this.$route.params.lid;
            this.$http.get("goodsfix?lid="+lid).then(result=>{
                this.goodsfix=result.body.data;
            })
        },
        add(){
            if(this.val!=999)
            this.val++;
        },
        minus(){
            if(this.val!=1)
            this.val--;
        },
        addCartTo(){
            var lid = this.$route.params.lid;
            var count = this.val;
            var size = this.size;
            this.$http.get("addCart?lid="+lid+"&count="+count+"&size="+size).then(result=>{
                if(result.body.code==1){
                    this.$store.commit("increment",count);
                    Toast(result.body.msg);
                }else{
                    Toast(result.body.msg);
                }
            })
            //更新App.vue组件中购物车的数量
            // localStorage.setItem("lid",lid);
            // localStorage.setItem("count",count);
            // localStorage.setItem("size",size);
            // localStorage.setItem("title",this.info[0].title);
            // localStorage.setItem("price",this.info[0].price);
            // localStorage.setItem("pic",this.goodsimage[0]);

            // function details(lid,count,size,title,price,pic){
            //     this.lid=lid;
            //     this.count=count;
            //     this.size=size;
            //     this.title=title;
            //     this.price=price;
            //     this.pic=pic;
            // }
            // var goods=new details(lid,count,size,this.info[0].title,this.info[0].price,this.goodsimage[0]);
            // var objStr=JSON.stringify(goods);
            // var s=window.localStorage;
            // s.setItem("details",objStr);
            
            // appendLocal(key,obj){
            //     if(obj==null) return;
            //     let temp,tempStr='';
            //     try{
            //         if(localStorage.getItem(key)==null){
            //             throw new Error('空或undefined')
            //         }
            //         temp=JSON.parse(localStorage.getItem(key));
            //     }catch(err){
            //         temp=[];
            //     }
            //     temp=temp.map((item)=>{
            //         return JSON.stringify(item);
            //     });
            //     if(temp.indexOf(JSON.stringify(obj))===-1){
            //         temp.push(JSON.stringify(obj));
            //     }
            //     temp.forEach((item,index,arr)=>{
            //         arr.length===index+1 ? tempStr +=`${item}` : tempStr += `${item},`
            //     });
            //     localStorage.setItem(key,`[${tempStr}]`);
            // }
        }
    },
    created() {
        this.getGoodsImage();
        this.getGoodsInfo();
        this.getGoodsFix();
    }
}

</script>
<style>
    .app-goodsinfo .mint-swipe{
        height:490px;
    }
    .app-goodsinfo .mint-swipe-item img{
        width:100%;
    }
    .app-goodsinfo .mui-card-content-inner {
        padding: 5px;
    }
    .container{
        padding:0 10px;
    }
    .container div{
        color:#262626;
        margin-top:10px;
        font-size:13px;
    }
    .container .title{
        font-size:16px;
        font-weight:500;
    }
    .container .price{
        font-size:15px;
        font-weight:500;
    }
    .container .fix-pic{
        width:100%;
        height:200px;
    }
    .container .fix-pic .fix-pic-show{
        width:100%;
    }
    .container .fix-pic .fix-pic-show .fact-width{
        width:400%;
    }
    .container .fix-pic .fix-pic-show .fact-width img{
        height:200px;
        margin-right:5px;
    }
    .container .count{
        margin-top:20px;
    }
    .container .size select{
        border:1px solid #BBB !important;
        padding:5px;
        width: 60px;
        padding-left: 10px;
    }
    .container .size select option{
        border:1px solid #BBB !important;
    }
    .container span{
        border: 5px solid #BBB;
        border-color: transparent;
        border-top-color: #BBB;
        position: relative;
        top: 10px;
        left: -20px;
    }
    .container .mint-button--default {
        color: #262626;
        font-size: 12px;
        margin-bottom: 8px;
        background-color: #fff;
    }
    .container .btn1{
        border:none;
        background:#ffafaf;
        border-radius:0;
    }
    .container .btn2{
        border:1px solid #BBB;
        border-radius:0;
    }
    .app-goodsinfo .mui-card-header {
        font-size: 13px;
        border-radius:0;
        color:#262626;
    }
    .app-goodsinfo .bottom-inner{
        padding-left:15px;
    }
    /*div.fix_pic{
        width:720px;
        height:270px;
        display:flex;
        justify-content: space-between;
        margin-top:15px;
    }
    div.show_width_three{
        width:600px;
        height:268px;
        overflow: hidden;
    }
    div.fact_width{
        width:1200px;
        height:268px;
        display:flex;
        justify-content: space-between;
    }
    div.fact_width img{
        width:180px;
    }
    div.icon_triangle_left,div.icon_triangle_right{
        width:35px;
        height:268px;
        position:relative;
    }
    div.icon_triangle_left img,div.icon_triangle_right img{
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }*/
</style>