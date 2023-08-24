import { GameEvent } from '../game-event'
import { Observable } from '../observable'

class Atom extends Observable {
  constructor(initialValue) {
    super()

    let _value = initialValue

    this.set = (value) => {
      _value = value

      const event = new GameEvent('set', value)
      this.notify(event)

      return this
    }

    this.get = () => {
      const event = new GameEvent('get', _value)
      this.notify(event)

      return _value
    }
  }
}

export { Atom }
