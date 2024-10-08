import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicebannerAnimadoService {

  private apiUrl = 'https://dog.ceo/api/breeds/image/random/100'
  private razasUrl = 'https://dog.ceo/api/breeds/list/all'

  constructor(private http:HttpClient) { }

  getRandomDogImages(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  getRazas(): Observable<any>{
    return this.http.get<any>(this.razasUrl);
  }

  getselectedRazas(raza:string): Observable<any>{
    return this.http.get<any>(`https://dog.ceo/api/breed/${raza}/images/random/12`);
  }
}
