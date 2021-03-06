import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule, MatListModule, MatSelectModule, MatFormFieldModule, MatIconModule, MatInputModule, MatCheckboxModule, MatButtonModule} from '@angular/material';
import {SharedModule} from "../../ui-core/shared.module";
import { PropertyDetailsComponent } from "./property-details.component";
import { FilterBarModule } from '../../shared/filter-bar/filter-bar.module';
import { AgmCoreModule } from '@agm/core';
import { CarouselModule } from '../../shared/carousel/carousel.module';


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
    AgmCoreModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    CarouselModule,
    FilterBarModule,
    MatSelectModule
  ],
  providers: [],
})
export class PropertyDetailsModule {
}

