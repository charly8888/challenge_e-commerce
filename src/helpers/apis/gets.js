export const optionsGet = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjBmMWM2MGQyZTllMjAwMWEzOTlhNDEiLCJpYXQiOjE2NDUxNTc0NzJ9.LO_tT7dk3Gqk78RWrioLACJSqduq-fdYRQfaibBDmmA',
  },
}

export const resultGetUsers = async (url) => {
  const response = await fetch(url, optionsGet)
  if (!response.ok) throw new Error('WARN', response.status)
  const data = await response.json()
  console.log('Usuario en el fech', data)
  return data
}

export const resultGetProducts = async (url) => {
  const response = await fetch(url, optionsGet)
  if (!response.ok) throw new Error('WARN', response.status)
  const resultGetProducts = await response.json()
  console.log( 'Resultado de productos en el fech', resultGetProducts)
  return resultGetProducts

}
