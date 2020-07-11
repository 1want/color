<template>
  <div class="wrapper">
    <main>
<<<<<<< HEAD
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
=======
      <div class="container">
        <div class="color">color</div>
        <div class="set">
          <div class="edit">a</div>
          <div class="edit">b</div>
        </div>
      </div>

      <div class="container">2</div>
      <div class="container">3</div>
      <div class="container">4</div>
      <div class="container">5</div>
      <div class="container">6</div>
      <div class="container">7</div>
      <div class="container">8</div>
>>>>>>> 27b58c6b32f55fcf71e127e2372a141b8088148e
    </main>
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
export default {
  data() {
    return {}
>>>>>>> 27b58c6b32f55fcf71e127e2372a141b8088148e
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
<<<<<<< HEAD
  main {
    display: flex;
    flex-wrap: wrap;
    margin: 100px 0 40px 0;
=======
  align-items: center;
  main {
    display: flex;
    flex-wrap: wrap;
>>>>>>> 27b58c6b32f55fcf71e127e2372a141b8088148e
    .container {
      border-radius: 10px;
      margin: 2px;
      width: 24%;
      height: 260px;
<<<<<<< HEAD
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
=======
      background: blue;
      .color {
        height: 80%;
        border-radius: 10px;
        background: red;
>>>>>>> 27b58c6b32f55fcf71e127e2372a141b8088148e
      }
      .set {
        display: flex;
        margin-top: 10px;
        margin-left: 10px;
<<<<<<< HEAD
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
=======
        .edit {
          margin: 0 10px;
          width: 30px;
          height: 30px;
          background: yellow;
          border-radius: 50%;
        }
>>>>>>> 27b58c6b32f55fcf71e127e2372a141b8088148e
      }
    }
  }
}
</style>
