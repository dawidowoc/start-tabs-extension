export const openTabs = (tabs) => {
  tabs.forEach((tab) =>
    chrome.tabs.create(
      {
        url: tab,
      },
      function (tab) {}
    )
  );
};
