import {
  Options,
  ElementOptions,
  Position,
  Theme,
  Animation,
  Type,
  Offset
} from './types'

const DEFAULT_OFFSET: Offset = {
  x: 16,
  y: 16
}

export const DEFAULT_OPTIONS: Options = {
  position: Position.TopRight,
  animation: Animation.Fade,
  offset: DEFAULT_OFFSET,
  pauseOnFocusLoss: true,
  closeOnClick: false,
  pauseOnHover: true,
  theme: Theme.Light,
  draggable: true,
  limit: 5
}

export const DEFAULT_ELEMENT_OPTIONS: ElementOptions = {
  text: '🔥 Toasty!',
  type: Type.Default,
  autoClose: 3000,
  progress: true,
  delay: 0
}
