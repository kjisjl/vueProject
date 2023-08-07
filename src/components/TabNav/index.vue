<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div class="nav-left"  @mouseleave="hiddenList">
        <h2 class="all" @mouseenter="showList" >全部商品分类</h2>
        <div class="sort" v-show="isShow">
          <div class="all-sort-list2" @click.prevent="goSearch" v-show="isShow">
            <div class="item" v-for="c1 in productList" :key="c1.categoryId" v-show="isShow">
              <h3 data-level="1" :data-id="c1.categoryId">
                <a>{{ c1.categoryName }}</a>
              </h3>
              <div class="item-list clearfix">
                <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a data-level="2" :data-id="c2.categoryId">{{ c2.categoryName }}</a>
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a data-level="3" :data-id="c3.categoryId">{{ c3.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a>服装城</a>
        <a>美妆馆</a>
        <a>尚品汇超市</a>
        <a>全球购</a>
        <a>闪购</a>
        <a>团购</a>
        <a>有趣</a>
        <a>秒杀</a>
      </nav>
    </div>
  </div>
</template>
<script>
import {defineComponent} from 'vue'
import {mapActions, mapMutations, mapState} from "vuex";

export default defineComponent({
  name: "TabNav",
  data() {
    return {
      isShow: this.$route.path === '/'
    }
  },
  watch: {
    '$route.path': {
      handler() {
        this.isShow = this.$route.path === '/'
      }
    }
  },
  mounted() {
    this.getProductListAsync(15)
  },
  computed: {
    ...mapState('product', ['productList'])
  },
  methods: {
    ...mapMutations('product', ['SET_PRODUCT_LIST']),
    ...mapActions('product', ['getProductListAsync']),
    hiddenList() {
      if (this.$route.path !== '/')
        this.isShow = false
    },
    showList() {
      this.isShow = true
    },
    //点击跳转到搜索界面时的逻辑
    goSearch(e) {
      const {id, level} = e.target.dataset
      if (id) {
        this.$router.push({
          path: '/search',
          query: {
            ["category" + level + "Id"]: id,
            categoryName: e.target.innerText.trim(),
            keyword:this.$route.query.keyword,
            trademark:this.$route.query.trademark
          }
        })
        this.isShow = false;
      }

    },
  }
})
</script>
<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      border-top: 2px solid #e1251b;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            &:hover {
              background-color: #d9d9d9;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 74px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 570px;
                  padding: 2px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>