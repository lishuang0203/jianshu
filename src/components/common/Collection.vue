<template>
  <div>
    <b-row>
      <b-col cols="8">
        <b-media vertical-align="center" class="article-box" >
          <img :src="topic.topicUrl" class="article-thumbnail"/>
          <h4 class="topicfont">{{topic.topicName}}</h4>
          <p class="abstract">
            <span>收藏了{{topic.articleCount}}篇文章·{{topic.fans}}人关注</span>
          </p>
          <button class="btn  write-btn2">
          投稿
          </button>
          <button class="btn write-btn">
            +关注
          </button>
        </b-media>
        <div>
          <a class="content"target="_blank" v-for="t in topic.articleList":key="t.id" >
            <div class="title">{{t.title}}</div>
            <img :src="t.thumbnail" class="picture">
            <div class="text">{{t.summary}}</div>
            <div class="writer">{{t.nickname}}</div>
            <img src="http://p88kzenjw.bkt.clouddn.com/1.png" class="info1">
            <div class="comment">{{t.comments}}</div>
            <img src="http://p88kzenjw.bkt.clouddn.com/2.png" class="info2">
            <div class="like">{{t.likes}}</div>
          </a>
        </div>

      </b-col>
      <b-col cols="4">
<p style="font-size: 10pt;color: grey; margin-top: 4%;">专题公告</p>
        <div style="font-size: 10pt;width: 240px">{{topic.description}}</div>
        <p style="font-size: 10pt;color: grey;margin-top: 4%; ">展开描述</p>
        <div style="border-top:1px solid #dcdcdc">
        <p style="margin-top: 4%">分享到</p>
         <img src="http://p88kzenjw.bkt.clouddn.com/weibo.png" style="width: 6%">
          <img src="http://p88kzenjw.bkt.clouddn.com/wechat1.png"  style="width: 6%">
          <img src="http://p88kzenjw.bkt.clouddn.com/more.png"  style="width: 6%">
        </div>
      </b-col>
    </b-row>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        topic: {},
        articleList: [],
        fansList:[]
      }
    },
    activated() {
      this.id = this.$route.params.id;
      console.log(this.id);
      if (this.id == 1) {
        var t = {
          "id": 1,
          "topicName": "读书",
          "topicUrl": "https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
          "summary": "读书读书读书读书读书读书读书读书",
          "articleCount": 49535,
          "fans": 3508269,
          "description":"投稿须知: \n" +
          "读书专题仅收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章。 \n" +
          "文中不得出现非简书的链接;包括但不限于公众号、二维码、头条号、微博、一点资源等带有广告性质的信息; 配图不能带有水印。 \n" +
          "文章收录字数1000字起( 大神请忽略此限制)，请不要直接摘抄原文的话就来投稿。请注意排版美观、请不要密集投稿。 \n" +
          "投稿请查看投稿须知：https://www.jianshu.com/p/2a4cc9232f37 \n" +
          "进群请添加主编微信: MYH561...",
          "creator":"简书",
          "articleList":[
            {
              "id":1,
              "title":"甜言蜜语说给左耳听",
              "summary":"第一次看《左耳》时，我刚好十七岁，五年过去了，我还没有看完。 你懂那种感觉吗？真正喜欢的东西，不敢轻易亵渎，不敢过度使用，不敢贪婪无节制，特别怕...",
              "thumbnail":"https://upload-images.jianshu.io/upload_images/2972396-06c88d7d83338e45.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":2,
              "nickname":"艾冬天",
              "comments":1234,
              "likes":12
            },
            {
              "id":2,
              "title":"阅读对一个人最深广的魅力",
              "summary":"大约在钱小能上一年级的时候，因他的班主任吴老师推荐，我读到这么一本书——《阅读手册》。这是一个叫吉姆·崔利斯的美国人写的，他是著名的阅读研究专家...",
              "thumbnail":"https://upload-images.jianshu.io/upload_images/3136195-89cf0423ac284a69.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":3,
              "nickname":"梅拾璎",
              "comments":1234,
              "likes":12
            },
            {
              "id":3,
              "title":"一个可爱的女子——芸娘",
              "summary":"读《浮生六记》，无不被沈复与芸娘的伉俪情深所感染。古之有举案齐眉、相敬如宾的佳偶，而这两人堪称典范。 最令人称道的，是那个礼法横行、伦理桎梏的年...",
              "thumbnail":"https://upload-images.jianshu.io/upload_images/12770625-57358ded99372797.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":4,
              "nickname":"素心suxin",
              "comments":1234,
              "likes":12
            },
            {
              "id":4,
              "title":"做到这三点，你也可以拥有开挂的人生",
              "summary":"我在学习的一个写作课，老师是个90后男生，全职写作两年，月入6万。他写了将近10本悬疑小说和上百篇书评类稿件。 不过，欲戴王冠，必承其重，他说自...",
              "thumbnail":"https://upload-images.jianshu.io/upload_images/4890897-8eae8ab93bbaa6f8?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":5,
              "nickname":"Helen小姐的老鸭汤",
              "comments":1234,
              "likes":12
            },
            {
              "id":5,
              "title":"24封信，写给此时想哭的你。",
              "summary":"当人生的彷徨在十字路口时，你究竟应该怎么做？ 你可以把你的烦恼写成信之后，偷偷投进僻静的街道旁杂货店。第二天清晨，你就可以在店后的牛奶箱里收到浪...",
              "thumbnail":"https://upload-images.jianshu.io/upload_images/8901276-2d2103fd47574cd1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":6,
              "nickname":"Carrie流浪世界",
              "comments":1234,
              "likes":12
            },
            {
              "id":6,
              "title":"《巴黎圣母院》：命运与人性的见证",
              "summary":"水晶瓶瓶中枯萎的花：埃斯梅拉达 在雨果老爹的任何一个笔触里，埃斯梅拉达都是美的。 她年仅16岁，青春正在这个年纪热烈绽放。她的容颜美，五官精致，..",
              "thumbnail":"https://upload-images.jianshu.io/upload_images/2677417-f70b9971012d4a4e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":7,
              "nickname":"森主踏歌行",
              "comments":1234,
              "likes":12
            },
          ],
          "fansList":[
            {
              "authorId":3,
              "avatar":"11.png"
            }
          ]
        };
        this.topic = t;
      } else {
        this.topic = {};
      }
    },
    computed: function () {
      return this.topic;
    }
  }
</script>

<style scoped>
.article-thumbnail{
  border-radius: 8px;
  width: 80px;
  height: 80px;
  margin-top: 4%;
  margin-left: 9%;
}
  .topicfont{
    margin-left: 23%;
    margin-top: -10%;
    font-weight: bolder;
  }
  .abstract{
    margin-left: 23%;
    margin-top: 2%;
    color: grey;
    font-size: 10pt;
  }
.write-btn {
 color: white;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  font-size: 15px;
  background-color: rgb(66,192,46);
  margin-left: 3%;
  margin-top: -18%;
}
  .write-btn2{
    color:rgb(66,192,46) ;
    width: 100px;
    height: 40px;
    border-radius: 20px;
    font-size: 15px;
    background-color:white ;
    border-color:rgb(66,192,46);
    margin-left: 63%;
    margin-top: -18%;
  }
.content{
  width: 685px;
  height: 180px;
  display: inline-block;
  margin: 0 18px 18px 0;
  min-height: 32px;
  background: white;
  border-radius: 4px;
  vertical-align: top;
  overflow: hidden;
}
.collection img{
  width: 32px;
  height: 32px;
}
a{
  cursor: pointer;
  color: #333;
  text-decoration: none;
  background-color: transparent;
}
.title{
  width: 500px;
  font-size: 14pt;
  font-weight: bolder;
  margin-top: 2%;
  margin-left: 10%
}
.picture{
  width: 125px;
  height: 100px;
  border-radius: 4px;
  margin-left: 80%
}
.text{
  width: 480px;
  font-size: 10pt;
  margin-top: -13%;
  margin-left: 10%;
  color: grey
}
.writer{
  font-size: 10pt;color:grey;margin-top:5%;margin-left:10%;
}
.info1{
  margin-left: 20%;margin-top: -6.5%;
}
.comment{
  margin-left: 23.5%;margin-top: -6.2%;font-size: 10pt;color:grey;
}
.info2{
  margin-left: 29%;margin-top: -6.5%;
}
.like{
  margin-left: 32%;margin-top: -6.3%;font-size: 10pt;color:grey;
}
</style>
