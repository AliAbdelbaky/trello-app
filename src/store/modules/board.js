import defaultBoard from "@/default-board"
import {
  uuid
} from "@/utils"
const board = JSON.parse(localStorage.getItem('boards')) || defaultBoard


export const namespaced = true


export const state = {
  board: board,
  signleTask: {}
}
export const mutations = {
  SET_SINGLE_TASK(state, payload) {
    state.signleTask = payload
  },
  ADD_TASK(state, {
    tasks,
    name
  }) {
    tasks.push({
      name,
      id: uuid(),
      description: ''
    })
  },
  UPDATE_TASK(state, {
    task,
    key,
    value
  }) {
    task[key] = value
  }
}
export const actions = {
  async setSingleTask({
    commit,
    getters
  }, task_id) {
    let task = await getters.getTask(task_id)
    commit('SET_SINGLE_TASK', task)
  }
}
export const getters = {
  getTask(state) {
    return (id) => {
      for (const column of state.board.columns) {
        for (const task of column.tasks) {
          if (task.id === id) {
            return task
          }
        }
      }
    }
  }
}