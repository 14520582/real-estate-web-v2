import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {
  @Input() data: any;
  constructor() {
  }

  ngOnInit() {
  }
  getImage() {
    return 'url(' + this.data.cover + ')';
  }
}
