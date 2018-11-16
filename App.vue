<template>
    <div class="app-container">
        <!--1.顶部导航栏-->
        <div class="header-bg"><img src="./assets/logo.svg"></div>
        <!--2.容器显示不同组件-->
        <router-view></router-view>
        <!--3.底部导航栏-->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">主页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shop">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">{{$store.getters.optCount}}</span>
                </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" v-if="email" to="/user">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">用户</span>
			</router-link>
            <router-link class="mui-tab-item" v-else to="/login">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">用户</span>
			</router-link>
		</nav>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                email:""
            }
        },
        created() {
            this.email = sessionStorage.getItem("email");
        },
    }
</script>
<style>
    body{
        background-color:#FEF9F8 !important;
    }
    .app-container{
        padding-bottom:50px;
        overflow-x:hidden;
    }
    .app-container .header-bg{
        background:#fff;
        text-align:center;
        padding: 10px 0;
    }
    .app-container .header-bg img{
        width:175px;
    }
    nav.mui-bar-tab .mui-tab-item.mui-active {
        color: #d52975;
    }
    nav.mui-bar-tab .mui-icon-extra-cart .mui-badge {
        color: #fff;
        background: #D52975;
    }
    .mui-bar-tab .mui-tab-item-tao {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item-tao .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    
    .mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
        font-size:11px;
        display:block;
        overflow:hidden;
        text-overflow:ellipsis;

    }
</style>
