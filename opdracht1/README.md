# Browser Technologies

<details>
<summary>Assignments</summary>
<p>
#### Opdracht 1.1 - Breek het Web
Het Web laten 'breken' door features van het platform bewust uit te zetten. Images, custom fonts, JavaScript, kleur, breedband internet, etc. Allemaal met als doel je te laten beseffen hoeveel je nog niet weet van het Web, erachter komen dat je misschien aannames hebt die niet kloppen, en om je je in te laten leven in de eindgebruiker.

Onderzoek minimaal twee features. Dat betekent uitvogelen wat het voor impact heeft op de sites die je kent en normaal gebruikt. Kies sites in je directe omgeving: van je werkgever, lokale vereniging, de cafetaria om de hoek, en/of eerdere projecten die je zelf gedaan hebt.

Kies 2 features van de 8
- Zoek uit welke problemen ze kunnen veroorzaken (verzamel cijfers, meningen, ervaringen)
- Zoek uit hoe je dit kunt testen (hoe kun je een feature ‘uitzetten’)
- Vind een aantal sites waar dit ook problemen oplevert (uit je directe omgeving)
- Beschrijf hoe je dit kan fiksen
- Maak hierover een presentatie en neem die woensdag mee, dan gaan we de resultaten bespreken
Lezen: [Everyone has JavaScript, right?](https://kryogenix.org/code/browser/everyonehasjs.html) en [I Turned Off JavaScript and it was Glorious](https://www.wired.com/2015/11/i-turned-off-javascript-for-a-whole-week-and-it-was-glorious/)
[Link](https://www.icloud.com/keynote/0TwXmIELjS6nRcNJSDAG7hVkA#Breek_het_Web) to the powerpoint
</p>
<p>
### Opdracht 1.2 - Fork je OBA
Hoe zit het eigenlijk met Progressive Enhancement van je OBA opdracht? Waarschijnlijk kan daar wel het één en ander aan verbeterd worden, dat ding is immers in een week in elkaar gehackt!

Voor deze opdracht ga je toepassen wat je van opdracht 1.1 hebt geleerd.
- Pas Progressive enhancement toe op je OBA Web App.
- Check je OBA Web App op de 8 features uit opdracht 1.1 en verbeter de code waar mogelijk.
- Test  je OBA Web App in het device lab.
- Laat je OBA Web App voorlezen door een screenreader.
- Gebruik onderstaande artikelen om je code te optimaliseren.
[The accessibility mindset](https://24ways.org/2015/the-accessibility-mindset/) en [Accessibility Originates With UX: A BBC iPlayer Case Study](https://www.smashingmagazine.com/2015/02/bbc-iplayer-accessibility-case-study/)

Beoordelingscriteria
- Zet je code op Github
- Schrijf een Readme met:
  - een beschrijving van de problemen die je hebt gevonden
  - beschrijf hoe je de problemen hebt opgelost
  - of hoe je dit zou oplossen (met todo’s) als je genoeg tijd en budget zou hebben
</p>
</details>

## Browser Technologies
In this course I made my Wafs project compatible for older devices. By using the learned principles in this course, my Wafs project is now working on older devices and browsers as well.

### Progressive Enhancement

#### Without CSS
When there isn't a css file loaded, the purpose of the application will not be clear. It looks like the application is broken. Every section will be visible. You are still able to use the application, but it is hard to understand what is going on.
<details>
<summary>Screen Shot</summary>
<p>
![casburggraaf github io_wafs_app_](https://user-images.githubusercontent.com/373753/40172630-7f3f6eec-59cf-11e8-9ec4-3af6fd28a4ee.png)
</p>
</details>

Solution:
- Move navigation to the top of the page. So users can navigate better
- An alert div on the top of the page to inform the user that css is not loaded, and when css is loaded set div to display none


#### Without images
The application works without images, but defeats the purpose of the site. The loader function is staying until the images are loaded. Only because the plugin that disabled images is not giving my script an error the loader is still visible and not giving the user an error feedback. The site is working fine when images are not found or when there is an other with the loading part.

<details>
<summary>Screen Shot</summary>
<p>
  
![casburggraaf github io_wafs_app_ 1](https://user-images.githubusercontent.com/373753/40175782-8e839252-59d9-11e8-96c4-80b5c8cb29d8.png)

</p>
</details>

Solution:
- Research about the plugin for a event that disabled images.
- Disable the function that detects problems with image loading

#### Without Javascript
Without javascript the application is completely broken (no shit... for a single page webapp). But the homepage is "visible"
<details>
<summary>Screen Shot</summary>
<p>
  
![casburggraaf github io_wafs_app_ 2](https://user-images.githubusercontent.com/373753/40176824-f715d8e0-59dc-11e8-9581-2d60dec9781d.png)

</p>
</details>

Solution:
- An error page if the Javascript is not loaded or failed
- Server-side rendering of the page

#### Custom fonts
There is no usage of custom fonts so there are no issues for this specific subject.

#### Color contrast
There is a need of a big improvement on this side. Black text on a dark background on the homepage and the popular page. And on the detail page there is just text on images.

Solution:
- Contrast in color could be better (no black on black)
- A background on behind the text of the detail Page

<details>
<summary>Screen Shot</summary>
<p>
  
![screenshot](https://user-images.githubusercontent.com/373753/40586736-9438f5ee-61c6-11e8-8ff8-9f52a045f624.png)

</p>
</details>

#### Broadband internet
When programming this website a lot of features where designed to improve the usage for users with slow network speed.
- A loaderGif
- Usage of local storage
- Not loading of content that is not displayed
- Lazyloading of images

What can be improved:
- Low res images for slow speed networks
- putting loadergif into the local storage

#### Mouse/trackpad
The website is usable without mouse and/or trackpad.
What can be improved:
- Navigation on the top:
- Fast tab to navigation:

#### Cookies & localStorage
Disabling cookies and localStorage has no "breaking" impact on the application. It's only increasing the api request on the popular page. This is because it's stored in localstorage for 12 hours.


## Device lab

#### Kindle
![img_0904](https://user-images.githubusercontent.com/373753/40586847-04c1aa9e-61c8-11e8-95e4-2a0f0087d346.jpg)
The kindle isn't able to open the page. Looks like a https problem.
Can be (maybe) fixed by
* Checking time settings
* Disabling https, but this will will not work with the api

#### Android 4.4.3 - Build in Chrome Browser
![ezgif com-optimize-2](https://user-images.githubusercontent.com/373753/40587104-4007376a-61cb-11e8-8457-b0e9c1474042.gif)
Working fine!

#### Apple iPad 9.3.5
![img_1104](https://user-images.githubusercontent.com/373753/40587138-86b1213a-61cb-11e8-91eb-6a081f7485a5.jpg)
Isn't working. Why i don't know.. Tried to hook it on my mac and opened inspector but it isn't showing any errors..

#### Windows surface Edge browser
![img_0906](https://user-images.githubusercontent.com/373753/40587167-cd4bf034-61cb-11e8-926d-ce60d29eb19a.jpg)
Is working. Only the image on the homepage isn't showing a image. This is propopulie a problem with unsplashed api.

#### Old Android build in browser
![ezgif com-optimize-3](https://user-images.githubusercontent.com/373753/40587210-6026efe4-61cc-11e8-96da-4f27f4cb84ef.gif)
Isn't working. Keep showing the loading gif and it's not responding to any user interaction. Problem is unknown.

#### Samsung galaxy tab 3 chrome build in browser
![img_0905](https://user-images.githubusercontent.com/373753/40587260-015cb77c-61cd-11e8-80cc-17acf35711d5.jpg)
Working fine!
