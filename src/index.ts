import Element from './controllers/element'
import Stack from './controllers/stack'

import { DEFAULT_OPTIONS, DEFAULT_ELEMENT_OPTIONS } from './constants'
import { generateRandomId } from './utils'
import { Options } from './types'

class Controller {
  public options: Options
  private stack: Stack

  constructor(options: Options) {
    this.options = options
    this.stack = new Stack(options.limit)
  }

  show(options = DEFAULT_ELEMENT_OPTIONS): string {
    const id = generateRandomId()
    const el = new Element(id, {
      ...options,
      ...this.options
    })

    this.stack.addToStack(id, el)
    return id
  }

  hide(id: string) {
    this.stack.removeFromStack(id)
  }
}

export default (options = DEFAULT_OPTIONS) => {
  return new Controller(options)
}
