export {}


// 类型别名
type PlusType = (x: number, y: number) => number

function sum(x: number, y: number): number {
  return x + y
}

const result: PlusType = sum

type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}


// 类型断言

function getLength(input: string | number): number {
  const str = input as string
  if (str.length) {
    return str.length
  } else {
    const number = input as number
    return number.toString().length
  }
}

// 另一种写法
function getLength2(input: string | number): number {
  if((<string>input).length) {
    return (<string>input).length
  } else {
    return input.toString().length
  }
}
