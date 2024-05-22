import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, timeout, timer } from 'rxjs';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.scss'
})

export class TrafficLightComponent implements OnInit{

  public trafficLightCollection = [
    {
      isRedOn   :false,
      isYellowOn:false,
      isGreenOn :false
    }
  ];

  isItReversed = false;

  redTimeLeft: number     = 5;
  yellowTimeLeft: number  = 2;
  greenTimeLeft: number   = 5;
  interval;

  ngOnInit(): void {
    this.startRedTimer();
  }

  startRedTimer() {
    this.interval = setInterval(() => {
      if(this.redTimeLeft > 0) {
        this.trafficLightCollection[0].isRedOn = true;
        console.log("Red: " + this.redTimeLeft)
        this.redTimeLeft--;
      } else {
        this.trafficLightCollection[0].isRedOn = false;
        this.resetTimer();
        this.redTimeLeft = 5;
        this.isItReversed = false;
        this.startYellowTimer();
      }
    },1000)
  }

  startYellowTimer() {
    this.interval = setInterval(() => {
      if(this.yellowTimeLeft > 0) {
        this.trafficLightCollection[0].isYellowOn = true;
        console.log("Yellow: " + this.yellowTimeLeft)
        this.yellowTimeLeft--;
      } else {
        this.trafficLightCollection[0].isYellowOn = false;
        this.resetTimer();
        this.yellowTimeLeft = 2;
        if(!this.isItReversed){
          this.startGreenTimer();
        }else{
          this.startRedTimer();
        }

      }
    },1000)
  }

  startGreenTimer() {
    this.interval = setInterval(() => {
      if(this.greenTimeLeft > 0) {
        this.trafficLightCollection[0].isGreenOn = true;
        console.log("Green: " + this.greenTimeLeft)
        this.greenTimeLeft--;
      } else {
        this.trafficLightCollection[0].isGreenOn = false;
        this.resetTimer();
        this.greenTimeLeft = 5;
        this.isItReversed = true;
        this.startYellowTimer();
      }
    },1000)
  }

  public resetTimer(){
    clearInterval(this.interval);
  }


  public turnRedLightOnAndOff(){
    this.trafficLightCollection[0].isRedOn    = !this.trafficLightCollection[0].isRedOn;
  }
  public turnYellowLightOnAndOff(){
    this.trafficLightCollection[0].isYellowOn = !this.trafficLightCollection[0].isYellowOn;
  }
  public turnGreenLightOnAndOff(){
    this.trafficLightCollection[0].isGreenOn  = !this.trafficLightCollection[0].isGreenOn;
  }
}