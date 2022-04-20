<template>
  <ol class="cart-list">
    <li class="item" v-for="item in list" :key="item.id">
      <div
        :class="['choose', { unchecked: !item.checked }]"
        @click="handleSelect(item)"
      ></div>
      <div
        class="img-product"
        @click="$router.push(`/detail/${item.product_id}`)"
      >
        <img :src="item.product.image" alt="" />
      </div>
      <div class="info">
        <div class="name">{{ item.product.name }}</div>
        <div class="price-without">
          <span>售价：</span>
          <span class="price">{{ item.product.price }}元</span>
        </div>
        <div class="num">
          <div class="xm-input-num">
            <div
              :class="['input-sub', { active: item.count > 1 }]"
              @click="handleSubClick(item)"
            >
              <i class="image-icon icon-line"></i>
            </div>
            <div class="input-num">
              <span>{{ item.count }}</span>
            </div>
            <div class="input-add active" @click="handleAddClick(item)">
              <i class="image-icon icon-cross"></i>
            </div>
          </div>
          <div class="delete" @click="handleDeleteClick(item)">
            <i class="image-icon icon-delete"></i>
          </div>
        </div>
      </div>
    </li>
  </ol>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ICartList } from '@/store/cart/types'

defineProps({
  list: { type: Array as PropType<ICartList[]>, default: () => [] }
})
const emits = defineEmits(['select', 'add', 'sub', 'delete'])

function handleSelect (item: ICartList) {
  emits('select', item)
}

function handleAddClick (item: ICartList) {
  emits('add', item)
}

function handleSubClick (item: ICartList) {
  emits('sub', item)
}

function handleDeleteClick (item: ICartList) {
  emits('delete', item)
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  padding: 0.33rem 0;
  border-bottom: 1px solid #f6f6f6;

  .choose {
    width: 0.8rem;
    height: 2.5rem;
    padding: 0 0.28rem;
    background: url('@/assets/images/cart/check_press.png') 50% 50% no-repeat;
    background-size: 0.4rem 0.4rem;

    &.unchecked {
      background: url('@/assets/images/cart/check_normal.png') 50% 50% no-repeat;
      background-size: 0.4rem 0.4rem;
    }
  }

  .img-product {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.28rem;
    border: 1px solid #eee;
    border-radius: 2px;

    img {
      width: 100%;
    }
  }

  .info {
    width: 6.4rem;

    .name {
      line-height: 0.44rem;
      font-size: 0.38rem;
      color: #666;
      margin-bottom: 0.16rem;
      margin-right: 0.4rem;
    }

    .price-without {
      padding: 0.16rem 0;
      font-size: 0.34rem;
      color: #999;
      margin-bottom: 0.16rem;

      .price {
        margin-right: 0.14rem;
      }
    }

    .num {
      display: flex;
      justify-content: space-around;

      .image-icon {
        opacity: 0.3;
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        background-color: transparent;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 0.3rem 0.3rem;
      }

      .xm-input-num {
        display: inline-block;
        border: 1px solid #eee;

        .input-sub,
        .input-add {
          display: inline-block;
          width: 0.8rem;
          height: 0.8rem;
          background-color: #fafafa;
          vertical-align: middle;

          &.active {
            background-color: #f4f4f4;
          }
        }

        .input-sub.active .image-icon {
          opacity: 1;
        }

        .icon-line {
          background-image: url('@/assets/images/cart/icon-line.png');
        }

        .icon-cross {
          opacity: 1;
          background-image: url('@/assets/images/cart/icon-cross.png');
        }

        .input-num {
          display: inline-block;
          min-width: 0.8rem;
          padding: 0 0.16rem;
          line-height: 0.6rem;
          font-size: 0.44rem;
          text-align: center;
          vertical-align: middle;
        }
      }

      .delete {
        .icon-delete {
          opacity: 1;
          background-image: url('@/assets/images/cart/icon-delete.png');
          background-size: 0.8rem 0.8rem;
        }
      }
    }
  }
}
</style>
