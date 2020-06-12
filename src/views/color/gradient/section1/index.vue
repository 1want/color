<template>
  <div class="wrapper">
    <main>
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
    </main>
  </div>
</template>

<script>
import { Chrome } from 'vue-color'
// let colors = {
//   hex: '',
//   a: 0.9
// }

export default {
  data() {
    return {
      colors: '#123456',
      show: false
    }
  },
  components: {
    'chrome-picker': Chrome
  },
  methods: {
    showColor() {
      console.log('ok')
      this.show = !this.show
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
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
      }
      .set {
        display: flex;
        margin-top: 10px;
        margin-left: 10px;
        .btnColor {
          margin: 0 10px;
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
