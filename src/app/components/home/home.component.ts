import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../../services/property.service';

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
    {id: 0, name : 'Quận 1'},
    {id: 1, name : 'Quận 2'},
    {id: 2, name : 'Quận 3'},
    {id: 3, name : 'Quận 4'}
  ];
  formSelected: number = 0;
  newProperties: any[];
  constructor(
    private router: Router,
    private propertyService: PropertyService
  ) {
  }
  ngOnInit() {
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
    // if(this.areaSelected) {
    //   this.router.navigate(['properties-list']);
    // }
      // this.router.navigate(['/properties-list/', {content: 'form:' + this.formSelected + ',' + 'district:' + this.areaSelected}]);
  }
}
