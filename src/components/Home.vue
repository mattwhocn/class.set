<template>
  <div id="home">
    <header id="header" class="mui-bar mui-bar-nav">
      <h1 class="mui-title">首页</h1>
    </header>

    <div class="mui-content">

      <!--轮播图片-->
      <div id="slider" class="mui-slider " >
        <div class="mui-slider-group">
          <!-- 第一张 -->
          <div class="mui-slider-item" v-for="img in banners">
            <a href="#">
              <img :src="setSrc(img.src)">
            </a>
          </div>
        </div>
        <div class="mui-slider-indicator">
          <div class="mui-indicator mui-active"></div>
          <div class="mui-indicator"></div>
        </div>
      </div>

      <!--按钮-->
      <div class="unit">
        <div class="unit_item" v-for="unit in units">
          <img :src="setSrc(unit.src)" alt="">
          <p>{{ unit.text }}</p>
        </div>
      </div>

      <!--聚合瀑布信息页-->
      <div class="combines">
        <div class="combine_item" v-for="combine in combines" v-if>
          <p>{{ combine.title }}</p>
          <img :src="setSrc(combine.src)" alt="">
          <span>文章</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data: function () {
      return {
        banners: [{
          src: require('../assets/home/shuijiao.jpg')
        }, {
          src: require('../assets/home/yuantiao.jpg')
        }],
        units: [{
          text: '问答社区',
          src: require('../assets/home/question.jpg')
        }, {
          text: '精选文章',
          src: require('../assets/home/article.jpg')
        }, {
          text: '在线课程',
          src: require('../assets/home/online.jpg')
        }, {
          text: '特色课堂',
          src: require('../assets/home/class.jpg')
        }],
        combines: [{
          type: 1, // 1,问答  2,文章   3,在线课堂   4,特色课堂
          title: '您们好,我家女儿学习成绩一般,英语特别差,每次英作业的背和听写都特别...',
          userName: '匿名用户',
          disc: '不要给孩子太多压力,尽量培养孩子的对英语的兴趣...',
          like: '17',
          src: require('../assets/home/shuijiao.jpg')
        }, {
          type: 2,
          title: '您们好,我家女儿学习成绩一般,英语特别差,每次英作业的背和听写都特别...',
          userName: '匿名用户',
          disc: '不要给孩子太多压力,尽量培养孩子的对英语的兴趣...',
          like: '17',
          src: require('../assets/home/shuijiao.jpg')
        }, {
          type: 3,
          title: '您们好,我家女儿学习成绩一般,英语特别差,每次英作业的背和听写都特别...',
          userName: '匿名用户',
          disc: '不要给孩子太多压力,尽量培养孩子的对英语的兴趣...',
          like: '17',
          src: require('../assets/home/shuijiao.jpg')
        }, {
          type: 4,
          title: '您们好,我家女儿学习成绩一般,英语特别差,每次英作业的背和听写都特别...',
          userName: '匿名用户',
          disc: '不要给孩子太多压力,尽量培养孩子的对英语的兴趣...',
          like: '17',
          src: require('../assets/home/shuijiao.jpg')
        }]
      }
    },
    methods: {
      setSrc: function (src) {
        return src
      }
    }
  }

</script>
<style lang="less">
  .unit{
    display: flex;
    background: #fff;
    .unit_item{
      width:25%;
      justify-content: space-around;
      position: relative;
      img{
        height:32px;
        position: absolute;
        left:0;
        right:0;
        margin:auto;
        margin-top:10px;
      }
      p{
        margin-top:44px;
        text-align: center;
      }
    }
  }
  .combines{
    width:100%;
    background: #f0eff5;
    margin-bottom:50px;
    .combine_item{
      margin-top: 10px;
      background: #fff;
      padding:20px;
      overflow:hidden;
      width:100%;
      position:relative;
      img{
        width:64px;
        height: 64px;
        float: right;
      }
      p{
        float: left;
        width: 80%;
      }
      span{
        display: block;
        width:34px;
        height:18px;
        line-height: 18px;
        text-align: center;
        background: #d6dfe8;
        position: absolute;
        left:15px;
        top:0;
      }
    }
  }
</style>
