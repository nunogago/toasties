import { Options, ElementOptions } from '../types'

class Blueprint {
  protected readonly options: Options & ElementOptions
  protected data: any

  constructor(options: Options & ElementOptions) {
    this.options = options
    this.data = {}

    this._init()
  }

  protected _validate() {
    if (!this.data) {
      throw 'Unable to initalize element'
    }
  }

  private _init() {}
}

export default Blueprint
