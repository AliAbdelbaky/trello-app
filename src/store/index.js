import {
  createStore
} from "vuex";
import * as BoardModule from './modules/board';
import * as ThemeModule from './modules/theme';
import * as SidebarModule from './modules/sidebar';
import * as UserModule from './modules/user';
import {
  saveStatePlugin
} from "@/utils";

export default createStore({
  plugins: [saveStatePlugin],
  state: {},
  getters: {},
  mutations: {

  },
  actions: {

  },
  modules: {
    BoardModule,
    ThemeModule,
    SidebarModule,
    UserModule
  },
});