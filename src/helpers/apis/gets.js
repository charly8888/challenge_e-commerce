export const optionsGet = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: import.meta.env.VITE_API_KEY,
  },
}

export const resultGetUsers = async (url) => {
  const response = await fetch(url, optionsGet)
  if (!response.ok) throw new Error('WARN', response.status)
  const data = await response.json()
  console.log('Usuario en el fech', data)
  return data
}
export const resultGetHistory = async (url) => {
  const response = await fetch(url, optionsGet)
  if (!response.ok) throw new Error('WARN', response.status)
  const data = await response.json()
  console.log('History', data)
  return data
}

export const resultGetProducts = async (url) => {
  const response = await fetch(url, optionsGet)
  if (!response.ok) throw new Error('WARN', response.status)
  const resultGetProducts = await response.json()
  console.log('Resultado de productos en el fech', resultGetProducts)
  return resultGetProducts
}
