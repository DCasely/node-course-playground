const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=13604b194e0d222bdc14bb1db6712980&query=25.7617,-80.1918&units=f`;

const request = http.request(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data = data + chunk.toString();
  });

  res.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log('An error', error);
});

request.end();
