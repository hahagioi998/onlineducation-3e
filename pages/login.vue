<template>
  <div class="main">
    <div class="title">
      <a class="active" href="/login">登录</a>
      <span>·</span>
      <a href="/register">注册</a>
    </div>
    <div class="sign-up-container">
      <el-form ref="userForm" :model="user">
        <el-form-item
          class="input-prepend restyle"
          prop="mobile"
          :rules="[{ required: true, message: '请输入手机号码', trigger: 'blur' },{validator: checkPhone, trigger: 'blur'}]"
        >
          <div>
            <el-input type="text" placeholder="手机号" v-model="user.mobile" />
            <i class="iconfont icon-phone" />
          </div>
        </el-form-item>
        <el-form-item
          class="input-prepend"
          prop="password"
          :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
        >
          <div>
            <el-input type="password" placeholder="密码" v-model="user.password" />
            <i class="iconfont icon-password" />
          </div>
        </el-form-item>
        <div class="btn">
          <input type="button" class="sign-in-button" value="登录" @click="submitLogin()" />
        </div>
      </el-form>
      <!-- 更多登录方式 -->
      <div class="more-sign">
        <h6>社交帐号登录</h6>
        <ul>
          <li>
            <a
              id="weixin"
              class="weixin"
              target="_blank"
              href="http://localhost:8150/api/ucenter/wx/login"
            >
              <i class="iconfont icon-weixin" />
            </a>
          </li>
          <li>
            <a id="qq" class="qq" target="_blank" href="#">
              <i class="iconfont icon-qq" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import "~/assets/css/sign.css";
import "~/assets/css/iconfont.css";
import cookie from "js-cookie";
import loginApi from "@/api/login";
export default {
  layout: "sign",
  data() {
    return {
      user: {
        mobile: "",
        password: "",
      },
      loginInfo: {},
    };
  },
  methods: {
    // 手机号密码登录
    submitLogin() {
      loginApi.userLogin(this.user)
      .then(response => {
        // 将返回的 token, 放在 cookie 里面
        // cookie.set(param1, param2, param3)
        // param1: key
        // param2: value
        // param3: 作用范围
        cookie.set('3e_token', response.data.data.token, {domain: 'localhost'})

        // 根据 token 获取用户信息
        loginApi.getUserInfoByToken()
        .then(response => {
          this.loginInfo = response.data.data.userInfo;
          // 获取返回的用户信息
          cookie.set('3e_userInfo', this.loginInfo, {domain: 'localhost'})

          // 回到首页
          this.$router.push({path: '/'})
          // window.location.href = "/";

        })
        
      })
    },
    // 2
    // 3
    // 手机格式验证
    checkPhone(rule, value, callback) {
      if (!(/^1[34578]\d{9}$/.test(value))) {
        return callback(new Error('手机格式不正确'))
      }
      return callback()
    },
  },
};
</script>
<style>
.el-form-item__error {
  z-index: 9999999;
}
</style>