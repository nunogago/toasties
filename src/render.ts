import Element from './element'

class Render {
  private _rootElement: HTMLElement

  constructor() {
    this._rootElement = document?.body
  }

  protected addToDom(el: Element) {
    const node = el.build()
    this._rootElement.appendChild(node)
  }

  protected removeFromDom(id: string) {
    const node = this._rootElement.querySelector(`[id='${id}']`)

    if (node) {
      this._rootElement.removeChild(node)
    }
  }
}

export default Render
