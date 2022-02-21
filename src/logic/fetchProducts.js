import { options } from './fetchUsers'

const request = async (url, options) => {
  const response = await fetch(url, options)
  if (!response.ok)
    throw new Error('WARN', response.status)
  const resultGetProducts = await response.json()
  console.log(resultGetProducts)
  // console.log(response)

  let productsSortBy16 = []

  const reducir = () => {
    if(resultGetProducts.length > 16) {
      productsSortBy16.push(resultGetProducts.slice(0, 16))
      resultGetProducts.splice(0,16)
      reducir()
    }else if(resultGetProducts.length <= 16 && resultGetProducts.length > 0){
      productsSortBy16.push(resultGetProducts)
    }
  }
  reducir()
  console.log(productsSortBy16)
  return productsSortBy16
}
  
export const resultGetProducts = await request('https://coding-challenge-api.aerolab.co/products', options)