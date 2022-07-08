export function uuid() {
  return Math.random().toString(16).slice(2)
}

export const saveStatePlugin = (store) => {
  console.log(store.state.BoardModule.board)
  // store.subscribe((mutation, state) => console.log('sadasdasdasdas'))
  store.subscribe(
    (mutation, state) => localStorage.setItem('boards', JSON.stringify(state.BoardModule.board))
  )
}