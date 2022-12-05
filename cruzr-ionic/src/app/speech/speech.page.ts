import {Component, OnInit} from '@angular/core';
import {CruzrSdk} from '../../../../cruzrsdk';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.page.html',
  styleUrls: ['./speech.page.scss'],
})
export class SpeechPage implements OnInit {
  volume = 50;
  text = 'test message';

  constructor() {
  }

  ngOnInit() {
  }

  speechSetTtsVolume() {
    CruzrSdk.speechSetTtsVolume({volume: this.volume});
  }

  speechStartTTS() {
    CruzrSdk.speechStartTTS({text: this.text});
  }

  speechStopTTS() {
    CruzrSdk.speechStopTTS();
  }
}
