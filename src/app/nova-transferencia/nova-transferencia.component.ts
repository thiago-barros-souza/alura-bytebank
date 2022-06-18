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

  transferir()
  {
    console.log("Solicitado nova transferencia");

    const valorEmitir = {
      valor: this.valor,
      destino: this.destino
    };

    this.aoTransferir.emit(valorEmitir);

    this.limpar();
  }

  limpar()
  {
    this.valor = 0;
    this.destino = 0;
  }
}
