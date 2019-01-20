import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from "../../ui-core/shared.module";
import { PriceMapComponent } from "./price-map.component";
import { DxVectorMapModule } from 'devextreme-angular';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatSelectModule, MatTabsModule} from "@angular/material";
import {AgmCoreModule} from "@agm/core";

const routes: Routes = [
  {
    path: '',
    component: PriceMapComponent,
  }
];

@NgModule({
  declarations: [
    PriceMapComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    MatTabsModule,
    AgmCoreModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    DxVectorMapModule
  ],
  providers: [],
})
export class PriceMapModule {
}

