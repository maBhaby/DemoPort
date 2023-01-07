import {FC} from 'react'
import { useFormik } from 'formik'
import { signInWithEmailAndPassword } from "firebase/auth";

import { loginShema } from '../../utils/validationSchems/login'
import AuthForm from '../../view/AuthForm'
import { auth } from '../../api'

const Auth:FC = () => {
  console.log(auth)
  const formik = useFormik({
    initialValues:{
      userName:'',
      password:''
    },
    validationSchema:loginShema,
    onSubmit:(data, actions) => {
      signInWithEmailAndPassword(auth, data.userName, data.password)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
  })
  return (
    <AuthForm formik={formik} />
  )
}

export default Auth