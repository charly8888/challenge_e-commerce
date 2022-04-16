const reducir = (arr, numero = 16) => {
  arr.flat()
  let arrModificado = []

  const dividirLosArrays = (arr, numero) => {
    if (arr.length > numero) {
      arrModificado.push(arr.splice(0, numero))
      dividirLosArrays(arr, numero)
    } else {
      arrModificado.push(arr.splice(0))
    }
  }

  dividirLosArrays(arr, numero)

  return arrModificado
}

export default reducir
