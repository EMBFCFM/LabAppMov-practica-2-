import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente, Grupo } from '../cliente.model';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  cliente: Cliente =
  {
    id: 0,
    nombre: '',
    curp:'',
    direccion: '',
    sexo:0
  };
  grupos: Grupo[]=[];

  constructor(private ClientesService:ClientesService) {

   }

  ngOnInit(): void {
    this.cliente = this.ClientesService.nuevoCliente();
    this.grupos= this.ClientesService.getGrupos();

  }
  nuevoCliente(): void{
    this.ClientesService.agregarCliente(this.cliente);
    this.cliente= this.ClientesService.nuevoCliente();
  }

}
