import { Options, ElementOptions } from './types'

export const DEFAULT_QUEUE_LIMIT = 5

export const DEFAULT_OPTIONS: Options = {
  position: 'top-right',
  animation: 'fade',
  offset: { x: 16, y: 16 },
  pauseOnFocusLoss: true,
  closeOnClick: false,
  pauseOnHover: true,
  theme: 'light',
  draggable: true,
  limit: 5
}

export const DEFAULT_ELEMENT_OPTIONS: ElementOptions = {
  text: '🔥 Toasty!',
  type: 'default',
  autoClose: 3000,
  progress: true,
  delay: 0
}
