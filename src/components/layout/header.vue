<template>
  <header class="main-header" :class="{closeLogo:sidebar.collapsed}">
    <a href="#" class="logo"></a>

    <nav class="navbar">
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button"
        @click.stop.prevent="toggleMenu(!sidebar.collapsed)">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <div class="navbar-custom-menu">
        <!-- <el-dropdown class="navbar-dropdown" trigger="click"> -->
          <div class="description-pro" style="height: auto;line-height: inherit">
            <!-- <el-badge :value="count" class="item"> -->
            <i class="fa fa-book help-size"></i>
            <!-- </el-badge> -->
          </div>
          <!-- <el-dropdown-menu>
            <ul class="message-list">
            <li v-for="(item,index) in list">
            <router-link :to="{path:'/sys/message',query:{id:item.id}}">
            <p>{{index + 1}}. {{item.title}}</p>
            </router-link>
            </li>
            </ul>
          </el-dropdown-menu> -->
        <!-- </el-dropdown> -->
        <!-- <el-dropdown trigger="click"  class="navbar-dropdown"> -->
            <!-- <span class="el-dropdown-link" title="使用说明书"><a href="../../../assets/js/help/index.html" target="_blank"><i class="fa fa-book help-size"></i></a></span> -->
            <div class="el-dropdown-link user-info">
              <img src="../../../static/img/user.png" style="width: 25px;height: 25px;border-radius: 50%; vertical-align: middle;" alt="U">
              欢迎,{{userInfo.yhxm}}
              <a href class="btn btn-sm moom-btn logout-btn exit" @click="logout"><i class="fa fa-power-off" uib-popover="退出" popover-placement="bottom" popover-trigger="'mouseenter click'"></i></a>
            </div>


          <!-- <el-dropdown-menu style="padding: 0px">

                <div class="pull-left">
                  <router-link :to="{ path: '/resetPwd' }">
                    <el-button type="default">修改密码</el-button>
                  </router-link>
                </div>
                <div class="pull-right">
                  <el-button type="default" @click="logout">退出</el-button>
                </div>
            </el-dropdown-menu>
        </el-dropdown> -->
      </div>
    </nav>

  </header>
</template>
<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import types from '../../store/mutation-types'
import waterMark from "../../waterMark"

export default {
  data(){
    return {

    }
  },
  computed: mapGetters({
    sidebar: 'sidebar',
    userInfo:'userInfo'
  }),
  methods: {
    ...mapMutations({
      setUserInfo: types.SET_USER_INFO
    }),
    logout() {
      waterMark('');
      window.sessionStorage.removeItem('token');
      window.sessionStorage.removeItem('user-info');
      this.$route.push({path:'/login'});
    }
  },
  created(){
    let item = window.sessionStorage.getItem("user-info");
    if (!!item) {
      this.setUserInfo(JSON.parse(item));
    }
  }
}
</script>
<style scoped>
  .animated {
    animation-duration: .2s;
  }
  .main-header {
    position: fixed;
    min-width: 100%;
    height: 50px;
    /* line-height: 50px; */
    padding-right: 20px;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1),0 0 0 1px hsla(0,0%,7%,.1);
    z-index: 1999;
    animation-name: slideInDown;
    animation-fill-mode: both;
    color: #48576a;
    background: #1b212b;
  }
  .main-header .logo {
    transform: translate(40px,13px);
    -webkit-transition: width 0.3s ease-in-out;
    -o-transition: width 0.3s ease-in-out;
    transition: width 10.3s ease-in-out;
    display: block;
    float: left;
    height: 26px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    width: 113px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 0 15px;
    font-weight: 300;
    overflow: hidden;
    text-decoration: none;
    background-image: url(../../assets/homelogo.png);
    background-repeat: no-repeat;
  }
  .main-header .navbar {
    -webkit-transition: margin-left 0.3s ease-in-out;
    -o-transition: margin-left 0.3s ease-in-out;
    transition: margin-left 0.3s ease-in-out;
    margin-bottom: 0;
    margin-left: 230px;
    border: none;
    min-height: 50px;
    border-radius: 0;
    background-color: #1b212b;
  }
  .main-header .navbar .sidebar-toggle {
    float: left;
    background-color: transparent;
    background-image: none;
    padding: 15px 15px;
    font-family: fontAwesome;
    line-height: 20px;
    color: #fff;
  }
  .main-header .navbar .sidebar-toggle:before {
  content: "\f03b";
  }
  .navbar-custom-menu{
    float: right;
  }

  .navbar-custom-menu .el-dropdown-link{
    cursor: pointer;
    height: 50px;
    padding: 13px 5px;
    min-width: 50px;
    text-align: center;
  }
  .navbar-custom-menu .el-dropdown-link img{
    background-color: #108ee9;
  }

  .navbar-custom-menu .el-dropdown-link:hover{
    background: #1b212b;
  }
  .description-pro{
    height: auto;
    line-height: inherit;
    width: 30px;
    display: inline;
  }
  .user-info{
    display: inline-block;
  }
</style>
