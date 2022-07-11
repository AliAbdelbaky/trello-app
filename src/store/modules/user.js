import {
  uuid
} from "@/utils"
const defaultUser = {
  id: uuid(),
  name: '',
  title: '',
  img: '',
  authenticated: false
}
const user = JSON.parse(localStorage.getItem('user')) || defaultUser


export const namespaced = true


export const state = {
  user: user
}
export const mutations = {
  SET_USER_DATA(state, data) {
    state.user = data
  }
}
export const actions = {
  submitUserData({
    commit
  }, userData) {
    commit('SET_USER_DATA', userData)
    console.log(userData)
  }

}
export const getters = {
  isAuthenticated: state => {
    return state.user.authenticated
  }
}