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
      return {
        ...state,
        products: usePagination(
          action.payload.products,
          action.payload.pagination
        ),
      }
    case 'sort products lowest to highest':
      console.log(action.payload)
      return {
        ...state,
        products: usePagination(
          state.products.flat().sort((a, b) => a.cost - b.cost),
          action.payload
        ),
      }
    case 'sort products highest to lowest':
      return {
        ...state,
        products: usePagination(
          state.products.flat().sort((b, a) => a.cost - b.cost),
          action.payload
        ),
      }
    case 'sort - most recent':
      return {
        ...state,
        products: usePagination(
          state.products.flat().sort(function (a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.createDate) - new Date(a.createDate)
          }),
          action.payload
        ),
      }
    case 'buy':
      return {
        ...state,
        totalPoints: state.totalPoints - action.payload,
      }
    case 'page - next':
      if (state.currentPage < state.products.length - 1) {
        return {
          ...state,
          currentPage: state.currentPage + 1,
        }
      } else {
        return { ...state }
      }

    case 'page - previous':
      if (state.currentPage > 0) {
        return {
          ...state,
          currentPage: state.currentPage - 1,
        }
      } else {
        return { ...state }
      }

    case 'add to cart':
      // console.log(JSON.parse(localStorage.getItem('productsCart')))
      return {
        ...state,
        cart: JSON.parse(localStorage.getItem('productsCart')) || [],
      }

    default:
      return state
  }
}
