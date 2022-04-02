import { Component, OnInit } from '@angular/core';
import { SwappingService } from '../swapping.service';

@Component({
  selector: 'app-marsphotos',
  templateUrl: './marsphotos.component.html',
  styleUrls: ['./marsphotos.component.scss'],
})
export class MarsphotosComponent implements OnInit {

  constructor(private swappingService: SwappingService) { }

  ngOnInit() {}

}
