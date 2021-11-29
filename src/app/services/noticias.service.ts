import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestatoHeadLines } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines(){
    return this.http.get<RespuestatoHeadLines>('https://calendarific.com/api/v2/holidays?&api_key=24fd5262c724d87d22a07ec321c5ce465d0c035d&country=CL&year=2021')
  }


}
