import {
  createStore
} from "vuex";
import * as BoardModule from './modules/board';
import {
  saveStatePlugin
} from "@/utils";

export default createStore({
  plugins: [saveStatePlugin],
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    BoardModule
  },
});