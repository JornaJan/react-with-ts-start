function add(x: number = 3, y: number): number {
  return x + y
}

let result = add(2, 3)

const addNumber = (x: number, y: number): number => {
  return x + y
}

const otherAdd: (x: number, y: number) => number = addNumber
