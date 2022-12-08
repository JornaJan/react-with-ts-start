export {}
function echo<T>(arg: T): T {
  return arg
}

const result  = echo(true)

function swap<T,U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const result2 = swap(['string', 123])

interface IWithLength {
  length: number
}

// T extends IWithLength 用来约束泛型

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}
const arr = echoWithLength([1,2,3])
const str = echoWithLength('hello')
const obj = echoWithLength({ length: 10 })

console.log(arr)
console.log(str)
console.log(obj)



/**

class Queue<T> {
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop():T {
    return this.data.shift()
  }
}

const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())
console.log(queue.pop().toFixed())

**/

interface IKeyPair<T, U> {
  key: T,
  value: U
}

const kp1: IKeyPair<number, string> = { key: 9527, value: 'zxc' }
const kp2: IKeyPair<string, number> = { key: 'test', value: 777 }

interface IPlus<T> {
  (a: T, b: T) : T
}

function plus(a: number, b: number): number {
  return a + b
}

function connect(a: string, b: string): string {
  return a + b
}
const testA: IPlus<number> = plus
const testB: IPlus<string> = connect
