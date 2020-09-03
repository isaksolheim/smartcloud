import express from 'express';
var bodyParser = require('body-parser');
var cors = require('cors');
const app = express();

app.use(cors());

var jsonParser = bodyParser.json();

const port = 3000;

var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://10.58.25.250');

client.on('connect', function() {
  client.subscribe('skypils');
});

client.on('message', function(topic: any, message: any) {
  console.log('msg:', message.toString());
});

app.post('/', jsonParser, function(req, res) {
  const { message } = req.body;

  if (message === 'regn') {
    client.publish('skypils', '3,190,252');
  } else if (message === 'damp') {
    client.publish('206,255,8');
  }

  client.publish('skypils', message);
  res.sendStatus(200);
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
