import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slogan = new Map([
    [0,"Tiến đến căn nhà trong mơ"],
    [1,"Tìm thuê một nơi đẹp đẽ"]
  ]);
  districts = [
  ];
  areaSelected: FormControl;
  formSelected: number = 0;
  newProperties: any[];
  constructor(
    private router: Router,
    private propertyService: PropertyService
  ) {
    this.areaSelected = new FormControl('');
    this.areaSelected.valueChanges.subscribe(value => {
      this.router.navigate(['/properties-list/', {content: 'form:' + this.formSelected + ',' + 'district:' + value}]);
    })
  }
  ngOnInit() {
    this.propertyService.getDistrictByCity(1).subscribe(data=>{
      this.districts = data
    })
    this.propertyService.getNewList(10).subscribe( dt => {
      this.newProperties = dt;
    });
  }
  changeOption(form: number){
    this.formSelected = form
  }

  goToPropertiesList(e){
    console.log(e);
    this.router.navigate(['properties-list']);
    if(this.areaSelected) {
      this.router.navigate(['properties-list']);
    }
      this.router.navigate(['/properties-list/', {content: 'form:' + this.formSelected + ',' + 'district:' + this.areaSelected}]);
  }
}
