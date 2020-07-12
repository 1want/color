<template>
  <div class="wrapper">
    <main>
      <div class="content">
        <div class="container" style="background:#18B492">
          <span v-clipboard:copy="'#18B492'" v-clipboard:success="onCopy"
            >#18B492
          </span>
        </div>
        <div class="container" style="background:#18967B">
          <span v-clipboard:copy="'#18967B'" v-clipboard:success="onCopy"
            >#18967B</span
          >
        </div>
      </div>
      <div class="content">
        <div class="container" style="background:#29C367">
          <span v-clipboard:copy="'#29C367'" v-clipboard:success="onCopy"
            >#29C367</span
          >
        </div>
        <div class="container" style="background:#25A457">
          <span v-clipboard:copy="'#25A457'" v-clipboard:success="onCopy"
            >#25A457</span
          >
        </div>
      </div>
      <div class="content">
        <div class="container" style="background:#308DD8">
          <span v-clipboard:copy="'#308DD8'" v-clipboard:success="onCopy"
            >#308DD8</span
          >
        </div>
        <div class="container" style="background:#2773B2">
          <span v-clipboard:copy="'#2773B2'" v-clipboard:success="onCopy"
            >#2773B2</span
          >
        </div>
      </div>
      <div class="content">
        <div class="container" style="background:#924DAF">
          <span v-clipboard:copy="'#924DAF'" v-clipboard:success="onCopy"
            >#924DAF</span
          >
        </div>
        <div class="container" style="background:#853BA5">
          <span v-clipboard:copy="'#853BA5'" v-clipboard:success="onCopy"
            >#853BA5</span
          >
        </div>
      </div>
      <div class="content">
        <div class="container" style="background:#2E3E54">
          <span v-clipboard:copy="'#2E3E54'" v-clipboard:success="onCopy"
            >#2E3E54</span
          >
        </div>
        <div class="container" style="background:#283647">
          <span v-clipboard:copy="'#283647'" v-clipboard:success="onCopy"
            >#283647</span
          >
        </div>
      </div>
      <div class="content">
        <div class="container container11" style="background:#F1BC12">
          <span v-clipboard:copy="'#F1BC12'" v-clipboard:success="onCopy"
            >#F1BC12</span
          >
        </div>
        <div class="container container12" style="background:#F29013">
          <span v-clipboard:copy="'#F29013'" v-clipboard:success="onCopy"
            >#F29013</span
          >
        </div>
      </div>
      <div class="content">
        <div class="container" style="background:#E47221">
          <span v-clipboard:copy="'#E47221'" v-clipboard:success="onCopy"
            >#E47221</span
          >
        </div>
        <div class="container" style="background:#CE4A02">
          <span v-clipboard:copy="'#CE4A02'" v-clipboard:success="onCopy"
            >#CE4A02</span
          >
        </div>
      </div>
      <div class="content">
        <div class="container" style="background:#E34336">
          <span v-clipboard:copy="'#E34336'" v-clipboard:success="onCopy"
            >#E34336</span
          >
        </div>
        <div class="container" style="background:#B83127">
          <span v-clipboard:copy="'#B83127'" v-clipboard:success="onCopy"
            >#B83127</span
          >
        </div>
      </div>
      <div class="content">
        <div class="container" style="background:#EBEDEE">
          <span v-clipboard:copy="'#EBEDEE'" v-clipboard:success="onCopy"
            >#EBEDEE</span
          >
        </div>
        <div class="container" style="background:#B7BBC1">
          <span v-clipboard:copy="'#B7BBC1'" v-clipboard:success="onCopy"
            >#B7BBC1</span
          >
        </div>
      </div>
      <div class="content">
        <div class="container" style="background:#899B9E">
          <span v-clipboard:copy="'#899B9E'" v-clipboard:success="onCopy"
            >#899B9E</span
          >
        </div>
        <div class="container" style="background:#768183">
          <span v-clipboard:copy="'#768183'" v-clipboard:success="onCopy">
            #768183</span
          >
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
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
  }
}
</script>

<style lang="less">
@import '../../../assets/css/choice.css';

.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;

  main {
    display: flex;
    flex-wrap: wrap;
    margin: 70px 0 40px 0;
    .content {
      width: 20%;
      height: 50%;
      position: relative;

      .container {
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover span {
          display: block;
        }
        span {
          display: none;
          color: #fff;
        }
      }
    }
  }
}
.el-message {
  min-width: 140px !important;
}
</style>
