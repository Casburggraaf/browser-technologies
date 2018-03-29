# Browser Technologies
Robuuste, toegankelijke websites leren bouwen …

<details>
<summary>Opdracht 3 - Progressive Enhanced Browser Technologies</summary>
Browser Technologies onderzoeken en implementeren als enhancement. Basic functionaliteit van een use case doorgronden.

Maak een demo op basis van een use case. Zorg dat alle gebruikers, met alle browsers, in iedere context minimaal de core functionaliteit te zien/horen/voelen krijgen. Bouw je demo in 3 lagen, volgens het principe van Progressive Enhancement. Gebruik als enhanced feature een (hippe, innovatieve, vooruitstrevende) Browser Technologie die je gaat onderzoeken op functionaliteit, toegankelijkheid en (browser) ondersteuning.

Beoordelingscriteria
- De code staat in een repository op GitHub
- Er is een Readme toegevoegd met daarin beschreven:
  - een beschrijving van de core functionality
  - een beschrijving van de feature(s)/Browser Technologies
  - welke browser de feature(s) wel/niet ondersteunen
  - een beschrijving van de accessibility issues die zijn onderzocht
- De demo is opgebouwd in 3 lagen, volgens het principe van Progressive Enhancement
- De user experience van de demo is goed
  - de leesbaarheidsregels zijn toegepast, contrast en kleuren kloppen
  - het heeft een gebruiksvriendelijke interface, met gebruikmaking van affordance en feedback op de interactieve elementen
- Student kan uitleggen wat Progressive Enhancement en Feature Detectie is en hoe dit toe te passen in Web Development
</details>

## Score Board

Als eindopdracht van Browser Technologies hebben we een eindcase moeten kiezen. Een case die je door middel van Progressive Enhancement hebt opgebouwd. Ik heb gekozen voor een scoreboard waaraan extra functties aan worden toegevoegd.

[LIVE DEMO](https://scoreboard.casburggraaf.com)

Deze aplicatie is opgebouwd uit meerdere lagen, namelijk HTML, CSS en JS. Ook is gebruik gemaakt van future detection.

### Laag 1 Pure HTML

#### Browser support
| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome for Android |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE8, IE9, IE10, IE11, Edge| last 10 versions| last 10 versions| last 10 versions| last 10 versions| last 10 versions

De eerste 'laag' is geschreven in HTML en werkt in elke browser die ik heb getest. De HTML wordt gegenereerd doormiddel van express, en ejs templating. Het automatisch verversen van de pagina is gerealiseerd door de volgende tag:

```html
<noscript>
  <meta http-equiv="refresh" content="5">
</noscript>
```
Bovenstaande meta tag is ingesloten in <noscript> omdat deze anders nauwelijks aan te passen is wanneer betere notificaties mogelijk zijn.  

### Laag 2 CSS
CSS is alleen gebruikt voor styling en heeft geen functionele toevoeging aan de applicatie. Elemementen die niet ondersteund worden door browsers zijn verborgen door CSS, bijvoorbeeld een aanmeldknop voor push nofiticaties. Twee functies zijn toegepast in future detection, namelijk [Display Flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) en [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout). Zij worden enabled met de [@Supports Tag](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports).


```css
@supports (display:flex) {
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  main > * {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
```


### Laag 3 Javascript, XML HttpRequest
De derde laag detect onderstaande features die zijn getest op IE 10 op Windows 7 en oude browsers in het device lab.
* [XMLHttpRequest](https://developer.mozilla.org/nl/docs/Web/API/XMLHttpRequest)
* [ClassList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
* [querySelector](https://developer.mozilla.org/nl/docs/Web/API/Document/querySelector)
* [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser)

#### Browser support

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome for Android |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE9, IE10, IE11, Edge| last 10 versions| last 10 versions| last 10 versions| last 10 versions| last 10 versions


Feature detection
```javascript
if(typeof new XMLHttpRequest().responseType === 'string' && (document['querySelector']&& document['querySelectorAll'])!=null && document.documentElement.classList && this.pushApiSup === false)
```
Iedere vijf seconden wordt de index pagina opgehaald door de domparser en wordt gekeken of er verschil is met de originele score. Zo ja, wordt de score aangepast en krijgt men een 'notificatie' in de pagina. Hierbij wordt gebruik gemaakt van een div die infomatie draagt met de score. Deze wordt zichtbaar gemaakt door het toevoegen van een class.

### Laag 4 JavaScript, Web Notifications
De vierde laag detect de volgende features
* [Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
* [Embed Audio element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)

Door middel van:
```javascript
if(window.Notification){
  if (this.pushApiSup === false) { // Disable if Push Api is supported
    if (window.Notification && Notification.permission !== "granted") {
```

En Mp3 support:
```javascript
var mp3Test = document.createElement('audio');
if(!!(mp3Test.canPlayType && mp3Test.canPlayType('audio/mpeg;').replace(/no/, ''))){
```
#### Browser support

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| Edge| last 10 versions| last 10 versions| last 5 versions| last 10 versions

Opmerkelijk is dat deze manier van notificaties niet werkt op IE en op mobiele browsers. De notificatie wordt getoond als na een XMLHttpRequest een verandering in score is.

### Laag 5 JavaScript, Push Api
De vijfde laag detect de volgende features:
* [Push Api](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
* [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker)

Push Notifications:
```javascript
  if (!('PushManager' in window)) {
```
Notificaties:
```javascript
  Notification.requestPermission().then(function (status) {
```
Service Worker:
```javascript
  if ('serviceWorker' in navigator) {
```


#### Browser support

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome for Android |
| --------- | --------- | --------- | --------- |
| last 10 versions| last 10 versions| last 8 versions| last version

Voor het afhandelen van notificaties wordt gebruikt gemaakt van:
* [Node Express](https://expressjs.com/)
* [Web Push](https://github.com/web-push-libs/web-push)

Onderstaande blog is gebruikt ter ondersteuning van deze laag:
* [Web Push blog](https://thihara.github.io/Web-Push/)


## Build an try for yourself
First, clone repository
```
Git clone https://github.com/Casburggraaf/browser-technologies/tree/master/
```

Secondly, install packages
```
npm install
```

Thirdly, generate keys
```
node_modules/web-push/src/cli.js generate-vapid-keys

```
Fourth, make a .env
```
VAPID_SUBJECT= // Example mailto:casburggraaf@gmail.com
VAPID_PUBLIC_KEY // Your pub key
VAPID_PRIVATE_KEY= // Your private key
AUTH_SECRET= // A sectert for auth
HOST= // Host of server
JSON= // Name for json file to store subscriptions
```

Finally, run application
```
npm start
```
