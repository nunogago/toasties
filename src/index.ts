import { Options } from './types'

import { DEFAULT_OPTIONS, DEFAULT_ELEMENT_OPTIONS } from './utils'

class Controller {
  options: Options

  constructor(options: Options) {
    this.options = options
  }

  show(options = DEFAULT_ELEMENT_OPTIONS): string {
    return ''
  }

  hide(id: string) {}

  clearAll() {}
}

// factory?
export default (options = DEFAULT_OPTIONS) => {
  const intance = new Controller(options)
  return intance
}
