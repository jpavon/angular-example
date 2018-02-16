import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevelopersComponent } from './developers/developers.component';
import { DeveloperEditComponent } from './developer-edit/developer-edit.component';

const routes: Routes = [
  { path: '', component: DevelopersComponent },
  { path: 'developers/:id', component: DeveloperEditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
