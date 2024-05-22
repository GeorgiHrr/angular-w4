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
  public isRedActive = true;
  public isYellowActive = false;
  public isGreenActive = true;
  public isMirrored = true;

  public redTime = 5000;
  public yelloTime = 2000;
  public greenTime = 5000;

  
}