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
    case 'sort products lowest to highest':
      return {
        ...state,
        products: state.products.sort((a, b) => a.cost - b.cost),
      }
    case 'sort products highest to lowest':
      return {
        ...state,
        products: state.products.sort((b, a) => a.cost - b.cost),
      }
    case 'buy':
      return {
        ...state,
        totalPoints: state.totalPoints - action.payload,
      }
    default:
      return state
  }
}
