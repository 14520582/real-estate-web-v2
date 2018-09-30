import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule, MatListModule, MatSelectModule, MatFormFieldModule, MatIconModule} from '@angular/material';
import {SharedModule} from "../../ui-core/shared.module";
import { PropertyDetailsComponent } from "./property-details.component";
import { FilterBarModule } from '../../shared/filter-bar/filter-bar.module';


const routes: Routes = [
  {
    path: ':id',
    component: PropertyDetailsComponent,
  }
];

@NgModule({
  declarations: [
    PropertyDetailsComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    FilterBarModule,
    MatSelectModule
  ],
  providers: [],
})
export class PropertyDetailsModule {
}

