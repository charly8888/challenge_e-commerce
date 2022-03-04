

let points ={
  'amount': 1000
}

const optionsPost ={
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjBmMWM2MGQyZTllMjAwMWEzOTlhNDEiLCJpYXQiOjE2NDUxNTc0NzJ9.LO_tT7dk3Gqk78RWrioLACJSqduq-fdYRQfaibBDmmA'
  },
  body: JSON.stringify(points)
}


export const requestPoints = async () => {
  const response = await fetch('https://coding-challenge-api.aerolab.co/user/points', optionsPost)
  if (!response.ok)
    throw new Error('WARN', response.status)
  // console.log(response)
  return response
}

