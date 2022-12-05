# cruzrsdk

/

## Install

```bash
npm install cruzrsdk
npx cap sync
```

## API

<docgen-index>

* [`init()`](#init)
* [`moveJoint(...)`](#movejoint)
* [`stopJoint()`](#stopjoint)
* [`getJointCurrentAngle(...)`](#getjointcurrentangle)
* [`watchJointAngle(...)`](#watchjointangle)
* [`clearWatch(...)`](#clearwatch)
* [`ledSetColor(...)`](#ledsetcolor)
* [`ledSetEffect(...)`](#ledseteffect)
* [`ledSetWorkByTimes(...)`](#ledsetworkbytimes)
* [`ledSetOnOff(...)`](#ledsetonoff)
* [`isDancing()`](#isdancing)
* [`watchIsDancing(...)`](#watchisdancing)
* [`getCurrentDance()`](#getcurrentdance)
* [`getDanceList()`](#getdancelist)
* [`stopDance()`](#stopdance)
* [`dance(...)`](#dance)
* [`getCruzrFacesList()`](#getcruzrfaceslist)
* [`setCruzrFace(...)`](#setcruzrface)
* [`run(...)`](#run)
* [`stopRun()`](#stoprun)
* [`speechSetTtsVolume(...)`](#speechsetttsvolume)
* [`speechStartTTS(...)`](#speechstarttts)
* [`speechStopTTS()`](#speechstoptts)
* [`speechGetVoiceName()`](#speechgetvoicename)
* [`isTtsSpeaking()`](#isttsspeaking)
* [`watchisTtsSpeaking(...)`](#watchisttsspeaking)
* [`setCurrentMap(...)`](#setcurrentmap)
* [`getCurrentMap()`](#getcurrentmap)
* [`watchGetCurrentMap(...)`](#watchgetcurrentmap)
* [`clearMap()`](#clearmap)
* [`dockOnStation()`](#dockonstation)
* [`cancelDockOn()`](#canceldockon)
* [`gotoRecharge(...)`](#gotorecharge)
* [`leaveStation()`](#leavestation)
* [`navigateToByPresetedSpeed(...)`](#navigatetobypresetedspeed)
* [`navigateTo(...)`](#navigateto)
* [`cancelNavigate()`](#cancelnavigate)
* [`navigateRelocationCtrl(...)`](#navigaterelocationctrl)
* [`navigateRelocationStartByPos(...)`](#navigaterelocationstartbypos)
* [`moveTo(...)`](#moveto)
* [`moveToward(...)`](#movetoward)
* [`stopMove()`](#stopmove)
* [`isMoveActive()`](#ismoveactive)
* [`watchIsMoveActive(...)`](#watchismoveactive)
* [`getPosition(...)`](#getposition)
* [`watchGetPosition(...)`](#watchgetposition)
* [`powerOn(...)`](#poweron)
* [`powerOffRos(...)`](#poweroffros)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### init()

```typescript
init() => Promise<void>
```

--------------------


### moveJoint(...)

```typescript
moveJoint(options: { jointName: string; angle: number; time: number; }) => Promise<SdkResult>
```

| Param         | Type                                                             |
| ------------- | ---------------------------------------------------------------- |
| **`options`** | <code>{ jointName: string; angle: number; time: number; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### stopJoint()

```typescript
stopJoint() => Promise<SdkResult>
```

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### getJointCurrentAngle(...)

```typescript
getJointCurrentAngle(options: { jointName: string; }) => Promise<SdkResult>
```

| Param         | Type                                |
| ------------- | ----------------------------------- |
| **`options`** | <code>{ jointName: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### watchJointAngle(...)

```typescript
watchJointAngle(options: { jointName: string; interval?: number; }, callback: WatchCallback) => Promise<string>
```

| Param          | Type                                                                 |
| -------------- | -------------------------------------------------------------------- |
| **`options`**  | <code>{ jointName: string; interval?: number; }</code>               |
| **`callback`** | <code>(result: <a href="#sdkresult">SdkResult</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### clearWatch(...)

```typescript
clearWatch(options: { id: string; }) => Promise<null>
```

| Param         | Type                         |
| ------------- | ---------------------------- |
| **`options`** | <code>{ id: string; }</code> |

**Returns:** <code>Promise&lt;null&gt;</code>

--------------------


### ledSetColor(...)

```typescript
ledSetColor(options: { r: number; g: number; b: number; times: number; }) => Promise<SdkResult>
```

| Param         | Type                                                             |
| ------------- | ---------------------------------------------------------------- |
| **`options`** | <code>{ r: number; g: number; b: number; times: number; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### ledSetEffect(...)

```typescript
ledSetEffect(options: { lightEffect: number; brightness: number; color: number; }) => Promise<SdkResult>
```

| Param         | Type                                                                     |
| ------------- | ------------------------------------------------------------------------ |
| **`options`** | <code>{ lightEffect: number; brightness: number; color: number; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### ledSetWorkByTimes(...)

```typescript
ledSetWorkByTimes(options: { effect: number; brightness: number; color: number; times: number; }) => Promise<SdkResult>
```

| Param         | Type                                                                               |
| ------------- | ---------------------------------------------------------------------------------- |
| **`options`** | <code>{ effect: number; brightness: number; color: number; times: number; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### ledSetOnOff(...)

```typescript
ledSetOnOff(options: { onOff: boolean; }) => Promise<SdkResult>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ onOff: boolean; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### isDancing()

```typescript
isDancing() => Promise<SdkResult>
```

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### watchIsDancing(...)

```typescript
watchIsDancing(options: { interval?: number; }, callback: WatchCallback) => Promise<string>
```

| Param          | Type                                                                 |
| -------------- | -------------------------------------------------------------------- |
| **`options`**  | <code>{ interval?: number; }</code>                                  |
| **`callback`** | <code>(result: <a href="#sdkresult">SdkResult</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### getCurrentDance()

```typescript
getCurrentDance() => Promise<SdkResult>
```

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### getDanceList()

```typescript
getDanceList() => Promise<SdkResult>
```

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### stopDance()

```typescript
stopDance() => Promise<SdkResult>
```

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### dance(...)

```typescript
dance(options: { danceName: string; }) => Promise<SdkResult>
```

| Param         | Type                                |
| ------------- | ----------------------------------- |
| **`options`** | <code>{ danceName: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### getCruzrFacesList()

```typescript
getCruzrFacesList() => Promise<SdkResult>
```

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### setCruzrFace(...)

```typescript
setCruzrFace(options: { cruzrFaceCallBackImpl: any; faceId: number; playMusic: boolean; loop: boolean; }) => Promise<SdkResult>
```

| Param         | Type                                                                                            |
| ------------- | ----------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ cruzrFaceCallBackImpl: any; faceId: number; playMusic: boolean; loop: boolean; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### run(...)

```typescript
run(options: { action: string; }) => Promise<SdkResult>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ action: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### stopRun()

```typescript
stopRun() => Promise<SdkResult>
```

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### speechSetTtsVolume(...)

```typescript
speechSetTtsVolume(options: { volume: number; }) => Promise<SdkResult>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ volume: number; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### speechStartTTS(...)

```typescript
speechStartTTS(options: { text: string; }) => Promise<SdkResult>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ text: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### speechStopTTS()

```typescript
speechStopTTS() => Promise<SdkResult>
```

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### speechGetVoiceName()

```typescript
speechGetVoiceName() => Promise<SdkResult>
```

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### isTtsSpeaking()

```typescript
isTtsSpeaking() => Promise<SdkResult>
```

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### watchisTtsSpeaking(...)

```typescript
watchisTtsSpeaking(options: { interval?: number; }, callback: WatchCallback) => Promise<string>
```

| Param          | Type                                                                 |
| -------------- | -------------------------------------------------------------------- |
| **`options`**  | <code>{ interval?: number; }</code>                                  |
| **`callback`** | <code>(result: <a href="#sdkresult">SdkResult</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### setCurrentMap(...)

```typescript
setCurrentMap(options: { name: number; }) => Promise<SdkResult>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ name: number; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### getCurrentMap()

```typescript
getCurrentMap() => Promise<SdkResult>
```

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### watchGetCurrentMap(...)

```typescript
watchGetCurrentMap(options: { interval?: number; }, callback: WatchCallback) => Promise<string>
```

| Param          | Type                                                                 |
| -------------- | -------------------------------------------------------------------- |
| **`options`**  | <code>{ interval?: number; }</code>                                  |
| **`callback`** | <code>(result: <a href="#sdkresult">SdkResult</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### clearMap()

```typescript
clearMap() => Promise<SdkResult>
```

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### dockOnStation()

```typescript
dockOnStation() => Promise<SdkResult>
```

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### cancelDockOn()

```typescript
cancelDockOn() => Promise<SdkResult>
```

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### gotoRecharge(...)

```typescript
gotoRecharge(options: { x: number; y: number; }) => Promise<SdkResult>
```

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ x: number; y: number; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### leaveStation()

```typescript
leaveStation() => Promise<SdkResult>
```

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### navigateToByPresetedSpeed(...)

```typescript
navigateToByPresetedSpeed(options: { x: number; y: number; theta: number; }) => Promise<SdkResult>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code>{ x: number; y: number; theta: number; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### navigateTo(...)

```typescript
navigateTo(options: { x: number; y: number; theta: number; maxSpeed: number; }) => Promise<SdkResult>
```

| Param         | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| **`options`** | <code>{ x: number; y: number; theta: number; maxSpeed: number; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### cancelNavigate()

```typescript
cancelNavigate() => Promise<SdkResult>
```

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### navigateRelocationCtrl(...)

```typescript
navigateRelocationCtrl(options: { opt: number; }) => Promise<SdkResult>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ opt: number; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### navigateRelocationStartByPos(...)

```typescript
navigateRelocationStartByPos(options: { x: number; y: number; theta: number; }) => Promise<SdkResult>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code>{ x: number; y: number; theta: number; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### moveTo(...)

```typescript
moveTo(options: { x: number; y: number; theta: number; maxSpeed: number; }) => Promise<SdkResult>
```

| Param         | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| **`options`** | <code>{ x: number; y: number; theta: number; maxSpeed: number; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### moveToward(...)

```typescript
moveToward(options: { x: number; y: number; theta: number; }) => Promise<SdkResult>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code>{ x: number; y: number; theta: number; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### stopMove()

```typescript
stopMove() => Promise<SdkResult>
```

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### isMoveActive()

```typescript
isMoveActive() => Promise<SdkResult>
```

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### watchIsMoveActive(...)

```typescript
watchIsMoveActive(options: { interval?: number; }, callback: WatchCallback) => Promise<string>
```

| Param          | Type                                                                 |
| -------------- | -------------------------------------------------------------------- |
| **`options`**  | <code>{ interval?: number; }</code>                                  |
| **`callback`** | <code>(result: <a href="#sdkresult">SdkResult</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### getPosition(...)

```typescript
getPosition(options: { useSensor: boolean; }) => Promise<SdkResult>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ useSensor: boolean; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### watchGetPosition(...)

```typescript
watchGetPosition(options: { interval?: number; }, callback: WatchCallback) => Promise<string>
```

| Param          | Type                                                                 |
| -------------- | -------------------------------------------------------------------- |
| **`options`**  | <code>{ interval?: number; }</code>                                  |
| **`callback`** | <code>(result: <a href="#sdkresult">SdkResult</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### powerOn(...)

```typescript
powerOn(options: { currentTime: string; scheuleTime: string; option: string; }) => Promise<SdkResult>
```

| Param         | Type                                                                       |
| ------------- | -------------------------------------------------------------------------- |
| **`options`** | <code>{ currentTime: string; scheuleTime: string; option: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### powerOffRos(...)

```typescript
powerOffRos(options: { type: number; }) => Promise<SdkResult>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ type: number; }</code> |

**Returns:** <code>Promise&lt;<a href="#sdkresult">SdkResult</a>&gt;</code>

--------------------


### Interfaces


#### SdkResult

| Prop         | Type             |
| ------------ | ---------------- |
| **`result`** | <code>any</code> |

</docgen-api>
