<template>
  <div class="all">
    <header>
      <div class="logo">
        <img src="./assets/img/4.png" alt="" />
      </div>
      <ul id="menu">
        <li data-menuanchor="colorboard" class="active">
          <a href="#colorboard">ColorBoard</a>
        </li>
        <li data-menuanchor="gradient"><a href="#gradient">Gradient</a></li>
<<<<<<< HEAD
=======
        <li data-menuanchor="random"><a href="#random">Random</a></li>
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
        <li>
          <a href="https://github.com/1want/color" target="blank"
            ><img src="./assets/img/1.png" alt=""
          /></a>
        </li>
      </ul>
    </header>

    <full-page :options="options" id="fullpage">
      <div class="section">
        <Choice></Choice>
      </div>
      <div class="section">
        <div class="slide"><Section1></Section1></div>
        <div class="slide"><Section2></Section2></div>
        <div class="slide"><Section3></Section3></div>
      </div>
<<<<<<< HEAD
=======
      <div class="section">
        <Change></Change>
      </div>
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
    </full-page>
  </div>
</template>

<script>
<<<<<<< HEAD
=======
import Change from './views/color/change'
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
import Choice from './views/color/choice'
import Section1 from './views/color/gradient/section1'
import Section2 from './views/color/gradient/section2'
import Section3 from './views/color/gradient/section3'
<<<<<<< HEAD
=======

>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
export default {
  data() {
    return {
      options: {
        menu: '#menu',
<<<<<<< HEAD
        anchors: ['colorboard', 'gradient'],
        sectionsColor: ['#fff', '#ececec']
=======
        anchors: ['colorboard', 'gradient', 'random'],
        sectionsColor: ['#fff', '#ececec', '#F5F5F5']
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
      }
    }
  },
  components: {
<<<<<<< HEAD
=======
    Change,
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
    Choice,
    Section1,
    Section2,
    Section3
  }
}
</script>

<style lang="less" scoped>
@import './assets/css/header.css';
<<<<<<< HEAD
=======

>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
header {
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  .logo {
    margin-left: 50px;
    img {
      width: 120px;
      margin-top: -35px;
    }
  }
<<<<<<< HEAD
=======

>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
  #menu {
    display: flex;
    margin-right: 2%;
    li {
      margin: 20px 10px;
      position: relative;
      font-family: arial;
    }
<<<<<<< HEAD
    li:nth-child(3) {
=======
    li:nth-child(4) {
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
      img {
        width: 40px;
        margin-top: -10px;
        border-radius: 50%;
      }
    }
    li.active a:after {
      content: '';
      margin: 0 1.1em 0 1.1em;
      height: 1.5px;
      background: #000;
      display: block;
      position: absolute;
      bottom: -15px;
      left: 0;
      right: 0;
      display: block;
    }
    a {
      padding: 0 1.1em 0 1.1em;
      color: #000;
    }
  }
}
</style>
