import {
  uuid
} from "@/utils"
const defaultUser = {
  id: uuid(),
  name: '',
  title: '',
  img: '@/assets/user-img.png',
  password: '',
  authenticated: false
}
const user = JSON.parse(localStorage.getItem('user')) || defaultUser

const allUsers = JSON.parse(localStorage.getItem('users')) || []

export const namespaced = true


export const state = {
  user: user,
  users: allUsers,
  authenticated: true
}
export const mutations = {
  SET_USER_DATA(state, data) {
    state.user = data
  },
  REMOVE_AUTH(state, data) {
    state.user = data
  },
  ADD_USERS(state, data) {
    state.users.push(data)
  }
}
export const actions = {
  registerNewUser({
    commit,
    getters
  }, userData) {
    if (getters.isUser(userData)) {
      commit('SET_USER_DATA', userData)
    } else {
      commit('SET_USER_DATA', userData)
      commit('ADD_USERS', userData)
    }
  },
  logout({
    commit
  }) {
    const emptyUser = {
      id: uuid(),
      name: '',
      title: '',
      img: '@/assets/user-img.png',
      password: '',
      authenticated: false
    }
    commit('REMOVE_AUTH', emptyUser)
  }
}
export const getters = {
  isAuthenticated: state => {
    return state.user.authenticated
  },
  isUser: state => data => {
    return state.users.find(item => item.username === data.username)
  },
}