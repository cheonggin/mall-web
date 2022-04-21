<template>
  <div id="cart">
    <Navbar>
      <template #left>
        <div class="app-header-icon icon-back" @click="$router.back()">
          <img src="~@/assets/images/common/back.png" alt="" />
        </div>
      </template>
      <template #center>
        <div class="title">购物车</div>
      </template>
      <template #right>
        <div
          class="app-header-icon icon-search"
          @click="$router.push('/search')"
        >
          <img src="~@/assets/images/common/search.png" alt="" />
        </div>
      </template>
    </Navbar>

    <Scroll class="cart-content ignore">
      <div class="nologin" v-if="!loginState">
        <span>登录后享受更多优惠</span>
        <em @click="$router.push('/login')">去登录</em>
      </div>

      <div class="noitems" v-if="cartList.length === 0">
        <a href="javascript:;">
          <span>购物车还是空的</span>
          <em @click="$router.push('/home')">去逛逛</em>
        </a>
      </div>

      <CartList
        v-else
        :list="cartList"
        @select="onSelect"
        @add="onAdd"
        @sub="onSub"
        @delete="onDelete"
      />
    </Scroll>
    <CartFooter :price="checkedPrice" :count="checkedTotal" :isCheckedAll="isCheckedAll" @toggle="handleCheckedAll" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import Scroll from '@/components/common/scroll'
import CartList from './children/cart-list.vue'
import CartFooter from './children/cart-footer.vue'

import { useLoginStore } from '@/store/login/login'
import { useCartStore } from '@/store/cart'
import { ICartList } from '@/store/cart/types'

// pinia
const loginStore = useLoginStore()
const cartStore = useCartStore()
cartStore.getDataAction()
const loginState = computed(() => loginStore.loginState)
const cartList = computed(() => cartStore.cartList)
const checkedTotal = computed(() => cartStore.checkedTotal.count)
const checkedPrice = computed(() => cartStore.checkedTotal.price)
const isCheckedAll = computed(() => cartStore.isCheckedAll)

// 处理单选勾选状态
function onSelect (item: ICartList) {
  item.checked = !item.checked
  cartStore.updateDataAction(item.product_id, { checked: item.checked })
}

// 处理全选
function handleCheckedAll () {
  // 判断是否有未选中的按钮
  const value = cartStore.cartList.find(item => !item.checked)

  // 有未选中的按钮则将cartList的checked全部改为true，无则改为false
  if (value) {
    cartStore.cartList.map(item => {
      item.checked = true
    })
  } else {
    cartStore.cartList.map(item => {
      item.checked = false
    })
  }
}

function onAdd (item: ICartList) {
  item.count++
  cartStore.updateDataAction(item.product_id, { count: item.count })
}

function onSub (item: ICartList) {
  if (item.count <= 1) return
  item.count--
  cartStore.updateDataAction(item.product_id, { count: item.count })
}

function onDelete (item: ICartList) {
  cartStore.deleteDataAction(item.product_id)
}

</script>

<style lang="scss" scoped>
.app-header-icon {
  width: 1.2rem;

  img {
    width: 0.7rem;
  }
}

.title {
  width: 100%;
  text-align: center;
  font-size: 0.4rem;
}

.cart-content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 1.4rem;

  &.ignore {
    top: 50px;
  }
}

.nologin {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1.44rem;
  margin-top: 1.4rem;
  padding: 0 0.78rem 0 0.44rem;
  color: rgba(0, 0, 0, 0.54);

  &:after {
    content: '';
    position: absolute;
    right: 0.32rem;
    top: 50%;
    width: 0.25rem;
    height: 0.25rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0, -50%, 0) rotate(135deg);
  }

  span {
    font-size: 0.44rem;
    color: rgba(0, 0, 0, 0.87);
  }

  em {
    font-style: normal;
    font-size: 0.34rem;
    text-align: right;
  }
}

.noitems {
  background: #ebebeb;
  padding: 0 0.28rem;

  a {
    display: block;
    font-size: 0.34rem;
    text-align: center;

    span {
      display: inline-block;
      line-height: 1.2rem;
      background: url('@/assets/images/cart/empty.png') no-repeat;
      background-size: auto 100%;
      padding: 0 0.22rem 0 1.34rem;
      color: rgba(0, 0, 0, 0.27);
    }

    em {
      display: inline-block;
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-sizing: border-box;
      height: 0.7rem;
      line-height: 0.7rem;
      padding: 0 0.34rem;
      color: rgba(0, 0, 0, 0.87);
      font-style: normal;
    }
  }
}
</style>
