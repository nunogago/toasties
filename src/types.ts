import { Theme, Position, Animation, Type } from './constants'

export type Offset = {
  x: number
  y: number
}

export interface Options {
  offset?: Offset
  limit?: number
  theme?: `${Theme}`
  draggable?: boolean
  position?: `${Position}`
  animation?: `${Animation}`
  pauseOnHover?: boolean
  closeOnClick?: boolean
  pauseOnFocusLoss?: boolean
}

export interface ElementOptions {
  text?: string
  delay?: number
  type?: `${Type}`
  autoClose?: number
  progress?: boolean
  onClose?: () => void
  onProgressEnd?: () => void
}
