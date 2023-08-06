<script>
import {defineComponent} from 'vue'
import {getLike} from "@/api/product";
import {mapState} from "vuex";

export default defineComponent({
  name: "Like",
  data(){
    return{
      pageNo: 1,
      pageSize:6
    }
  },
  methods:{
    change(){
      this.pageNo++;
      if(this.pageNo>this.likeList.pageSum){
        this.pageNo=1
      }
    }
  },
  computed:{
    ...mapState('product',['likeList'])
  },
  watch:{
    'pageNo':{
      handler(){
        this.$store.dispatch('product/getLikeListAsync',{pageNo:this.pageNo,pageSize:this.pageSize})
      },
      immediate:true
    }
  },
  mounted() {

  }
})
</script>

<template>
  <div class="like">
    <div class="py-container">
      <div class="title">
        <h3 class="fl">猜你喜欢</h3>
        <a href="javascript:;" class="fr tip changeBnt" @click="change">换一换</a>
      </div>
      <div class="bd">
        <ul class="favourate">
          <li v-for="item in likeList.likeList" :key="item.id">
            <img :src="item.imgUrl" alt=""/>
            <div class="like-text">
              <p>{{item.title}}</p>
              <h3>{{item.price|currency}}</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.like {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      overflow: hidden;

      .fl {
        float: left;
        font-size: 20px;
        line-height: 30px;
      }

      .fr {
        float: right;
        background-image: url(../../../assets/images/home/icons.png);
        width: 66px;
        height: 25px;
        background-position: 182px -104px;
        line-height: 30px;
        font-size: 12px;
        font-weight: 400;
        color: #666;
        text-decoration: none;
      }
    }

    .bd {
      .favourate {
        border: 1px solid #e4e4e4;
        overflow: hidden;
        padding: 0 10px;
        box-sizing: border-box;
        display: flex;

        li {
         &:not(:last-child) {
           border-right: 1px solid #e4e4e4;
         }
          height: 250px;
          //margin: 0 -1px;
          overflow: hidden;
          background: #fff;
          position: relative;
          width: 16.667%;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;


          img {
            width: 142px;
            height: 142px;
            transition: all 400ms;

            &:hover {
              opacity: 0.8;
              transform: scale(1.1)
            }
          }

          .like-text {
            padding: 0;
            width: 142px;


            p {
              margin: 5px 0;
            }

            h3 {
              color: #df3033;
              font-size: 20px;
              line-height: 30px;
              margin: 9px 0;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>