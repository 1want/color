import Vue from 'vue'
import { Button, Message, ColorPicker } from 'element-ui'

Message.install = Vue => {
  Vue.prototype.$message = Message
}

Vue.use(Button)
  .use(Message)
  .use(ColorPicker)
