<template>
  <div class="all">
    <Choice></Choice>
    <Change></Change>
    <div>
      <a href="https://github.com/1want/color">
        <i class="el-icon-chat-line-round" @click="feedback"></i>
        <span>反馈</span>
      </a>
    </div>
  </div>
</template>

<script>
import Change from './change'
import Choice from './choice'

export default {
  components: {
    Change,
    Choice
  }
}
</script>

<style lang="less" scoped>
.all {
  width: 80%;
  margin: 0 auto;
  a {
    font-size: 38px;
    position: fixed;
    bottom: 50px;
    right: 50px;
    height: 60px;
    cursor: pointer;
    color: #000;
    &:hover span {
      display: block;
    }
    span {
      display: none;
      color: #000;
      font-size: 18px;
    }
  }
}
</style>
