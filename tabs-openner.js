export default {
  openTabs: (tabs) => {
    chrome.windows.create({}, (window) => {
      tabs.forEach((tab) =>
        chrome.tabs.create(
          {
            windowId: window.id,
            url: tab.url,
            pinned: tab.pinned,
          },
          function (tab) {}
        )
      );
    });
  },
};
