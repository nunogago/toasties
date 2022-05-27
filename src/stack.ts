import Render from './render'
import Element from './element'

class Stack extends Render {
  private queue: Map<string, any>
  private limit: number

  constructor(limit: number = 5) {
    super()
    this.limit = limit
    this.queue = new Map()
  }

  getLastElementId() {
    return [...this.queue][this.queue.size - 1][0]
  }

  add(id: string, el: Element) {
    if (this.queue.size >= this.limit) {
      const lastElementId = this.getLastElementId()
      this.remove(lastElementId)
    }

    this.queue.set(id, el)
    this.addToDom(el)
  }

  remove(id: string) {
    this.queue.delete(id)
    this.removeFromDom(id)
  }
}

export default Stack
