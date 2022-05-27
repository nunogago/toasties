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

export type Offset = {
  x: number
  y: number
}

export interface Options {
  offset?: Offset
  limit?: number
  theme?: `${Theme}`
  stacked?: boolean
  draggable?: boolean
  position?: `${Position}`
  animation?: `${Animation}`
  pauseOnHover?: boolean
  closeOnClick?: boolean
  hideProgressBar?: boolean
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
