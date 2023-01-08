import React, { FC, useEffect } from 'react'
import { ILayout } from '../../view/Layouts/interfaces'
import { Navigate } from 'react-router-dom'
import { useUserStore } from '../../store'
import { ROUTS } from '../../utils/const'

const PrivateRouts: FC<ILayout> = ({ children }) => {
  const { currentUser, checkAuthUser } = useUserStore((state) => ({
    currentUser: state.currentUser,
    checkAuthUser: state.checkAuthUser
  }))

  useEffect(() => {
    checkAuthUser()
    if (Boolean(currentUser) === null) {
      <Navigate to={ROUTS.AUTH} replace />
    }
  }, [currentUser])

  return <>{children}</>
}

export default PrivateRouts
