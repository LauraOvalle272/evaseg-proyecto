import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-instructor',
  templateUrl: './perfil-instructor.component.html',
  styleUrls: ['./perfil-instructor.component.css']
})
export class PerfilInstructorComponent {
  
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

  GoToHistorial(){
    this.router.navigate(['/consultarHistorial'])
  }

}
