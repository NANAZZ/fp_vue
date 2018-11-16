<template>
    <div class="app-user">
        <ul class="mui-table-view" style="margin-top: 25px;">
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">
                    电子邮件<span class="my-email">{{email}}</span>
                </a>
            </li>
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">
                    更改密码
                </a>
            </li>
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">
                    个人资料信息
                </a>
            </li>
        </ul>
        <ul class="mui-table-view" style="margin-top: 25px;">
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">
                    地址簿
                </a>
            </li>
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">
                    付款信息
                </a>
            </li>
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">
                    我的评价
                </a>
            </li>
        </ul>
        <ul class="mui-table-view" style="margin-top: 25px;">
            <li class="mui-table-view-cell">
                <a id="about" class="mui-navigate-right">
                    关于 free people
                </a>
            </li>
        </ul>
        <ul class="mui-table-view" style="margin-top: 25px;">
            <li class="mui-table-view-cell">
                <a style="text-align: center;color: #FF3B30;">
                    退出登录
                </a>
            </li>
        </ul>
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
    div.app-user{
        font-size:14px;
    }
    .my-email{
        text-align:right;
        margin-left: 150px;
    }
</style>