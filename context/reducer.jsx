import usePagination from '/src/hooks/usePagination'

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
      return { ...state, products: usePagination(action.payload) }
    case 'sort products lowest to highest':
      return {
        ...state,
        products: usePagination(
          state.products.flat().sort((a, b) => a.cost - b.cost)
        ),
      }
    case 'sort products highest to lowest':
      return {
        ...state,
        products: usePagination(
          state.products.flat().sort((b, a) => a.cost - b.cost)
        ),
      }
    case 'buy':
      return {
        ...state,
        totalPoints: state.totalPoints - action.payload,
      }
    case 'page - next':
      if (action.payload < state.products.length - 1) {
        return {
          ...state,
          currentPage: state.currentPage++,
        }
      } else {
        return { ...state }
      }

    case 'page - previous':
      if (action.payload > 0) {
        return {
          ...state,
          currentPage: state.currentPage--,
        }
      } else {
        return { ...state }
      }
    case 'add to cart':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    default:
      return state
  }
}
