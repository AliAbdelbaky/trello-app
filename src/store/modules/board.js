import defaultBoard from "@/default-board"
const board = JSON.parse(localStorage.getItem('boards')) || defaultBoard


export const namespaced = true


export const state = {
  board: board,
  signleTask: {}
}
export const mutations = {
  SET_SINGLE_TASK(state, payload) {
    state.signleTask = payload
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