// Write your solution here!

const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name) {
  return cats.push(name)
}

function destructivelyPrependCat(name) {
  return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
  return cats.pop()
}

function destructivelyRemoveFirstCat() {
  cats.shift()
}

function appendCat() {
  const newArray = [...cats, 'Broom']
  return newArray
}
appendCat()

function prependCat() {
  const newArray = ['Arnold', ...cats]
  return newArray
}
appendCat()

function removeLastCat() {
  const copyArray = cats.slice(0, 2)
  return copyArray
}
removeLastCat()

function removeFirstCat() {
  const copyArray = cats.slice(1)
  return copyArray
}
removeFirstCat()
