class GameEvent {
  constructor(name, data) {
    const _name = name
    const _data = data

    this.get = () => {
      return { name: _name, data: _data }
    }
  }
}

export { GameEvent }