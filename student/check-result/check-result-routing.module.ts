import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckResultPage } from './check-result.page';

const routes: Routes = [
  {
    path: '',
    component: CheckResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckResultPageRoutingModule {}
