const HelloSign = require('hellosign-embedded');

const client = new HelloSign({
  clientId: 'Your client ID'
});

client.open(signUrl);
