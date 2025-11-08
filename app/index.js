// app/index.js
const http = require('http');

const port = process.env.PORT || 3000;

// Simulated bug: 10% chance return 500 to simulate production incident
function maybeFail() {
  return Math.random() < 0.1;
}

const server = http.createServer((req, res) => {
  if (req.url === '/metrics') {
    // Expose a fake Prometheus metric
    res.setHeader('Content-Type', 'text/plain');
    res.end('sample_metric{job="app"} 1\n');
    return;
  }

  if (maybeFail()) {
    console.error('Simulated random failure!');
    res.statusCode = 500;
    res.end('Internal Server Error (simulated)\n');
    return;
  }

  res.end('Hello from sample app\n');
});

server.listen(port, () => {
  console.log(`App running on port ${port}`);
});
