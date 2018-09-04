import HelloSign from 'hellosign-embedded';

const client = new HelloSign({
  clientId: 'Your client ID'
});

client.open(signUrl);
