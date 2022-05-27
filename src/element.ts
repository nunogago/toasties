import { ElementOptions, Options } from './types'

class Element {
  private readonly id: string
  private node?: HTMLDivElement
  private blueprint?: any

  options: ElementOptions & Options

  constructor(id: string, options: ElementOptions & Options) {
    this.options = options
    this.blueprint
    this.node

    this.id = id

    this._init()
  }

  _validate() {
    if (!this.blueprint) {
      throw 'Unable to initalize element'
    }
  }

  build() {
    this._validate()

    const element = document.createElement('div')
    element.setAttribute('role', 'alert')
    element.className = 'container'
    element.id = this.id

    this.node = element
    return this.node
  }

  _init() {
    // create blueprint with element options
    const blueprint = {}
    this.blueprint = blueprint
  }
}

export default Element
