import { FC } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

import { loginShema } from '../../utils/validationSchems/login'
import AuthForm from '../../view/AuthForm'
import { ROUTS } from '../../utils/const'
import { useUserStore } from '../../store'

const Auth: FC = () => {
  const getUser = useUserStore((state) => state.fetchLogin)
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginShema,
    onSubmit: async ({ email, password }) => {
      getUser(email, password)
        .then(() => navigate(ROUTS.MAIN.INDEX, { replace: true }))
        .catch((err) => console.log(err))
    }
  })
  return <AuthForm formik={formik} />
}

export default Auth
