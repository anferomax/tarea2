import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AndresNewComponentComponent } from './andres-new-component/andres-new-component.component';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    AndresNewComponentComponent
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
