
import create from 'zustand'
import AuthApi from '../api/services/Auth'
import { onAuthStateChanged } from 'firebase/auth'

interface IUserStore {
  currentUser: null | string | any
  fetchLogin: (email: string, password: string) => Promise<void>
  fetchLogout: () => Promise<void>
  checkAuthUser: () => void
}

export const useUserStore = create<IUserStore>(set => ({
  currentUser: null,
  fetchLogin: async (email, password) => {
    try {
      const userData = await AuthApi.login(email, password)
      set({ currentUser: userData })
      console.log(userData)
    } catch (error) {
      console.warn(error)
    }
  },
  fetchLogout: async () => {
    try {
      const res = await AuthApi.logout()
      // TODO: fix
      console.log(res)
      set({ currentUser: null })
    } catch (error) {
      console.warn(error)
    }
  },
  checkAuthUser: () => {
    onAuthStateChanged(AuthApi.getAuthRef(), (userData) => {
      if (userData != null) {
        set({ currentUser: userData })
      } else {
        set({ currentUser: null })
      }
    })
  }
}))
