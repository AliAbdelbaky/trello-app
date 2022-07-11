export function uuid() {
  return Math.random().toString(16).slice(2)
}
export const saveStatePlugin = (store) => {
  store.subscribe(
    (mutation, state) => {
      localStorage.setItem('boards', JSON.stringify(state.BoardModule.board))
    }
  )
}