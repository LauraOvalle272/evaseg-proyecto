import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-instructor',
  templateUrl: './inicio-instructor.component.html',
  styleUrls: ['./inicio-instructor.component.css']
})
export class InicioInstructorComponent {

  constructor(private router: Router){}


  GoToLLamado(){
    this.router.navigate(['/llamadoAtencion'])
  }

  GoToReportar(){
    this.router.navigate(['/reportarAprendiz'])
  }

  GoToHistorial(){
    this.router.navigate(['/consultarHistorial'])
  }

  GoToPerfil(){
    this.router.navigate(['/perfilInstructor'])
  }





}
