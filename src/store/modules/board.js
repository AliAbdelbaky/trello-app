import defaultBoard from "@/default-board"
const board = JSON.parse(localStorage.getItem('board')) || defaultBoard


export const namespaced = true


export const state = {
  board: board
}
export const mutations = {
  ADD(state, payload) {
    state.board.columns.push(payload)
  }
}
export const actions = {
  addAction({
    commit
  }) {
    const paylood = {
      name: 'a7a'
    }
    commit('ADD', paylood)

  }
}
export const getters = {}