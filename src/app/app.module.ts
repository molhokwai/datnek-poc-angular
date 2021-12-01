import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { ModalModule } from './_modal';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguagesComponent } from './languages/languages.component';
import { LanguageButtonsComponent } from './language-buttons/language-buttons.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    //ModalModule,
    RouterModule.forRoot([
      { path: '', component: LanguagesComponent },
    ])
  ],
  declarations: [
    AppComponent,
    LanguagesComponent,
    LanguageButtonsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
