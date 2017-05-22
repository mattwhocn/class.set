<template>
  <div id="app">
    <router-view></router-view>
    <div id="nav">
      <!--v-for遍历路由-->
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" :to="getPath( m.path )" v-for="m in menus">
          <span class="mui-icon" v-bind:class="getFont(m)"></span>
          <span class="mui-tab-label">{{ m.text}}</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',    // 在import 的时候使用的名字
    data: function () {
      return {  // 返回路由参数
        menus: [{
          text: '首页',
          path: '/home',
          icon: 'mui-icon-home',
          active: false
        }, {
          text: '圈子',
          path: '/circle',
          icon: 'mui-icon-pengyouquan',
          active: false
        }, {
          text: '习惯',
          path: '/habit',
          icon: 'mui-icon-star',
          active: false
        }, {
          text: '发现',
          path: '/find',
          icon: 'mui-icon-navigate',
          active: false
        }, {
          text: '我的',
          path: '/mine',
          icon: 'mui-icon-person',
          active: false
        }]
      }
    },
    methods: {
      getPath: function (path) {
        return path
      },
      getFont: function (m) {
        return m.icon
      },
      changeActive: function (self) {
        console.log(self.index)
        this.menus.forEach(function (item, index) {
          item.active = false
          console.log(item)
          console.log(index)
        })
      }
    }
  }
</script>

<style>
  .router-link-active{
    color: #337ab7;
  }

  .router-link-active span{
    color: #337ab7;
  }
</style>
