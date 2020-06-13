<template>
  <div class="wrappers">
    <div class="container">
      <div class="contents" ref="content">
        <span v-clipboard:copy="col" v-clipboard:success="onCopy">{{
          col
        }}</span>
      </div>
      <el-button type="success" plain @click="chance">check</el-button>
    </div>
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
    },

    // 复制面板中的颜色
    onCopy() {
      // 防止message触发过于频繁
      const msgLength = document.getElementsByClassName('el-message').length

      if (msgLength === 0) {
        this.$message({
          message: '复制成功',
          type: 'success',
          duration: 800
        })
      }
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
  .container {
    margin-top: 70px;
    display: flex;
    justify-content: center;
    .contents {
      width: 400px;
      height: 400px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover span {
        display: block;
      }
      span {
        color: #fff;
        font-size: 1.5em;
      }
    }
    .el-button {
      position: absolute;
      margin-top: 450px;
      width: 120px;
      height: 40px;
    }
  }
}
.el-message {
  min-width: 140px !important;
}
</style>
