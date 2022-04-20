export function pasarDeArrayDeObjASoloDeIDs(arr) {
  let newArr = []

  arr.forEach((item) => {
    for (let i = 0; i < item.cantidad; i++) {
      newArr.push(item._id)
    }
  })
  return newArr
}
