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
    setTimeout(null,10000)
    setTimeout(this.hello, 11500);
    setTimeout(this.danceHello, 13000);
    setTimeout(this.danceP2,14500);
    setTimeout(this.danceNod,16000);
    setTimeout(this.danceGL,17500);
    setTimeout(this.danceSA,19000);
    setTimeout(this.danceP3,20500);
    setTimeout(this.hello, 22000);
    setTimeout(this.danceHello, 23500);
    setTimeout(this.danceP2,25000);
    setTimeout(this.danceNod,26500);
    setTimeout(this.danceGL,28000);
    setTimeout(this.danceSA,29500);
    setTimeout(this.danceP3,31000);
    setTimeout(this.hello, 32500);
    setTimeout(this.danceHello, 34000);
    setTimeout(this.danceP2,35500);
    setTimeout(this.danceNod,37000);
    setTimeout(this.danceGL,38500);
    setTimeout(this.danceSA,40000);
    setTimeout(this.danceP3,41500);
    setTimeout(this.hello, 43000);
    setTimeout(this.danceHello, 44500);
    setTimeout(this.danceP2,46000);
    setTimeout(this.danceNod,47500);
    setTimeout(this.danceGL,49000);
    setTimeout(this.danceSA,50500);
    setTimeout(this.danceP3,52000);
    setTimeout(this.hello, 53500);
    setTimeout(this.danceHello, 55000);
    setTimeout(this.danceP2,56500);
    setTimeout(this.danceNod,58000);
    setTimeout(this.danceGL,59500);
    setTimeout(this.danceSA,61000);
    setTimeout(this.danceP3,62500);
    
  }

  //poses
  hello(){
    CruzrSdk.run({action: 'pose1'});
  }
  danceHello(){
    CruzrSdk.run({action: 'pose1'});
  }
  danceNod(){
    CruzrSdk.run({action: 'nod'});
  }
  danceP2(){
    CruzrSdk.run({action: 'pose2'});
  }
  danceP3(){
    CruzrSdk.run({action: 'pose3'});
  }
  danceGL(){
    CruzrSdk.run({action: 'guideleft'});
  }
  danceGR(){
    CruzrSdk.run({action: 'guideright'});
  }
  danceSA(){
    CruzrSdk.run({action: 'swingarm'});
  }
}
