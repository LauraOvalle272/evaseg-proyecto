import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { InicioInstructorComponent } from './inicio-instructor/inicio-instructor.component';
import { LlamadoAtencionInstructorComponent } from './llamado-atencion-instructor/llamado-atencion-instructor.component';
import { ReportarInstructorComponent } from './reportar-instructor/reportar-instructor.component';
import { ConsultarHistorialComponent } from './consultar-historial/consultar-historial.component';
import { PerfilInstructorComponent } from './perfil-instructor/perfil-instructor.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'recoverPassword', component: RecoverPasswordComponent },
  { path: 'inicioInstructor', component: InicioInstructorComponent},
  { path: 'llamadoAtencion', component: LlamadoAtencionInstructorComponent},
  { path: 'reportarAprendiz', component: ReportarInstructorComponent},
  {path: 'consultarHistorial', component: ConsultarHistorialComponent},
  {path: 'perfilInstructor', component: PerfilInstructorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
