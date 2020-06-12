<template>
  <div class="all">
    <header>
      <ul id="menu">
        <li>
          <span>C</span><span>o</span><span>l</span><span>o</span><span>r</span>
        </li>
        <li data-menuanchor="colorboard" class="active">
          <a href="#colorboard">ColorBoard</a>
        </li>
        <li data-menuanchor="gradient"><a href="#gradient">Gradient</a></li>
        <li data-menuanchor="change"><a href="#change">Custom</a></li>
        <li>
          <a href="https://github.com/1want/color" target="blank">FeedBack</a>
        </li>
      </ul>
    </header>

    <full-page :options="options" id="fullpage">
      <div class="section">
        <Choice></Choice>
      </div>
      <div class="section">
        <Gradient></Gradient>
        <div class="slide">section1</div>
        <div class="slide">section2</div>
        <div class="slide">section3</div>
      </div>
      <div class="section">
        <Change></Change>
      </div>
    </full-page>
  </div>
</template>

<script>
import Change from './views/color/change'
import Choice from './views/color/choice'
// import Gradient from './gradient'

export default {
  data() {
    return {
      options: {
        menu: '#menu',
        // navigation: true,
        anchors: ['colorboard', 'gradient', 'change'],
        sectionsColor: ['#110c1b', '#282632', '#0b0a11']
      }
    }
  },
  components: {
    Change,
    Choice
    // Gradient
  }
}
</script>

<style lang="less" scoped>
@import './assets/css/header.css';

header {
  position: fixed;
  z-index: 10;
  color: #fff;
  width: 100vw;
  #menu {
    display: flex;
    li {
      margin: 10px 0;
      position: relative;
      font-family: arial;
      &:nth-child(1) {
        width: 63%;
        margin-left: 50px;
        font-size: 2rem;
        font-family: Georgia;
      }
      span:nth-child(1) {
        color: #6080f3;
      }
      span:nth-child(2) {
        color: #789eed;
      }
      span:nth-child(3) {
        color: #96c6e4;
      }
      span:nth-child(4) {
        color: #a9dfdf;
      }
      span:nth-child(5) {
        color: #bffbd8;
      }
    }
    li.active a:after {
      content: '';
      margin: 0 1.1em 0 1.1em;
      height: 2px;
      background: #fff;
      display: block;
      position: absolute;
      bottom: 5px;
      left: 0;
      right: 0;
      display: block;
    }
    a {
      padding: 0 1.1em 0 1.1em;
    }
  }
}
</style>
