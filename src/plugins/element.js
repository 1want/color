import Vue from 'vue'
import { Button, Message } from 'element-ui'

Message.install = Vue => {
  Vue.prototype.$message = Message
}

Vue.use(Button).use(Message)
