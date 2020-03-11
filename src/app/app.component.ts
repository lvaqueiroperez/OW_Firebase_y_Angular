import {Component} from '@angular/core';
import {environment} from '../environments/environment';
// IMPORTAMOS
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // CAMBIAMOS ESTE TÍTULO QUE APARECE EN EL HTML POR EL QUE NOSOTROS TENEMOS EN "ENVIRONMENT.TS"
  title = environment.title;

  // CREAMOS CONSTRUCTOR Y DEFINIMOS UNA VARIABLE AUTHSERVICE
  constructor(public auth: AuthService) {
  }
}
