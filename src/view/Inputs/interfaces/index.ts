export interface IInput {
  name: string
  type: string
  label?: string
  value: string
  onChange?: () => void
  onBlur?: () => void
  erorr?: string
  placeholder?: string
}
