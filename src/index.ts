import { Options, ElementOptions } from './types'

class Controller {
  options: Options

  constructor(options: Options) {
    this.options = options
  }

  show(options: ElementOptions): string {
    return ''
  }

  hide(id: string) {}

  clearAll() {}
}

// factory?
export default (options: Options) => {
  const intance = new Controller(options)
  return intance
}
