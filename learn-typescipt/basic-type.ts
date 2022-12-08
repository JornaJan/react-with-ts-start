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
