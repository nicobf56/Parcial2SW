import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DinosaurModule } from './dinosaur/dinosaur.module';


@NgModule({
  declarations: [
    AppComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DinosaurModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
