import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNoClassPageRoutingModule } from './add-no-class-routing.module';

import { AddNoClassPage } from './add-no-class.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNoClassPageRoutingModule
  ],
  declarations: [AddNoClassPage]
})
export class AddNoClassPageModule {}
