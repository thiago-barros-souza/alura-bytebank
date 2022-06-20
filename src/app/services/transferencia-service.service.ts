import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Transferencia } from '../models/Transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaServiceService
{
  private url: string;
  private listaDeTransferencias: Array<any>;

  constructor(private http: HttpClient)
  {
    this.url = environment.urlBase() + "/transferencias";
    this.listaDeTransferencias = [];
  }

  todas(): Observable<Transferencia[]>
  {
    return this.http.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: any): Observable<Transferencia>
  {
    this.hidratar(transferencia);
    return this.http.post<Transferencia>(this.url, transferencia);
  }

  hidratar(transferencia: any): void
  {
    transferencia.data = new Date();
  }
}
