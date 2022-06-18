import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.page.html',
  styleUrls: ['./normal.page.scss'],
})
export class NormalPage implements AfterViewInit{
 timep: Animation
 Start =false;
 @ViewChild ('square',{static:false}) square:ElementRef;
  constructor(private animationCtrl: AnimationController) {
    
  }
  
 ngAfterViewInit() {
    this.timep= this.animationCtrl.create('time');

  this.timep
  .addElement(this.square.nativeElement)
  .duration(60000)
  .easing('ease-out')
  .iterations(Infinity)
  .fromTo('transform', 'translateX(70px)', 'translateX(340px)')
  .fromTo('opacity', 1, 1);
 
  }

  empezar() {
    if(this.Start){
      this.timep.pause()
    }else{
      this.timep.play();
    }
    this.Start= !this.Start;

  }
}
