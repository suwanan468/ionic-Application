import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterActivityPageRoutingModule } from './register-activity-routing.module';

import { RegisterActivityPage } from './register-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterActivityPageRoutingModule
  ],
  declarations: [RegisterActivityPage]
})
export class RegisterActivityPageModule {}
