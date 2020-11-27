export default function TabsOpenner() {
  this.openTabs = (tabs) => {
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
  };
}
