
import { Component, OnInit } from '@angular/core';
import { MaaSService } from '../maa-s.service';

import { Observable} from 'rxjs';
import { SwappingService } from '../swapping.service';


@Component({
  selector: 'app-marsweather',
  templateUrl: './marsweather.component.html',
  styleUrls: ['./marsweather.component.scss'],
})
export class MarsweatherComponent implements OnInit {

  constructor(private maas: MaaSService, private swappingService: SwappingService) { }

  ngOnInit() {
    this.getWeatherData();
  }
    private getWeatherData() {
    this.maas.getMaas().subscribe(res => console.log(res));
  }
}

