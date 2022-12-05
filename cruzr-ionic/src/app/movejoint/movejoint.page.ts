import {Component, NgZone, OnInit} from '@angular/core';
import {CruzrSdk} from '../../../../cruzrsdk';

@Component({
  selector: 'app-movejoint',
  templateUrl: './movejoint.page.html',
  styleUrls: ['./movejoint.page.scss'],
})
export class MovejointPage implements OnInit {

  // eslint-disable-next-line max-len
  partNames = ['LShoulderPitch', 'LShoulderRoll', 'LShoulderYaw', 'LElbowRoll', 'LElbowYaw', 'LWristRoll', 'RShoulderPitch', 'RShoulderRoll', 'RShoulderYaw', 'RElbowRoll', 'RElbowYaw', 'RWristRoll', 'HeadYaw', 'HeadPitch', 'LHand', 'RHand'];
  selectedPart = 'LShoulderPitch';
  duration = 3;
  angle = 0.0;
  resCode: any;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  Math = Math;
  currentAngle: any;

  currentCallbackId: string = null;


  constructor(private ngZone: NgZone) {
  }

  ngOnInit() {
    this.getAngle();
  }

  updateAngle() {
    CruzrSdk.moveJoint({jointName: this.selectedPart, angle: this.angle, time: this.duration}).then((res) => {
      this.resCode = res.result;
    });
  }

  stopJoints() {
    CruzrSdk.stopJoint();
  }

  getAngle() {
    if (this.currentCallbackId) {
      CruzrSdk.clearWatch({id: this.currentCallbackId});
    }

    CruzrSdk.watchJointAngle({jointName: this.selectedPart, interval: 10}, (res) => this.ngZone.run(() => {
      this.currentAngle = res.result;
    })).then((res) => {
      this.currentCallbackId = res;
    });
  }
}
