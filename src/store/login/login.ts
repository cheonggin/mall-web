import { defineStore } from 'pinia'
import { Toast } from 'vant'

import { login, uploadAvatar } from '@/service'
import { LoginDto, LoginState, IUserInfo } from './types'
import { localCache } from '@/utils/cache'
import router from '@/router'

const useLoginStore = defineStore('login', {
  state: (): LoginState => {
    return {
      userInfo: {} as IUserInfo,
      token: '',
      loginState: false
    }
  },
  getters: {
    avatarUrl: state => state.userInfo.avatar_url
  },
  actions: {
    async loginAction (loginDto: LoginDto) {
      const result = await login(loginDto)

      if (result.code === 0) {
        Toast.success('登录成功~')
        router.push('/profile')

        const { user, token } = result.data
        this.loginState = true
        this.userInfo = user
        this.token = token

        localCache.setCache('user_info', this.userInfo)
        localCache.setCache('token', this.token)
      }
    },

    async uploadAvatarAction (file:any) {
      const { data } = await uploadAvatar(file)

      // 更新用户头像
      this.userInfo.avatar_url = data.url
      localCache.setCache('user_info', this.userInfo)
    },

    loadLocalLogin () {
      const userInfo = localCache.getCache('user_info')

      if (userInfo) {
        this.loginState = true
        this.userInfo = localCache.getCache('user_info')
        this.token = localCache.getCache('token')
      }
    }
  }
})

export { useLoginStore }
