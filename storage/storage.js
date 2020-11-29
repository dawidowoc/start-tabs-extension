import IdIterator from "./id-iterator.js";

export default {
  store: async function (tabs) {
    for (const tab of tabs) {
      if (!tab.id) {
        tab.id = await IdIterator.getNext();
      }
    }
    chrome.storage.local.set(
      {
        tabs: tabs,
      },
      () => {}
    );

    return tabs;
  },

  findAll: function () {
    return new Promise((resolve) => {
      chrome.storage.local.get(["tabs"], (result) => resolve(result.tabs));
    });
  },
};
