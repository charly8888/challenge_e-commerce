export function reducer(state, action) {
  switch (action.type) {
    case 'small':
      return { ...state, totalPoints: state.totalPoints + 1000 }
    case 'normal':
      return { ...state, totalPoints: state.totalPoints + 5000 }
    case 'large':
      return { ...state, totalPoints: state.totalPoints + 7500 }
    case 'points':
      return { ...state, totalPoints: action.payload }
    case 'user':
      return { ...state, name: action.payload }
    case 'products':
      return { ...state, products: action.payload }
    default:
      return state
  }
}
