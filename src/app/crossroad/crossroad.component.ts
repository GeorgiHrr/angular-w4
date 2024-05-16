import { Component } from '@angular/core';
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

}