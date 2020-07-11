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
        },
        {
          bigColor: 'linear-gradient(to bottom,#123456, #333)',
          chromeColor: [
            { color: { hex: '#123456' }, show: false },
            { color: { hex: '#123' }, show: false },
            { color: { hex: '#123' }, show: false }
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
        },
        {
          bigColor: 'linear-gradient(to bottom,#123456, #333)',
          chromeColor: [
            { color: { hex: '#123456' }, show: false },
            { color: { hex: '#123' }, show: false },
            { color: { hex: '#123' }, show: false }
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
        // background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
        // background-image: -webkit-linear-gradient(
        //   0deg,
        //   #d9afd9 0%,
        //   #97d9e1 100%
        // );
        // background-image: -moz-linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
        // background-image: -o-linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
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
