import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, timeout, timer } from 'rxjs';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.scss'
})

export class TrafficLightComponent implements OnInit, OnChanges{

  public trafficLightCollection = [
    {
      isRedOn   :false,
      isYellowOn:false,
      isGreenOn :false
    }
  ];

  public isItReversed = false;

  public redTimeLeft: number        = 5;
  public yellowTimeLeft: number     = 2;
  public greenTimeLeft: number      = 5;
  public emergencyTimeLeft: number  = 10;
  public interval;

  @Input() public isMirrored = false;

  @Input() public isEmergency;

  @Output() public onWrongCrossing = new EventEmitter<boolean>();

  ngOnInit() {
    if(this.isMirrored){
      this.startGreenTimer();
    }else{
      this.startRedTimer();
    }
  }

  ngOnChanges() {
    if(this.isEmergency){
      this.resetTimer();
      this.startEmergency();
    }
  }

  startRedTimer() {
    this.interval = setInterval(() => {
      if(this.redTimeLeft > 0) {

        this.trafficLightCollection[0].isRedOn = true;
        console.log("Red Timer: " + this.redTimeLeft)
        this.redTimeLeft--;

      } else {

        this.trafficLightCollection[0].isRedOn = false;
        this.resetTimer();
        this.isItReversed = false;
        this.startYellowTimer();

      }
    },1000)
  }

  startYellowTimer() {
    this.interval = setInterval(() => {
      if(this.yellowTimeLeft > 0) {

        this.trafficLightCollection[0].isYellowOn = true;
        console.log("Yellow Timer: " + this.yellowTimeLeft)
        this.yellowTimeLeft--;

      } else {

        this.trafficLightCollection[0].isYellowOn = false;
        this.resetTimer();
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
        console.log("Green Timer: " + this.greenTimeLeft)
        this.greenTimeLeft--;

      } else {

        this.trafficLightCollection[0].isGreenOn = false;
        this.resetTimer();
        this.isItReversed = true;
        this.startYellowTimer();

      }
    },1000)
  }

  public resetTimer(){
    clearInterval(this.interval);
    this.redTimeLeft        = 5;
    this.yellowTimeLeft     = 2;
    this.greenTimeLeft      = 5;
    this.emergencyTimeLeft  = 10;
  }

  public startEmergency(){
    this.trafficLightCollection[0].isRedOn = false;
    this.trafficLightCollection[0].isYellowOn = false;
    this.trafficLightCollection[0].isGreenOn = false;

    this.interval = setInterval(() => {
      if(this.emergencyTimeLeft > 0) {

        this.trafficLightCollection[0].isYellowOn = true;
        console.log("Emergency Timer: " + this.emergencyTimeLeft)
        this.emergencyTimeLeft--;

      } else {

        this.trafficLightCollection[0].isYellowOn = false;
        this.resetTimer();
        this.isEmergency = false;
        if(this.isMirrored){
          this.startGreenTimer();
        }else{
          this.startRedTimer();
        }

      }
    },1000)
  }

  public crossTheRoad(){
    if (this.trafficLightCollection[0].isYellowOn) {
      this.onWrongCrossing.emit(true);
    }
  }
}