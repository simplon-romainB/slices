import { Component, OnInit } from '@angular/core';
import { SwappingService } from '../swapping.service';

@Component({
  selector: 'app-marsnumbers',
  templateUrl: './marsnumbers.component.html',
  styleUrls: ['./marsnumbers.component.scss'],
})
export class MarsnumbersComponent implements OnInit {

  constructor(private swappingService: SwappingService) { }

  ngOnInit() {}

}
