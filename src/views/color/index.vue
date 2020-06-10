<template>
  <div class="all">
    <header>
      <ul id="menu">
        <li>Color ui</li>
        <li>ColorBoard</li>
        <li>Custom</li>
        <li>FeedBack</li>
      </ul>
    </header>

    <full-page :options="options">
      <div class="section">
        <Choice></Choice>
      </div>
      <div class="section">
        <Change></Change>
      </div>
    </full-page>
  </div>
</template>

<script>
import Change from './change'
import Choice from './choice'

export default {
  data() {
    return {
      options: {
        menu: '#menu',
        navigation: true,
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      }
    }
  },
  components: {
    Change,
    Choice
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/header.css';
header {
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 10;
  color: #fff;
  width: 100vw;
  ul {
    display: flex;
    width: 100vw;
    cursor: pointer;
    li {
      line-height: 70px;
      margin: 0 20px;
      font-size: 1.1rem;
      font-family: arial, helvetic;
      &:nth-child(1) {
        width: 63%;
        margin-left: 50px;
        font-size: 2rem;
        font-weight: 500;
      }
    }
  }
}
</style>
