import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DATA } from '../../common/data'
import { PropertyService } from '../../services/property.service';
import { MatSnackBar } from '@angular/material';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-predict-page',
  templateUrl: './predict-price.component.html',
  styleUrls: ['./predict-price.component.scss']
})
export class PredictPageComponent implements OnInit {
  realEstateForm: FormGroup;
  cities: string[] = DATA.cities;
  districts = [];
  wards = [];
  price: number;
  directions: string[] = DATA.directions;
  floors: string[] = DATA.floors;
  checked: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private propertyService: PropertyService
  ) {
    this.realEstateForm = this.formBuilder.group({
      type: [0, Validators.required],
      city: [1, Validators.required],
      district: [null, Validators.required],
      ward: [null, Validators.required],
      license: [0, Validators.required],
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
  submit() {
    if(this.realEstateForm.valid) {
      const ref = this.snackBar.open("Đang tiến hình dự đoán");
      let body = [];
      body.push(parseInt(this.realEstateForm.controls['area'].value));
      body.push(parseInt(this.realEstateForm.controls['height'].value));
      body.push(parseInt(this.realEstateForm.controls['width'].value));
      body.push(0);
      body.push(this.realEstateForm.controls['type'].value);
      body.push(this.realEstateForm.controls['license'].value);
      body.push(parseInt(this.realEstateForm.controls['numberOfBathRoom'].value));
      body.push(parseInt(this.realEstateForm.controls['numberOfBedRoom'].value));
      body.push(parseInt(this.realEstateForm.controls['floor'].value));
      body.push(this.realEstateForm.controls['direction'].value);
      body.push(this.realEstateForm.controls['ward'].value);
      body.push(this.realEstateForm.controls['district'].value);
      this.propertyService.predict(body).pipe(
        catchError(err => {
          ref.dismiss();
          return throwError(err);
        })
      )
      .subscribe(res => {
        console.log(res)
        ref.dismiss();
        this.price = res[0];
      })
    }
  }
}
