import  {NgModule} from '@angular/core';
import {  MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatRadioModule, MatSelectModule, MatCheckboxModule, MatSnackBarModule } from '@angular/material';
import { SharedModule } from "../../ui-core/shared.module";
import { PredictPageComponent } from "./predict-price.component";


@NgModule({
  declarations: [
    PredictPageComponent
  ],
  imports: [
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [],
  entryComponents: [PredictPageComponent],
  exports: [
    PredictPageComponent
  ]
})
export class PredictPageModule {
}
