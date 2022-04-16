<template>
  <section>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="user.name"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="user.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          {{ title }}
        </van-button>
        <div class="tab" @click="toggleClick">
          <span>{{ title === '登录' ? '注册' : '登录' }}</span>
        </div>
      </div>
    </van-form>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LoginDto } from '@/store/login/types'

const user = ref({} as LoginDto)
defineProps({
  title: { type: String, default: '登录' }
})
const emits = defineEmits(['submit', 'toggle'])

function onSubmit () {
  emits('submit', user.value)
}

function toggleClick () {
  emits('toggle')
}
</script>

<style lang="scss" scoped>
section {
  font-size: 0.4rem;
  width: 100%;
  margin: 3rem auto;
  padding: 0 0.5rem;
  box-sizing: border-box;

  .tab {
    text-align: center;
    margin-top: 0.4rem;
    color: rgba(0, 0, 0, 0.5);
  }
}
</style>
