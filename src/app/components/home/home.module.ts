import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule, MatListModule} from '@angular/material';
import {SharedModule} from "../../ui-core/shared.module";
import { HomeComponent } from "./home.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // resolve  : {
    //     data: DesktopsService
    // }
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    MatCardModule,
    MatListModule,

  ],
  providers: [],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}

