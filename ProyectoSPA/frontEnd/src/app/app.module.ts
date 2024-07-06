import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './persona/add/add.component';
import { EditComponent } from './persona/edit/edit.component';
import { ListComponent } from './persona/list/list.component';
import { ServiceService } from './service/service.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }