<template>
  <el-row class="base">
    <el-col class="layout-nav">
      <div class="logo">
        <img :src="logo" alt="">
        <p>HStory</p>
      </div>

      <div class="nav">
        <ul>
          <li v-if="$route.meta.title"><router-link :to='$route.href'><svg-icon icon-class="box"></svg-icon> {{ $route.meta.title }}</router-link></li>
          <li><router-link to='/'><svg-icon icon-class="dashboard"></svg-icon> 仪表盘</router-link></li>
          <li><router-link to='/project'><svg-icon icon-class="project"></svg-icon> 项目</router-link></li>
          <li><router-link to='/project/create'><svg-icon icon-class="add"></svg-icon> 创建项目</router-link></li>
          <li><router-link to='/assets'><svg-icon icon-class="assets"></svg-icon> 资源管理</router-link></li>
        </ul>
      </div>

      <div class="footer">
        <div class="nav">
          <ul>
            <li v-if="$route.meta.back"><a href="#" @click.stop.prevent="back"><svg-icon icon-class='back'></svg-icon> 上一页</a></li>
            <li><a href="#"><svg-icon icon-class='logout'></svg-icon> 注销</a></li>
          </ul>
        </div>
      </div>
    </el-col>
    <el-col class="content left-box">
      <slot></slot>
    </el-col>
  </el-row>
</template>

<script>
import logo from '@/assets/logo.png'
import { ref } from 'vue'

export default {
  setup(){
    return {
      logo,
    }
  },
  methods: {
    back(){
      this.$router.back();
    }
  },
  activated(){
  }
}
</script>

<style lang="scss" scope>
.base{
  flex-wrap: nowrap !important;

  .layout-nav{
    flex: 0 0 200px;
    position: relative;

    .logo{
      margin-top: 15px;

      p{
        font-size: 20px;
        color: rgb(65,68,75);
        text-align: center;
        text-transform: uppercase;
        margin-top: 10px;
      }

      img{
        width: 50px;
        margin: 0 auto;
        display: block;
      }
    }

    .nav{
      margin-top: 20px;
    }

    .nav li{
      color: #8a8a8a;
      list-style: none;
      position: relative;
      padding-left: 30px;

      svg{
        font-size: 24px;
        margin-right: 10px;
      }

      a{
        color: #8a8a8a;
        text-decoration: none;
        font-size: 16px;
        display: block;
        padding: 10px 0;

        &:hover{
          svg use{
            fill: #409EFF;
          }
        }
          
        &::after{
          content: '';
          display: block;
          height: 100%;
          right: 0;
          width: 5px;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
          background: #409EFF;
          position: absolute;
          top: 0;
          opacity: 0;
          transition: .4s;
        }

        &[aria-current]{
          color: rgb(65,68,75);
          font-size: 20px;

          &::after{
            opacity: 1;
          }

          svg use{
            fill: #409EFF;
          }
        }
      }
    }

    .footer{
      position: absolute;
      bottom: 20px;
    }
  }

  .content{
    flex: 0 0 calc(100vw - 200px);
    background: white;
    overflow: hidden;
  }
}
</style>