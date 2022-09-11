const cats =  ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
    console.log(name)
    console.log(cats)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
    console.log(name)
    console.log(cats)
}

function destructivelyRemoveLastCat() {
    cats.pop()
    console.log()
    console.log(cats)
}

function destructivelyRemoveFirstCat() {
    cats.shift()

}

function appendCat(name) {
    const catsCopy = [ ...cats]
      catsCopy.push(name)
      return catsCopy
  }

  function prependCat(name) {
    const catsCopyTwo = [... cats]
    catsCopyTwo.unshift(name)
    return catsCopyTwo
}

function removeLastCat() {
    const removeLastCatCopy = [...cats]
    removeLastCatCopy.pop()
    return removeLastCatCopy
}

function removeFirstCat() {
    const removeFirstCatCopy = [...cats]
    removeFirstCatCopy.shift()
    return removeFirstCatCopy
}
