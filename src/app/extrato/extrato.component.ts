import { Transferencia } from './../models/Transferencia';
import { TransferenciaServiceService } from './../services/transferencia-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit
{
  transferencias: Array<any> = [];

  constructor(private trasferenciaService: TransferenciaServiceService) { }

  ngOnInit(): void
  {
    this.trasferenciaService.todas().subscribe((transferencias: Transferencia[]) =>
    {
      this.transferencias = transferencias;
    });
  }
}
