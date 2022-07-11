import {
  createApp
} from "vue";
import App from "./App.vue";
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import fontawesome from "./plugins/fontawesome";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
const app = createApp(App);

app.component('AppIcon', fontawesome)

const requireComponent = require.context(
  './components/global',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )
  app.component(componentName, componentConfig.default || componentConfig)
})


app.use(store).use(router).mount("#app");