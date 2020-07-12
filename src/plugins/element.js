import Vue from 'vue'
<<<<<<< HEAD
import { Button, Message } from 'element-ui'

Message.install = function(Vue) {
  Vue.prototype.$message = Message
}

Vue.use(Button).use(Message)
=======
import { Button, Message, ColorPicker } from 'element-ui'

Message.install = Vue => {
  Vue.prototype.$message = Message
}

Vue.use(Button)
  .use(Message)
  .use(ColorPicker)
>>>>>>> 6208b11c45bdd9c0506d8018b2da6892315d64c0
