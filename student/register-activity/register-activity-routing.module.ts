import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterActivityPage } from './register-activity.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterActivityPageRoutingModule {}
