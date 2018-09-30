import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule, MatListModule, MatSelectModule, MatFormFieldModule, MatIconModule} from '@angular/material';
import {SharedModule} from "../../ui-core/shared.module";
import { PropertiesListComponent } from "./properties-list.component";
import { PropertiesGridComponent } from "./properties-grid/properties-grid.component";


const routes: Routes = [
  {
    path: '',
    component: PropertiesListComponent,
  }
];

@NgModule({
  declarations: [
    PropertiesListComponent,
    PropertiesGridComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
})
export class PropertiesListModule {
}

