import { Utils } from 'cable_ready'

import './event_listeners'

const { dispatch, before, operate, after } = Utils

export default {
  playSound: (operation, callee) => {
    before(document, callee, operation)
    if (
      !operate(operation, () => {
        const { src } = operation
        const canplaythrough = () => {
          document.audio.removeEventListener('canplaythrough', canplaythrough)
          document.audio.play()
        }
        const ended = () => {
          document.audio.removeEventListener('ended', ended)
          dispatch(document, 'cable-ready:after-play-sound', operation)
        }
        document.audio.addEventListener('canplaythrough', canplaythrough)
        document.audio.addEventListener('ended', ended)
        if (src) document.audio.src = src
        document.audio.play()
      })
    ) {
      after(document, callee, operation)
    }
  }
}
