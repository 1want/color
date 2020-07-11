<template>
  <div class="wrapper">
    <main>
      <div class="container" v-for="(item, index) in allColor" :key="index">
        <div class="color" ref="bigColor"></div>
        <div class="set">
          <div
            class="btnColor"
            @click="showColor(items)"
            v-for="(items, idx) in item.chromeColor"
            :key="idx"
            :style="{ background: items.color.hex }"
          >
            <div v-show="items.show">
              <chrome-picker
                v-model="items.color"
                @click.native="updataChrome(index)"
              />
            </div>
          </div>
        </div>
        <div class="footer">
          <span class="iconfont icon-tianjia" @click="add(index)"></span>
          <span class="iconfont icon-shuaxin" @click="reset(index)"></span>
          <span
            class="iconfont icon-kaobei"
            @click="copy(index)"
            v-clipboard:copy="res"
            v-clipboard:success="onCopy"
          ></span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { Chrome } from 'vue-color'

export default {
  data() {
    return {
      allColor: [
        {
          bigColor: 'linear-gradient(to top right ,#8EC5FC, #E0C3FC)',
          chromeColor: [
            { color: { hex: '#8EC5FC' }, show: false },
            { color: { hex: '#E0C3FC' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to top right ,#FAACA8, #DDD6F3)',
          chromeColor: [
            { color: { hex: '#FAACA8' }, show: false },
            { color: { hex: '#DDD6F3' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to top right ,#F4D03F, #16A085)',
          chromeColor: [
            { color: { hex: '#F4D03F' }, show: false },
            { color: { hex: '#16A085' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to top right ,#08AEEA, #2AF598)',
          chromeColor: [
            { color: { hex: '#08AEEA' }, show: false },
            { color: { hex: '#2AF598' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to top right ,#FEE140, #FA709A)',
          chromeColor: [
            { color: { hex: '#FEE140' }, show: false },
            { color: { hex: '#FA709A' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to top right ,#21D4FD, #B721FF)',
          chromeColor: [
            { color: { hex: '#21D4FD' }, show: false },
            { color: { hex: '#B721FF' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to top right ,#FAACA8, #DDD6F3)',
          chromeColor: [
            { color: { hex: '#FAACA8' }, show: false },
            { color: { hex: '#DDD6F3' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to top right ,#FBAB7E, #F7CE68)',
          chromeColor: [
            { color: { hex: '#FBAB7E' }, show: false },
            { color: { hex: '#F7CE68' }, show: false }
          ]
        }
      ],
      res: ''
    }
  },
  components: {
    'chrome-picker': Chrome
  },
  mounted() {
    this.updateColor()
  },
  methods: {
    showColor(items) {
      items.show = true
      let bodyEl = document.getElementsByTagName('body')[0]
      console.log(bodyEl)
      if (bodyEl != items) {
        items.show = false
      }
    },
    updateColor() {
      for (let i = 0; i < this.allColor.length; i++) {
        this.$refs.bigColor[i].style.background = this.allColor[i].bigColor
      }
    },
    // 当改变chrome选择器的颜色时重新刷新颜色
    updataChrome(index) {
      let colors = this.allColor[index]
      let head = ''
      for (let i = 0; i < colors.chromeColor.length; i++) {
        head += ',' + colors.chromeColor[i].color.hex
        colors.bigColor = 'linear-gradient(to top right' + head + ')'
      }
      this.updateColor()
    },
    add(index) {
      if (this.allColor[index].chromeColor.length < 5) {
        this.allColor[index].chromeColor.push({
          color: {
            hex: '#000'
          },
          show: false
        })
      } else {
        const msgLength = document.getElementsByClassName('el-message').length
        if (msgLength === 0) {
          this.$message({
            message: '无法添加!',
            type: 'error'
          })
        }
      }
    },
    reset(index) {
      this.allColor[index].chromeColor = this.allColor[index].chromeColor.slice(
        0,
        2
      )
    },
    copy(index) {
      let head = ''
      for (let i = 0; i < this.allColor[index].chromeColor.length; i++) {
        head += ',' + this.allColor[index].chromeColor[i].color.hex
        this.res = 'linear-gradient(to top right' + head + ')'
      }
    },
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
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  main {
    display: flex;
    flex-wrap: wrap;
    margin: 100px 0 40px 0;
    .container {
      border-radius: 10px;
      margin: 2px;
      width: 24%;
      height: 260px;
      margin-bottom: 35px;
      position: relative;
      .color {
        height: 80%;
        border-radius: 10px;
      }
      .footer {
        width: 250px;
        margin-top: 10px;
        margin-left: -6px;
        height: 40px;
        span {
          font-size: 22px;
          margin: 15px;
          color: #6278de;
          margin-left: 14px;
          &:hover {
            color: #57a3f3;
          }
        }
      }
      .set {
        display: flex;
        margin-top: 10px;
        margin-left: 7px;
        .btnColor {
          margin-right: 20px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        .vc-chrome {
          position: absolute;
          z-index: 2;
          left: -80px;
          top: -35px;
        }
      }
    }
  }
}
</style>
