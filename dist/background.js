console.log("Background Loaded");

browser.browserAction.onClicked.addListener((tab) => {
  console.log("Tab activated", tab);
  Promise.all([
    browser.tabs.executeScript({
      file: "content-script/runtime.js",
    }),
    browser.tabs.executeScript({
      file: "content-script/polyfills.js",
    }),
    browser.tabs.executeScript({
      file: "content-script/main.js",
    }),
    browser.tabs.executeScript({
      file: "content-script/styles.js",
    }),
    browser.tabs.executeScript({
      file: "content-script/vendor.js",
    }),
  ])
    .then(() => {
      console.log("Successfully Installed");
    })
    .catch((err) => {
      throw err;
    });
});
