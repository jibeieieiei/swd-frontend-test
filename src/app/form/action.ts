import { Key } from 'react'
import { FormData } from './reducer'

export const INSERT = 'INSERT'
export const DELETE = 'DELETE'
export const EDIT = 'EDIT'
export const CLICKEDIT = 'CLICKEDIT'
export const RESET = 'RESET'
export const CHECKALL = 'CHECKALL'
export const UNCHECKALL = 'UNCHECKALL'
export const CHECKBYKEY = 'CHECKBYKEY'
export const DELETESELECTION = 'DELETESELECTION'

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

export const checkAll = () => {
  return {
    type: CHECKALL,
  }
}

export const uncheckAll = () => {
  return {
    type: UNCHECKALL,
  }
}

export const checkByKey = (payload: Key[]) => {
  return {
    type: CHECKBYKEY,
    payload: payload,
  }
}

export const deleteSelection = () => {
  return {
    type: DELETESELECTION,
  }
}
