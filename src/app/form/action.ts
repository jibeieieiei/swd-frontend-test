import { FormData } from './reducer'

export const INSERT = 'INSERT'
export const DELETE = 'DELETE'
export const EDIT = 'EDIT'
export const CLICKEDIT = 'CLICKEDIT'
export const RESET = 'RESET'

export const insert = (payload: FormData) => {
  return {
    type: INSERT,
    payload: payload,
  }
}

export const clickEdit = (payload: string) => {
  return {
    type: CLICKEDIT,
    payload: payload,
  }
}

export const edit = (payload: FormData[]) => {
  return {
    type: EDIT,
    payload: payload,
  }
}

export const clickDelete = (payload: FormData[]) => {
  return {
    type: DELETE,
    payload: payload,
  }
}

export const reset = () => {
  return {
    type: RESET,
  }
}
