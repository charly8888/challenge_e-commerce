const optionsPost = (opcion) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: import.meta.env.VITE_API_KEY,
    },
    body: JSON.stringify(opcion),
  }
}

export const requestPoints = async (opcion) => {
  const response = await fetch(
    'https://coding-challenge-api.aerolab.co/user/points',
    optionsPost(opcion)
  )
  if (!response.ok) throw new Error('WARN', response.status)
  return response
}

export const requestBuyProduct = async (opcion) => {
  const response = await fetch(
    'https://coding-challenge-api.aerolab.co/redeem?productId=5a0b36c3734d1d08bf70857f',
    optionsPost(opcion)
  )
  console.log('esto es una prueba')
  return response
}
