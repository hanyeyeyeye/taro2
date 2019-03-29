import {
  ADD,
  CLOSEADD
} from '../constants/qusList'

export const add = () => {
  return {
    type: ADD
  }
}
export const closeAdd = () => {
  return {
    type: CLOSEADD
  }
}

