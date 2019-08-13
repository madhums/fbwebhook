const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

/**
 * Install the facebook app on your page by following these instructions
 *
 * https://developers.facebook.com/docs/pages/realtime#install-app
 *
 * Then validate
 *
 * https://developers.facebook.com/docs/graph-api/webhooks/getting-started#verification-requests
 */

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Facebook Webhook validation
//
app.get('/', (req, res) => {
  res.send(req.params['hub.challenge']);
});

// Receive webhook notifications
app.post('/', (req, res) => {
  console.log(req.body);
  res.status(201).send();
});

app.listen(PORT, () => console.log('Listening on port', PORT));
