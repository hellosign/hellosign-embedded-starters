# CDN Starter

> How to import and use HelloSign Embedded using HelloSign's CDN.

### Installation

1. Import HelloSign Embedded from the CDN in the `<head>`.

    ```html
    <script src="https://cdn.hellosign.com/js/hellosign-embedded/2.0.0/embedded.production.min.js"></script>
    ```

    For improved security, we recommend also implementing [subresource integrity (SRI) checking](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) using the `integrity` attribute. Updates SRI hashes can be found [here](https://github.com/HelloFax/hellosign-embedded/wiki/CDN-Links).
