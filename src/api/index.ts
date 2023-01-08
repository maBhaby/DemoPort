import { FirebaseApp, initializeApp } from 'firebase/app'
import { getAuth, Auth } from 'firebase/auth'
import { IFireBaseConf } from './interfaces'
export class BaseApi {
  private readonly _app: FirebaseApp
  public auth !: Auth
  constructor (firebaseConfig: IFireBaseConf) {
    this._app = initializeApp(firebaseConfig)
    this._createAuthRef()
  }

  private _createAuthRef (): void {
    this.auth = getAuth(this._app)
  }
}
