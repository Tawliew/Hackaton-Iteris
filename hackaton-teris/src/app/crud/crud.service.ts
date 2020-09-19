import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  public Lista(): Observable<Modelo[]>{
    return this.http.get<Modelo[]>('https://it3yui.firebaseio.com/problemas.json')
  }
}
