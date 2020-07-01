import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNoClassPage } from './add-no-class.page';

const routes: Routes = [
  {
    path: '',
    component: AddNoClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNoClassPageRoutingModule {}
