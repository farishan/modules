import { Atom } from './index'

const atom = new Atom()
const atomWatcher = (...args) => {
  console.log('atom watcher says:', args)
}

atom.observe(atomWatcher)

atom.set('game is started')
console.log(atom)
console.log(atom.get())
atom.set('game is stopped')
console.log(atom.get())

atom.unobserve(atomWatcher)
console.log(atom.set('good bye').get())
