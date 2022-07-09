export const namespaced = true


export const state = {
  lightTheme: true
}
export const mutations = {
  SET_THEME(state, payload) {
    let bodyDiv = document.querySelector("body");
    state.lightTheme = payload
    if (payload) {
      bodyDiv.classList.add("light-theme");
      bodyDiv.classList.remove("dark-theme");
      localStorage.setItem("theme", "currentTheme");
    } else {
      bodyDiv.classList.add("dark-theme");
      bodyDiv.classList.remove("light-theme");
      localStorage.setItem("theme", "dark-theme");
    }
  },
  TOGGLE_THEME(state) {
    let bodyDiv = document.querySelector("body");
    state.lightTheme = !state.lightTheme
    if (state.lightTheme) {
      bodyDiv.classList.add("light-theme");
      bodyDiv.classList.remove("dark-theme");
      localStorage.setItem("theme", "light-theme");
    } else {
      bodyDiv.classList.remove("light-theme");
      bodyDiv.classList.add("dark-theme");
      localStorage.setItem("theme", "dark-theme");
    }
  }
}
export const actions = {
  initTheme({
    commit
  }) {
    let currentTheme = localStorage.getItem("theme") || "light-theme";
    if (currentTheme == "light-theme") {
      commit('SET_THEME', true)
    } else {
      commit('SET_THEME', false)
    }
  },
  toggleTheme({
    commit
  }) {
    commit('TOGGLE_THEME')
  }
}