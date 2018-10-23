export const INIT = 'INIT'
export const SET_STATE = 'SET_STATE'
export const NAME = "RENAN"

export function CHANGE_NAME (name) {
    return {
        type: NAME,
        name
    }
}