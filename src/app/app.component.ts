import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Gesture } from '@ionic/angular';
import { SwappingService } from '../app/swapping.service';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {

  @ViewChild('weather',{read: ElementRef}) weather: ElementRef;
  @ViewChild('photos',{read: ElementRef}) photos: ElementRef;
  @ViewChild('numbers',{read: ElementRef}) numbers: ElementRef;

  private weatherGesture: Gesture;
  constructor(private swappingService: SwappingService,
              private swappingService2: SwappingService,
              private swappingService3: SwappingService) {}

  async ngAfterViewInit() {
    this.swappingService.setupGesture(this.weather.nativeElement, 'weather');
    this.swappingService2.setupGesture(this.photos.nativeElement, 'photos');
    this.swappingService3.setupGesture(this.numbers.nativeElement, 'numbers');
  }
}


