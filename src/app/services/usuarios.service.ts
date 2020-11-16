import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { IntercetorService } from '../interceptors/intercetor.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios(){

    let params = new HttpParams().append('page','2');
    params = params.append('nombre','Juan');



    return this.http.get(`https://reqres22.in/api/users`, {
      params
    },)
    .pipe(
      map( (resp:any) => resp.data),
    );

  }

  manejarError( error: HttpErrorResponse){
    console.log('Sucedio un error ');
    console.log('Registrado en el log file');
    console.warn(error);
    return throwError('Error personalizado');
  }
}
