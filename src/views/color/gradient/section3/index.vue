<template>
  <div class="wrapper" @click.self="showColors">
    <main>
      <div class="container" v-for="(item, index) in allColor" :key="index">
<<<<<<< HEAD
        <div
          class="color"
          ref="bigColor"
          :style="{ background: item.bigColor }"
        ></div>
=======
        <div class="color" ref="bigColor"></div>
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
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
<<<<<<< HEAD
=======
                ref="chrome"
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
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
          bigColor: 'linear-gradient(to right bottom ,#CE9FFC, #7367F0)',
<<<<<<< HEAD
          restColor: '',
=======
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
          chromeColor: [
            { color: { hex: '#CE9FFC' }, show: false },
            { color: { hex: '#7367F0' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to right bottom ,#90F7EC, #32CCBC)',
<<<<<<< HEAD
          restColor: '',
=======
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
          chromeColor: [
            { color: { hex: '#90F7EC' }, show: false },
            { color: { hex: '#32CCBC' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to right bottom ,#81FBB8, #28C76F)',
<<<<<<< HEAD
          restColor: '',
=======
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
          chromeColor: [
            { color: { hex: '#81FBB8' }, show: false },
            { color: { hex: '#28C76F' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to right bottom ,#E2B0FF, #9F44D3)',
<<<<<<< HEAD
          restColor: '',
=======
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
          chromeColor: [
            { color: { hex: '#E2B0FF' }, show: false },
            { color: { hex: '#9F44D3' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to right bottom ,#5EFCE8, #736EFE)',
<<<<<<< HEAD
          restColor: '',
=======
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
          chromeColor: [
            { color: { hex: '#5EFCE8' }, show: false },
            { color: { hex: '#736EFE' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to right bottom ,#F6CEEC, #D939CD)',
<<<<<<< HEAD
          restColor: '',
=======
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
          chromeColor: [
            { color: { hex: '#F6CEEC' }, show: false },
            { color: { hex: '#D939CD' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to right bottom ,#EE9AE5, #5961F9)',
<<<<<<< HEAD
          restColor: '',
=======
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
          chromeColor: [
            { color: { hex: '#EE9AE5' }, show: false },
            { color: { hex: '#5961F9' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to right bottom ,#FF7AF5, #513162)',
<<<<<<< HEAD
          restColor: '',
=======
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
          chromeColor: [
            { color: { hex: '#FF7AF5' }, show: false },
            { color: { hex: '#513162' }, show: false }
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
<<<<<<< HEAD
    // this.updateColor()
=======
    this.updateColor()
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
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
<<<<<<< HEAD
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
=======
    updateColor() {
      for (let i = 0; i < this.allColor.length; i++) {
        this.$refs.bigColor[i].style.background = this.allColor[i].bigColor
      }
    },
    // 当改变chrome选择器的颜色时重新刷新颜色
    updataChrome(index) {
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
      let colors = this.allColor[index]
      let head = ''
      for (let i = 0; i < colors.chromeColor.length; i++) {
        head += ',' + colors.chromeColor[i].color.hex
        colors.bigColor = 'linear-gradient(to right bottom' + head + ')'
      }
<<<<<<< HEAD
      // this.updateColor()
    },
    add(index) {
      this.changeBigColor(index)
=======
      this.updateColor()
    },
    add(index) {
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
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
<<<<<<< HEAD
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

=======
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
      this.allColor[index].chromeColor = this.allColor[index].chromeColor.slice(
        0,
        this.allColor[index].chromeColor.length - this.newColor
      )
      this.newColor = 0
<<<<<<< HEAD
      this.updataChrome(index)
      // this.updateColor()
=======
      let head = '',
        color = ''
      for (const key of this.allColor[index].chromeColor) {
        color += ',' + key.color.hex
        head = 'linear-gradient(to right bottom' + color + ')'
      }
      this.allColor[index].bigColor = ''
      this.allColor[index].bigColor = head
      this.updateColor()
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
    },
    copy(index) {
      let head = ''
      for (let i = 0; i < this.allColor[index].chromeColor.length; i++) {
        head += ',' + this.allColor[index].chromeColor[i].color.hex
        this.res = 'linear-gradient(to right bottom' + head + ')'
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
<<<<<<< HEAD
        margin-left: -6px;
=======
        margin-right: -6px;
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
        height: 40px;
        span {
          font-size: 22px;
          margin: 15px;
          color: #6278de;
<<<<<<< HEAD
          margin-left: 14px;
=======
          margin-right: 14px;
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
          &:hover {
            color: #57a3f3;
          }
        }
      }
      .set {
        display: flex;
        margin-top: 10px;
<<<<<<< HEAD
        margin-left: 7px;
=======
        margin-right: 7px;
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
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
<<<<<<< HEAD
          left: -80px;
=======
          right: -80px;
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
          top: -35px;
        }
      }
    }
  }
}
</style>
