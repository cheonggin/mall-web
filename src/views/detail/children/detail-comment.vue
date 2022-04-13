<template>
  <div class="product-info-comment">
    <div class="comments-title">
      <div class="comments-title-left">用户评价</div>
      <div class="comments-title-right">
        {{ data?.satisfy_per }}
      </div>
    </div>

    <div class="comments-tags">
      <div
        class="comments-tags-text"
        v-for="item in data.comment_tags"
        :key="item"
      >
        {{ item }}
      </div>
    </div>

    <div class="comments-container">
      <div class="card-box" v-for="(value, i) in data.list" :key="i">
        <div class="comment-header">
          <div class="avatar-img-box">
            <img :src="value.user_avatar" alt="" />
          </div>
          <div class="user-info">
            <p class="name">{{ value.user_name }}</p>
            <p class="comment-date">{{ value.add_time }}</p>
          </div>
        </div>
        <div class="comment-content">
          <div class="text" v-html="value.comment_content"></div>
          <div class="photos">
            <div class="img" v-for="val in value.comment_images" :key="val">
              <img :src="val" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IGoodsInfoComments } from '@/service/types'

defineProps({
  data: Object as PropType<IGoodsInfoComments>,
  default: () => ({} as IGoodsInfoComments)
})
</script>

<style lang="scss" scoped>
.product-info-comment {
  padding: 0.14rem 0.44rem 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  .comments-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1rem;
    line-height: 1rem;

    &-left {
      color: #000;
      font-size: 0.4rem;
      font-weight: 700;
    }

    &-right {
      color: #7f7f7f;
      font-size: 0.34rem;
      padding-right: 0.25rem;
    }
  }

  .comments-tags {
    margin-top: 0.16rem;
    margin-bottom: 0.16rem;
    min-height: 0.6rem;

    &-text {
      display: inline-block;
      line-height: 1;
      color: #494a4b;
      font-size: 0.28rem;
      background-color: #ffeeea;
      padding: 0.12rem 0.22rem;
      margin-right: 0.28rem;
      margin-bottom: 0.28rem;
      border-radius: 0.7rem;
    }
  }

  .comments-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;

    .card-box {
      width: 7.6rem;
      height: 5.4rem;
      box-sizing: border-box;
      padding: 0.44rem;
      border: 0.02rem solid #e5e5e5;
      border-radius: 0.22rem;
      margin-left: 0.22rem;

      .comment-header {
        display: flex;
        align-items: center;

        .avatar-img-box {
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 100%;
          overflow: hidden;
          margin-right: 0.34rem;
        }

        .user-info {
          .name {
            width: 4.44rem;
            color: #000;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 400;
          }

          .comment-date {
            margin-top: 0.06rem;
            color: rgba(0, 0, 0, 0.3);
            font-size: 0.28rem;
          }
        }
      }

      .comment-content {
        .text {
          margin: 0.22rem 0;
          line-height: 1.5em;
          height: 3em;
          overflow: hidden;
          color: rgba(0, 0, 0, 0.5);
          font-size: 0.34rem;
        }

        .photos {
          margin-bottom: 0.18rem;

          .img {
            display: inline-block;
            width: 1.52rem;
            height: 1.52rem;
            margin: 0 0.1rem  0 0;
            border-radius: 0.16rem;

            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
