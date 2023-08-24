import { Observable } from '../observable'

class Atom extends Observable {
  constructor(initialValue) {
    super()

    let _value = initialValue

    this.set = (value) => {
      _value = value

      this.notify({
        action: 'set',
        data: value
      })

      return this
    }

    this.get = () => {
      this.notify({
        action: 'get',
        data: _value
      })

      return _value
    }
  }
}

export { Atom }
