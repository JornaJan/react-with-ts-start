```ts
// basic-type.ts

let isDone: boolean = false

let age: number = 10
let binaryNumber: number = 0b1111

let firstName: string = 'jorna'
let message: string = `Hello, ${firstName}`

let un: undefined = undefined
let nu: null = null

let notSure: any = 3
notSure = false
notSure = 'hello'

// 联合类型
let numberOrString: number | string = 10
numberOrString = 'wow'

// 数组
let arrOfNumbers: number[] = [1, 2, 3, 4, 5]
let arrOfNumbers2: Array<number> = [1, 2, 3, 4, 5]

let user: [string, number ] = ['win', 10]

```

```ts
// class.ts

class Animal {
  readonly name: string
  static catge: string[] = ['man', 'bird']
  constructor(name: string) {
    this.name = name
  }

  run() {
    return `${this.name} is running`
  }
}

console.log(Animal.catge)
let cat = new Animal('cat')
console.log(cat.run())

class Dog extends Animal {
  constructor(name: string) {
    super(name)
    console.log(this.name)
  }
  bark() {
    return `${this.name} is barking`
  }
  run() {
    return `MM, ${super.run()}`
  }
}

let snk = new Dog('dog')
console.log(snk.bark())
console.log(snk.run())


/**
 * interface & class
* */

interface IRadio {
  switchRadio: () => void
}

interface IBattery {
  checkBatteryStatus: () => void
}

interface IRadioWithBattery extends IRadio {
  checkBatteryStatus: () => void
}


class Car implements IRadio {
  switchRadio () {}
}

class CellPhone implements IRadioWithBattery {
  switchRadio () {}
  checkBatteryStatus() {}
}
```

```ts
// interface.ts

interface IPerson {
  readonly id: number;
  name: string;
  age: number;
  sex?: string
}
let vik: IPerson = {
  id: 9517,
  name: 'Jo',
  age: 10
}
```

```ts
// enum.ts

enum Direction {
  Up = 10,
  Down,
  Left,
  Right,
}
console.log(Direction.Left)

// 常量枚举
const enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
```

```ts
// functions.ts

function add(x: number = 3, y: number): number {
  return x + y
}

let result = add(2, 3)

const addNumber = (x: number, y: number): number => {
  return x + y
}

const otherAdd: (x: number, y: number) => number = addNumber
```

```ts
// generics.ts

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
```

```ts
// more.ts

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
```
