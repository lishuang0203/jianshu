<template>
  <div class="collection">
    <b-img src="http://pa4uq3179.bkt.clouddn.com/remen.png" class="log"></b-img>
    <span class="help">如何创建并玩转专题</span>

  <div class="collection-wrap">
    <div class="row">
      <b-col cols="4" v-for="collection in collectionList" :key="collection.id" style="padding-top: 8%">
        <b-card-group>
          <b-card style="background:rgb(247,247,247)">
            <div class="location">
              <img class="thumnail" :src="collection.url">
            </div>
            <p class="title">{{collection.title}}</p>
            <p class="collection-description">{{collection.summary}}</p>
            <div>
              <b-button variant="success">+关注</b-button>
            </div>
            <p class="collection-amount">{{collection.articleAmount}}篇文章 · {{collection.likeAmount}}人关注</p>
          </b-card>
        </b-card-group>
      </b-col>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "Collections",
    data() {
      return {
        collectionList: [
          {
            "id": 1,
            "url": "http://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg",
            "title": "读书",
            "summary": "投稿须知: 读书专题仅收录与读书有关的书评、读书笔记...",
            "articleAmount": 69566,
            "likeAmount": "1951.6K"
          },
          {
            "id": 2,
            "url": "https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
            "title": "故事",
            "collectionDescription": "故事专题，不论是旅行生活中亲身经历的真实故事，还是童话玄幻遐想的虚构故...",
            "articleAmount": 48522,
            "likeAmount": "951.3K"
          },
          {
            "id": 3,
            "url": "https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
            "title": "手绘",
            "summary": "欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleAmount": 24223,
            "likeAmount": "786.6K"
          },
          {
            "id": 4,
            "url": "https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
            "title": "摄影",
            "summary": "欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleAmount": 69566,
            "likeAmount": "1951.6K"
          },
          {
            "id": 5,
            "url": "https://upload.jianshu.io/collections/images/264569/2.pic.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "title": "产品",
            "summary": "欢迎来到@产品专题，本专题汇集了30多万小伙伴，每天有100篇优质文...",
            "articleAmount": 22781,
            "likeAmount": "669.7K"
          },
          {
            "id": 6,
            "url": "https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
            "title": "自然科普",
            "summary": "欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleAmount": 10442,
            "likeAmount": "421.3K"
          },
          {
            "id": 7,
            "url": "https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
            "title": "旅行在路上",
            "summary": "邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。 1.投稿请查看...",
            "articleAmount": 85420,
            "likeAmount": "1152.4K"
          },
          {
            "id": 8,
            "url": "https://upload.jianshu.io/collections/images/25920/enhanced-buzz-wide-16461-1372163238-8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "title": "生活家",
            "summary": "每个人都是生活家  1.生活家收录范围：美食、美妆护肤、穿搭、手工手...",
            "articleAmount": 69566,
            "likeAmount": "1951.6K"
          },
          {
            "id": 9,
            "url": "https://upload.jianshu.io/collections/images/30/IMG_2226.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "title": "美食",
            "summary": "欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleAmount": 46377,
            "likeAmount": "1902.2K"
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .collection {
    position: relative;
    padding: 30px 0 50px;
    text-align: center;
  }

  .log {
    width: 960px;
    min-height: 100px;
    background-color: hsla(0, 0%, 71%, .2);
    border-radius: 6px;
  }

  .help {
    position: absolute;
    right: 130px;
    top: 68px;
    color: white;
  }

  a {
    cursor: pointer;
    color: #333;
    text-decoration: none;
    background-color: transparent;
  }



  .thumnail {
    width: 68px;
    height: 68px;
    display: block;
    cursor: pointer;
    vertical-align: middle;
    border-radius: 10%;

  }

  .location {
    margin-top: -50px;
    margin-left: 40%;
  }

  .title {
    font-size: 19px;
    font-weight: bold;
    text-align: center;
    margin-top: 2%;

  }

  .collection-description {
    font-size: 13px;
    line-height: 25px;
    text-align: center;
    width: 240px;
    margin-left: 15%
  }



  .collection-amount {
    margin-top: 10%;
    font-size: 13px;
    text-align: center;
    color: #333;
  }

</style>
