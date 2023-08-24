import { Observable } from ".";

const o = new Observable()

const observer = (data) => {
  console.log('hello from observer: ', data)
}

o.observe(observer)

o.notify('hello world')

o.unobserve(observer)

o.notify('hello world again')
