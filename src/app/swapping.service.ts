import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Gesture, GestureController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class SwappingService {
    private gestureX: number;
    private vanished = false;

    constructor(private gestctl: GestureController, private route: Router) {}
      public backing() {
        this.route.navigate(['/']);
        this.vanished = false;
    }
      public setupGesture(element, path){
      const gesture: Gesture = this.gestctl.create({
        el: element,
        gestureName: 'slide',
        onMove: (ev) => this.onMoveHandler(ev, element),
        onEnd: (eve) => this.onEndHandler(element, path)
      }, true);
      gesture.enable(true);
    }

      private onMoveHandler(ev, element) {
        this.gestureX = ev.deltaX;
        element.style.transform = `translate(${this.gestureX}px)`;
      }

      private onEndHandler(element, path) {
        if (this.checkPosition()) {
          this.disapearence(path);
        }
        else if (!this.checkPosition()){
          element.style.transform = `translate(0)`;
        }
      }

      private checkPosition() {
        if (this.gestureX > window.innerWidth) {
          return true;
        }
        else {
          return false;
        }
      }
      private disapearence(path) {
        this.vanished = true;
        const waiting = setTimeout(() => this.route.navigate(['/', path]), 500);
      }

  }

