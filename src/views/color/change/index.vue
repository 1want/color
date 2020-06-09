<template>
  <div class="wrappers">
    <div class="contents" ref="content">
      <span v-clipboard:copy="col" v-clipboard:success="onCopy">{{ col }}</span>
    </div>
    <el-button type="success" plain @click="chance">check</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      col: ''
    }
  },
  methods: {
    // 随机生成颜色
    random() {
      let col =
        '#' +
        Math.random()
          .toString(16)
          .slice(2, 8)
      let content = this.$refs.content
      content.style.backgroundColor = col
      this.col = col.toUpperCase()
    },

    // 改变面板颜色
    chance() {
      this.random()
      let msgLength = document.getElementsByClassName('el-message').length
      if (msgLength !== 0) {
        msgLength == 0
        console.log(msgLength)
      }
      console.log(msgLength)
    },

    // 复制面板中的颜色
    onCopy() {
      // 防止message触发过于频繁
      const msgLength = document.getElementsByClassName('el-message').length

      if (msgLength === 0) {
        this.$message({
          message: '复制成功',
          type: 'success',
          duration: 1000
        })
      }
      return
    }
  },
  mounted() {
    this.random()
    this.chance()
  }
}
</script>

<style lang="less">
.wrappers {
  height: 100vh;
  background: #1a81ac;
  .contents {
    width: 200px;
    height: 200px;
    background: red;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover span {
      display: block;
    }
    span {
      color: #fff;
      font-size: 1.5em;
      display: none;
    }
  }
}
.el-message {
  min-width: 140px;
}
</style>
