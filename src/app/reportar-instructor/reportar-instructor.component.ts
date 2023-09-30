import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportar-instructor',
  templateUrl: './reportar-instructor.component.html',
  styleUrls: ['./reportar-instructor.component.css']
})
export class ReportarInstructorComponent {


  constructor(private router: Router){}

  GoToInicio(){
    this.router.navigate(['/inicioInstructor'])
  }

  GoToLLamado(){
    this.router.navigate(['/llamadoAtencion'])
  }

  


}
