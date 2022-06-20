import { Transferencia } from './../models/Transferencia';
import { TransferenciaServiceService } from './../services/transferencia-service.service';
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "nova-transferencia",
  templateUrl: "./nova-transferencia.component.html",
  styleUrls: ["./nota-transferencia.component.scss"]
})
export class NotaTransferenciaComponent
{
  @Output() aoTransferir = new EventEmitter<any>();
  valor: number = 0;
  destino: number = 0;

  constructor(private transferenciaService: TransferenciaServiceService) { }

  transferir()
  {
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino
    };

    this.transferenciaService.adicionar(valorEmitir)
      .subscribe((transferencia: Transferencia) =>
      {
        console.log(transferencia);
        this.limpar();
      },
        (error: any) =>
        {
          console.log(error);
        });
  }

  limpar()
  {
    this.valor = 0;
    this.destino = 0;
  }
}
