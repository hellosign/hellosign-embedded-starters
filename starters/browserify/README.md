# Browserify Starter

> How to import and use HelloSign Embedded using [npm](https://npmjs.org) and [Browserify](https://browserify.org).

### Installation

1. Install HelloSign Embedded from npm.

    ```bash
    $ npm install hellosign-embedded
    ```

2. Require HelloSign Embedded.

    ```js
    const HelloSign = require('hellosign-embedded');
    ```

3. Use HelloSign Embedded.

    ```js
    const client = new HelloSign({
      clientId: 'Your client ID'
    });

    client.open(signUrl);
    ```
