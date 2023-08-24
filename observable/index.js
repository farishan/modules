class Observable {
  constructor() {
    let observers = []

    this.observe = (fn) => {
      observers.push(fn)
    }

    this.unobserve = (fn) => {
      observers = observers.filter(f => f !== fn)
    }

    this.notify = (...args) => {
      for (let index = 0; index < observers.length; index++) {
        const observer = observers[index];
        observer(...args)
      }
    }
  }
}

export { Observable }
