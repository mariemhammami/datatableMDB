import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule, MdbTableDirective, TableModule, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { ActesComponent } from './actes/actes.component';
import { Routes, RouterModule } from '@angular/router';
import { ActesService } from './actes.service';
import { HttpClientModule } from '@angular/common/http';
import { TestpaginationComponent } from './testpagination/testpagination.component';





const appRoutes: Routes = [
  { path: '', component: ActesComponent },
  { path: 'testPagination', component: TestpaginationComponent },
];
@NgModule({
    declarations: [
      AppComponent,
      ActesComponent,
      TestpaginationComponent,
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MDBBootstrapModule.forRoot(),
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } 
      ),
TableModule,
      
    ],
    providers: [ActesService],
    bootstrap: [AppComponent]
  })
export class AppModule { }
