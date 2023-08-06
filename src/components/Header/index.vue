<script>
import {defineComponent} from 'vue'
import TabNav from "@/components/TabNav/index.vue";

export default defineComponent({
  name: "Header",
  components: {TabNav},
  methods: {
    //点击跳转到搜索界面，并传参数keywords
    goSearch() {
      const keyword = this.$refs.refSearch.value.trim()
      //if (keyword) {
        this.$router.push({
          path: '/search',
          query: {
            ...this.$route.query,
            keyword
          }
        })
      //}
    }
  },
  mounted() {
  //  让刷新时搜索框里也有关键字
    this.$refs.refSearch.value=this.$route.query.keyword ||null
    this.$bus.$on('clearKeyword',()=>{this.$refs.refSearch.value = null;})

  }
})
</script>

<template>

  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a>我的订单</a>
          <a>我的购物车</a>
          <a>我的尚品汇</a>
          <a>尚品汇会员</a>
          <a>企业采购</a>
          <a>关注尚品汇</a>
          <a>合作招商</a>
          <a>商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link to="/" class="logo" title="尚品汇">
          <img src="./images/logo.png" alt="">
        </router-link>
      </h1>
      <div class="searchArea">
        <form @submit.prevent class="searchForm">
          <input autocomplete="off" ref="refSearch" type="text" id="autocomplete" class="input-error input-xxlarge" @keyup.enter="goSearch"
                 placeholder="请输入搜索关键字"/>
          <button @click="goSearch" class="sui-btn btn-xlarge btn-danger" type="button">搜索</button>
        </form>
      </div>
    </div>
    <!--    路由里有isTabNav时显示导航栏-->
    <TabNav v-if="$route.meta.isTabNav"></TabNav>
  </header>
</template>

<style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }

      }

    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>