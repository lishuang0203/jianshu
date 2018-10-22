<template>
  <div class="recommend-collection">
    <a class="collection" v-for="topic in topicList" :key="topic.id">
      <router-link :to="'/c/'+topic.id">
        <img :src="topic.topicUrl" class="small-img">
        <div class="name">{{topic.topicName}}</div>
      </router-link>
    </a>
    <router-link class="name" to="/collections">
      更多热门专题
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "Topic",
      data(){
          return {
            topicList:[
              { "id":"1",
                "topicName":"读书",
                "topicUrl":"http://pa4uq3179.bkt.clouddn.com/sheying.jpg"
            },
              { "id":"2",
                "topicName":"摄影",
                "topicUrl":"http://pa4uq3179.bkt.clouddn.com/sheying.jpg"
              },
              { "id":"3",
                "topicName":"旅行",
                "topicUrl":"http://pa4uq3179.bkt.clouddn.com/sheying.jpg"
              },
              { "id":"4",
                "topicName":"故事",
                "topicUrl":"http://pa4uq3179.bkt.clouddn.com/sheying.jpg"
              },
              { "id":"5",
                "topicName":"IT/互联网",
                "topicUrl":"http://pa4uq3179.bkt.clouddn.com/sheying.jpg"
              },
              { "id":"6",
                "topicName":"IT/互联网",
                "topicUrl":"http://pa4uq3179.bkt.clouddn.com/sheying.jpg"
              }
            ]
          }
      }
    }
</script>

<style scoped>

  .recommend-collection{
   margin-bottom: 20px;
  }
  img{
    width: 32px;
    height: 32px;
  }
  .collection{
    display: inline-block;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin: 0 23px 18px 6px;
    min-height: 32px;
    background-color: #f7f7f7;
    vertical-align: top;
    overflow: hidden;
  }
  .name{
    color: black;
    display: inline-block;
    padding: 0 11px 0 6px;
    font-size: 14px;
  }
</style>
