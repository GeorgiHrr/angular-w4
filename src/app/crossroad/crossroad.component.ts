import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrafficLightComponent } from '../traffic-light/traffic-light.component';

@Component({
  selector: 'app-crossroad',
  standalone: true,
  imports: [FormsModule, TrafficLightComponent],
  templateUrl: './crossroad.component.html',
  styleUrl: './crossroad.component.scss'
})

export class CrossroadComponent{
  public isRedActive      = true;
  public isYellowActive   = false;
  public isGreenActive    = true;
  public isMirrored       = true;
  public isCrossingWrong  = false;
  public isEmergency      = false;

  public processOnWrongCrossing(onWrongCrossing: boolean){
    this.isCrossingWrong = onWrongCrossing;
  }

  public showMessage(){
    setTimeout(() => {this.isCrossingWrong = false}, 2000);
  }

  public activateEmergency(){
    this.isEmergency = true;
  }
}