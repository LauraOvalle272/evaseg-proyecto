import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-historial',
  templateUrl: './consultar-historial.component.html',
  styleUrls: ['./consultar-historial.component.css']
})
export class ConsultarHistorialComponent {

  constructor(private router: Router){}

  GoToInicio(){
    this.router.navigate(['/inicioInstructor'])
  }

  GoToLLamado(){
    this.router.navigate(['/llamadoAtencion'])
  }

  GoToReportar(){
    this.router.navigate(['/reportarAprendiz'])
  }


}
