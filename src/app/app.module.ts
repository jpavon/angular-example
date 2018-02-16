import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DevelopersComponent } from './developers/developers.component';
import { DeveloperEditComponent } from './developer-edit/developer-edit.component';
import { DeveloperService } from './developer.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DevelopersComponent,
    DeveloperEditComponent
  ],
  providers: [
    DeveloperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
