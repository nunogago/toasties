import Element from './element'

abstract class Render {
  private _rootElement: HTMLElement

  protected constructor() {
    this._rootElement = document?.body
  }

  protected addToDom(el: Element) {
    const node = el.build()
    this._rootElement.appendChild(node)
  }

  protected removeFromDom(id: string) {
    const node = this._rootElement.querySelector(`[id='${id}']`)
    node && this._rootElement.removeChild(node)
  }
}

export default Render
