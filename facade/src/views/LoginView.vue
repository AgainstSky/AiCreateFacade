<template>

  <el-row style="margin-top: 50px">
    <el-col :span="18" :offset="3">
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <el-row>

          <!--          login-->
          <el-col :span="8" :offset="2" style="margin-top: 50px">
            <el-form :model="pwdLoginParam">
              <el-form-item>
                <el-input
                    v-model="pwdLoginParam.phone"
                    placeholder="Phone Number"
                >
                  <template #prefix>
                    <el-icon class="el-input__icon">
                      <User/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                    type="password"
                    v-model="pwdLoginParam.password"
                    placeholder="Password"
                    show-password
                >
                  <template #prefix>
                    <el-icon class="el-input__icon">
                      <MagicStick/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onPasswordLoginClick">Login</el-button>
              </el-form-item>
            </el-form>

            <div>or</div>
            <div class="thirdLoginButtonGroup">
              <el-button color="#626aef" style="color: white;width: 100%" size="large"
                         @click="onWechatLoginClick">
                微信登入
              </el-button>
            </div>

          </el-col>


          <el-col :span="12" :offset="2">
            <el-image
                style="width: 100%;height: 500px"
                :src="loginImgUrl"
                fit="cover"
            ></el-image>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>

  <el-dialog
      v-model="wechatQrDialogVis"
      width="30%"
      :show-close="false"
  >
    <div id="weChatQr"></div>
  </el-dialog>
</template>

<script>
import {User, MagicStick} from '@element-plus/icons-vue'
// import axios from "axios";
import {instance} from "@/api/api";
import {Network} from "@/api/Network";
import {ElMessage} from "element-plus";

export default {
  name: "LoginView",
  components: {
    User,
    MagicStick,
  },
  data() {
    return {
      wechatQrDialogVis: false,
      pwdLoginParam: {
        phone: '',
        password: '',
        type: 1
      },
      loginImgUrl: 'https://aicreate-1253626419.cos.ap-shanghai.myqcloud.com/54DD723F-2EF2-452B-AA54-6B0D6A63D378.jpeg'
    }
  },
  methods: {
    onPasswordLoginClick() {
      let that = this;
      Network.login(this.pwdLoginParam).then(resp => {
        if (resp.data.success){
          //缓存token信息
          let data = resp.data.data;
          localStorage.setItem('token',data.token)
          localStorage.setItem('tokenHead',data.head)
          //跳转
          that.$router.push('index')
        }else {
          ElMessage.error(resp.data.msg)
        }
      }).catch()
    },
    onWechatLoginClick() {
      instance.get("/test").then(resp => {
        console.log(resp)
      })
      // window.location.href = 'https://open.weixin.qq.com/connect/qrconnect?appid=wx7a04e843a99eb4c1&redirect_uri=https://api.wx.yungouos.com/callback/wxmp/oauth&response_type=code&scope=snsapi_login&state=A2957C0259C74D0180D106642A5DAED0#wechat_redirect'

      // let obj = new WxLogin({
      //   self_redirect:true,
      //   id:"weChatQr",
      //   appid: "",
      //   scope: "",
      //   redirect_uri: "",
      //   state: "",
      //   style: "",
      //   href: ""
      // });
    },
    getUrlKey: function (name) {
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
    }
  },
  mounted() {
    let code = this.getUrlKey('code')
    if (code != null) {
      //A2957C0259C74D0180D106642A5DAED0
      // axios.post('http://localhost:9005/auth/wechatLogin?code='+code).then(resp=>{
      //   console.log(resp.data.success)
      //   if (resp.data.success){
      //     alert(resp.data.data.token)
      //   }
      // })
    }
  }
}
</script>

<style scoped>
.thirdLoginButtonGroup {
  margin-top: 50px;
}
</style>