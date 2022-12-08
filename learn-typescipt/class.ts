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
