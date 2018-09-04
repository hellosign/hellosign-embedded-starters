# Webpack Starter

> How to import and use HelloSign Embedded using [npm](https://npmjs.org) and [Webpack](https://webpack.js.org).

### Installation

1. Install HelloSign Embedded from npm.

    ```bash
    $ npm install hellosign-embedded
    ```

2. Import HelloSign Embedded.

    ```js
    import HelloSign from 'hellosign-embedded';
    ```

3. Use HelloSign Embedded.

    ```js
    const client = new HelloSign({
      clientId: 'Your client ID'
    });

    client.open(signUrl);
    ```
