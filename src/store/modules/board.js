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
  ADD_COLUMN(state, columnName) {
    state.board.columns.push({
      name: columnName,
      tasks: []
    })
  },
  REMOVE_TASK(state, {
    taskIndex,
    columnIndex,
    columns,
  }) {
    columns[columnIndex].tasks.splice(taskIndex, 1)
  },
  UPDATE_TASK(state, {
    task,
    key,
    value
  }) {
    task[key] = value
  },
  MOVE_TASK(state, {
    fromTasks,
    toTasks,
    taskIndex,
    toTaskIndex
  }) {
    const taskToMove = fromTasks.splice(taskIndex, 1)[0]
    toTasks.splice(toTaskIndex, 0, taskToMove)
  },
  MOVE_COLUMN(state, {
    fromColumnIndex,
    toColumnIndex
  }) {
    const columnList = state.board.columns
    const columnToMove = columnList.splice(fromColumnIndex, 1)[0]
    columnList.splice(toColumnIndex, 0, columnToMove)
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