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
        <div class="color" :class="colors"></div>
        <div class="set">
          <div v-show="show">
            <chrome-picker v-model="colors" />
          </div>
          <div
            class="btnColor"
            @click="showColor"
            style="backgroundColor:this.colors"
          ></div>
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
import { Chrome } from 'vue-color'
<<<<<<< HEAD
=======
// let colors = {
//   hex: '',
//   a: 0.9
// }
>>>>>>> 27b58c6b32f55fcf71e127e2372a141b8088148e

export default {
  data() {
    return {
<<<<<<< HEAD
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
      ]
    }
  },
  mounted() {
    this.start()
  },
=======
      colors: '#123456',
      show: false
    }
  },
>>>>>>> 27b58c6b32f55fcf71e127e2372a141b8088148e
  components: {
    'chrome-picker': Chrome
  },
  methods: {
<<<<<<< HEAD
    showColor(item) {
      item.show = !item.show
    },
    start() {
      for (let i = 0; i < this.allColor.length; i++) {
        this.$refs.bigColor[i].style.background = this.allColor[i].bigColor
      }
=======
    showColor() {
      console.log('ok')
      this.show = !this.show
>>>>>>> 27b58c6b32f55fcf71e127e2372a141b8088148e
    }
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
    margin: 90px 0 40px 0;
    .container {
      border-radius: 10px;
      margin: 0px 5px 40px;
      width: 24%;
      height: 260px;
      position: relative;
      .color {
        height: 80%;
        border-radius: 10px;
=======
  align-items: center;
  main {
    display: flex;
    flex-wrap: wrap;
    .container {
      border-radius: 10px;
      margin: 2px;
      width: 24%;
      height: 260px;
      position: relative;

      .color {
        height: 80%;
        border-radius: 10px;
        background-color: #d9afd9;
        background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
        background-image: -webkit-linear-gradient(
          0deg,
          #d9afd9 0%,
          #97d9e1 100%
        );
        background-image: -moz-linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
        background-image: -o-linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
>>>>>>> 27b58c6b32f55fcf71e127e2372a141b8088148e
      }
      .set {
        display: flex;
        margin-top: 10px;
        margin-left: 10px;
        .btnColor {
<<<<<<< HEAD
          margin: 0 6px;
=======
          margin: 0 10px;
>>>>>>> 27b58c6b32f55fcf71e127e2372a141b8088148e
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
