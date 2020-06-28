# Zonejs Angular Issue

This recreates the scenario of injecting an angular application into a page via an extension `content-script`.

## Setup

1. `npm install`
2. `npm run start`
3. In a separate window terminal: `npm run start:web-ext`
4. Inspect the plugin in the preferences page that appears.
5. Verify `Background Loaded` appears in the background page context.
6. Go to any page, for instance: <https://www.google.com>
7. Click the extension icon on the far right side to install the content script.
8. Page you injected will have a `ERROR TypeError: "'clearTimeout' called on an object that does not implement interface Window."` error.
