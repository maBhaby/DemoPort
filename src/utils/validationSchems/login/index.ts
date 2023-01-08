import * as Yup from 'yup'
import { ERORR_MESSAGE } from '../../const'

export const loginShema = Yup.object().shape({
  email: Yup
    .string()
    .email(ERORR_MESSAGE.EMAIL)
    .required(ERORR_MESSAGE.REQUIRED),
  password: Yup
    .string()
    .required(ERORR_MESSAGE.REQUIRED)
})
