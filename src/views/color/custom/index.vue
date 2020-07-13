<template>
  <div
    class="wrappers"
    :style="'background:rgba( ' + r + ',' + g + ',' + b + ',' + a / 100 + ')'"
  >
    <material-picker v-model="color" class="material"></material-picker>
    <div class="set">
      <div>
        R:
        <input type="range" :min="0" :max="255" v-model="r" @click="change" />
      </div>
      <div>
        G:
        <input type="range" :min="0" :max="255" v-model="g" @click="change" />
      </div>
      <div>
        B:
        <input type="range" :min="0" :max="255" v-model="b" @click="change" />
      </div>
      <div>
        A:
        <input type="range" :min="0" :max="100" v-model="a" @click="change" />
      </div>
    </div>
  </div>
</template>

<script>
import { Material } from 'vue-color'
export default {
  data() {
    return {
      r: 163,
      g: 139,
      b: 163,
      a: 80,
      color: '#456123'
    }
  },
  methods: {
    rgbToHex(rgb) {
      var color = rgb.toString().match(/\d+/g)
      var hex = '#'
      for (var i = 0; i < 3; i++) {
        hex += ('0' + Number(color[i]).toString(16)).slice(-2)
      }
      this.color = hex
    },
    change() {
      this.rgbToHex([this.r, this.g, this.b])
    }
  },
  components: {
    'material-picker': Material
  }
}
</script>

<style lang="less" scoped>
.wrappers {
  width: 100vw;
  height: 100vh;
  .material {
    position: absolute;
    margin-top: 20%;
    margin-left: 5%;
  }
  .vc-material {
    width: 130px;
    height: 130px;
  }

  #start1 {
    width: 1px;
    height: 1px;
    animation: animStar 50s linear infinite;
    animation-delay: -10s;
  }
  // start2生成了长2px，宽2px的星星200个
  #start2 {
    width: 2px;
    height: 2px;
    animation: animStar 100s linear infinite;
    animation-delay: -8s;
  }
  // start3生成了长3px，宽3px的星星100个
  #start3 {
    width: 3px;
    height: 3px;
    animation: animStar 150s linear infinite;
    animation-delay: -5s;
  }
  // 动画效果如下
  @keyframes animStar {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-2000px);
    }
  }
  .set {
    bottom: 50px;
    position: absolute;
    margin-left: 5%;

    input {
      margin: 20px;
      outline: none; /*去掉点击时出现的外边框*/
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none; /*这三个是去掉那条线原有的默认样式，划重点！！*/
      width: 30%;
      height: 0.3rem;
      background: rgb(119, 112, 112);
      width: 50vw;
    }
    input[type='range']::-webkit-slider-thumb {
      /*::-webkit-slider-thumb是代表给滑块的样式进行变更*/
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none; /*//这三个是去掉滑块原有的默认样式，划重点！！*/
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: #000;
    }
  }
}
</style>
