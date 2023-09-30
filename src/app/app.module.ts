import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { InicioInstructorComponent } from './inicio-instructor/inicio-instructor.component';
import { LlamadoAtencionInstructorComponent } from './llamado-atencion-instructor/llamado-atencion-instructor.component';
import { ReportarInstructorComponent } from './reportar-instructor/reportar-instructor.component';
import { ConsultarHistorialComponent } from './consultar-historial/consultar-historial.component';
import { PerfilInstructorComponent } from './perfil-instructor/perfil-instructor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecoverPasswordComponent,
    InicioInstructorComponent,
    LlamadoAtencionInstructorComponent,
    ReportarInstructorComponent,
    ConsultarHistorialComponent,
    PerfilInstructorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
