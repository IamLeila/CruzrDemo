import {Component, OnInit} from '@angular/core';
import { Platform } from '@ionic/angular';
import { NavController } from '@ionic/angular';

import {Howl, Howler} from 'howler';

import {CruzrSdk} from '../../../../cruzrsdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})



export class HomePage implements OnInit {

  text = 'test message';
  isPaused = false;

  constructor(private platform: Platform, public navCtrl: NavController) {
    this.platform = platform;
    setTimeout(this.hello, 1500);
    setTimeout(this.photo, 20000);
    setInterval(this.hello, 100000);
    setInterval(this.photo, 150000);  
  }
  
  closeApp() { 
    this.platform.backButton.subscribeWithPriority(999999, () => { 
    navigator['app'].exitApp();
    })
  }

  ngOnInit(): void {}

  player: Howl = null;
  isPlaying = false;
  
  hello(){      
    if (this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src: ['./assets/voice/Hello.mp3'],
      onplay: () => {
        this.isPlaying = true;
      }
    });
    this.player.play();
    CruzrSdk.run({action: 'pose1'});
  }
  
  photo(){
    if (this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src: ['./assets/voice/Foto.mp3'],
      onplay: () => {
        this.isPlaying = true;
      }
    });
    this.player.play();
  }

  bark(){
    if (this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src: ['./assets/voice/BARK.mp3'],
      onplay: () => {
        this.isPlaying = true;
      }
    });
    this.player.play();
  }

  talent(){
    if (this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src: ['./assets/voice/Tehetseg.mp3'],
      onplay: () => {
        this.isPlaying = true;
      }
    });
    this.player.play();
  }

  helloEN(){
    CruzrSdk.speechSetTtsVolume({volume: 100});
    this.text = 'Hi My name is Cruzr! I am glad that you are here at the University of Óbuda for the Researcher s Night. Come and see what I can do!';
    CruzrSdk.speechStartTTS({text: this.text });
  }

  barkEN(){
    CruzrSdk.speechSetTtsVolume({volume: 100});
    this.text = 'Visit also our Bejczy Antal iRobottechnical Centre! The centre is home to many exciting robots! You can play with our robot companions, and there is a surprise waiting for you!';
    CruzrSdk.speechStartTTS({text: this.text });
  }

  talentEN(){
    CruzrSdk.speechSetTtsVolume({volume: 100});
    this.text = 'Talent! Success! Community!';
    CruzrSdk.speechStartTTS({text: this.text });
  }

  photoEN(){
    CruzrSdk.speechSetTtsVolume({volume: 100});
    this.text = 'Let s take a photo together and share your experience!';
    CruzrSdk.speechStartTTS({text: this.text });
  }

}
