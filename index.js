const express = require('express')
const app = express()
const robot = require("robotjs");

app.use(express.static('static'))
app.get('/navigate', function (req, res) {
  if (req.query.direction == 'next') {
    robot.keyTap("right");
    res.send(JSON.stringify({ status: 'ok' }));

  } else if (req.query.direction == 'prev') {
    robot.keyTap("left");
    res.send(JSON.stringify({ status: 'ok' }));

  } else {
    res.send(JSON.stringify({ status: 'error' }));
  }
})

app.listen(3000, '0.0.0.0', () => console.log('Remote presentation controller listening on port 3000'))
