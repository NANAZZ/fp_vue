import Vue from 'vue'
import Router from 'vue-router'
//1.引入自定义组件
import HelloContainer from "./components/HelloWorld.vue"
import TestContainer from "./components/testContainer.vue"
import ListContainer from "./components/listContainer.vue"

import HomeContainer from "./components/tabbar/HomeContainer.vue"
import SearchContainer from "./components/tabbar/SearchContainer.vue"
import ShopContainer from "./components/tabbar/ShopContainer.vue"
import UserContainer from "./components/tabbar/UserContainer.vue"
import LoginContainer from "./components/tabbar/LoginContainer.vue"

import NewsListContainer from "./components/news/newsListContainer.vue"
import NewsInfoContainer from "./components/news/newsInfoContainer.vue"

import GoodsList from "./components/goods/GoodsList.vue"
import GoodsInfo from "./components/goods/GoodsInfo.vue"

import PhotoContainer from "./components/photo/PhotoContainer.vue"

Vue.use(Router)

//2.配置访问自定义组件路径
// path-->访问路径  component-->组件名称
export default new Router({
  routes: [
    {path:'/',redirect:"/home"},
    {path:"/test",component:TestContainer},
    {path:"/list",component:ListContainer},

    {path:"/home",component:HomeContainer},
    {path:"/search",component:SearchContainer},
    {path:"/shop",component:ShopContainer},
    {path:"/user",component:UserContainer},
    {path:"/login",component:LoginContainer},

    {path:"/home/goodslist",component:GoodsList},
    {path:"/home/goodsinfo/:lid",component:GoodsInfo},
    
    {path:"/home/newslist",component:NewsListContainer},
    {path:"/home/newsinfo",component:NewsInfoContainer},
    {path:"/home/photo",component:PhotoContainer},
  ]
})
//测试路径：http://127.0.0.1:3001/#/home