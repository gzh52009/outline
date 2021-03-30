import { observable } from 'mobx'

const initState = {
  counter: 0,
  // counterStore() {
  //   this.counter++
  // },
  // increment() {
  //   this.counter++
  // },
  // decrement() {
  //   this.counter--
  // },
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  }
}



const counterStore = observable(initState)



export default counterStore