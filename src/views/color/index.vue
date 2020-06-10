<template>
  <div class="all">
    <header>
      <ul>
        <li>Color ui</li>
        <li>ColorBoard</li>
        <li>Custom</li>
        <li>FeedBack</li>
      </ul>
    </header>
    <Choice></Choice>
    <Change></Change>
  </div>
</template>

<script>
import Change from './change'
import Choice from './choice'

export default {
  components: {
    Change,
    Choice
  }
}
</script>

<style lang="less" scoped>
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
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
  }
}
</style>
