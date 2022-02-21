
import  { useState} from 'react'
import { resultGetProducts } from '../logic/fetchProducts'
export const useCurrentPag = ()=> {
  const [pag, setpag] = useState(0)
  const increment = () => {
    if(pag < resultGetProducts.length - 1) {
      setpag(p => p + 1)
    }
  }
  const decrement = () => {
    if(pag > 0) {
      setpag(p => p - 1)
    }
  }
  return{pag,increment,decrement}
}

