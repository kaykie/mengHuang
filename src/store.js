// import axios from 'axios'
import { reactive } from 'vue'
const store = reactive({
  log: [],
})
window.$store = store
export default store
