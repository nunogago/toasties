import Render from './render'
import Element from './element'

import { DEFAULT_QUEUE_LIMIT } from '../constants'

class Stack extends Render {
  private queue: Map<string, Element>
  private readonly limit: number

  constructor(limit: number = DEFAULT_QUEUE_LIMIT) {
    super()

    this.queue = new Map()
    this.limit = limit
  }

  private getLastElementId() {
    return [...this.queue][this.queue.size - 1][0]
  }

  addToStack(id: string, el: Element) {
    if (this.queue.size >= this.limit) {
      const lastElementId = this.getLastElementId()
      this.removeFromStack(lastElementId)
    }

    this.queue.set(id, el)
    this.addToDom(el)
  }

  removeFromStack(id: string) {
    this.queue.delete(id)
    this.removeFromDom(id)
  }
}

export default Stack
