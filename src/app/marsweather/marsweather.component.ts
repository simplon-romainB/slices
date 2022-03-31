
import { Component, OnInit } from '@angular/core';
import { MaaSService } from '../maa-s.service';

import { Observable} from 'rxjs';


@Component({
  selector: 'app-marsweather',
  templateUrl: './marsweather.component.html',
  styleUrls: ['./marsweather.component.scss'],
})
export class MarsweatherComponent implements OnInit {

  constructor(private maas: MaaSService) { }

  ngOnInit() {
    this.getWeatherData();
  }
    private getWeatherData() {
    this.maas.getMaas().subscribe(res => console.log(res));
  }
}

