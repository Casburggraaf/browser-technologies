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

Als eind opdracht van Browser Technologies hebben we een eindcase moesten kiezen. Een case die je doormiddel van Progressive Enhancement heb opgebouwd. Ik heb gekozen voor een scoreboard die wordt verbreedt door een vorm van notificaties.

[LIVE DEMO](https://scoreboard.casburggraaf.com)

Deze aplicatie is opgebouwd in meerdere lagen(HTML, CSS, JS) en is gebruik van feuture detection.

### Laag 1 Pure HTML

#### Browsers support
| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome for Android |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE8, IE9, IE10, IE11, Edge| last 10 versions| last 10 versions| last 10 versions| last 10 versions| last 10 versions

De eerste is gebouwd in HTML en en werkt in elke browser die ik heb getest. De html word gegeneerd doormiddel van express, en ejs templating.
De eerste html laag ondersteund het automatisch verversen van de pagina doormiddel van deze tag
```html
<noscript>
  <meta http-equiv="refresh" content="5">
</noscript>
```
Ik heb deze tag in een NoScript tag gerapt omdat hij "bijna" onmgelijk is om te verwijderen als je de pagina wil verijken met betere versie van notificaties en de auto refresh wil uitzetten.

### Laag 2 CSS
Ik heb css alleen gebruikt voor styling en heeft geen functionele toevoeging aan de applicatie. Wel word css gebruikt om elmenten te verbergen, zoals bijvoorbeeld een knop om je aan te melden voor push notificaties op browsers die dit niet ondersteunen
Wel word er in css gebruik gemaakt van feuture dedection.
bijvoorbeeld
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
Twee functies die ik gebruik die worden uitgevoerd doormiddel van feuture dedection zijn [Display Flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) en [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) en worden enabled doormiddel van de [@Supports Tag](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)

### Laag 4 Push Api
 JavaScript, XML HttpRequest
De derde laag detect de volgende feutures
* [XMLHttpRequest](https://developer.mozilla.org/nl/docs/Web/API/XMLHttpRequest)
* [ClassList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
* [querySelector](https://developer.mozilla.org/nl/docs/Web/API/Document/querySelector)
* [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser)

#### Browsers support

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome for Android |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE9, IE10, IE11, Edge| last 10 versions| last 10 versions| last 10 versions| last 10 versions| last 10 versions

Ik heb dit zelf getest op
* IE 10 Windows 7
* Chrome
* firefox
* Android 4.4.3

Feature detection
```javascript
if(typeof new XMLHttpRequest().responseType === 'string' && (document['querySelector']&& document['querySelectorAll'])!=null && document.documentElement.classList && this.pushApiSup === false)
```
Elke 5 seconde word de index pagina opgehaald door de dompasrser gehaald en word er gekeken of er verschil is met de orignele score. Zoja wordt de score aangepast en word een een "notificatie" weergeven. Dit word gedaan doormiddel van een div een class te geven waar een tekst instaat over informatie van de score.

### Laag 4 JavaScript, Web Notifications
De vierde laag detect de volgende feutures
* [Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
* [Embed Audio element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)

Doormiddel van:
```javascript
if(window.Notification){
  if (this.pushApiSup === false) { // Disable if Push Api is supported
    if (window.Notification && Notification.permission !== "granted") {
```

En Mp3 support:
```javascript
if(!!(mp3Test.canPlayType && mp3Test.canPlayType('audio/mpeg;').replace(/no/, ''))){
```
#### Browsers support

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| Edge| last 10 versions| last 10 versions| last 5 versions| last 10 versions

Deze manier van notifacties werkt niet op IE en op mobiele Browsers
De Notifactie word getoond als na een XMLHttpRequest een verandering in score is.

### Laag 4 Push Api
De vierde laag detect de volgende feuture
* [Push Api](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
