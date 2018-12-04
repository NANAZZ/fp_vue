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
                <mt-button class="btn2" size="large" @click="selectCartTo()">添加至购物车</mt-button>
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
            info:[{title:null,price:null}],
            goodsfix:[],
            val:1,
            size:"S",
            arr1:"",
            arr2:"",
            arr3:"",
            arr4:"",
            arr5:"",
            arr6:"",
            lid:this.$route.params.lid,
            cid:null,   
        } 
    },
    methods:{
        getGoodsImage(){
            this.$http.get("goodsimage?lid="+this.lid).then(result=>{
                this.goodsimage=result.body.data;
            })
        },
        getGoodsInfo(){
            this.$http.get("goodsinfo?lid="+this.lid).then(result=>{
                this.info=result.body.data;
            })
        },
        getGoodsFix(){
            this.$http.get("goodsfix?lid="+this.lid).then(result=>{
                this.goodsfix=result.body.data;
                //console.log(this.goodsfix)
                //未实现滑动图片功能
                // if(this.goodsfix.length<3){
                //     return;
                // }else{
                    
                // }
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
        selectCartTo(){
            var uid = sessionStorage.getItem("uid");
            var lid = this.lid;
            var count = this.val;
            var size = this.size;
            var title = this.info[0].title;
            var price = this.info[0].price;
            var pic = this.goodsimage[0].md;
            if(!uid){
                Toast("请先登录");
                setTimeout(()=>{
                    this.$router.push("/login");
                },1500)
            }else{
                this.$http.get("selectCart?uid="+uid+"&lid="+lid+"&size="+size).then(result=>{
                    //console.log(result.body);
                    if(result.body.code==1){
                        //console.log(result.body.cid)
                        this.val = Number(result.body.count) + Number(count);
                        this.cid = result.body.cid;
                        this.addCountTo();
                    }else{
                        this.addCartTo();
                    }
                })
            }
            //我觉得可以不用存了
            // //1.商品编号
            // if(!sessionStorage.getItem("lid")){
            //     this.arr6=lid;
            // }else{
            //     this.arr6=sessionStorage.getItem("lid")+","+lid;
            // }
            // sessionStorage.setItem("lid",this.arr6);
            // //2.数量
            // if(!sessionStorage.getItem("count")){
            //     this.arr1=count;
            // }else{
            //     this.arr1=sessionStorage.getItem("count")+","+count;
            // }
            // sessionStorage.setItem("count",this.arr1);
            // //3.尺码
            // if(!sessionStorage.getItem("size")){
            //     this.arr2=size;
            // }else{
            //     this.arr2=sessionStorage.getItem("size")+","+size;
            // }
            // sessionStorage.setItem("size",this.arr2);
            // //4.标题
            // if(!sessionStorage.getItem("title")){
            //     this.arr3=title;
            // }else{
            //     this.arr3=sessionStorage.getItem("title")+","+title;
            // }
            // sessionStorage.setItem("title",this.arr3);
            // //5.价格
            // if(!sessionStorage.getItem("price")){
            //     this.arr4=price;
            // }else{
            //     this.arr4=sessionStorage.getItem("price")+","+price
            // }
            // sessionStorage.setItem("price",this.arr4);
            // //6.图片
            // if(!sessionStorage.getItem("pic")){
            //     this.arr5=pic;
            // }else{
            //     this.arr5=sessionStorage.getItem("pic")+","+pic;
            // }
            // sessionStorage.setItem("pic",this.arr5);
        },
        addCountTo(){
            this.$http.get("addCount?cid="+this.cid+"&count="+this.val).then(result=>{
                this.$store.commit("increment",this.val);
                Toast(result.body.msg);
            })
        },
        addCartTo(){
            var uid = sessionStorage.getItem("uid");
            var lid = this.lid;
            var count = this.val;
            var size = this.size;
            var title = this.info[0].title;
            var price = this.info[0].price;
            var pic = this.goodsimage[0].md;
            this.$http.get("addCart?lid="+lid+"&count="+count+"&size="+size+"&title="+title+"&price="+price+"&pic="+pic+"&uid="+uid).then(result=>{
                if(result.body.code==1){
                    this.$store.commit("increment",count);
                    Toast(result.body.msg);
                }else{
                    Toast(result.body.msg);
                }
            })
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