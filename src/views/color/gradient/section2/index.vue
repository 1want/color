<template>
  <div class="wrapper" @click.self="showColors">
    <main>
      <div class="container" v-for="(item, index) in allColor" :key="index">
        <div
          class="color"
          ref="bigColor"
          :style="{ background: item.bigColor }"
        ></div>
        <div class="set">
          <div
            @click="showColor(items)"
            class="btnColor"
            v-for="(items, idx) in item.chromeColor"
            :key="idx"
            :style="{ background: items.color.hex }"
          >
            <div @click="chrome(items)" v-show="items.show">
              <chrome-picker
                ref="chrome"
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
          bigColor: 'linear-gradient(to top right ,#FF9A8B, #FF6A88,#FF99AC)',
          restColor: '',
          chromeColor: [
            { color: { hex: '#FF9A8B' }, show: false },
            { color: { hex: '#FF6A88' }, show: false },
            { color: { hex: '#FF99AC' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to top right ,#8EC5FC, #E0C3FC)',
          restColor: '',
          chromeColor: [
            { color: { hex: '#8EC5FC' }, show: false },
            { color: { hex: '#E0C3FC' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to top right ,#FBAB7E, #F7CE68)',
          restColor: '',
          chromeColor: [
            { color: { hex: '#FBAB7E' }, show: false },
            { color: { hex: '#F7CE68' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to top right ,#FA8BFF, #2BD2FF,#2BFF88)',
          restColor: '',
          chromeColor: [
            { color: { hex: '#FA8BFF' }, show: false },
            { color: { hex: '#2BD2FF' }, show: false },
            { color: { hex: '#2BD2FF' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to top right ,#FAD961, #F76B1C)',
          restColor: '',
          chromeColor: [
            { color: { hex: '#FAD961' }, show: false },
            { color: { hex: '#F76B1C' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to top right ,#FBDA61, #FF5ACD)',
          restColor: '',
          chromeColor: [
            { color: { hex: '#FBDA61' }, show: false },
            { color: { hex: '#FF5ACD' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to top right ,#4158D0, #C850C0,#FFCC70)',
          restColor: '',
          chromeColor: [
            { color: { hex: '#4158D0' }, show: false },
            { color: { hex: '#C850C0' }, show: false },
            { color: { hex: '#FFCC70' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to top right ,#85FFBD, #FFFB7D)',
          restColor: '',
          chromeColor: [
            { color: { hex: '#85FFBD' }, show: false },
            { color: { hex: '#FFFB7D' }, show: false }
          ]
        }
      ],
      res: '',
      newColor: 0
    }
  },
  components: {
    'chrome-picker': Chrome
  },
  mounted() {
    // this.updateColor()
    this.updateColor()
  },
  methods: {
    showColor(item) {
      item.show = !item.show
    },
    showColors() {
      for (const key in this.allColor) {
        for (const i in this.allColor[key].chromeColor) {
          this.allColor[key].chromeColor[i].show = false
        }
      }
    },
    chrome(items) {
      // 如果正在点击当前的chrome则让其show变为false，也就是不隐藏
      if (items) {
        items.show = false
      }
    },
    changeBigColor(index) {
      if (this.allColor[index].restColor != '') return
      this.allColor[index].restColor = this.allColor[index].bigColor
    },
    // updateColor() {
    //   for (let i = 0; i < this.allColor.length; i++) {
    //     this.$refs.bigColor[i].style.background = this.allColor[i].bigColor
    //   }
    // },
    // 当改变chrome选择器的颜色时重新刷新颜色
    updataChrome(index) {
      this.changeBigColor(index)

      let colors = this.allColor[index]
      let head = ''
      for (let i = 0; i < colors.chromeColor.length; i++) {
        head += ',' + colors.chromeColor[i].color.hex
        colors.bigColor = 'linear-gradient(to top right' + head + ')'
      }
      // this.updateColor()
    },
    add(index) {
      this.changeBigColor(index)

      if (this.allColor[index].chromeColor.length < 5) {
        this.allColor[index].chromeColor.push({
          color: {
            hex: '#FFF'
          },
          show: false
        })
        this.newColor++
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
      this.changeBigColor(index)
      this.allColor[index].bigColor = this.allColor[index].restColor
      this.allColor[index].restColor = ''
      let color = this.allColor[index].bigColor.split('#')
      for (let i in color) {
        if (i == 0) continue
        let ccolor = '#' + color[i].trim()
        ccolor = ccolor.slice(0, ccolor.length - 1)
        this.allColor[index].chromeColor[--i].color.hex = ccolor
      }

      this.allColor[index].chromeColor = this.allColor[index].chromeColor.slice(
        0,
        this.allColor[index].chromeColor.length - this.newColor
      )
      this.newColor = 0
      this.updataChrome(index)
      this.updateColor()
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
          background: red;
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
