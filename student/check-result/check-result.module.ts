import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CheckResultPageRoutingModule } from "./check-result-routing.module";
import { MenuComponent } from "../menu/menu.component";

import { CheckResultPage } from "./check-result.page";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckResultPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [CheckResultPage, MenuComponent],
})
export class CheckResultPageModule {}
