import Blueprint from './blueprint'

import { ElementOptions, Options } from '../types'

class Element extends Blueprint {
  private readonly id: string
  protected node?: HTMLDivElement

  constructor(id: string, options: ElementOptions & Options) {
    super(options)
    this.id = id
    this.node
  }

  protected build() {
    this._validate()

    const element = document.createElement('div')
    element.setAttribute('role', 'alert')
    element.className = 'container'
    element.id = this.id

    this.node = element
    return this.node
  }
}

export default Element
