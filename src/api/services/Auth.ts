import { BaseApi } from '..'
import { signInWithEmailAndPassword, UserCredential, signOut, Auth } from 'firebase/auth'
import { firebaseConfig } from '../../config'

class AuthApi extends BaseApi {
  async login (email: string, password: string): Promise<UserCredential> {
    return await signInWithEmailAndPassword(this.auth, email, password)
      .then(res => res)
      .catch(err => err)
  }

  async logout (): Promise<void> {
    return await signOut(this.auth)
      .then(res => res)
      .catch(err => err)
  }

  getAuthRef (): Auth {
    return this.auth
  }
}

export default new AuthApi(firebaseConfig)
