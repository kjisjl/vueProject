<script>
import {defineComponent} from 'vue'
import {mapActions, mapState} from "vuex";

export default defineComponent({
  name: "RankList",
  data() {
    return {
      type: 1
    }
  },
  methods: {
    ...mapActions('product', ['getRankAsync'])
  },
  mounted() {
    this.getRankAsync()
  },
  computed: {
    ...mapState('product', ['productRank'])
  },
  //watch: {
  //  type(newType) {
  //    this.getRankAsync()
  //  }
  //}
})
</script>

<template>
  <div class="rank">
    <div class="tab">
      <div class="tab-tit clearfix">
        <a href="javascript:;" :class="{on:type===index}" @click="type=index" v-for="(item,index) in productRank" :key="item.id">
          <p class="img">
            <i></i>
          </p>
          <p class="text">{{item.typeName}}</p>
        </a>
      </div>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item,index) in productRank" :key="item.id" v-show="index===type">
          <div class="img-item" v-for="info in item.productList" :key="info.id">
            <p class="tab-pic">
              <a href="#">
                <img :src="info.imgUrl"/>
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#">{{info.name}}</a>
              </div>
              <p class="info-price">{{info.price|currency}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.rank {
  width: 1200px;
  margin: 0 auto;

  .tab {
    margin: 0 auto;
    overflow: hidden;
    width: 312px;

    .tab-tit {
      text-align: center;

      a {
        display: block;
        padding: 0 18px;
        float: left;
        text-decoration: none;
        font-size: 16px;
        color: #999;

        p {
          margin: 5px 0;
        }

        .img {
          i {
            width: 35px;
            height: 35px;
            display: block;
            background: url(../../../assets/images/home/bg0.png);
            margin-left: 10px;
          }
        }

        .text {
          line-height: 28px;
        }
      }

      .on {
        color: #e60012;

        .img {
          i {
            background-position: -35px 0;
          }
        }
      }
    }
  }

  .content {
    overflow: hidden;
    padding: 10px;

    ul {
      li {
        overflow: hidden;
        list-style: none;
        line-height: 18px;

        .img-item {
          border: 1px solid #e1251b;
          width: 269px;
          float: left;
          overflow: hidden;
          margin: 0 12px 10px;
          background: #fff;

          .tab-pic {
            width: 230px;
            height: 210px;
            overflow: hidden;
            text-align: center;
            margin: 5px auto 18px;

            a {
              img {
                width: 200px;
                height: 200px;
              }
            }
          }

          .tab-info {
            background: #fafafa;

            .info-title {
              height: 50px;
              line-height: 28px;
              overflow: hidden;
              margin: 0 auto;
              padding-left: 10px;

              a {
                color: #333;
                text-decoration: none;
              }
            }

            .info-price {
              font-size: 20px;
              color: #e1251b;
              height: 35px;
              padding-left: 10px;
              display: block;
              line-height: 24px;
              margin: 10px auto 0;
            }
          }
        }
      }
    }
  }
}
</style>