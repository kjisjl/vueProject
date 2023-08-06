<script>

import {defineComponent} from "vue";
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue";

export default defineComponent({
  components: {Footer, Header}
})
</script>

<template>
  <div>
    <!-- 头部 -->
    <Header></Header>
    <router-view></router-view>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<style lang="less">

</style>