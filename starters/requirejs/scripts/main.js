requirejs(['config'], function () {
  requirejs(['hellosign-embedded'], function (HelloSign) {
    var client = new HelloSign({
      clientId: 'Your client ID'
    });

    client.open(signUrl);
  });
});
