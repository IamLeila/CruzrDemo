import {Component, OnInit} from '@angular/core';
import {CruzrSdk} from 'cruzrsdk';


@Component({
  selector: 'app-colors',
  templateUrl: './colors.page.html',
  styleUrls: ['./colors.page.scss'],
})
export class ColorsPage implements OnInit {

  colorhex: string;
  duration = 5;
  colorOn = true;

  lighteffect = 1;
  brightness = 2;
  colorEffect = 1;

  effect = 1;
  brightnessByTimes = 1;
  colorByTimes = 1;
  times = 5;

  constructor() {
  }

  ngOnInit() {
  }

  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  updateColor() {
    console.log(this.colorhex);
    const color = this.hexToRgb(this.colorhex);
    console.log(color);
    CruzrSdk.ledSetColor({r: color.r, g: color.g, b: color.b, times: this.duration});
  }

  OnColor() {

    this.colorOn = true;
    console.log(this.colorOn);
    CruzrSdk.ledSetOnOff({onOff: this.colorOn});
  }

  OffColor() {

    this.colorOn = false;
    console.log(this.colorOn);
    CruzrSdk.ledSetOnOff({onOff: this.colorOn});

  }

  EffectColor() {
    CruzrSdk.ledSetEffect({lightEffect: this.lighteffect, brightness: this.brightness, color: this.colorEffect});
  }

  WorkTimes() {
    CruzrSdk.ledSetWorkByTimes({
      effect: this.effect,
      brightness: this.brightnessByTimes,
      color: this.colorByTimes,
      times: this.times
    });
  }

}
