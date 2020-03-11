import {Injectable} from '@angular/core';
// IMPORTAMOS
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Y PONEMOS EN EL CONSTRUCTOR:
  constructor(public auth: AngularFireAuth) {
  }

  // Para tener info de la autenticación del user en la app

  user = this.auth.authState.pipe (map(authState => {
    console.log('authState: ', authState);

    if (authState) {

      return authState;
    } else {
      return null;
    }

  } ));
  // encima pide ";" ???
  // MÉTODOS QUE USAREMOS PARA EL LOGIN Y EL LOGOUT
  login() {

    console.log('login!!');

  }

  // login con google
  glogin() {

    console.log('Glogin!!');

  }

  logout() {

    console.log('logout!!');

  }

}

