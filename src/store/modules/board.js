import defaultBoard from "@/default-board"
const board = JSON.parse(localStorage.getItem('boards')) || defaultBoard


export const namespaced = true


export const state = {
  board: board
}
export const mutations = {}
export const actions = {}
export const getters = {}