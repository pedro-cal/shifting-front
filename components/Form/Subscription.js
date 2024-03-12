const http = require('https');

const options = {
  method: 'POST',
  hostname: 'a.klaviyo.com',
  port: null,
  path: '/api/profiles/',
  headers: {
    accept: 'application/json',
    revision: '2024-02-15',
    'content-type': 'application/json',
    Authorization: 'SLfmGf'
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({
  data: {
    type: 'profile',
    attributes: {
      email: req.body.email,
      phone_number: req.body.phone_number,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    }
  }
}));
req.end();