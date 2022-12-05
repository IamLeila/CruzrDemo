import {Component, OnInit} from '@angular/core';
import {CruzrSdk} from 'cruzrsdk';


@Component({
  selector: 'app-displays',
  templateUrl: './displays.page.html',
  styleUrls: ['./displays.page.scss'],
})
export class DisplaysPage implements OnInit {

  selectedFace: any;
  faceNames: string[];

  constructor() {
  }

  ngOnInit() {
    /*
    CruzrSdk.getCruzrFacesList().then((res) => {
      this.faceNames = res.result;
      console.log(this.faceNames);
      console.log(typeof this.faceNames);
    });
    */
  }

  /*

  changeFace() {
    CruzrSdk.setCruzrFace({cruzrFaceCallBackImpl: null, faceId: this.selectedFace, playMusic: true, loop: true});
  }

  face1(){
    CruzrSdk.setCruzrFace({cruzrFaceCallBackImpl: null, faceId: this.selectedFace, playMusic: true, loop: true});
  }

  */

  



}
