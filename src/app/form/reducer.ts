import { CLICKEDIT, DELETE, EDIT, INSERT, RESET } from './action'

export interface FormData {
  id: string
  title: string
  firstname: string
  lastname: string
  'date-picker': string
  nationality: string
  'citizen-id': {
    part1?: string
    part2?: string
    part3?: string
    part4?: string
  }
  gender: string
  'mobile-phone': string
  Phone: string
  checked: boolean
}

const data: FormData[] = []

export interface FormState {
  isEdit: string
  form: FormData[]
}

const initialState: FormState = { isEdit: '', form: data }

export function rootReducer(
  state = initialState,
  action: { type: string; payload: FormData | FormData[] | string }
): FormState {
  switch (action.type) {
    case INSERT:
      return {
        ...state,
        form: [...state.form, action.payload as FormData],
      }
    case CLICKEDIT:
      return {
        ...state,
        isEdit: action.payload as string,
      }
    case EDIT:
      return {
        isEdit: '',
        form: action.payload as FormData[],
      }
    case DELETE:
      return {
        isEdit: '',
        form: action.payload as FormData[],
      }
    case RESET:
      return {
        isEdit: '',
        form: state.form,
      }
    default:
      return state
  }
}
