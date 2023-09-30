import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-llamado-atencion-instructor',
  templateUrl: './llamado-atencion-instructor.component.html',
  styleUrls: ['./llamado-atencion-instructor.component.css']
})
export class LlamadoAtencionInstructorComponent {

  constructor(private router: Router){}

  GoToInicio(){
    this.router.navigate(['/inicioInstructor'])
  }

  GoToReportar(){
    this.router.navigate(['/reportarAprendiz'])
  }

}
