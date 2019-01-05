import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DATA } from '../../common/data'
import { PropertyService } from '../../services/property.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  realEstateForm: FormGroup;
  cities: string[] = DATA.cities;
  districts = [];
  wards = [];
  directions: string[] = DATA.directions;
  floors: string[] = DATA.floors;
  checked: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private propertyService: PropertyService
  ) {
    this.realEstateForm = this.formBuilder.group({
      form: [0, Validators.required],
      type: [0, Validators.required],
      city: [1, Validators.required],
      district: [null, Validators.required],
      ward: [null, Validators.required],
      no: ['', Validators.required],
      street: ['', Validators.required],
      name: ['', Validators.required],
      title: [''],
      description: [''],
      cover: [''],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      license: [0, Validators.required],
      price: [0, Validators.required],
      area: ['', Validators.required],
      height: ['', Validators.required],
      width: ['', Validators.required],
      floor: ['', Validators.required],
      direction: [null, Validators.required],
      numberOfBedRoom: ['', Validators.required],
      numberOfBathRoom: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.propertyService.getDistrictByCity(1).subscribe(dis => {
      this.districts = dis;
    })
    this.realEstateForm.controls['district'].valueChanges.subscribe(data => {
      this.propertyService.getWardByDistrict(data).subscribe( w => {
        this.wards = w;
        this.realEstateForm.controls['ward'].setValue(null)
      })
    })
  }
  getAddress() {
    let address = this.realEstateForm.controls['no'].value + ', ' + this.realEstateForm.controls['street'].value + ', ';
    for(let i = 0; i < this.wards.length; i++) {
      if (this.wards[i].id === this.realEstateForm.controls['ward'].value) {
        address = address + ', ' + this.wards[i].name;
        break;
      }
    }
    for(let i = 0; i < this.districts.length; i++) {
      if (this.districts[i].id === this.realEstateForm.controls['district'].value) {
        address = address + ', ' + this.districts[i].name;
        break;
      }
    }
    return address;
  }
  submit() {
    if(this.realEstateForm.valid) {
      const body = {
        title: this.realEstateForm.controls['title'].value,
        price: this.realEstateForm.controls['price'].value,
        form: this.realEstateForm.controls['form'].value,
        license: this.realEstateForm.controls['license'].value,
        address: this.getAddress(),
        cover: this.realEstateForm.controls['cover'].value,
        numofbedroom: this.realEstateForm.controls['numberOfBedRoom'].value,
        numofbathroom: this.realEstateForm.controls['numberOfBathRoom'].value,
        phone: this.realEstateForm.controls['phone'].value,
        nameOfOwner: this.realEstateForm.controls['name'].value,
        email: this.realEstateForm.controls['email'].value,
        numoffloor: this.realEstateForm.controls['floor'].value,
        direction: this.realEstateForm.controls['direction'].value,
        type: this.realEstateForm.controls['type'].value,
        height: this.realEstateForm.controls['height'].value,
        width: this.realEstateForm.controls['width'].value,
        area: this.realEstateForm.controls['area'].value,
        description: this.realEstateForm.controls['description'].value,
        datecreated: Date.now()
      }
      console.log(body);
      this.propertyService.createPendingProperty(body).subscribe( res => {
        this.snackBar.open('Gửi thành công', '', {
          duration: 2000,
        });
        this.router.navigate(['/']);
      })
    }
  }
}
