<template lang="html">
  <div class="showWin">
        <div class="login-head">
            <h3><i></i>数描画像登录</h3>
        </div>
        <div class="login-win" >
            <div class="login-prompt">用户名登录</div>
            <div class="lg-input show-delay4">
                <div class="lg-in new-login-input1">
                    <span class="login-icon"><i class="fa fa-user"></i></span>
                    <input type="text" class="input" autofocus placeholder="user name" v-model="form.username"  AUTOCOMPLETE="OFF"/>
                </div>
                <div class="lg-in new-login-input2">
                    <span class="login-icon"><i class="fa fa-lock"></i></span>
                    <input type="password" class="input" placeholder="password" v-model="form.password" @keyup.enter="login"/>
                </div>
                <div class="lg-in">
                    <button class="btn-login new-btnlogin" @click="login"></button>
                    <!--<button class=" btn-login" style="margin-left:76px;" ng-click="vm.getShowLogin();">取消</button>-->
                </div>
            </div>

        </div>
    </div>
</template>

<script>
  import types from '../../store/mutation-types';
  // import  auth from '../common/auth'
  // import * as sysApi from '../services/sys'
  import {accountLogin} from '../../service/getData'
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  var md5 = require('js-md5');
  export default {
    name: 'login',
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    components: {},
    methods: {
      ...mapMutations({
        setUserInfo: types.SET_USER_INFO
      }),
      ...mapActions({
        loadMenuList: 'loadMenuList' // 映射 this.load() 为 this.$store.dispatch('loadMenuList')
      }),
      login(){
        var redirectUrl = '/';
        if (this.$route.query && this.$route.query != null && this.$route.query.redirect && this.$route.query.redirect != null) {
          redirectUrl = this.$route.query.redirect;
        }
        // sysApi.login(this.form).then(res => {
        //   this.loginSuccess({...res,redirectUrl})
        // })
        accountLogin(this.form.username,md5(this.form.password).toUpperCase()).then(res =>{
          this.loginSuccess(res.obj.userInfo,redirectUrl);
          window.localStorage.setItem('token','Bearer '+res.obj.userInfo.token);
          this.$router.push({path: redirectUrl});
        });
      },
      loginSuccess(user,redirectUrl){
        // auth.login(sid);
        window.sessionStorage.setItem("user-info", JSON.stringify(user));
        this.setUserInfo(user);
        // this.$http.defaults.headers.common['tokenid'] = user.token;
        // this.loadMenuList();
        redirectUrl && this.$router.push({path: redirectUrl});
      }
    }
  }
</script>

<style>

  .showWin{
    width: 576px;
    height: 416px;
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-288px,-208px);
  }
  .login-head h3 {
    text-align: center;
    color: #fff;
    font-size: 36px;
  }
  .showWin .login-win {
    width: 576px;
    height: 372px;
    position: relative;
    background: url(../../assets/style-login.png) no-repeat;
    border: 1px solid;
    background-size: 570px;
    margin: 0 auto;
    background-color: rgba(46, 57, 68,.9);
  }
  .login-prompt {
    font-family: "Microsoft YaHei";
    color: #fff;
    font-size: 20px;
    position: absolute;
    top: 30px;
    left: 30px;
    letter-spacing: 3px;
  }
  .lg-input {
    transform: translate(20%,50%);
  }
  .show-delay4 {
      transition: all linear 0.1s;
      transition-delay: 0.1s;
  }
  .lg-input .lg-in {
    margin-bottom: 32px;
    color: #eeeeee;
}
 .login-icon {
    display: inline-block;
    width: 35px;
    height: 37px;
    margin-bottom: -12px;
    margin-right: -40px;
    position: relative;
    z-index: 1000;
    text-align:center;

  }
  .lg-input .lg-in .input {
    background-color: rgba(255,255,255,0.1);
    width: 348px;
    background: url(../../assets/login_input.png) no-repeat;
    background-size: 346px;
    height: 40px;
    border: none;
    outline: none;
    padding-bottom: 6px;
    padding-top: 6px;
    padding-left: 34px;
    padding-right: 10px;
    color: #fff;
}
.lg-in .new-btnlogin {
    width: 221px;
    height: 45px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAAAtCAYAAAAqVm4DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNDY5MzZGMkU5MUQxMUU3OUE2MEZDNEFEQkExNDQ4NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNDY5MzZGM0U5MUQxMUU3OUE2MEZDNEFEQkExNDQ4NCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA0NjkzNkYwRTkxRDExRTc5QTYwRkM0QURCQTE0NDg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA0NjkzNkYxRTkxRDExRTc5QTYwRkM0QURCQTE0NDg0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cRUKfAAACzNJREFUeNrsnQ1wVNUV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) no-repeat;
    border: 1px solid #13497c;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    margin-left: 50px
  }
  .login {
    margin-top: 160px;
    width: 100%;
    border: 1px solid #cfd8dc;
    margin-right: auto !important;
    margin-left: auto !important;
    display: table;
    table-layout: fixed;
    background-color: #20a8d8;
  }

  .login .el-button {
    border-radius: 0;
  }

  .login .el-button.forgot, .login .el-button.forgot:hover {
    border: none;
  }

  .login .login-form {
    background-color: #FFFFFF;
    width: 100%;
    height: 100%;
    display: block;

  }

  .login .login-form .card-block {
    padding: 35px;
  }

  .login .login-form .card-block p {
    margin: 15px 0;
  }

  .input-group {
    width: 100%;
    display: table;
    border-collapse: separate;
    margin-bottom: 20px !important;
  }

  .input-group, .input-group-btn, .input-group-btn > .btn, .navbar {
    position: relative;
  }

  .input-group-addon:not(:last-child) {
    border-right: 0;
  }

  .input-group-addon, .input-group-btn {
    min-width: 40px;
    white-space: nowrap;
    vertical-align: middle;
    width: 1%;
  }

  .btn-link:focus, .btn-link:hover {
    color: #167495;
    text-decoration: underline;
    background-color: transparent;
  }

  .btn-link, .btn-link:active, .btn-link:focus, .btn-link:hover {
    border-color: transparent;
  }

  .btn.focus, .btn:focus, .btn:hover {
    text-decoration: none;
  }

  .input-group-addon {
    padding: .5rem .75rem;
    margin-bottom: 0;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.75rem;
    color: #607d8b;
    text-align: center;
    background-color: #cfd8dc;
    border: 1px solid rgba(0, 0, 0, .15);
  }

  .input-group .form-control, .input-group-addon, .input-group-btn {
    display: table-cell;
  }

  .input-group .form-control {
    position: relative;
    z-index: 2;
    float: left;
    margin-bottom: 0;
  }

  .form-control {
    width: 90%;
    padding: .5rem .75rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
    color: #607d8b;
    background: #fff none;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .15);
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  }

  .login .login-form .card-block .row {
    display: block;
    margin: 15px 0;
  }

  .login .login-register {
    width: 100%;
    height: 100%;
    display: block;
    background-color: #20a8d8;
    color: #fff;
  }

  .login .login-register .card-block {
    text-align: center !important;
    padding: 30px;
  }

  .login .login-register .card-block p {
    text-align: left !important;
    margin: 15px 0;
    height: 100px;
  }
</style>
