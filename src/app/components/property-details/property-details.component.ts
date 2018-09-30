import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
  data: any;
  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService
  ) {
    this.route.params.subscribe( params => {
      this.propertyService.getById(params.id).subscribe( dt => {
        this.data = dt;
      });
    });
  }

  ngOnInit() {
  }

}
