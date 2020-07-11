<template>
<<<<<<< HEAD
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
            :style="{ backgroundColor: items.color.hex }"
          >
            <div v-show="items.show">
              <chrome-picker v-model="items.color" />
            </div>
          </div>
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
          bigColor: 'linear-gradient(to top right ,#FAD961, #F76B1C)',
          chromeColor: [
            { color: { hex: '#FAD961' }, show: false },
            { color: { hex: '#F76B1C' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to bottom,#FBDA61, #FF5ACD)',
          chromeColor: [
            { color: { hex: '#FBDA61' }, show: false },
            { color: { hex: '#FF5ACD' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to bottom,#85FFBD, #FFFB7D)',
          chromeColor: [
            { color: { hex: '#85FFBD' }, show: false },
            { color: { hex: '#FFFB7D' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to top right ,#3EECAC, #EE74E1)',
          chromeColor: [
            { color: { hex: '#3EECAC' }, show: false },
            { color: { hex: '#EE74E1' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to bottom,#85FFBD, #FFFB7D)',
          chromeColor: [
            { color: { hex: '#85FFBD' }, show: false },
            { color: { hex: '#FFFB7D' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to bottom,#FFDEE9, #B5FFFC)',
          chromeColor: [
            { color: { hex: '#FFDEE9' }, show: false },
            { color: { hex: '#B5FFFC' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to top right ,#8EC5FC, #E0C3FC)',
          chromeColor: [
            { color: { hex: '#8EC5FC' }, show: false },
            { color: { hex: '#E0C3FC' }, show: false }
          ]
        },
        {
          bigColor: 'linear-gradient(to bottom,#123456, #333)',
          chromeColor: [
            { color: { hex: '#123456' }, show: false },
            { color: { hex: '#123' }, show: false },
            { color: { hex: '#123' }, show: false }
          ]
        }
      ]
    }
  },
  mounted() {
    this.start()
  },
  components: {
    'chrome-picker': Chrome
  },
  methods: {
    showColor(item) {
      item.show = !item.show
    },
    start() {
      for (let i = 0; i < this.allColor.length; i++) {
        this.$refs.bigColor[i].style.background = this.allColor[i].bigColor
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
      position: relative;
      .color {
        height: 80%;
        border-radius: 10px;
      }
      .set {
        display: flex;
        margin-top: 10px;
        margin-left: 10px;
        .btnColor {
          margin: 0 6px;
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
=======
  <div></div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped></style>
>>>>>>> 27b58c6b32f55fcf71e127e2372a141b8088148e
