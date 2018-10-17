# RequireJS Starter

> How to import and use HelloSign Embedded using [RequireJS](https://requirejs.org).

### Installation

1. [Download](https://github.com/hellosign/hellosign-embedded/downloads) the latest version of HelloSign Embedded.

    In this example, we've saved the minified file to `vendor/embedded-2.0.0.min`.

2. Configure HelloSign Embedded with RequireJS.

    ```js
    // config.js

    require.config({
      paths: {
        'hellosign-embedded': 'vendor/embedded-2.0.0.min'
      }
    });
    ```

    Alternatively, instead of downloading the files locally you can configure RequireJS to point to the CDN.

    ```js
    require.config({
      paths: {
        'hellosign-embedded': 'https://cdn.hellosign.com/js/hellosign-embedded/v2.0.0/embedded.production.min',
      }
    });
    ```

3. Require `hellosign-embedded`.

    ```js
    // main.js

    requirejs(['hellosign-embedded'], function (HelloSign) {
      // ...
    });
    ```

3. Use `hellosign-embedded`.

    ```js
    var client = new HelloSign({
      clientId: 'Your client ID'
    });

    client.open(signUrl);
    ```
