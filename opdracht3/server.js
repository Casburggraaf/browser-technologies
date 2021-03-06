var express = require('express')
var atob = require('atob');
var bodyParser = require('body-parser');
var util = require('util');
var webPush = require('web-push');
var jsonfile = require('jsonfile')

express()
  .use(express.static('static'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .set('view engine', 'ejs')
  .set('views', 'view')
  .get('/', index)
  .get('/index.html', index)
  .get('/submit', scoreInput)
  .get('/submit.html', scoreInput)
  .post('/submit', scoreSubmit)
  .post('/subscribe', subscribe)
  //.use(notFound)
  .listen(3002)

require('dotenv').config();

let subscribers = [];
var subscribersFile = `subscriptions/${process.env.JSON}.json`;
subscribers = jsonfile.readFileSync(subscribersFile)
console.log(subscribers);

let VAPID_SUBJECT = process.env.VAPID_SUBJECT;
let VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY;
let VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY;

//Auth secret used to authentication notification requests.
let AUTH_SECRET = process.env.AUTH_SECRET;

if (!VAPID_SUBJECT) {
    return console.error('VAPID_SUBJECT environment variable not found.')
} else if (!VAPID_PUBLIC_KEY) {
    return console.error('VAPID_PUBLIC_KEY environment variable not found.')
} else if (!VAPID_PRIVATE_KEY) {
    return console.error('VAPID_PRIVATE_KEY environment variable not found.')
} else if (!AUTH_SECRET) {
    return console.error('AUTH_SECRET environment variable not found.')
}

webPush.setVapidDetails(
    VAPID_SUBJECT,
    VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY
);

const score = {
  home: 0,
  away: 0
}

function index(req, res) {
  res.render('index.ejs', {score:score});
}

function scoreInput(req, res) {
  res.render('submit.ejs', {score:score});
}

function scoreSubmit(req, res) {
  if (req.query.scored === "home") {
    score.home += 1;
    pushNotif(`SCOOOORREEEE, The home team scored! It's ${score.home}-${score.away}`, `${process.env.HOST}`, `New Goal Home Team, ${score.home}-${score.away}`);
  } else if (req.query.scored === "away") {
    score.away += 1;
    pushNotif(`SCOOOORREEEE, The away team scored! It's ${score.home}-${score.away}`, `${process.env.HOST}`, `New Goal Away Team, ${score.home}-${score.away}`)
  }
  res.render('submit.ejs', {score:score});
}


function subscribe(req, res) {
 let endpoint = req.body['notificationEndPoint'];
 let publicKey = req.body['publicKey'];
 let auth = req.body['auth'];

 let pushSubscription = {
     endpoint: endpoint,
     keys: {
         p256dh: publicKey,
         auth: auth
     }
 };

 subscribers.push(pushSubscription);

 console.log(subscribers);
 jsonfile.writeFileSync(subscribersFile, subscribers);

 res.json({mess:'Subscription accepted!'});
}

function pushNotif(message, clickTarget, title) {
  console.log(subscribers);
  subscribers.forEach(pushSubscription => {
    //Can be anything you want. No specific structure necessary.
    let payload = JSON.stringify({
      message: message,
      clickTarget: clickTarget,
      title: title
    });

    webPush.sendNotification(pushSubscription, payload, {}).then((response) => {
      console.log("Status : " + util.inspect(response.statusCode));
      console.log("Headers : " + JSON.stringify(response.headers));
      console.log("Body : " + JSON.stringify(response.body));
    }).catch((error) => {
      console.log("Status : " + util.inspect(error.statusCode));
      console.log("Headers : " + JSON.stringify(error.headers));
      console.log("Body : " + JSON.stringify(error.body));
    });
  });
}
