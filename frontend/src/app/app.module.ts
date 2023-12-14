import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormatDatePipe } from './pipes/format-date.pipe';

import { InterfazComponent } from './pages/interfaz/interfaz.component';

export const url = 'http://localhost:3000/api/v1/';

@NgModule({
  declarations: [
    AppComponent,

    FormatDatePipe,

    InterfazComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
