import {Component, OnInit} from '@angular/core';
import { FeatureCollection, Service } from './price-map.service';
import { projection } from 'devextreme/viz/vector_map/projection';

@Component({
  selector: 'app-price-map',
  providers: [ Service ],
  templateUrl: './price-map.component.html',
  styleUrls: ['./price-map.component.scss']
})
export class PriceMapComponent implements OnInit {
    pangaeaBorders: FeatureCollection;
    pangaeaContinents: FeatureCollection;
    projection: any;
    prices: any;
    constructor(service: Service) {
        this.pangaeaContinents = service.getPangaeaContinents();
        this.customizeTooltip = this.customizeTooltip.bind(this);
        // this.prices = service.getPrices();
        // this.prices.features.forEach(ele => {
        //     ele.properties.url = "../../../assets/img/arrow-up.png"
        //     ele.geometry.coordinates
        //     let x = ele.geometry.coordinates[0];
        //     let y = ele.geometry.coordinates[1];
        //     if (x < 840) {
        //         x = (840 - x)/(-10)
        //     } else {
        //         x = (x - 840)/10
        //     }
        //     ele.geometry.coordinates[0] = x;
        //     if (y < 1000) {
        //         y = (1000 - y)/10
        //     } else {
        //         y = (y - 1000)/(-10)
        //     }
        //     ele.geometry.coordinates[1] = y;
        //     console.log(ele.geometry.coordinates);
        // });
        this.pangaeaContinents.features.forEach(element => {
            element.geometry.coordinates[0].forEach(item => {
                let x = item[0];
                let y = item[1];
                if (x < 840) {
                    x = (840 - x)/(-10)
                } else {
                    x = (x - 840)/10
                }
                item[0] = x;
                if (y < 1000) {
                    y = (1000 - y)/10
                } else {
                    y = (y - 1000)/(-10)
                }
                item[1] = y;
            })
        });
        this.projection = projection({
            to: function (coordinates) {
                return [coordinates[0] / 100, coordinates[1] / 100];
            },
        
            from: function (coordinates) {
                return [coordinates[0] * 100, coordinates[1] * 100];
            }
        });
    }
    ngOnInit() {

    }
    customizeTooltip(arg) {
        return {
            text: "fgdfg"
        };
    }
    customizeLayer(elements) {
        elements.forEach(function (element) {
            element.applySettings({
                color: element.attribute("color")
            });
        });
    };

}
