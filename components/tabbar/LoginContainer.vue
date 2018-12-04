<template>
    <div class="app-login">
        <mt-navbar v-model="active">
            <mt-tab-item id="1">登录</mt-tab-item>
            <mt-tab-item id="2">创建账户</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="1">
                <div class="login-container">
                    <div class="login-container-title">登录你的账户或创建一个Free&nbsp;People账户。</div>
                    <input type="email" placeholder="电子邮件" v-model="emailval">
                    <input type="password" placeholder="密码" v-model="upwdval">
                    <a>忘记密码</a>
                    <mt-button type="primary" size="large" @click="btnSubmit">登录</mt-button>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="login-container">
                    <div class="login-container-title">登录你的账户或创建一个Free&nbsp;People账户。</div>
                    <input type="text" placeholder="名字(拼音)" v-model="uname">
                    <input type="email" placeholder="电子邮件" v-model="email">
                    <input type="password" placeholder="密码" v-model="upwd">
                    <input type="password" placeholder="确认密码" v-model="rupwd">
                    <a>显示密码</a>
                    <mt-button type="primary" size="large" @click="btnCreateUser">创建用户</mt-button>
                    <div class="login-container-title login-bottom-title">创建账户表示你同意我们的使用条款和隐私政策。</div>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script> 
    import {Toast} from "mint-ui";
    export default{
        data(){
            return{
                active:"1",
                emailval:"",
                upwdval:"",
                selected:true,
                uname:"",
                email:"",
                upwd:"",
                rupwd:"",
                uid:""
            }
        },
        methods:{
            btnSubmit(){
                var e = this.emailval;
                var p = this.upwdval;
                this.$http.get("login?email="+e+"&upwd="+p).then(result=>{
                    if(result.body.code==1){
                        Toast(result.body.msg);
                        sessionStorage.setItem("email",e);
                        this.$router.push("/");
                        //history.go(-1);
                        location.reload();
                    }else{
                        Toast(result.body.msg);
                    }
                    sessionStorage.setItem("uid",result.body.uid);
                })
            },
            btnCreateUser(){
                var uname=this.uname;
                var email=this.email;
                var upwd=this.upwd;
                if(uname.trim().length==0){
                   Toast("用户姓名不能为空!")
                   return;
                }
                if(email.trim().length==0){
                   Toast("用户邮箱不能为空!")
                   return;
                }
                if(upwd.trim().length==0){
                   Toast("用户密码不能为空!")
                   return;
                }
                var url="register";
                this.$http.post(url,{uname:uname,email:email,upwd:upwd}).then(result=>{
                    Toast("注册成功");
                    this.$router.push("/login");
                    this.uname="";this.email="";this.upwd="";this.rupwd="";
                })
            }
        }
    }
</script>
<style>
    .app-login .mint-navbar .mint-tab-item.is-selected {
        border-bottom: 3px solid #ffafaf;
        color: #262626;
        margin-bottom: -3px;
    }
    .app-login .mint-navbar .mint-tab-item .mint-tab-item-label {
        color: #262626;
    }
    /**/ 
    .login-container{
        margin:10px;
    }
    .login-container .login-container-title{
        font-size:12px;
        color:#262626;
        margin:20px 0;
    }
    .login-container .login-bottom-title{
        text-align:center;
    }
    .login-container>input{
        border:none;
        outline:none;
        border-bottom:1px solid #ccc;
    }
    .login-container>input[type='text'],.login-container>input[type='password'],.login-container>input[type='email']{
        line-height: 15px;
        font-size: 12px;
        width: 100%;
        height: 30px;
        margin-bottom: 30px;
        padding:0;
        border-radius: 0;
        outline: none;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        background-color: #FEF9F8;
        -webkit-appearance: none;
    }
    .login-container>a{
        text-decoration: none;
        color: #262626;
        font-size: 12px;
        text-align: right;
        display: block;
        margin-bottom:30px;
    }
    .login-container .mint-button {
        border-radius: 0;
    }
    .login-container .mint-button--primary {
        color: #262626;
        font-size: 12px;
        background-color: #ffafaf;
    }
    .mui-control-content {
        background-color: white;
        min-height: 215px;
    }
    .mui-control-content .mui-loading {
        margin-top: 50px;
    }
</style>