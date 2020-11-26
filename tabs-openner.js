export const openTabs = (tabs) => {
  tabs.forEach((tab) =>
    chrome.tabs.create(
      {
        url: tab.url,
        pinned: tab.pinned,
      },
      function (tab) {}
    )
  );
};
