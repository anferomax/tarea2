import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AndresNewComponentComponent } from './andres-new-component/andres-new-component.component';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatCardModule} from '@angular/material/card';
import { ColoresComponent } from './colores/colores.component';
import { BotonesComponent } from './botones/botones.component';
import { DescriptionComponent } from './description/description.component';
import { NombreComponent } from './nombre/nombre.component';
import { HeadComponent } from './head/head.component';
import { CountersComponent } from './counters/counters.component';


@NgModule({
  declarations: [
    AppComponent,
    AndresNewComponentComponent,
    ColoresComponent,
    BotonesComponent,
    DescriptionComponent,
    NombreComponent,
    HeadComponent,
    CountersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
