<template>
  <div style="min-height: 140px;">
    <b-card v-for="article in articles" :key="article.id">
      <b-img class="cardImg" :src="article.imgUrl" right></b-img>
      <div class="content">
        <router-link to="/" class="title">{{article.articleName}}</router-link>
        <p class="card-text abstract">
          {{article.summary}}
        </p>
        <div class="meta">
          <a>{{article.nickname}}</a>
          <a> {{article.remark}}</a>
          <a>{{article.like}}</a>
        </div>
      </div>
    </b-card>
  </div>
</template>
<script>
  export default {
    name: "Article",
    data() {
      return {
        articles: [
          {
            "id": "1",
            "imgUrl": 'http://pa4uq3179.bkt.clouddn.com/tu.jpeg',
            "articleName": '通过Python五秒爬取四十万的数据！屌不屌？爬取并分析！',
            "summary": "一个真心爱你的男人最怕的就是失去你，在你面前，他会变得不自信，" +
            "他宁愿委屈自己，也不想一人接受孤独。所以，真爱你的男人，会捧着一颗真心到....",
            "nickname": "越慢无疆",
            "remark": "20",
            "like": "72"
          },
          {
            "id": "2",
            "imgUrl": 'http://pa4uq3179.bkt.clouddn.com/tu.jpeg',
            "articleName": '通过Python五秒爬取四十万的数据！屌不屌？爬取并分析！',
            "summary": "一个真心爱你的男人最怕的就是失去你，在你面前，他会变得不自信，" +
            "他宁愿委屈自己，也不想一人接受孤独。所以，真爱你的男人，会捧着一颗真心到....",
            "nickname": "越慢无疆",
            "remark": "20",
            "like": "72"
          },
          {
            "id": "3",
            "imgUrl": 'http://pa4uq3179.bkt.clouddn.com/tu.jpeg',
            "articleName": '通过Python五秒爬取四十万的数据！屌不屌？爬取并分析！',
            "summary": "一个真心爱你的男人最怕的就是失去你，在你面前，他会变得不自信，" +
            "他宁愿委屈自己，也不想一人接受孤独。所以，真爱你的男人，会捧着一颗真心到....",
            "nickname": "越慢无疆",
            "remark": "20",
            "like": "72"
          },
          {
            "id": "4",
            "imgUrl": 'http://pa4uq3179.bkt.clouddn.com/tu.jpeg',
            "articleName": '通过Python五秒爬取四十万的数据！屌不屌？爬取并分析！',
            "summary": "一个真心爱你的男人最怕的就是失去你，在你面前，他会变得不自信，" +
            "他宁愿委屈自己，也不想一人接受孤独。所以，真爱你的男人，会捧着一颗真心到....",
            "nickname": "越慢无疆",
            "remark": "20",
            "like": "72"
          },
          {
            "id": "5",
            "imgUrl": 'http://pa4uq3179.bkt.clouddn.com/tu.jpeg',
            "articleName": '通过Python五秒爬取四十万的数据！屌不屌？爬取并分析！',
            "summary": "一个真心爱你的男人最怕的就是失去你，在你面前，他会变得不自信，" +
            "他宁愿委屈自己，也不想一人接受孤独。所以，真爱你的男人，会捧着一颗真心到....",
            "nickname": "越慢无疆",
            "remark": "20",
            "like": "72"
          },
          {
            "id": "6",
            "imgUrl": 'http://pa4uq3179.bkt.clouddn.com/tu.jpeg',
            "articleName": '通过Python五秒爬取四十万的数据！屌不屌？爬取并分析！',
            "summary": "一个真心爱你的男人最怕的就是失去你，在你面前，他会变得不自信，" +
            "他宁愿委屈自己，也不想一人接受孤独。所以，真爱你的男人，会捧着一颗真心到....",
            "nickname": "越慢无疆",
            "remark": "20",
            "like": "72"
          },
          {
            "id": "7",
            "imgUrl": 'http://pa4uq3179.bkt.clouddn.com/tu.jpeg',
            "articleName": '通过Python五秒爬取四十万的数据！屌不屌？爬取并分析！',
            "summary": "一个真心爱你的男人最怕的就是失去你，在你面前，他会变得不自信，" +
            "他宁愿委屈自己，也不想一人接受孤独。所以，真爱你的男人，会捧着一颗真心到....",
            "nickname": "越慢无疆",
            "remark": "20",
            "like": "72"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .cardImg {
    width: 125px;
    height: 100px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }

  .abstract {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }

  .title {
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    color: black;
  }

  .meta {
    padding-right: 0 !important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }

  .meta a {
    margin-right: 10px;
    color: #b4b4b4;
  }
</style>
