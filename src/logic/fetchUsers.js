export const options ={
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjBmMWM2MGQyZTllMjAwMWEzOTlhNDEiLCJpYXQiOjE2NDUxNTc0NzJ9.LO_tT7dk3Gqk78RWrioLACJSqduq-fdYRQfaibBDmmA'
  },
}

const request = async (url, options) => {
  const response = await fetch(url, options)
  if (!response.ok)
    throw new Error('WARN', response.status)
  const data = await response.json()
  console.log(data)
  // console.log(response)
  return data
}

export const resultGetUsers = await request('https://coding-challenge-api.aerolab.co/user/me', options)