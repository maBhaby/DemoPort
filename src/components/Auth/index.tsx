import {FC} from 'react'
import { useFormik } from 'formik'
import AuthForm from '../../view/AuthForm'
import { loginShema } from '../../utils/validationSchems/login'

const Auth:FC = () => {
  const formik = useFormik({
    initialValues:{
      userName:'',
      password:''
    },
    validationSchema:loginShema,
    onSubmit:(data, actions) => {
      console.log(data)
    }
  })
  return (
    <AuthForm formik={formik} />
  )
}

export default Auth