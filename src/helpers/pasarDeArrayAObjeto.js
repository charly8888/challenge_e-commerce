export function pasarDeArrayAObjeto(arr) {
  const nuevo = []
  const nuevoconca = []

  arr.forEach((pro) => {
    nuevo.push({ ...pro, cantidad: 1 })
  })

  nuevo.forEach((item) => {
    let index = 0
    function coincide(element, i) {
      index = i
      return element._id == item._id
    }

    if (nuevoconca.some(coincide)) {
      nuevoconca[index].cantidad = nuevoconca[index].cantidad + 1
    } else {
      nuevoconca.push(item)
    }
  })
  return nuevoconca
}
