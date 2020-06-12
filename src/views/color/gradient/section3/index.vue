<template>
  <div class="wrapper">
    <main>
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
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
      background: blue;
      .color {
        height: 80%;
        border-radius: 10px;
        background: red;
      }
      .set {
        display: flex;
        margin-top: 10px;
        margin-left: 10px;
        .edit {
          margin: 0 10px;
          width: 30px;
          height: 30px;
          background: yellow;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
