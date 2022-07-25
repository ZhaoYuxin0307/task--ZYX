<template>
  <div class="index">
    <el-row>
      <el-col :span="16">
        <h1>欢迎光临</h1>
      </el-col>
      <el-col :span="8">
        <div class="form-box">
          <h1>欢迎回来</h1>
          <div class="title">
            <span></span>
            <span>账号密码登录</span>
            <span></span>
          </div>

          <el-form
            ref="LoginForm"
            :model="loginForm"
            :rules="loginFormRoles"
            class="demo-form-inline"
          >
            <el-form-item prop="username">
              <el-input
                v-model.trim="loginForm.username"
                placeholder="请输入用户名"
                prefix-icon="User"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model.trim="loginForm.password"
                placeholder="请输入密码"
                prefix-icon="Lock"
                show-password
                @keyup.enter="handleLoginSubmit"
              />
            </el-form-item>
            <el-form-item>
              <el-button
                style="
                  background: #6366f1;
                  width: 100%;
                  border-radius: 25px;
                  color: white;
                "
                :loading="showLoding"
                @click="handleLoginSubmit"
                >登录
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

const store = useStore()
const router = useRouter()

const loginForm = reactive({
  username: 'admin',
  password: 'admin'
})

const showLoding = ref(false)

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
    // console.log(valid)
    if (valid) {
      showLoding.value = true
      try {
        const res = await store.dispatch('login/handleLogin', loginForm)
        if (!res) return
        console.log('1')
        await router.push('/')
        ElNotification({
          title: '提示',
          message: '登录成功',
          type: 'success'
        })
      } catch (e) {
        console.log(e)
      } finally {
        showLoding.value = false
      }
    }
  })
}
</script>

<style lang="scss" scoped>
.index {
  height: 100%;

  .el-row {
    height: 100%;

    .el-col-16 {
      background: #6366f1;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      h1 {
        color: #fff;
        font-weight: 700;
        font-size: 3rem;
        line-height: 1;
        margin-bottom: 1rem;
      }
    }

    .el-col-8 {
      height: 100%;
      background: #ffffff;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .form-box {
        width: 250px;

        h1 {
          font-weight: 700;
          font-size: 1.875rem;
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
  }
}
</style>
