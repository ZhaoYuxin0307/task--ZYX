<template>
  <div class="login">
    <el-row>
      <el-col :span="16" class="left"><h1>欢迎光临</h1></el-col>
      <el-col :span="8" class="right">
        <div class="form-box">
          <h1>欢迎回来</h1>
          <div class="title">
            <span></span>
            <span>账号密码登录</span>
            <span></span>
          </div>

          <el-form
            :model="loginform"
            ref="LoginForm"
            :rules="loginFormRoles"
            class="hello-form-inline"
            label-width="120px"
          >
            <el-form-item prop="username">
              <el-input
                v-model.trim="loginform.username"
                placeholder="请输入用户名"
                prefix-icon="User"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model.trim="loginform.password"
                placeholder="请输入密码"
                prefix-icon="Lock"
                show-password
                @keyup.enter="handleLoginSubmit"
              />
            </el-form-item>
            <el-form-item>
              <el-button class="form-btn" @click="handleLoginSubmit"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

const store = useStore()
const router = useRouter()

const loginform = reactive({
  username: 'admin',
  password: 'admin'
})

const LoginForm = ref('')

const loginFormRoles = reactive({
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    }
  ]
})

// 登录
function handleLoginSubmit() {
  LoginForm.value.validate(async (valid) => {
    if (valid) {
      // showLoding.value = true
      try {
        const res = await store.dispatch('login/handleLogin', loginform)
        if (!res) return
        await router.push('/')
        ElNotification({
          title: '提示',
          message: '登录成功',
          type: 'success'
        })
      } catch (e) {
        console.log(e)
      } finally {
        // showLoding.value = false
      }
    }
  })
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
}

.el-row {
  height: 100%;
  // display: flex;
}
.left {
  background-color: #6767f3;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: white;
  }
}
.form-btn {
  background-color: #6767f3;
  width: 100%;
  border-radius: 25px;
  color: white;
}
.right {
  height: 100%;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .form-box {
    width: 250px;

    h1 {
      font-weight: 700;
      font-size: 20px;
      line-height: 2.25rem;
      --tw-text-opacity: 1;
      color: rgba(31, 41, 55, var(--tw-text-opacity));
      text-align: center;
    }

    .title {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: space-between;
      margin: 20px 0;
      span {
        color: #e5e7eb;
        &:nth-of-type(1),
        &:nth-of-type(3) {
          background-color: #e5e7eb;
          height: 1px;
          width: 4rem;
        }
      }
    }
  }
}
</style>
