
# Browser Technologies
Robuuste, toegankelijke websites leren bouwen …
<details>
<summary>Assignments</summary>
<p>
## Opdracht 2 - 1, 2, 3 Feature Detectie
//Wat laat je zien als een browser of gebruiker 'enhancement' niet kan tonen of zien? Hoe doe je Feature Detection en wat doe je als een techniek niet werkt?

Werk 2 componenten uit in een demo. Je onderzoekt hoe je verschillende features door verschillende browsers worden ondersteund en hoe je voor goede fallback kan zorgen. Gebruik [html5test.com](https://html5test.com), [css3test.com](http://css3test.com) en [kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/)

- Per feature: Zoek uit hoe je deze kunt testen. Verzamel uitleg en artikelen. Bouw een (kleine) progressive enhanced demo (zonder extra tools, gewoon in 1 HTML file, zo simpel mogelijk). Test de feature (en fallback) op verschillende browsers en het Device Lab. Let op: Gebruik van polyfills is niet toegestaan.
- Post je 2 demo’s op GitHub met uitleg in een README file. Wat is de feature? Welke browsers/devices ondersteunen deze wel/niet? Hoe zorg je dat de fallback nuttig is?

Beoordelingscriteria
- 2 componenten zijn onderzocht en er is een demo gemaakt.
- De code staat in een repository op GitHub.
- Een Readme is toegevoegd met, per feature:
  -	Een beschrijving van de feature.
  - Bronnen van uitleg en gebruikte artikelen.
  -	Welke browsers/devices ondersteunen deze wel/niet.
  -	Een beschrijving hoe de fallback werkt.
</p>
</details>


## Harmonica
[Live Demo](https://casburggraaf.github.io/browser-technologies/opdracht2/harmonica/)
![screen shot 2018-05-27 at 17 50 44](https://user-images.githubusercontent.com/373753/40587936-846beeae-61d6-11e8-991d-78b53c9a7a30.png)
Content is visible on all browsers without js/css.
Harmonica effect is tested on
- Min ie9
- Chrome new, and on Windows XP
- Mobile devices(touch), IPhone X and all devices in the device lab
- Keyboard and screenreader support

<img width="1384" alt="screen shot 2018-05-27 at 18 14 32" src="https://user-images.githubusercontent.com/373753/40588178-d5082596-61d9-11e8-9f64-8f51a6d4ecb8.png">
This shows the current native details support

Ie8 is in theory possible but not without changing the HTHML(giving the elements id's because "this" is not supported). I didn't do this in the Live demo because in my opinion it's you responsibility as developer that the core of your application is usable. And in IE 8 you can see the content so the application is "useable".

### Feature Detection

### Support for < details >
```Javascript
//detects support for details
var detailCompitelity = 'open' in document.createElement('details');
if (!detailCompitelity) {
  var summarys = document.getElementsByTagName("summary");
  var details = document.getElementsByTagName("details");
  // More Code ....
}
```
This is checking if the browser knows the elements "details" and has the property "open" If not it's useing a "simple" script that is simulating native details supports
<details>
<summary>Own written details support</summary>
  
![unknown](https://user-images.githubusercontent.com/373753/40588459-b7b5786e-61dd-11e8-834f-cf956dba0671.png)

</details>

### Support for display: flex;
A simple check if display flex is supported. If not the page will look diffent but it will still be useable
```css
@supports (display: flex) {
  body {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
```

### Support for unkown html tags
In very old browser there is a bug when a tag is used isn't supported it closses it self.
Example
```html
<details>
  <summary>Koop</summary>
  <p>Maecenas et sem eu lectus condimentum interdum.</p>
  <p>Maecenas vel risus sit amet dui sollicitudin feugiat sed et metus.</p>
</details>
```
is parsed like this
```html
<details></details>
  <summary></summary>Koop
  <p>Maecenas et sem eu lectus condimentum interdum.</p>
  <p>Maecenas vel risus sit amet dui sollicitudin feugiat sed et metus.</p>
```
 This is a problem for styling and for pollyfilling new browser features.
 But there is a simple fix(hack) for this:
 ```Javascript
 <script>
   document.createElement("details");
   document.createElement("summary");
 </script>
 ```
 If you put this simple tag before your body the browser will parse these tags. It won't function like modern browsers but you can enchant or pollyfill them.

## File upload
[Live Demo](https://casburggraaf.github.io/browser-technologies/opdracht2/file-upload/)
![screen shot 2018-05-27 at 18 16 38](https://user-images.githubusercontent.com/373753/40588207-2040f808-61da-11e8-8aef-749567cea03e.png)

The core function(file upload) is available on every device that supports file type input. And that is on "almost" every browser..
<img width="1091" alt="screen shot 2018-05-27 at 18 18 53" src="https://user-images.githubusercontent.com/373753/40588223-73842fe4-61da-11e8-910b-26608a5f7025.png">

Preview is available on every device that supports the [FileReader API](https://caniuse.com/#feat=filereader)
<img width="1371" alt="screen shot 2018-05-27 at 18 20 47" src="https://user-images.githubusercontent.com/373753/40588237-b47f6658-61da-11e8-9dbb-ae8659e04aac.png">

### Feature Detection

### Support for fileReader
This is checked by
```javascript
if (window.FileReader) {
  document.getElementsByTagName("BODY")[0].setAttribute('class', "enriched");
  // More
}
```

If "fileReader" is supported it will un-hide a empty img in css where the image can be shown.

After that it will watch for changes in the input tag.
```JavaScript
if (document.addEventListener) {
  input.addEventListener("change", fileChange, false);
}

function fileChange() {
  var fileReader = new FileReader();
  var inputPhoto = input.files[0];

  if (inputPhoto) {
    fileReader.readAsDataURL(inputPhoto);
  }

  fileReader.onload = function () {
    document.getElementsByTagName("IMG")[0].setAttribute("src", fileReader.result);
  }
}
```
This will change the src of the the loacllpath of the image before upload.

### Support for display: flex;
A simple check if display flex is supported. If not the page will look diffent but it will still be useable
```css
@supports (display: flex) {
  body {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
```
### Support input type file
If input type file isn't supported a href link with a mailto: prefix can be used. This will enable the user to send an with the picture. If you want to automate this process a big backend application needs to be build...
