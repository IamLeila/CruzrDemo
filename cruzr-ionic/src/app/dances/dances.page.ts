import {Component, OnInit} from '@angular/core';
import {CruzrSdk} from 'cruzrsdk';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-dances',
  templateUrl: './dances.page.html',
  styleUrls: ['./dances.page.scss'],
})
export class DancesPage implements OnInit {

  danceNames;
  selectedDance;
  isDancing = false;

  constructor() {
  }

  player: Howl = null;
  isPlaying = false;

  ngOnInit() {
    CruzrSdk.getDanceList().then((res) => {
      this.danceNames = res.result;
    });
  }

  stopDance() {
    CruzrSdk.isDancing().then((res) => {
      if (res.result) {
        CruzrSdk.stopDance();
      }
    });

  }

  dance1() {
    this.stopDance();
    CruzrSdk.dance({danceName: 'Dura'})
  }
  dance2() {
    this.stopDance();
    CruzrSdk.dance({danceName: 'Faded'})
  }
  dance3() {
    this.stopDance();
    CruzrSdk.dance({danceName: 'Panama'})
  }
  dance4() {
    this.stopDance();
    CruzrSdk.dance({danceName: 'Polkka'});
  }
  dance5() {
    this.stopDance();
    CruzrSdk.dance({danceName: 'Curry'})
  }
  dance6() {
    this.stopDance();
    CruzrSdk.dance({danceName: 'Seaweed'})
  }
  dance7() {
    this.stopDance();
    CruzrSdk.dance({danceName: 'Crayon'})
  }
  dance8() {
    this.stopDance();
    
    CruzrSdk.dance({danceName: 'TocaToca'})
  }
  dance9() {
    this.stopDance();
    CruzrSdk.dance({danceName: 'Flamenco'})
  }
  dance10() {
    this.stopDance();
    CruzrSdk.dance({danceName: 'BBoomBBoom'})
  }
  dance11() {
    this.stopDance();
    CruzrSdk.dance({danceName: 'Naxi'})
  }

  airportDance(){
    if (this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src: ['./assets/music/Repter.mp3'],
      onplay: () => {
        this.isPlaying = true;
      }
    });
    this.player.play();
    this.stopDance();
    setTimeout(this.hello, 1500);
    setTimeout(this.danceHello, 1500);
  }

  fridayDance(){
    if (this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src: ['./assets/music/Friday.mp3'],
      onplay: () => {
        this.isPlaying = true;
      }
    });
    this.player.play();
    this.stopDance();
    setTimeout(this.hello, 1500);
    setTimeout(this.danceHello, 1500);
  }

  //poses
  hello(){
    CruzrSdk.run({action: 'pose1'});
  }
  danceHello(){
    CruzrSdk.run({action: 'pose1'});
  }
}
