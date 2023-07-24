/** Default game config */
export interface GameConfig {
  start: boolean
  pause: boolean
  width: number
  height: number
  timeInterval: number
  balls: Ball[]
}

/** Ball representation in-game */
export interface Ball {
  id: number
  x: number
  y: number
  width: number
  height: number
  speed: number
  angle: number
}