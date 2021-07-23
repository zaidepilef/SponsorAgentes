import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { TareaprogramadaComponent } from './components/tareaprogramada/tareaprogramada.component';
import { CrearsponsorComponent } from './components/crearsponsor/crearsponsor.component';
import { CrearsponsoragenteComponent } from './components/crearsponsoragente/crearsponsoragente.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { AutoSelectValueDirective } from './directives/auto-select-value.directive';
import { ShowroomComponent } from './pages/showroom/showroom.component';
import { DialogExampleComponent } from './pages/showroom/dialog-example/dialog-example.component';
import { SponsorComponent } from './pages/sponsor/sponsor.component';
import { ButtonsComponent } from './pages/showroom/buttons/buttons.component';
import { DialogsComponent } from './pages/showroom/dialogs/dialogs.component';
import { DatepickerExampleComponent } from './pages/showroom/datepicker-example/datepicker-example.component';
import { FormFieldExampleComponent } from './pages/showroom/form-field-example/form-field-example.component';
import { AgentesTablaComponent } from './pages/sponsor/agentes-tabla/agentes-tabla.component';

@NgModule({
  declarations: [
    AutoSelectValueDirective,
    AppComponent,
    HomeComponent,   
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    TareaprogramadaComponent,
    CrearsponsorComponent,
    CrearsponsoragenteComponent,
    ShowroomComponent,
    DialogExampleComponent,
    SponsorComponent,
    ButtonsComponent,
    DialogsComponent,
    DatepickerExampleComponent,
    FormFieldExampleComponent,
    AgentesTablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    MatTableExporterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
