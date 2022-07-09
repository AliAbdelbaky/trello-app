export const namespaced = true


export const state = {
  sidebarOpened: false,
  sidebarOver: false,
  isPhone: false,
  isActive: '',
  isPhoneClass: ''
}
export const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.sidebarOpened = !state.sidebarOpened
  },
  SET_PHONE_THEME(state, payload) {
    state.isPhone = payload
  },
  SET_PHONE_CLASS(state, payload) {
    state.isPhoneClass = payload
  },
  SET_ACTIVE_CLASS(state, payload) {
    state.isActive = payload
  },
  SET_OVER_THEME(state, payload) {
    state.sidebarOver = payload
  }
}
export const actions = {
  toggleSidebar({
    commit,
    getters
  }) {
    commit('TOGGLE_SIDEBAR')
    commit('SET_ACTIVE_CLASS', getters.isActive)
  },
  initSidebarTheme({
    commit,
    state,
    getters
  }) {
    let WindowWidth = document.documentElement.clientWidth;
    if (WindowWidth <= 850) {
      commit("SET_PHONE_THEME", true)
      commit("SET_OVER_THEME", true)
      commit('SET_PHONE_CLASS', getters.isPhone)
    } else {
      commit("SET_PHONE_THEME", false)
      commit("SET_OVER_THEME", false)
      commit('SET_PHONE_CLASS', getters.isPhone)
    }
    window.addEventListener("resize", () => {
      let WindowWidth = document.documentElement.clientWidth;
      if (WindowWidth <= 850) {
        commit("SET_PHONE_THEME", true)
        commit("SET_OVER_THEME", true)
        commit('SET_PHONE_CLASS', getters.isPhone)
        state.sidebarOpened = false
        commit('SET_ACTIVE_CLASS', getters.isActive)
      } else {
        commit("SET_PHONE_THEME", false)
        commit("SET_OVER_THEME", false)
        commit('SET_PHONE_CLASS', getters.isPhone)
      }
    })
  }
}
export const getters = {
  isActive: state => {
    if (!state.sidebarOver) {
      return state.sidebarOpened ? 'sidebar-visible' : ''
    } else {
      return state.sidebarOpened ? 'sidebar-visible-over' : ''
    }
  },
  isPhone: state => {
    return state.isPhone ? 'sidebar-over' : ''
  }
}