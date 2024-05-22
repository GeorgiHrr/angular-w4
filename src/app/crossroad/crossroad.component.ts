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
  public isMirrored       = true;
  public isCrossingWrong  = false;
  public isEmergency;
  public isEmergencyButtonDisabled;

  public processOnWrongCrossing(onWrongCrossing: boolean){
    this.isCrossingWrong = onWrongCrossing;
  }

  public showMessage(){
    setTimeout(() => {this.isCrossingWrong = false}, 2000);
  }

  public activateEmergency(){
    this.isEmergency = true;
    this.isEmergencyButtonDisabled = true;
    setTimeout(() => {
      this.isEmergency = false; 
      this.isEmergencyButtonDisabled = false;
      console.log(this.isEmergency);
    }, 20000);

  }
}