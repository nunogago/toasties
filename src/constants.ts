import { Offset, Options, ElementOptions } from './types'

export enum Position {
  TopLeft = 'top-left',
  TopRight = 'top-right',
  TopCenter = 'top-center',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
  BottomCenter = 'bottom-center'
}

export enum Type {
  Default = 'default',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
  Info = 'info'
}

export enum Theme {
  Colored = 'colored',
  Light = 'light',
  Dark = 'dark'
}

export enum Animation {
  Fade = 'fade',
  Zoom = 'zoom',
  Flip = 'flip'
}

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
